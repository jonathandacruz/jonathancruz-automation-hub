import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Boxes,
  Check,
  CheckCircle2,
  Clock3,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileJson,
  Headphones,
  LockKeyhole,
  Play,
  ShieldCheck,
  ShoppingCart,
  Star,
  Server,
  Workflow,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./TemplateDetail.css";

type ProductTemplate = {
  id: number;
  slug: string;
  title: string;
  promise: string;
  description: string;
  category: string;
  difficulty: string;
  downloads: number;
  rating: number;
  tags: string[];
  price: number;
  link: string;
  estimatedTime: string;
  youtubeId: string;
  features: string[];
  requirements: string[];
  currentState?: {
    label: string;
    title: string;
    description: string;
  };
  purchaseIncludes?: string[];
};

const templates: ProductTemplate[] = [
  {
    id: 1,
    slug: "n8n-template-instagram",
    title: "Post Viral no Instagram",
    promise: "Transforme tendências em posts publicados sem repetir o processo manual todos os dias.",
    description: "Automatize a análise de tendências, a geração do conteúdo e o agendamento de posts no Instagram com um fluxo pronto para adaptar.",
    category: "Social Media",
    difficulty: "Intermediário",
    downloads: 15,
    rating: 4.9,
    tags: ["Instagram", "API", "IA", "Viral"],
    price: 37,
    link: "https://pay.hotmart.com/C101345009B",
    estimatedTime: "2–3 horas",
    youtubeId: "BRSAI3GOhWc",
    features: ["Análise automática de tendências do Instagram", "Geração de conteúdo com IA integrada", "Hashtags automáticas otimizadas"],
    requirements: ["n8n instalado (versão 1.0+)", "Conta Instagram Business", "API do Instagram Graph", "Chave API da OpenAI"],
  },
  {
    id: 2,
    slug: "n8n-robo-lotofacil",
    title: "Robô da Lotofácil",
    promise: "Confira apostas por jogador e envie o resultado automaticamente pelo WhatsApp.",
    description: "Um fluxo completo para processar apostas, consultar resultados e avisar cada jogador sobre a quantidade de acertos.",
    category: "Automação",
    difficulty: "Avançado",
    downloads: 36,
    rating: 4.8,
    tags: ["Banco de dados", "WhatsApp", "API", "Bot"],
    price: 9.9,
    link: "https://pay.hotmart.com/V101159263W",
    estimatedTime: "4–5 horas",
    youtubeId: "ZWhc3MCFoAg",
    features: ["Análise automática dos resultados", "Bot no WhatsApp pronto para configurar", "Notificações automáticas por jogador"],
    requirements: ["n8n instalado", "RapidAPI API Key", "PostgreSQL"],
  },
  {
    id: 3,
    slug: "n8n-template-stories",
    title: "Stories automáticos no Instagram",
    promise: "Crie e publique stories com consistência sem montar cada conteúdo do zero.",
    description: "Use um fluxo configurável para gerar stories, personalizar o visual e publicar automaticamente no Instagram.",
    category: "Social Media",
    difficulty: "Iniciante",
    downloads: 25,
    rating: 4.9,
    tags: ["Stories", "Instagram", "Templates", "Automação"],
    price: 37,
    link: "https://pay.hotmart.com/H101450514K",
    estimatedTime: "1–2 horas",
    youtubeId: "gLTWIXa33WE",
    features: ["Templates pré-configurados para stories", "Personalização de cores e fontes", "Integração com banco de imagens"],
    requirements: ["n8n instalado (versão 1.0+)", "Conta Instagram Business", "API do Instagram Graph", "Chave de API Replicate"],
  },
  {
    id: 4,
    slug: "n8n-agente-ia-restaurante",
    title: "Agente de IA para restaurantes",
    promise: "Atenda clientes, receba pedidos e organize reservas mesmo quando sua equipe está ocupada.",
    description: "Um assistente virtual integrado ao WhatsApp para automatizar atendimento, pedidos, cardápio, reservas e pagamentos.",
    category: "IA",
    difficulty: "Avançado",
    downloads: 350,
    rating: 4.7,
    tags: ["IA", "Restaurante", "Atendimento", "Pedidos"],
    price: 37,
    link: "https://pay.hotmart.com/G100538074I",
    estimatedTime: "3–4 horas",
    youtubeId: "j-OMUYNyG-I",
    features: ["Chatbot inteligente para WhatsApp", "Gestão automática de pedidos", "Gerador de PIX integrado", "Cardápio digital interativo"],
    requirements: ["n8n instalado (versão 1.0+)", "Evolution API", "OpenAI API Key", "Sistema de pagamento Asaas"],
  },
  {
    id: 5,
    slug: "n8n-gestao-cobrancas",
    title: "Gestão de cobranças com EspoCRM",
    promise: "Centralize fornecedores e faturas em uma operação de cobrança mais organizada.",
    description: "Implantação do módulo de cobranças com apoio na instalação do servidor, configuração e customização do EspoCRM.",
    category: "Automação",
    difficulty: "Avançado",
    downloads: 10,
    rating: 4.8,
    tags: ["Banco de dados", "WhatsApp", "API", "EspoCRM"],
    price: 149,
    link: "https://pay.hotmart.com/C101862756X",
    estimatedTime: "1 hora",
    youtubeId: "aKYfK7QHzQk",
    features: ["Cadastro de fornecedores e faturas", "Implantação do EspoCRM", "Consultoria exclusiva para instalação"],
    requirements: ["n8n instalado", "EspoCRM API Key", "Evolution API"],
  },
  {
    id: 6,
    slug: "n8n-automacao-shopee",
    title: "Automação de afiliados Shopee",
    promise: "Construa uma operação confiável para capturar, organizar e selecionar ofertas da Shopee sem depender de processos manuais frágeis.",
    description: "Uma stack completa com n8n, API FastAPI, workers, PostgreSQL e Grafana para ingerir feeds da Shopee, aplicar regras comerciais e preparar ofertas para publicação.",
    category: "Automação",
    difficulty: "Avançado",
    downloads: 78,
    rating: 4.9,
    tags: ["Afiliados", "Shopee", "Telegram", "Bot"],
    price: 99,
    link: "https://pay.hotmart.com/N107686573A",
    estimatedTime: "2 horas",
    youtubeId: "2hFpNWJ_N4I",
    features: [
      "Ingestão assíncrona de feeds FULL, DELTA e AUTO",
      "Seleção de ofertas por desconto global ou por categoria",
      "Histórico, retries, idempotência e acompanhamento operacional",
      "Reserva segura de ofertas para integração com canais externos",
    ],
    requirements: [
      "Git, Docker e Docker Compose v2",
      "Conta aprovada no Programa de Afiliados Shopee",
      "App ID e Secret da Open API Shopee",
      "EasyPanel e dois domínios DNS para deploy em servidor",
    ],
    currentState: {
      label: "Escopo atual do produto",
      title: "Ingestão e seleção prontas; publicação exige integração final.",
      description: "A stack processa feeds, mantém catálogo, histórico e candidatos. O adaptador que envia a mensagem ao Telegram deve ser concluído e validado no workflow B antes de ativar a publicação.",
    },
    purchaseIncludes: [
      "Stack Docker Compose com 9 serviços",
      "API FastAPI, worker e outbox durável",
      "13 workflows n8n para operação e testes",
      "PostgreSQL com migrations e views",
      "Dashboard operacional no Grafana",
      "Guia completo para instalação local e EasyPanel",
    ],
  },
];

