import Seo from "@/components/Seo";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  Database,
  MessageCircle,
  Play,
  Quote,
  Sparkles,
  Users,
  Workflow,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const stats = [
  { value: "6 mil+", label: "pessoas aprendendo" },
  { value: "100+", label: "automações entregues" },
  { value: "5,0", label: "avaliação da comunidade" },
];

const paths = [
  {
    icon: Users,
    title: "Aprenda com acompanhamento",
    description:
      "Entre na comunidade, siga trilhas objetivas e tire dúvidas enquanto constrói automações que resolvem problemas reais.",
    link: "/automacao-n8n",
    linkLabel: "Conhecer a comunidade",
    tag: "Comunidade n8n",
  },
  {
    icon: BookOpen,
    title: "Comece com fluxos testados",
    description:
      "Use templates prontos como ponto de partida e adapte integrações de WhatsApp, planilhas, APIs e IA ao seu cenário.",
    link: "/templates",
    linkLabel: "Explorar templates",
    tag: "Biblioteca prática",
  },
  {
    icon: Workflow,
    title: "Automatize sua operação",
    description:
      "Mapeamos o processo, conectamos suas ferramentas e colocamos o fluxo em produção com segurança e documentação.",
    link: "/contato",
    linkLabel: "Falar sobre meu projeto",
    tag: "Consultoria",
  },
];

