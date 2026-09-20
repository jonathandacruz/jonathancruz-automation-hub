import Seo from "@/components/Seo";
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  Clock3,
  Code2,
  CreditCard,
  Database,
  Headphones,
  Infinity as InfinityIcon,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./AutomacaoN8n.css";

const checkoutUrl = "https://pay.hotmart.com/J101368751T";

const modules = [
  {
    number: "01",
    title: "Fundamentos do n8n",
    description: "Entenda a lógica da ferramenta e publique seu primeiro workflow.",
    duration: "45 min",
    level: "Iniciante",
    topics: ["Conceitos de automação", "Instalação e configuração", "Interface visual", "Primeiro workflow"],
  },
  {
    number: "02",
    title: "Workflows essenciais",
    description: "Domine triggers, ações e conexões entre diferentes serviços.",
    duration: "60 min",
    level: "Iniciante",
    topics: ["Triggers", "Nós essenciais", "Conectores", "Debugging"],
  },
  {
    number: "03",
    title: "Manipulação de dados",
    description: "Transforme, filtre e valide dados entre aplicações.",
    duration: "90 min",
    level: "Intermediário",
    topics: ["Expressions", "Transformações", "Filtros complexos", "Validação"],
  },
  {
    number: "04",
    title: "APIs e integrações",
    description: "Conecte sistemas externos com autenticação e webhooks.",
    duration: "120 min",
    level: "Intermediário",
    topics: ["REST e GraphQL", "OAuth", "Webhooks", "Rate limiting"],
  },
  {
    number: "05",
    title: "Automações profissionais",
    description: "Construa fluxos preparados para falhas e operações reais.",
    duration: "75 min",
    level: "Avançado",
    topics: ["Loops e condições", "Tratamento de erros", "Agendamentos", "Monitoramento"],
  },
  {
    number: "06",
    title: "Deploy e segurança",
    description: "Coloque suas automações em produção de forma organizada.",
    duration: "45 min",
    level: "Avançado",
    topics: ["Docker", "Variáveis de ambiente", "Escalabilidade", "Boas práticas de segurança"],
  },
];

const includedTemplates = [
  "Robô da Lotofácil",
  "Direct do Instagram",
  "Publicação no feed",
  "Stories automáticos",
  "Afiliados Shopee",
  "Comentários do Instagram",
  "Links de pagamento",
  "Integração Mercado Pago",
];

