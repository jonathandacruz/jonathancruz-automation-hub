# Tutorial completo: instalação, n8n e API

Este guia parte de uma máquina ou servidor vazio e termina com o template em
execução, o n8n configurado e todas as rotas testadas. Há dois caminhos:

- **local**, indicado para desenvolvimento e validação;a
- **EasyPanel**, indicado para um servidor de homologação ou produção.

> **Estado atual do template:** a ingestão e a seleção de ofertas estão
> implementadas, mas a publicação em Telegram ainda é um adaptador a ser
> concluído no workflow B. `PUBLICATION_ENABLED=false` e os flags
> `SHOPEE_*_VERIFIED=false` são travas intencionais. Não ligue esses flags apenas
> para fazer o teste “passar”; primeiro valide o contrato do feed conforme a
> seção [Desbloquear uma carga real](#11-desbloquear-uma-carga-real).

## 1. O que será instalado

O `docker-compose.yml` cria estes serviços:

| Serviço | Responsabilidade | Acesso normal |
| --- | --- | --- |
| `postgres` | Bancos da aplicação, n8n e Grafana | somente rede interna; porta local opcional |
| `db-init` | Cria bancos, usuários e atualiza senhas | processo de execução única; termina com código 0 |
| `migrate` | Aplica migrations e cria views do Grafana | processo de execução única; termina com código 0 |
| `feed-api` | API FastAPI de controle | `127.0.0.1:8000` local; privada no EasyPanel |
| `worker` | Consulta a Shopee, baixa feeds e seleciona ofertas | sem porta HTTP |
| `outbox` | Entrega callbacks duráveis ao n8n | sem porta HTTP |
| `n8n` | Agenda e orquestra as chamadas | `127.0.0.1:5678` local; domínio HTTPS no EasyPanel |
| `n8n-task-runner` | Executa tarefas do n8n fora do processo principal | somente rede interna |
| `grafana` | Dashboard operacional somente leitura | `127.0.0.1:3000` local; domínio HTTPS no EasyPanel |

Fluxo resumido:

```text
n8n -> feed-api -> fila no PostgreSQL -> worker -> API Shopee
                                            |
                                            +-> catálogo, histórico e candidatos
                                            +-> outbox -> webhook interno do n8n

Grafana -> views somente leitura no PostgreSQL
```

O n8n nunca recebe `SHOPEE_SECRET` nem acesso direto ao banco da aplicação. O
worker é o único componente que chama a API Shopee.

## 2. Pré-requisitos

### Para executar localmente

Instale:

1. Git;
2. Docker com o plugin Docker Compose v2;
3. OpenSSL, usado apenas para gerar segredos;
4. uma conta aprovada no Programa de Afiliados Shopee com `App ID` e `Secret`.

Confirme as ferramentas:

```bash
git --version
docker --version
docker compose version
openssl version
```

### Para executar no EasyPanel

Você precisa de:

1. um servidor com EasyPanel funcional;
2. o projeto em um repositório Git acessível pelo servidor;
3. dois nomes DNS, por exemplo `n8n.seudominio.com` e
   `grafana.seudominio.com`, apontados para o servidor;
4. as credenciais da API de Afiliados Shopee.

O repositório já contém o Compose. Não crie serviços separados manualmente.
Crie um único serviço do tipo **Compose**.

## 3. Obter as credenciais Shopee

1. Entre no Portal do Afiliado Shopee com a conta que executará a integração.
2. Abra a área Open API.
3. Obtenha o `App ID` e o `Secret` dessa conta.
4. Guarde-os como segredo; não envie por mensagem, não coloque no JSON do n8n e
   não faça commit deles.
5. Se necessário, valide as credenciais no
   [Explorer oficial da Open API](https://open-api.affiliate.shopee.com.br/explorer).

No Environment do template, eles serão:

```dotenv
SHOPEE_APP_ID=SEU_APP_ID
SHOPEE_SECRET=SEU_SECRET
SHOPEE_API_URL=https://open-api.affiliate.shopee.com.br/graphql
```

## 4. Gerar os segredos internos

Cada variável abaixo deve ter um valor **diferente**. Em um terminal confiável,
execute:

```bash
for name in \
  POSTGRES_ADMIN_PASSWORD \
  APP_DB_PASSWORD \
  N8N_DB_PASSWORD \
  GRAFANA_DB_PASSWORD \
  GRAFANA_INTERNAL_DB_PASSWORD \
  GRAFANA_ADMIN_PASSWORD \
  GRAFANA_SECRET_KEY \
  INTERNAL_API_TOKEN \
  CALLBACK_TOKEN \
  N8N_ENCRYPTION_KEY \
  N8N_RUNNERS_AUTH_TOKEN
do
  printf '%s=%s\n' "$name" "$(openssl rand -hex 32)"
done
```

O comando apenas imprime valores novos. Copie cada linha para o `.env` local ou
para o campo **Environment** do EasyPanel. Não reutilize o mesmo valor.

Função dos segredos mais importantes:

| Variável | Para que serve |
| --- | --- |
| `INTERNAL_API_TOKEN` | autentica todos os endpoints `/v1/*` da API |
| `CALLBACK_TOKEN` | autentica o callback `outbox -> webhook B do n8n` |
| `N8N_ENCRYPTION_KEY` | protege credenciais salvas pelo n8n; deve sobreviver a upgrades e restaurações |
| `N8N_RUNNERS_AUTH_TOKEN` | autentica o task runner no n8n |
| `GRAFANA_SECRET_KEY` | protege dados seguros do Grafana; deve ser preservada em backups |
| senhas `*_DB_PASSWORD` | são independentes para limitar o impacto de vazamento |

O Header Auth da API sempre tem este formato:

```text
Nome:  Authorization
Valor: Bearer VALOR_DE_INTERNAL_API_TOKEN
```

Não use somente o token: a palavra `Bearer`, seguida de um espaço, é obrigatória.

## 5. Caminho A — instalação local

### 5.1. Baixar e entrar no projeto

```bash
git clone URL_DO_SEU_REPOSITORIO.git
cd shopee-v2-install
```

Se o projeto já estiver baixado, apenas entre na pasta que contém
`docker-compose.yml`.

### 5.2. Criar o `.env`

```bash
cp .env.example .env
```

Abra `.env` em um editor e:

1. troque todos os valores `replace_*` pelos segredos gerados;
2. informe `SHOPEE_APP_ID` e `SHOPEE_SECRET`;
3. use estas URLs para o n8n local:

```dotenv
N8N_HOST=localhost
N8N_PROTOCOL=http
N8N_SECURE_COOKIE=false
N8N_EDITOR_BASE_URL=http://localhost:5678
N8N_WEBHOOK_URL=http://localhost:5678
GRAFANA_ROOT_URL=http://localhost:3000
GRAFANA_COOKIE_SECURE=false
```

4. mantenha as travas seguras enquanto o contrato não tiver sido validado:

```dotenv
SHOPEE_CONTRACT_VERIFIED=false
SHOPEE_DELTA_CONTRACT_VERIFIED=false
SHOPEE_FULL_COMPLETENESS_VERIFIED=false
SHOPEE_NO_VARIANTS_VERIFIED=false
PUBLICATION_ENABLED=false
```

5. confira se não sobrou placeholder:

```bash
grep -n 'replace_' .env
```

O resultado deve ficar vazio. O arquivo `.env` é ignorado pelo Git e nunca deve
ser versionado.

> O override `docker-compose.local.yml` contém um mapeamento de colunas observado
> em uma amostra anterior. Ele não prova que a sua conta possui o mesmo contrato.
> Revise o mapeamento antes de ligar os flags de verificação.

### 5.3. Validar o Compose

Este comando verifica sintaxe e variáveis obrigatórias sem iniciar containers:

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml config --quiet
```

Se ele indicar `required variable ... is missing`, corrija a variável no `.env`.

### 5.4. Subir o ambiente

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml up -d
```

Na primeira execução, os containers Python instalam dependências. Aguarde alguns
minutos e acompanhe:

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml ps -a
docker compose -f docker-compose.yml -f docker-compose.local.yml logs -f migrate feed-api worker n8n grafana
```

`db-init` e `migrate` devem aparecer como `Exited (0)`. Isso é sucesso, pois são
processos de execução única. `feed-api`, `worker`, `outbox`, `n8n`,
`n8n-task-runner`, `grafana` e `postgres` devem permanecer em execução.

### 5.5. Fazer os primeiros testes

Teste processo vivo:

```bash
curl -i http://127.0.0.1:8000/health/live
```

Resposta esperada:

```json
{"status":"ok"}
```

Teste dependências prontas:

```bash
curl -i http://127.0.0.1:8000/health/ready
```

Resposta esperada: HTTP `200` e `{"status":"ready"}`. Se receber `503`, veja:

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml logs --tail=200 feed-api migrate postgres
```

Abra:

- n8n: <http://localhost:5678>;
- Grafana: <http://localhost:3000>;
- Swagger da API: <http://localhost:8000/docs>.

### 5.6. Parar ou remover o ambiente

Parar sem apagar dados:

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml stop
```

Remover containers sem apagar os volumes:

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml down
```

Não use `down -v` em um ambiente com dados importantes: `-v` apaga os volumes
do PostgreSQL, n8n e Grafana.

## 6. Caminho B — instalação no EasyPanel

### 6.1. Preparar o repositório

1. Confirme que `docker-compose.yml`, `.env.example`, `services/`, `docker/`,
   `grafana/` e `n8n/` estão no Git.
2. Confirme que `.env` **não** está no Git.
3. Use preferencialmente uma tag ou commit conhecido para um deploy
   reproduzível.

### 6.2. Criar o serviço Compose

1. No EasyPanel, crie ou abra um projeto.
2. Clique em **New Service**.
3. Escolha **Compose** e dê um nome, por exemplo `shopee`.
4. Em **Source**, escolha **Git**.
5. Informe a URL do repositório e a branch/tag.
6. Use **Build Path** `/` quando `docker-compose.yml` estiver na raiz do
   repositório. Em monorepo, use o subdiretório que contém o arquivo, sempre
   começando por `/`.
7. Em **Docker Compose File**, informe `docker-compose.yml`.
8. Se o repositório for privado, copie a chave SSH pública mostrada pelo
   EasyPanel e cadastre-a como deploy key somente leitura no provedor Git.

Não use `docker-compose.local.yml` no servidor: ele publica portas do host e foi
feito apenas para desenvolvimento.

### 6.3. Preencher o Environment

1. Copie o conteúdo de `.env.example` para **Environment**.
2. Ative **Create .env file**, pois o Compose usa interpolação `${VAR}`.
3. Substitua todos os `replace_*`.
4. Configure os domínios reais:

```dotenv
N8N_HOST=n8n.seudominio.com
N8N_PROTOCOL=https
N8N_SECURE_COOKIE=true
N8N_EDITOR_BASE_URL=https://n8n.seudominio.com
N8N_WEBHOOK_URL=https://n8n.seudominio.com
GRAFANA_ROOT_URL=https://grafana.seudominio.com
GRAFANA_COOKIE_SECURE=true
```

5. Informe as credenciais Shopee.
6. Mantenha os flags de contrato e publicação em `false` no primeiro deploy.
7. Salve.

Alterar o Environment não recria os containers sozinho. Sempre faça um novo
**Deploy** depois de salvar uma alteração.

### 6.4. Criar os domínios

Adicione dois domínios ao serviço Compose:

| Domínio público | Serviço interno | Porta | Protocolo interno |
| --- | --- | --- | --- |
| `n8n.seudominio.com` | `n8n` | `5678` | HTTP |
| `grafana.seudominio.com` | `grafana` | `3000` | HTTP |

Ative HTTPS/certificado no proxy do EasyPanel. Não crie domínio público para
`postgres`, `feed-api`, `worker`, `outbox` ou `n8n-task-runner`. A API foi
desenhada para ser chamada pelo n8n na rede privada em
`http://feed-api:8000`.

### 6.5. Fazer deploy e validar

1. Clique em **Deploy**.
2. Acompanhe primeiro a saída do deployment.
3. Depois filtre os logs por serviço.
4. Confirme `postgres` saudável.
5. Confirme `db-init` e `migrate` encerrados com código 0.
6. Confirme os demais serviços ativos/saudáveis.
7. Abra os dois domínios HTTPS.

Se um serviço Python demorar no primeiro startup, aguarde a instalação das
dependências. Em alterações posteriores de código ou Environment, faça novo
Deploy, não apenas Restart.

A documentação oficial atual do EasyPanel descreve o mesmo fluxo de Compose,
Git, Environment e Domains em
[Compose Service](https://easypanel.io/docs/services/compose).

## 7. Configurar o n8n

### 7.1. Criar o owner

1. Abra o n8n.
2. Crie o usuário owner inicial.
3. Guarde o acesso em um gerenciador de senhas.

### 7.2. Criar a credencial da API interna

1. Abra **Credentials**.
2. Crie uma credencial **Header Auth**.
3. Nome sugerido: `Shopee Feed API`.
4. Header name: `Authorization`.
5. Header value: `Bearer SEU_INTERNAL_API_TOKEN`.
6. Salve.

Essa credencial é usada nos nós HTTP que chamam `http://feed-api:8000`.

### 7.3. Criar a credencial do callback

1. Crie outra credencial **Header Auth**.
2. Nome sugerido: `Shopee Callback`.
3. Header name: `Authorization`.
4. Header value: `Bearer SEU_CALLBACK_TOKEN`.
5. Salve.

Associe esta segunda credencial ao nó Webhook `Carga concluida` do workflow B.
O valor precisa ser exatamente o mesmo `CALLBACK_TOKEN` do Environment.

### 7.4. Importar os workflows

No n8n, use **Import from File** e escolha os JSON de `n8n/workflows/`.

Importar JSON não importa credenciais. Abra cada nó HTTP Request e selecione a
credencial `Shopee Feed API`. No workflow B, selecione também `Shopee Callback`
no nó Webhook.

Os workflows têm funções diferentes:

| Arquivo | Função | Ativar? |
| --- | --- | --- |
| `L-daily-control-plane.json` | controle diário recomendado; regras, feeds, job e pendências | depois do teste manual |
| `A-request-sync.json` | agenda simples que cria job AUTO | não junto com L |
| `B-callback-template.json` | recebe conclusão e para com erro intencional | não, até implementar publicação |
| `C-recovery.json` | consulta pendências a cada 15 minutos | opcional |
| `G-pending-operations.json` | equivalente operacional de C | não ative C e G juntos |
| `D-get-job-status.json` | consulta manual de um job fixo | somente ferramenta manual |
| `E-retry-job.json` | retry manual de job FAILED | somente ferramenta manual |
| `F-list-feeds.json` | lista feeds FULL | somente ferramenta manual |
| `H-claim-offers.json` | reserva ofertas | bloqueado até publicação estar pronta |
| `I-start-publication-attempt.json` | autoriza um envio reservado | bloqueado até publicação estar pronta |
| `J-finish-publication-attempt.json` | grava o resultado do envio | bloqueado até publicação estar pronta |
| `K-get-job-result-only.json` | webhook que apenas consulta um job | teste/integração controlada |
| `Shopee-API-test-all.json` | webhook para testar oito operações | somente modo de teste; não exponha ativo |

### 7.5. Configurar o workflow L

Abra o nó `Configuracao da execucao`. O código inicial é equivalente a:

```javascript
return [{
  json: {
    load_mode: 'AUTO',
    channel_id: 'telegram',
    offer_limit: 20,
    category_rules: [],
    clear_category_rules: []
  }
}];
```

`load_mode` aceita:

- `AUTO`: usa FULL para fontes sem baseline e DELTAs contínuos para fontes
  válidas; é o modo diário recomendado depois da validação;
- `FULL`: baixa o snapshot completo mais recente de cada fonte;
- `DELTA`: exige baseline FULL válido e contrato DELTA verificado.

Para criar overrides por categoria:

```javascript
category_rules: [
  {
    category_key: 'shopee:CHAVE_RETORNADA_PELA_API',
    min_discount_percent: 15,
    enabled: true
  }
]
```

Para remover overrides e voltar à regra global:

```javascript
clear_category_rules: [
  'shopee:CHAVE_RETORNADA_PELA_API'
]
```

No grafo atual do workflow L, `channel_id` e `offer_limit` ainda não chegam à
rota de claim; são campos reservados para o adaptador de publicação futuro. O L
faz controle de carga e consulta operacional, mas não publica no Telegram.

Antes de ativar o cron, execute o workflow manualmente e revise a saída de todos
os nós. Use apenas L ou A como agenda diária, nunca os dois.

## 8. Autenticação e formas de chamar a API

### Local

Use:

```text
http://127.0.0.1:8000
```

### Dentro do n8n/Compose

Use:

```text
http://feed-api:8000
```

### EasyPanel

Por padrão a API não é pública. Chame-a por um nó HTTP Request do n8n usando a
URL interna. Para testes temporários, use o workflow
`Shopee-API-test-all.json` no modo **Listen for test event** e o endpoint
`/webhook-test/shopee-api-test` do domínio do n8n.

Não ative esse webhook de teste em produção: ele não possui autenticação própria
na entrada e encaminha operações privilegiadas usando a credencial interna.

Todas as rotas `/v1/*` exigem:

```text
Authorization: Bearer SEU_INTERNAL_API_TOKEN
```

As rotas de saúde não exigem autenticação.

## 9. Referência completa das rotas

Nos exemplos locais, substitua `SEU_INTERNAL_API_TOKEN`, IDs e chaves. O token
mostrado é sempre um placeholder.

### 9.1. `GET /health/live`

Indica apenas que o processo FastAPI está vivo. Não testa banco nem configuração.

```bash
curl -i http://127.0.0.1:8000/health/live
```

Resposta `200`:

```json
{"status":"ok"}
```

`GET /health` é um alias legado com a mesma resposta.

### 9.2. `GET /health/ready`

Testa token configurado, conexão com o PostgreSQL e tabelas principais. É a rota
correta para readiness.

```bash
curl -i http://127.0.0.1:8000/health/ready
```

Respostas:

- `200 {"status":"ready"}`: dependências prontas;
- `503 {"detail":"DEPENDENCIES_NOT_READY"}`: token, banco ou schema ainda não
  estão prontos.

### 9.3. `POST /v1/sync-jobs`

Cria um job assíncrono. A resposta não significa que a carga terminou; o worker
processará o job em segundo plano.

```bash
curl -i -X POST http://127.0.0.1:8000/v1/sync-jobs \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN' \
  -H 'Idempotency-Key: manual-full-001' \
  -H 'Content-Type: application/json' \
  --data '{"mode":"FULL"}'
```

Body aceito:

```json
{"mode":"AUTO"}
```

`mode` pode ser `AUTO`, `FULL` ou `DELTA`. Resposta `202`:

```json
{
  "job_id": "UUID_DO_JOB",
  "status": "queued"
}
```

`Idempotency-Key` é obrigatório, tem no máximo 200 caracteres e deve identificar
uma intenção lógica. A mesma chave com o mesmo body retorna o mesmo job. A mesma
chave com body diferente retorna `409 IDEMPOTENCY_KEY_BODY_CONFLICT`.

### 9.4. `GET /v1/sync-jobs/{job_id}`

Retorna o estado, métricas e progresso por snapshot.

```bash
curl -sS http://127.0.0.1:8000/v1/sync-jobs/UUID_DO_JOB \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN'
```

Exemplo resumido:

```json
{
  "job_id": "UUID_DO_JOB",
  "status": "succeeded",
  "requested_mode": "FULL",
  "attempts": 1,
  "offers_selected": 3,
  "error_code": null,
  "started_at": "2026-09-19T12:00:00Z",
  "finished_at": "2026-09-19T12:03:00Z",
  "feeds": [
    {
      "snapshot_id": "UUID_DO_SNAPSHOT",
      "datafeed_id": "ID_SHOPEE",
      "status": "applied",
      "next_offset": 500,
      "processed_count": 500,
      "warnings": []
    }
  ]
}
```

Estados normais do job: `queued`, `running`, `succeeded` e `failed`. `404` indica
`JOB_NOT_FOUND`.

### 9.5. `POST /v1/sync-jobs/{job_id}/retry`

Reabre um job que terminou em `failed` e o devolve para a fila.

```bash
curl -i -X POST http://127.0.0.1:8000/v1/sync-jobs/UUID_DO_JOB/retry \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN'
```

Resposta `202`:

```json
{"job_id":"UUID_DO_JOB","status":"queued"}
```

Somente jobs `failed` podem receber retry. Outro estado retorna
`409 ONLY_FAILED_JOBS_CAN_RETRY`.

### 9.6. `GET /v1/feeds`

Lista snapshots que o worker já descobriu e gravou. Esta rota não consulta a
Shopee em tempo real.

FULL:

```bash
curl -sS 'http://127.0.0.1:8000/v1/feeds?feedMode=FULL' \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN'
```

DELTA:

```bash
curl -sS 'http://127.0.0.1:8000/v1/feeds?feedMode=DELTA' \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN'
```

Exemplo:

```json
{
  "data": {
    "listItemFeeds": {
      "feeds": [
        {
          "datafeedId": "ID_SHOPEE",
          "datafeedName": "Nome do feed",
          "referenceId": "FONTE",
          "totalCount": 500,
          "date": "2026-09-19",
          "feedMode": "FULL",
          "status": "applied"
        }
      ]
    }
  }
}
```

### 9.7. `POST /v1/feeds/full/download` — removida

A rota síncrona antiga existe apenas para avisar o cliente que migre.

```bash
curl -i -X POST 'http://127.0.0.1:8000/v1/feeds/full/download' \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN'
```

Ela sempre retorna HTTP `410`. Use `POST /v1/sync-jobs` com `mode=FULL`.

### 9.8. `GET /v1/category-discount-rules`

Lista categorias descobertas, quantidade de produtos, override e percentual
efetivo.

```bash
curl -sS http://127.0.0.1:8000/v1/category-discount-rules \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN'
```

Exemplo:

```json
{
  "default_min_discount": "10",
  "safety_fallback": "10",
  "rules": [
    {
      "category_key": "shopee:HASH",
      "category_name": "Celulares",
      "category_path": ["Eletrônicos", "Celulares"],
      "min_discount_percent": null,
      "enabled": false,
      "product_count": 120,
      "effective_min_discount": "10",
      "effective_source": "GLOBAL"
    }
  ]
}
```

`effective_source` pode ser `CATEGORY`, `GLOBAL`, `GLOBAL_LEGACY` ou
`SAFETY_FALLBACK`.

### 9.9. `PUT /v1/category-discount-rules/{category_key}`

Define e ativa/desativa o percentual específico de uma categoria já descoberta.
Codifique a chave na URL quando o cliente exigir.

```bash
curl -i -X PUT \
  'http://127.0.0.1:8000/v1/category-discount-rules/shopee%3AHASH' \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN' \
  -H 'Content-Type: application/json' \
  --data '{"min_discount_percent":"15.5","enabled":true}'
```

O percentual aceita valores de 0 a 100. Categoria inexistente retorna
`404 CATEGORY_NOT_FOUND_REFRESH_CATEGORIES_FIRST`.

### 9.10. `DELETE /v1/category-discount-rules/{category_key}`

Remove o override sem apagar a categoria. Ela volta a usar a regra global ou o
fallback.

```bash
curl -i -X DELETE \
  'http://127.0.0.1:8000/v1/category-discount-rules/shopee%3AHASH' \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN'
```

### 9.11. `POST /v1/category-discount-rules/refresh`

Recalcula categorias e contagens a partir do catálogo atual. Não sobrescreve
percentuais nem o campo `enabled`.

```bash
curl -i -X POST http://127.0.0.1:8000/v1/category-discount-rules/refresh \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN'
```

Resposta:

```json
{"categories_refreshed":12}
```

### 9.12. `GET /v1/operations/pending`

Fornece um resumo operacional: jobs, jobs travados, callbacks, candidatos,
tentativas e pendências por canal.

```bash
curl -sS http://127.0.0.1:8000/v1/operations/pending \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN'
```

Exemplo:

```json
{
  "jobs": {"SUCCEEDED": 4, "FAILED": 1},
  "stale_jobs": 0,
  "notifications": {"DELIVERED": 3, "PENDING": 2},
  "candidates": {"PENDING": 5},
  "attempts": {},
  "channels": [{"channel_id":"telegram","pending":5}]
}
```

### 9.13. `POST /v1/offers/claim`

Reserva ofertas para um canal e devolve `attempt_id` e `reservation_token` para
cada item. A reserva tem lease e ocorre antes do envio externo.

```bash
curl -i -X POST http://127.0.0.1:8000/v1/offers/claim \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN' \
  -H 'Content-Type: application/json' \
  --data '{"channel_id":"telegram","job_id":"UUID_DO_JOB","limit":20}'
```

`job_id` é opcional e `limit` aceita 1 a 100, mas também é limitado por
`OFFER_BATCH_SIZE`. Exemplo resumido:

```json
{
  "offers": [
    {
      "attempt_id": "UUID_DA_TENTATIVA",
      "candidate_id": "UUID_DO_CANDIDATO",
      "reservation_token": "TOKEN_DA_RESERVA",
      "name": "Produto",
      "price": "89.90",
      "reference_price": "109.90",
      "drop_percent": "18.198362",
      "currency": "BRL",
      "affiliate_link": "https://...",
      "destination_ref": "@seu_canal"
    }
  ]
}
```

A rota retorna `409 PUBLICATION_DISABLED_OR_CONTRACT_UNVERIFIED` enquanto as
travas estiverem desligadas. Canal inexistente ou desabilitado retorna
`404 ENABLED_CHANNEL_NOT_FOUND`.

### 9.14. `POST /v1/publication-attempts/{attempt_id}/start`

É a última revalidação antes do envio. Só envie a mensagem externa quando a
resposta contiver `send_allowed: true`.

```bash
curl -i -X POST \
  http://127.0.0.1:8000/v1/publication-attempts/UUID_DA_TENTATIVA/start \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN' \
  -H 'Content-Type: application/json' \
  --data '{"reservation_token":"TOKEN_DA_RESERVA"}'
```

Resposta:

```json
{
  "attempt_id":"UUID_DA_TENTATIVA",
  "status":"started",
  "send_allowed":true
}
```

Não repita o envio se esta chamada já tiver sido aceita. Uma tentativa iniciada
ou finalizada retorna `409 ATTEMPT_ALREADY_STARTED_OR_FINISHED`.

### 9.15. `POST /v1/publication-attempts/{attempt_id}/result`

Registra o desfecho depois da tentativa de envio. Use o mesmo
`reservation_token` retornado pelo claim.

Sucesso confirmado:

```bash
curl -i -X POST \
  http://127.0.0.1:8000/v1/publication-attempts/UUID_DA_TENTATIVA/result \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN' \
  -H 'Content-Type: application/json' \
  --data '{
    "reservation_token":"TOKEN_DA_RESERVA",
    "status":"published",
    "external_message_id":"12345",
    "error_code":null,
    "proven_not_sent":false
  }'
```

Falha em que há prova de que nada foi enviado:

```bash
curl -i -X POST \
  http://127.0.0.1:8000/v1/publication-attempts/UUID_DA_TENTATIVA/result \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN' \
  -H 'Content-Type: application/json' \
  --data '{
    "reservation_token":"TOKEN_DA_RESERVA",
    "status":"failed",
    "external_message_id":null,
    "error_code":"TELEGRAM_REJECTED_BEFORE_SEND",
    "proven_not_sent":true
  }'
```

Resultado incerto, por exemplo timeout depois de um possível envio:

```bash
curl -i -X POST \
  http://127.0.0.1:8000/v1/publication-attempts/UUID_DA_TENTATIVA/result \
  -H 'Authorization: Bearer SEU_INTERNAL_API_TOKEN' \
  -H 'Content-Type: application/json' \
  --data '{
    "reservation_token":"TOKEN_DA_RESERVA",
    "status":"unknown",
    "external_message_id":null,
    "error_code":"SEND_TIMEOUT_REVIEW_REQUIRED",
    "proven_not_sent":false
  }'
```

Regras críticas:

- `published` exige tentativa iniciada e `external_message_id`;
- `failed` exige `proven_not_sent=true`;
- se o envio pode ter ocorrido, use `unknown`, nunca `failed`;
- repetir exatamente o mesmo resultado é idempotente;
- repetir com body diferente retorna
  `409 RESULT_BODY_CONFLICT_REQUIRES_REVIEW`.

## 10. Testar as rotas por meio do n8n

### 10.1. Abrir o webhook de teste

1. Importe `Shopee-API-test-all.json`.
2. Atribua `Shopee Feed API` aos oito nós HTTP.
3. Abra o workflow e clique em **Listen for test event**.
4. Enquanto o listener estiver aberto, chame a URL de teste.

Local:

```text
http://127.0.0.1:5678/webhook-test/shopee-api-test
```

EasyPanel:

```text
https://n8n.seudominio.com/webhook-test/shopee-api-test
```

### 10.2. Exemplos das oito operações

Criar job:

```bash
curl -X POST http://127.0.0.1:5678/webhook-test/shopee-api-test \
  -H 'Content-Type: application/json' \
  --data '{"operation":"create","mode":"FULL","idempotency_key":"n8n-full-001"}'
```

Consultar job:

```bash
curl -X POST http://127.0.0.1:5678/webhook-test/shopee-api-test \
  -H 'Content-Type: application/json' \
  --data '{"operation":"status","job_id":"UUID_DO_JOB"}'
```

Retry:

```bash
curl -X POST http://127.0.0.1:5678/webhook-test/shopee-api-test \
  -H 'Content-Type: application/json' \
  --data '{"operation":"retry","job_id":"UUID_DO_JOB"}'
```

Listar feeds:

```bash
curl -X POST http://127.0.0.1:5678/webhook-test/shopee-api-test \
  -H 'Content-Type: application/json' \
  --data '{"operation":"feeds","feed_mode":"FULL"}'
```

Consultar pendências:

```bash
curl -X POST http://127.0.0.1:5678/webhook-test/shopee-api-test \
  -H 'Content-Type: application/json' \
  --data '{"operation":"pending"}'
```

Reservar ofertas:

```bash
curl -X POST http://127.0.0.1:5678/webhook-test/shopee-api-test \
  -H 'Content-Type: application/json' \
  --data '{"operation":"claim","channel_id":"telegram","job_id":"UUID_DO_JOB","limit":20}'
```

Iniciar tentativa:

```bash
curl -X POST http://127.0.0.1:5678/webhook-test/shopee-api-test \
  -H 'Content-Type: application/json' \
  --data '{"operation":"start","attempt_id":"UUID_DA_TENTATIVA","reservation_token":"TOKEN_DA_RESERVA"}'
```

Registrar resultado:

```bash
curl -X POST http://127.0.0.1:5678/webhook-test/shopee-api-test \
  -H 'Content-Type: application/json' \
  --data '{
    "operation":"result",
    "attempt_id":"UUID_DA_TENTATIVA",
    "reservation_token":"TOKEN_DA_RESERVA",
    "status":"unknown",
    "error_code":"SEND_TIMEOUT_REVIEW_REQUIRED",
    "proven_not_sent":false
  }'
```

O listener de teste aceita uma execução por vez. Clique novamente em **Listen
for test event** antes da próxima chamada.

### 10.3. Workflow K: somente resultado do job

O workflow K chama apenas `GET /v1/sync-jobs/{job_id}`; ele não cria, reabre nem
publica nada.

```bash
curl -X POST http://127.0.0.1:5678/webhook-test/shopee-job-result \
  -H 'Content-Type: application/json' \
  --data '{"job_id":"UUID_DO_JOB"}'
```

## 11. Desbloquear uma carga real

Com os flags em `false`, um job pode ser criado, mas o worker deve terminar em
`failed` com uma trava de contrato. Esse é o comportamento seguro esperado.

Para desbloquear corretamente:

1. capture fixtures sanitizadas de FULL, NEW, UPDATE e DELETE da conta
   autorizada;
2. confirme os campos de identidade da loja, item e variação;
3. confirme a unidade/escala do preço e da comissão;
4. confirme moeda, estoque e link afiliado;
5. confirme se UPDATE é parcial ou completo;
6. confirme a completude do FULL e a continuidade diária dos DELTAs;
7. configure o mapeamento real, por exemplo:

```dotenv
SHOPEE_COLUMNS_MAPPING={"shop_id":"CAMPO_REAL","item_id":"CAMPO_REAL","variant_key":"CAMPO_REAL","name":"CAMPO_REAL","price":"CAMPO_REAL","currency":"CAMPO_REAL","affiliate_link":"CAMPO_REAL"}
SHOPEE_CATEGORY_COLUMNS=["global_category1","global_category2"]
SHOPEE_PRICE_SCALE=1
SHOPEE_UPDATE_SEMANTICS=PARTIAL
```

8. somente depois da revisão, altere os flags comprovados:

```dotenv
SHOPEE_CONTRACT_VERIFIED=true
SHOPEE_FULL_COMPLETENESS_VERIFIED=true
SHOPEE_DELTA_CONTRACT_VERIFIED=true
SHOPEE_NO_VARIANTS_VERIFIED=false
PUBLICATION_ENABLED=false
```

9. faça novo Deploy/recrie os containers;
10. execute um job FULL controlado;
11. confira o catálogo, histórico, categorias e candidatos no Grafana;
12. implemente e teste o adaptador de publicação no workflow B;
13. cadastre e habilite o canal;
14. ligue `PUBLICATION_ENABLED=true` por último.

Se a conta realmente não tiver variações e isso tiver sido comprovado, use
`SHOPEE_NO_VARIANTS_VERIFIED=true`. Não use esse flag para contornar um campo de
variação desconhecido.

Para detalhes do contrato, leia [SHOPEE_CONTRACT.md](SHOPEE_CONTRACT.md).

## 12. Cadastrar o canal de publicação

Esta versão ainda não possui rota administrativa para criar canais. Faça isso
somente quando o adaptador externo estiver pronto.

No PostgreSQL, o canal esperado pelos templates usa ID `telegram`. Exemplo para
um ambiente com os nomes padrão:

```sql
INSERT INTO channel (id, name, type, enabled, destination_ref)
VALUES ('telegram', 'Telegram principal', 'TELEGRAM', false, '@seu_canal')
ON CONFLICT (id) DO UPDATE
SET name = EXCLUDED.name,
    destination_ref = EXCLUDED.destination_ref;
```

Comece com `enabled=false`. Depois de validar o bot, o destino e o workflow de
envio, habilite explicitamente:

```sql
UPDATE channel SET enabled=true WHERE id='telegram';
```

Localmente, você pode abrir o `psql` assim:

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml \
  exec postgres psql -U deploy_admin -d shopee_app
```

Se você alterou `POSTGRES_ADMIN_USER` ou `APP_DB_NAME`, use os valores do seu
`.env`. No EasyPanel, abra o console do container `postgres` e execute o mesmo
`psql` com os nomes configurados. Não publique a porta 5432 para fazer isso.

## 13. Configurar o Grafana

1. Abra o Grafana.
2. Entre com `GRAFANA_ADMIN_USER` e `GRAFANA_ADMIN_PASSWORD`.
3. Abra o dashboard **Shopee / Shopee — Operações**.
4. Confirme cards de jobs, produtos, categorias, candidatos e notificações.

O datasource `Shopee PostgreSQL` é provisionado automaticamente. Ele usa
`GRAFANA_DB_USER`, que só pode ler views do schema `grafana`; não troque essa
credencial pelo usuário da aplicação.

`GRAFANA_ADMIN_PASSWORD` só inicializa um banco novo. Depois do primeiro login,
altere a senha pela interface. Preserve `GRAFANA_SECRET_KEY` em backups.

## 14. Variáveis de negócio

| Variável | Padrão | Efeito |
| --- | --- | --- |
| `DEFAULT_MIN_DISCOUNT` | `10` | queda mínima global para criar candidato |
| `REPUBLISH_POLICY` | `ONLY_LOWER_PRICE` | permite republicar somente com novo preço menor; `NEVER` bloqueia |
| `REPUBLISH_MIN_DROP_PERCENT` | `5` | queda adicional mínima para republicação |
| `OFFER_BATCH_SIZE` | `20` | teto de ofertas devolvidas por claim |
| `OFFER_TTL_HOURS` | `24` | validade de um candidato |
| `PUBLICATION_LEASE_SECONDS` | `300` | prazo da reserva para o fluxo de publicação |
| `WORKER_LEASE_SECONDS` | `120` | lease do worker e dos checkpoints |
| `SHOPEE_REQUEST_INTERVAL_SECONDS` | `1` | intervalo mínimo entre chamadas Shopee |
| `SHOPEE_PRICE_SCALE` | `1` | multiplicador do preço bruto; só altere após validar a unidade |
| `SHOPEE_CURRENCY` | vazio | moeda fixa quando o feed não tiver campo, após comprovação |
| `PUBLICATION_ENABLED` | `false` | chave final para permitir claim/publicação |

Overrides por categoria têm prioridade sobre `DEFAULT_MIN_DISCOUNT`. Categoria
sem override usa o global; sem global, o fallback de segurança é 10%.

## 15. Erros comuns

### `401 Invalid or missing internal API token`

O header está ausente ou diferente de `INTERNAL_API_TOKEN`. Confira o espaço em
`Bearer TOKEN` e reatribua a credencial nos nós importados.

### `503 INTERNAL_API_TOKEN_NOT_CONFIGURED`

O container `feed-api` não recebeu `INTERNAL_API_TOKEN`. Corrija o Environment e
faça novo Deploy.

### `503 DEPENDENCIES_NOT_READY`

Veja `postgres`, `db-init` e `migrate`. Confirme que as três variáveis de banco
da aplicação apontam para os mesmos nomes usados na inicialização.

### Job falha com `SHOPEE_CONTRACT_NOT_VERIFIED`

É esperado no estado inicial. Faça a validação da seção 11; não ligue flags sem
evidência.

### Job DELTA falha com `DELTA_REQUIRES_VALID_FULL_BASELINE`

Execute e conclua um FULL válido primeiro, ou use `AUTO`.

### Job falha com `DELTA_CONTRACT_NOT_VERIFIED`

O baseline existe, mas a semântica NEW/UPDATE/DELETE ainda não foi validada.

### Claim retorna `PUBLICATION_DISABLED_OR_CONTRACT_UNVERIFIED`

`PUBLICATION_ENABLED` ou `SHOPEE_CONTRACT_VERIFIED` ainda está falso. Isso é
correto enquanto o envio externo não estiver pronto.

### Outbox fica `PENDING`

O workflow B está inativo, a credencial `Shopee Callback` está incorreta ou o
webhook não responde 2xx. Enquanto B continuar deliberadamente bloqueado, espere
pendências/retries e não trate isso como autorização para publicar.

### n8n não encontra `feed-api`

Dentro do Compose use `http://feed-api:8000`, não `localhost:8000`. `localhost`
dentro do container n8n aponta para o próprio n8n.

### Alterei Environment, mas nada mudou

Faça **Deploy** no EasyPanel ou recrie os containers localmente:

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml up -d --force-recreate
```

## 16. Checklist final

- [ ] `.env` não está versionado.
- [ ] Todos os `replace_*` foram removidos.
- [ ] Cada segredo foi gerado independentemente.
- [ ] `db-init` e `migrate` terminaram com código 0.
- [ ] `/health/live` e `/health/ready` retornam 200.
- [ ] n8n e Grafana abrem pelas URLs corretas.
- [ ] A credencial `Shopee Feed API` usa `Authorization: Bearer ...`.
- [ ] A credencial `Shopee Callback` usa o `CALLBACK_TOKEN`.
- [ ] Os nós HTTP importados receberam a credencial da API.
- [ ] Apenas um scheduler diário, A ou L, será ativado.
- [ ] C e G não foram ativados juntos.
- [ ] O webhook de teste não ficou ativo/publicamente exposto.
- [ ] Os flags de contrato continuam falsos até existir evidência real.
- [ ] `PUBLICATION_ENABLED` continua falso até o adaptador externo estar pronto.
- [ ] Há backup de bancos, volumes, Environment e chaves de criptografia.

Para backup, restauração e recuperação, continue em
[OPERATIONS.md](OPERATIONS.md). Para o dashboard, consulte
[GRAFANA.md](GRAFANA.md).