const Home = () => {
  return (
    <div className="home-shell min-h-screen overflow-hidden">
      <Seo
        title="Automação n8n e Consultoria | Jonathan da Cruz"
        description="Especialista em automação com n8n. Conecte sistemas, elimine tarefas repetitivas e aumente produtividade com consultoria e templates prontos."
        keywords={[
          "n8n",
          "automação",
          "automação de processos",
          "automação n8n",
          "integração de sistemas",
          "workflows automatizados",
          "automação empresarial",
          "consultoria n8n",
          "templates n8n",
        ]}
      />

      <section className="hero-grid relative border-b border-white/10 pt-32 lg:pt-40">
        <div className="home-container grid min-h-[760px] items-center gap-16 pb-16 lg:grid-cols-[1.02fr_.98fr] lg:pb-24">
          <div className="hero-copy relative z-10 max-w-3xl">
            <div className="hero-kicker">
              <span className="status-dot" />
              n8n na prática, do primeiro fluxo à escala
            </div>

            <h1 className="mt-7 font-display text-[clamp(3.25rem,7vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.055em] text-white">
              Faça o trabalho
              <span className="block text-slate-400">andar sozinho.</span>
            </h1>

            <p className="mt-8 max-w-[620px] text-lg leading-relaxed text-slate-300 sm:text-xl">
              Aprenda, implemente e escale automações com n8n. Menos tarefas
              repetitivas, mais tempo para as decisões que movem o negócio.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link className="primary-action" to="/automacao-n8n">
                Entrar na comunidade
                <ArrowRight aria-hidden="true" size={19} />
              </Link>
              <Link className="secondary-action" to="/templates">
                Ver templates prontos
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="text-cyan-300" size={17} />
                Aplicação direta
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="text-cyan-300" size={17} />
                Suporte em português
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="text-cyan-300" size={17} />
                Fluxos documentados
              </span>
            </div>
          </div>

          <div className="workflow-stage" aria-label="Exemplo visual de um fluxo automatizado">
            <div className="stage-grid" />
            <div className="stage-status">
              <span className="status-dot" /> fluxo em execução
            </div>

            <svg className="flow-lines" viewBox="0 0 620 650" aria-hidden="true">
              <path d="M80 170 C220 170 168 290 320 290" />
              <path d="M320 290 C455 290 408 430 555 430" />
              <circle cx="80" cy="170" r="4" />
              <circle cx="320" cy="290" r="4" />
              <circle cx="555" cy="430" r="4" />
            </svg>

            <div className="flow-node node-input">
              <MessageCircle size={18} />
              <span><small>Entrada</small>Nova mensagem</span>
              <i className="node-check"><Check size={12} /></i>
            </div>
            <div className="flow-node node-agent">
              <Bot size={19} />
              <span><small>Processamento</small>Agente de IA</span>
              <i className="node-check"><Check size={12} /></i>
            </div>
            <div className="flow-node node-output">
              <Database size={18} />
              <span><small>Saída</small>CRM atualizado</span>
              <i className="node-live" />
            </div>

            <div className="portrait-halo" />
            <img
              className="hero-portrait"
              src="/lovable-uploads/logo-compiled.png"
              alt="Jonathan da Cruz, especialista em automação n8n"
            />
            <div className="stage-caption">
              <span>Jonathan da Cruz</span>
              <small>Especialista em automação</small>
            </div>
          </div>
        </div>

        <div className="home-container stats-rail">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
          <div className="stat-context">
            Conteúdo e soluções para quem quer transformar processos em sistemas
            que realmente funcionam.
          </div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="paths-title">
        <div className="home-container">
          <div className="section-heading">
            <p>Escolha seu ponto de partida</p>
            <h2 id="paths-title">Uma rota para cada momento da sua automação.</h2>
          </div>

          <div className="path-list mt-14">
            {paths.map((path, index) => {
              const Icon = path.icon;
              return (
                <article className="path-row" key={path.title}>
                  <div className="path-index">0{index + 1}</div>
                  <div className="path-icon"><Icon size={24} /></div>
                  <div className="path-content">
                    <span>{path.tag}</span>
                    <h3>{path.title}</h3>
                    <p>{path.description}</p>
                  </div>
                  <Link className="path-link" to={path.link}>
                    {path.linkLabel}
                    <ChevronRight aria-hidden="true" size={19} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="home-container grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="section-label">Da ideia à rotina</p>
            <h2 id="process-title" className="mt-5 max-w-md font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Automação boa começa antes do primeiro nó.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-400">
              A ferramenta é só parte da solução. O fluxo precisa nascer de um
              processo claro, ser testado e continuar compreensível depois que
              entra em produção.
            </p>
          </div>

          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>Mapeie o trabalho real</h3>
                <p>Identifique entradas, decisões, exceções e o resultado que precisa ser entregue.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Conecte só o necessário</h3>
                <p>Construa um fluxo simples de entender, com credenciais seguras e tratamento de falhas.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Meça e melhore</h3>
                <p>Acompanhe execuções, corrija gargalos e evolua a automação conforme a operação muda.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="proof-section home-section" aria-label="Resultados e conteúdo">
        <div className="home-container grid gap-6 lg:grid-cols-[1.12fr_.88fr]">
          <article className="testimonial-panel">
            <Quote size={34} aria-hidden="true" />
            <blockquote>
              “Em duas semanas publiquei quatro automações no trabalho e reduzi
              tarefas repetitivas em 60%.”
            </blockquote>
            <footer>
              <span>Ricardo Silva</span>
              <small>Product Manager e aluno da comunidade</small>
            </footer>
          </article>

          <article className="youtube-panel">
            <div>
              <Youtube size={36} aria-hidden="true" />
              <span>Conteúdo aberto</span>
            </div>
            <h2>Veja uma automação sendo construída, não só explicada.</h2>
            <p>Vídeos práticos sobre n8n, integrações, agentes de IA e os bastidores de fluxos reais.</p>
            <a
              href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play size={17} fill="currentColor" />
              Assistir no YouTube
            </a>
          </article>
        </div>
      </section>

      <section className="home-container pb-24 pt-8 sm:pb-32">
        <div className="final-cta">
          <Sparkles aria-hidden="true" size={28} />
          <div>
            <h2>Seu próximo processo pode rodar sem você.</h2>
            <p>Conte onde sua operação trava. Eu ajudo a transformar esse trabalho manual em um fluxo confiável.</p>
          </div>
          <Link to="/contato">
            Conversar sobre automação
            <ArrowRight aria-hidden="true" size={19} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