const AutomacaoN8n = () => {
  return (
    <div className="community-page">
      <Seo
        title="n8n Fundamentos | Comunidade de Automação"
        description="Aprenda n8n do primeiro workflow ao deploy com aulas organizadas, projetos práticos, templates e uma comunidade para tirar dúvidas."
        keywords={["curso n8n", "n8n fundamentos", "comunidade n8n", "automação n8n", "aprender n8n"]}
      />

      <div className="community-grid-bg" aria-hidden="true" />

      <main>
        <section className="community-container community-hero">
          <div className="community-hero-copy">
            <p className="community-kicker"><Users size={18} /> Curso + comunidade + projetos</p>
            <h1>Aprenda n8n construindo automações que funcionam fora da aula.</h1>
            <p className="community-intro">
              Uma jornada do primeiro workflow ao deploy, com conteúdo organizado,
              templates para praticar e um espaço para destravar dúvidas durante a implementação.
            </p>

            <div className="community-actions">
              <a className="community-buy-action" href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Entrar na comunidade <ArrowRight size={19} />
              </a>
              <a className="community-secondary-action" href="#trilha">
                <BookOpen size={18} /> Ver trilha completa
              </a>
            </div>

            <div className="community-price-note">
              <span><strong>R$ 487</strong> pagamento único</span>
              <span>ou 12x de R$ 50,37</span>
            </div>

            <div className="community-hero-checks">
              <span><CheckCircle2 size={17} /> Acesso vitalício</span>
              <span><CheckCircle2 size={17} /> Certificado</span>
              <span><CheckCircle2 size={17} /> 7 dias de garantia</span>
            </div>
          </div>

          <aside className="learning-map" aria-label="Jornada de aprendizado da comunidade">
            <div className="learning-map-head">
              <span><Workflow size={18} /> Sua jornada</span>
              <i><span /> acesso liberado</i>
            </div>

            <ol>
              <li>
                <span>1</span>
                <div><small>Comece</small><strong>Fundamentos</strong><p>Interface, triggers e primeiro fluxo.</p></div>
              </li>
              <li>
                <span>2</span>
                <div><small>Conecte</small><strong>APIs e dados</strong><p>Webhooks, autenticação e transformações.</p></div>
              </li>
              <li>
                <span>3</span>
                <div><small>Construa</small><strong>Projetos reais</strong><p>Use templates para aplicar cada conceito.</p></div>
              </li>
              <li>
                <span>4</span>
                <div><small>Publique</small><strong>Deploy seguro</strong><p>Leve o workflow para produção.</p></div>
              </li>
            </ol>

            <div className="learning-map-footer">
              <Sparkles size={20} />
              <span><strong>8 projetos incluídos</strong><small>para estudar, adaptar e implementar</small></span>
            </div>
          </aside>
        </section>

        <section className="community-container community-stats" aria-label="Conteúdo da comunidade">
          <div><strong>6</strong><span>módulos progressivos</span></div>
          <div><strong>6h+</strong><span>de conteúdo</span></div>
          <div><strong>8</strong><span>templates práticos</span></div>
          <div><strong>Vitalício</strong><span>acesso às aulas</span></div>
        </section>

        <section className="community-pillars-section">
          <div className="community-container community-pillars">
            <div className="community-section-heading">
              <p>Um sistema para aprender</p>
              <h2>Você não recebe apenas uma sequência de vídeos.</h2>
              <span>O conteúdo, os projetos e a comunidade trabalham juntos para levar cada conceito até uma automação funcionando.</span>
            </div>

            <div className="pillar-list">
              <article>
                <span>Aprenda</span>
                <BookOpen size={24} />
                <div><h3>Conteúdo em ordem</h3><p>Uma trilha progressiva, sem depender de vídeos soltos ou atalhos sem fundamento.</p></div>
              </article>
              <article>
                <span>Pratique</span>
                <Workflow size={24} />
                <div><h3>Projetos que você pode abrir</h3><p>Estude workflows prontos, altere credenciais e adapte a lógica ao seu cenário.</p></div>
              </article>
              <article>
                <span>Destrave</span>
                <MessageCircle size={24} />
                <div><h3>Comunidade durante a implementação</h3><p>Compartilhe dúvidas e avance quando o problema aparece no projeto real.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section id="trilha" className="community-container curriculum-section">
          <div className="curriculum-intro">
            <div className="community-section-heading">
              <p>Trilha completa</p>
              <h2>Do primeiro nó à produção.</h2>
              <span>Os módulos seguem a ordem em que as dificuldades aparecem na prática.</span>
            </div>
            <div className="curriculum-summary">
              <span><Clock3 size={18} /> Mais de 6 horas</span>
              <span><Award size={18} /> Certificado ao concluir</span>
            </div>
          </div>

          <div className="curriculum-list">
            {modules.map((module, index) => (
              <details key={module.number} open={index === 0}>
                <summary>
                  <span className="module-number">{module.number}</span>
                  <div><small>{module.level}</small><h3>{module.title}</h3><p>{module.description}</p></div>
                  <span className="module-duration">{module.duration}</span>
                </summary>
                <div className="module-topics">
                  {module.topics.map((topic) => <span key={topic}><Check size={15} /> {topic}</span>)}
                </div>
              </details>
            ))}
          </div>

          <div className="curriculum-cta">
            <p>Comece pelo fundamento e avance no seu ritmo.</p>
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">Quero começar agora <ArrowRight size={18} /></a>
          </div>
        </section>

        <section className="template-library-section">
          <div className="community-container template-library-layout">
            <div className="community-section-heading">
              <p>Biblioteca para praticar</p>
              <h2>Abra automações reais enquanto aprende.</h2>
              <span>Os templates conectam a teoria das aulas com problemas que aparecem em operações de verdade.</span>
              <Link to="/templates">Conhecer a biblioteca pública <ArrowRight size={17} /></Link>
            </div>

            <div className="included-template-list">
              {includedTemplates.map((template, index) => (
                <div key={template}><span>{String(index + 1).padStart(2, "0")}</span><strong>{template}</strong><Workflow size={17} /></div>
              ))}
            </div>
          </div>
        </section>

        <section className="community-container audience-section">
          <div className="community-section-heading">
            <p>Para quem é</p>
            <h2>Uma base para quem quer fazer, não apenas assistir.</h2>
          </div>
          <div className="audience-grid">
            <article><Code2 size={22} /><h3>Quem está começando</h3><p>Você quer entender a ferramenta sem pular os conceitos que sustentam um bom workflow.</p></article>
            <article><Zap size={22} /><h3>Profissionais de operação</h3><p>Você identifica tarefas repetitivas e quer transformar processos manuais em fluxos confiáveis.</p></article>
            <article><Database size={22} /><h3>Quem já usa n8n</h3><p>Você cria fluxos, mas precisa evoluir em APIs, dados, tratamento de erros e deploy.</p></article>
          </div>
        </section>

        <section className="community-faq-section">
          <div className="community-container community-faq-layout">
            <div className="community-section-heading">
              <p>Antes de entrar</p>
              <h2>Dúvidas frequentes.</h2>
            </div>
            <div className="community-faq-list">
              <details><summary>Preciso saber programar?</summary><p>Não. A trilha começa pelos fundamentos. Conhecimentos de lógica ajudam nos módulos avançados, mas são desenvolvidos ao longo dos projetos.</p></details>
              <details><summary>Por quanto tempo tenho acesso?</summary><p>O acesso às aulas é vitalício, permitindo rever os módulos e seguir no seu ritmo.</p></details>
              <details><summary>Os templates estão incluídos?</summary><p>Sim. O acesso apresentado nesta página inclui os projetos listados na biblioteca de prática.</p></details>
              <details><summary>Posso pedir reembolso?</summary><p>Sim. A compra possui garantia de sete dias, processada pela plataforma Hotmart.</p></details>
            </div>
          </div>
        </section>

        <section className="community-container community-offer">
          <div className="community-offer-copy">
            <p>n8n Fundamentos</p>
            <h2>Entre com uma trilha. Saia com automações funcionando.</h2>
            <div className="offer-includes">
              <span><CheckCircle2 size={17} /> 6 módulos e 6h+ de conteúdo</span>
              <span><CheckCircle2 size={17} /> Templates para praticar</span>
              <span><CheckCircle2 size={17} /> Comunidade e certificado</span>
              <span><CheckCircle2 size={17} /> Acesso vitalício</span>
            </div>
          </div>

          <aside className="offer-card">
            <span>Pagamento único</span>
            <strong>R$ 487</strong>
            <small>ou 12x de R$ 50,37 no cartão</small>
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer"><CreditCard size={19} /> Entrar na comunidade <ArrowRight size={18} /></a>
            <p><ShieldCheck size={16} /> Checkout seguro pela Hotmart</p>
            <div><InfinityIcon size={18} /><span><strong>Acesso vitalício</strong><small>e garantia de 7 dias</small></span></div>
          </aside>
        </section>
      </main>

      <div className="community-mobile-buy">
        <div><small>Pagamento único</small><strong>R$ 487</strong></div>
        <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">Entrar agora <ArrowRight size={18} /></a>
      </div>
    </div>
  );
};

export default AutomacaoN8n;