const includedItems = [
  { icon: FileJson, text: "Arquivo .json do workflow" },
  { icon: Play, text: "Vídeo de instalação passo a passo" },
  { icon: Headphones, text: "Suporte via WhatsApp" },
  { icon: Zap, text: "Atualizações do template" },
];

const getPurchaseItems = (template: ProductTemplate) =>
  template.purchaseIncludes ?? includedItems.map((item) => item.text);

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

const TemplateDetail = () => {
  const { templateSlug } = useParams();
  const template = templates.find((item) => item.slug === templateSlug);

  useEffect(() => {
    if (!template) return;

    const previousTitle = document.title;
    document.title = `${template.title} | Template n8n por ${currency.format(template.price)}`;

    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = metaDescription?.content;
    metaDescription?.setAttribute("content", `${template.promise} Template n8n com vídeo, suporte e acesso imediato.`);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: template.title,
      description: template.description,
      category: template.category,
      brand: { "@type": "Brand", name: "Jonathan da Cruz" },
      offers: {
        "@type": "Offer",
        price: template.price,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        url: template.link,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: template.rating,
        reviewCount: template.downloads,
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription) metaDescription.content = previousDescription;
      script.remove();
    };
  }, [template]);

  if (!template) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#0b1020] px-4 text-white">
        <div className="max-w-lg text-center">
          <h1 className="font-display text-4xl font-semibold">Template não encontrado</h1>
          <p className="mt-4 text-slate-400">Este produto não está disponível ou o endereço foi alterado.</p>
          <Link className="product-back-link mx-auto mt-8" to="/templates"><ArrowLeft size={17} /> Ver todos os templates</Link>
        </div>
      </main>
    );
  }

  const price = currency.format(template.price);
  const isShopeeTemplate = template.slug === "n8n-automacao-shopee";

  return (
    <div className="product-page">
      <div className="product-grid-bg" aria-hidden="true" />

      <main>
        <div className="product-container product-breadcrumb">
          <Link to="/templates"><ArrowLeft size={16} /> Templates</Link>
          <span>/</span>
          <span>{template.title}</span>
        </div>

        <section className="product-container product-hero">
          <div className="product-intro">
            <div className="product-meta">
              <span>{template.category}</span>
              <span>{template.difficulty}</span>
              <span><Star size={14} fill="currentColor" /> {template.rating}</span>
            </div>

            <h1>{template.title}</h1>
            <p className="product-promise">{template.promise}</p>
            <p className="product-description">{template.description}</p>

            {template.currentState && (
              <div className="product-state-note">
                <ShieldCheck size={22} />
                <div>
                  <span>{template.currentState.label}</span>
                  <strong>{template.currentState.title}</strong>
                  <p>{template.currentState.description}</p>
                </div>
              </div>
            )}

            <div className="product-quick-proof">
              <span><Download size={18} /> {template.downloads} downloads</span>
              <span><Clock3 size={18} /> Configure em cerca de {template.estimatedTime}</span>
              <span><CheckCircle2 size={18} /> Acesso imediato</span>
            </div>

            <div className="workflow-preview" aria-label="Etapas do workflow incluído">
              <div className="workflow-preview-head">
                <span><Workflow size={18} /> workflow pronto</span>
                <i><span /> ativo</i>
              </div>
              <div className="workflow-nodes">
                <div><Download size={17} /><span><small>Entrada</small>{isShopeeTemplate ? "API Shopee" : "Captura dados"}</span></div>
                <ArrowRight size={18} />
                <div><Bot size={17} /><span><small>Processa</small>{isShopeeTemplate ? "Worker + regras" : "Aplica regras"}</span></div>
                <ArrowRight size={18} />
                <div><Zap size={17} /><span><small>Resultado</small>{isShopeeTemplate ? "Ofertas candidatas" : "Executa ação"}</span></div>
              </div>
            </div>
          </div>

          <PurchasePanel template={template} price={price} />
        </section>

        <section className="product-container product-demo" aria-labelledby="demo-title">
          <div className="product-section-heading">
            <span>Veja antes de comprar</span>
            <h2 id="demo-title">Entenda o fluxo funcionando na prática.</h2>
            <p>O vídeo mostra a lógica, a configuração e como adaptar o template ao seu ambiente.</p>
          </div>

          <div className="demo-layout">
            <div className="video-frame">
              <iframe
                src={`https://www.youtube.com/embed/${template.youtubeId}?rel=0&modestbranding=1`}
                title={`Demonstração do template ${template.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="demo-summary">
              <h3>O que este fluxo automatiza</h3>
              <ul>
                {template.features.map((feature) => (
                  <li key={feature}><Check size={18} /> {feature}</li>
                ))}
              </ul>
              <a className="text-buy-link" href={template.link} target="_blank" rel="noopener noreferrer">
                Quero este workflow por {price}<ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {isShopeeTemplate && <ShopeeSystemSection />}

        <section className="product-details-section">
          <div className="product-container product-details-grid">
            <div>
              <div className="product-section-heading compact">
                <span>Entrega completa</span>
                <h2>Você recebe o fluxo e o caminho para colocá-lo no ar.</h2>
              </div>
              <div className="included-list">
                {getPurchaseItems(template).map((text, index) => {
                  const Icon = includedItems[index % includedItems.length].icon;
                  return <div key={text}><Icon size={21} /><span>{text}</span></div>;
                })}
              </div>
            </div>

            <aside className="requirements-panel">
              <Code2 size={24} />
              <h3>O que você precisa</h3>
              <p>Confira se você já possui estes itens antes de instalar:</p>
              <ul>
                {template.requirements.map((requirement) => (
                  <li key={requirement}><span />{requirement}</li>
                ))}
              </ul>
              <div className="technology-tags">
                {template.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </aside>
          </div>
        </section>

        <section className="product-container reassurance-strip" aria-label="Garantias da compra">
          <div><ShieldCheck size={25} /><span><strong>30 dias de garantia</strong><small>Você pode solicitar o reembolso dentro do prazo.</small></span></div>
          <div><LockKeyhole size={25} /><span><strong>Pagamento pela Hotmart</strong><small>Checkout protegido em ambiente externo seguro.</small></span></div>
          <div><Headphones size={25} /><span><strong>Suporte humano</strong><small>Ajuda pelo WhatsApp para colocar o fluxo em funcionamento.</small></span></div>
        </section>

        <section className="product-container product-faq" aria-labelledby="faq-title">
          <div className="product-section-heading compact">
            <span>Antes de decidir</span>
            <h2 id="faq-title">Dúvidas comuns sobre a compra.</h2>
          </div>
          <div className="faq-list">
            {isShopeeTemplate && (
              <details open>
                <summary>O template já publica ofertas automaticamente no Telegram?</summary>
                <p>A ingestão e a seleção das ofertas estão implementadas. A publicação permanece bloqueada por segurança até você concluir e validar o adaptador externo do workflow B. O guia explica as travas e a sequência correta de ativação.</p>
              </details>
            )}
            <details>
              <summary>Como recebo o template depois da compra?</summary>
              <p>O acesso ao material é liberado pela Hotmart após a confirmação do pagamento.</p>
            </details>
            <details>
              <summary>Preciso saber programar?</summary>
              <p>{isShopeeTemplate ? "O produto é voltado a quem já consegue operar Docker, variáveis de ambiente, APIs e workflows do n8n. O guia é detalhado, mas a implantação exige familiaridade técnica." : "Não é necessário programar, mas você precisa conhecer o básico do n8n e ter acesso às ferramentas listadas nos requisitos."}</p>
            </details>
            <details>
              <summary>O template já vem totalmente configurado?</summary>
              <p>O workflow e a lógica vêm prontos. Você ainda precisará conectar suas credenciais e ajustar dados específicos da sua operação.</p>
            </details>
            <details>
              <summary>E se eu não conseguir instalar?</summary>
              <p>Você recebe o vídeo de instalação e pode usar o suporte via WhatsApp para tirar dúvidas sobre a configuração.</p>
            </details>
          </div>
        </section>

        <section className="product-container product-final-cta">
          <div>
            <span>Pagamento único · acesso imediato</span>
            <h2>Comece com o fluxo pronto e adapte ao seu negócio.</h2>
            <p>Evite reconstruir do zero uma automação que já foi organizada, testada e documentada.</p>
          </div>
          <a href={template.link} target="_blank" rel="noopener noreferrer">
            <ShoppingCart size={20} /> Comprar template por {price}<ExternalLink size={16} />
          </a>
        </section>
      </main>

      <div className="mobile-buy-bar">
        <div><small>Pagamento único</small><strong>{price}</strong></div>
        <a href={template.link} target="_blank" rel="noopener noreferrer">Comprar agora <ArrowRight size={18} /></a>
      </div>
    </div>
  );
};

const PurchasePanel = ({ template, price }: { template: ProductTemplate; price: string }) => (
  <aside className="purchase-column" aria-label="Opções de compra">
    <div className="purchase-panel">
      <p className="purchase-label">Template completo + suporte</p>
      <div className="purchase-price"><small>por</small><strong>{price}</strong></div>
      <p className="purchase-payment">Pagamento único. Sem mensalidade.</p>

      <a className="purchase-button" href={template.link} target="_blank" rel="noopener noreferrer">
        <ShoppingCart size={20} />
        Comprar template
        <ExternalLink size={16} />
      </a>
      <p className="checkout-note"><LockKeyhole size={14} /> Você será direcionado para o checkout seguro da Hotmart.</p>

      <div className="purchase-divider" />
      <h2>Incluído na compra</h2>
      <ul>
        {getPurchaseItems(template).slice(0, 6).map((text) => <li key={text}><CheckCircle2 size={17} />{text}</li>)}
      </ul>

      <div className="guarantee-note">
        <ShieldCheck size={25} />
        <span><strong>Garantia de 30 dias</strong><small>Compre, avalie e solicite o reembolso dentro do prazo se não fizer sentido para você.</small></span>
      </div>
    </div>
  </aside>
);

const ShopeeSystemSection = () => (
  <section className="shopee-system-section" aria-labelledby="shopee-system-title">
    <div className="product-container">
      <div className="product-section-heading">
        <span>Mais do que um workflow</span>
        <h2 id="shopee-system-title">Uma base operacional para trabalhar com feeds da Shopee.</h2>
        <p>O produto separa credenciais, processamento, dados e orquestração para que a operação possa crescer sem concentrar tudo dentro do n8n.</p>
      </div>

      <div className="system-metrics" aria-label="Resumo técnico do produto">
        <div><strong>9</strong><span>serviços no Docker Compose</span></div>
        <div><strong>13</strong><span>workflows n8n incluídos</span></div>
        <div><strong>3</strong><span>modos de carga: AUTO, FULL e DELTA</span></div>
        <div><strong>2</strong><span>caminhos de deploy documentados</span></div>
      </div>

      <div className="architecture-panel">
        <div className="architecture-heading">
          <Workflow size={23} />
          <div><span>Arquitetura do fluxo</span><small>Credenciais Shopee permanecem isoladas no worker</small></div>
        </div>
        <div className="architecture-flow" aria-label="Fluxo entre os serviços">
          <div><Workflow size={20} /><span><small>Orquestra</small>n8n</span></div>
          <ArrowRight size={18} />
          <div><Code2 size={20} /><span><small>Controla</small>Feed API</span></div>
          <ArrowRight size={18} />
          <div><Database size={20} /><span><small>Persiste</small>PostgreSQL</span></div>
          <ArrowRight size={18} />
          <div><Server size={20} /><span><small>Processa</small>Worker</span></div>
          <ArrowRight size={18} />
          <div><Boxes size={20} /><span><small>Consulta</small>API Shopee</span></div>
        </div>
      </div>

      <div className="capability-list">
        <article>
          <span>Operação confiável</span>
          <h3>Jobs assíncronos e recuperação</h3>
          <p>Fila no PostgreSQL, checkpoints, retries controlados e chaves de idempotência evitam duplicações e tornam falhas rastreáveis.</p>
        </article>
        <article>
          <span>Seleção comercial</span>
          <h3>Regras de desconto por categoria</h3>
          <p>Defina um percentual global ou sobrescreva categorias específicas, com política de republicação apenas quando o preço cair novamente.</p>
        </article>
        <article>
          <span>Visibilidade</span>
          <h3>Grafana pronto para acompanhar</h3>
          <p>Dashboard provisionado com leitura isolada para conferir jobs, produtos, categorias, candidatos, callbacks e pendências.</p>
        </article>
        <article>
          <span>Deploy documentado</span>
          <h3>Local ou EasyPanel</h3>
          <p>Use o Compose local para desenvolver e validar ou publique a mesma stack em servidor com HTTPS e serviços internos protegidos.</p>
        </article>
      </div>

      <div className="activation-sequence">
        <div>
          <span>Sequência segura de ativação</span>
          <h3>O sistema começa bloqueado de propósito.</h3>
          <p>Os flags de contrato e publicação ficam desativados até que o feed real da sua conta seja validado. Isso impede que um mapeamento desconhecido publique preço, comissão ou produto incorreto.</p>
        </div>
        <ol>
          <li><span>1</span>Validar credenciais e contratos FULL/DELTA</li>
          <li><span>2</span>Executar uma carga FULL controlada</li>
          <li><span>3</span>Conferir catálogo, histórico e candidatos</li>
          <li><span>4</span>Concluir e testar o adaptador de publicação</li>
          <li><span>5</span>Ativar o canal e liberar a publicação por último</li>
        </ol>
      </div>
    </div>
  </section>
);

export default TemplateDetail;
