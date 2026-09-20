import Seo from "@/components/Seo";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Download,
  Filter,
  Headphones,
  PlayCircle,
  ShieldCheck,
  Star,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Templates.css";

type TemplateItem = {
  id: number;
  slug: string;
  title: string;
  outcome: string;
  description: string;
  category: "Social Media" | "Automação" | "IA";
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  downloads: number;
  rating: number;
  tags: string[];
  price: number;
  estimatedTime: string;
};

const templates: TemplateItem[] = [
  {
    id: 1,
    slug: "n8n-template-instagram",
    title: "Post viral no Instagram",
    outcome: "Transforme tendências em posts sem repetir o processo manual todos os dias.",
    description: "Análise de tendências, geração de conteúdo com IA, hashtags e agendamento reunidos em um único fluxo.",
    category: "Social Media",
    difficulty: "Intermediário",
    downloads: 15,
    rating: 4.9,
    tags: ["Instagram", "API", "IA"],
    price: 37,
    estimatedTime: "2–3 horas",
  },
  {
    id: 2,
    slug: "n8n-robo-lotofacil",
    title: "Robô da Lotofácil",
    outcome: "Confira apostas por jogador e envie os resultados automaticamente pelo WhatsApp.",
    description: "Fluxo para consultar resultados, processar apostas e avisar cada participante sobre a quantidade de acertos.",
    category: "Automação",
    difficulty: "Avançado",
    downloads: 36,
    rating: 4.8,
    tags: ["WhatsApp", "PostgreSQL", "API"],
    price: 9.9,
    estimatedTime: "4–5 horas",
  },
  {
    id: 3,
    slug: "n8n-template-stories",
    title: "Stories automáticos",
    outcome: "Crie e publique stories com consistência sem montar cada conteúdo do zero.",
    description: "Templates configuráveis, personalização visual, banco de imagens e publicação automatizada no Instagram.",
    category: "Social Media",
    difficulty: "Iniciante",
    downloads: 25,
    rating: 4.9,
    tags: ["Stories", "Instagram", "Replicate"],
    price: 37,
    estimatedTime: "1–2 horas",
  },
  {
    id: 4,
    slug: "n8n-agente-ia-restaurante",
    title: "Agente de IA para restaurantes",
    outcome: "Atenda clientes, receba pedidos e organize reservas mesmo com a equipe ocupada.",
    description: "Assistente integrado ao WhatsApp para atendimento, cardápio, pedidos, reservas e pagamentos via PIX.",
    category: "IA",
    difficulty: "Avançado",
    downloads: 350,
    rating: 4.7,
    tags: ["WhatsApp", "OpenAI", "Pedidos"],
    price: 37,
    estimatedTime: "3–4 horas",
  },
  {
    id: 5,
    slug: "n8n-gestao-cobrancas",
    title: "Gestão de cobranças com EspoCRM",
    outcome: "Centralize fornecedores e faturas em uma operação de cobrança organizada.",
    description: "Implantação do módulo de cobranças com instalação, configuração e customização do EspoCRM.",
    category: "Automação",
    difficulty: "Avançado",
    downloads: 10,
    rating: 4.8,
    tags: ["EspoCRM", "WhatsApp", "Banco de dados"],
    price: 149,
    estimatedTime: "1 hora",
  },
  {
    id: 6,
    slug: "n8n-automacao-shopee",
    title: "Automação de afiliados Shopee",
    outcome: "Construa uma operação confiável para capturar, organizar e selecionar ofertas.",
    description: "Stack com n8n, API, workers, PostgreSQL e Grafana para trabalhar com feeds e regras comerciais da Shopee.",
    category: "Automação",
    difficulty: "Avançado",
    downloads: 78,
    rating: 4.9,
    tags: ["Shopee", "Docker", "Grafana"],
    price: 99,
    estimatedTime: "2 horas",
  },
];

const categories = ["Todos", "Social Media", "Automação", "IA"] as const;
type Category = (typeof categories)[number];

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

const Templates = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Templates de automação n8n",
      description: "Templates e sistemas de automação para n8n com documentação e suporte.",
      numberOfItems: templates.length,
      itemListElement: templates.map((template, index) => ({
        "@type": "Product",
        position: index + 1,
        name: template.title,
        description: template.description,
        category: template.category,
        url: `/templates/${template.slug}`,
        offers: {
          "@type": "Offer",
          price: template.price,
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  const filteredTemplates = selectedCategory === "Todos"
    ? templates
    : templates.filter((template) => template.category === selectedCategory);
  const featuredTemplate = filteredTemplates.find((template) => template.slug === "n8n-automacao-shopee");
  const regularTemplates = filteredTemplates.filter((template) => template.slug !== "n8n-automacao-shopee");

  return (
    <div className="templates-page">
      <Seo
        title="Templates n8n | Jonathan da Cruz"
        description="Compare templates profissionais para n8n, veja demonstrações, requisitos e escolha a automação certa para seu projeto."
        keywords={["n8n templates", "automação n8n", "workflows n8n", "templates automação"]}
      />

      <div className="templates-grid-bg" aria-hidden="true" />

      <main>
        <section className="catalog-container catalog-hero">
          <div>
            <p className="catalog-kicker"><Workflow size={18} /> Biblioteca de automações</p>
            <h1>Encontre o fluxo certo antes de comprar.</h1>
            <p className="catalog-intro">
              Compare o resultado, os requisitos e o nível técnico. Cada página de
              produto mostra o funcionamento, a instalação e tudo o que está incluído.
            </p>
          </div>

          <aside className="choice-guide" aria-label="Como escolher um template">
            <p>Como escolher</p>
            <ol>
              <li><span>1</span><div><strong>Comece pelo resultado</strong><small>O que você quer deixar de fazer manualmente?</small></div></li>
              <li><span>2</span><div><strong>Confira os requisitos</strong><small>Veja as contas, APIs e conhecimentos necessários.</small></div></li>
              <li><span>3</span><div><strong>Abra os detalhes</strong><small>Assista à demonstração antes de decidir.</small></div></li>
            </ol>
          </aside>
        </section>

        <section className="catalog-container catalog-section" aria-labelledby="catalog-title">
          <div className="catalog-toolbar">
            <div>
              <Filter size={17} />
              <span id="catalog-title">{filteredTemplates.length} {filteredTemplates.length === 1 ? "template encontrado" : "templates encontrados"}</span>
            </div>
            <div className="category-filter" aria-label="Filtrar templates por categoria">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {featuredTemplate && <FeaturedTemplate template={featuredTemplate} />}

          <div className="template-catalog">
            {regularTemplates.map((template, index) => (
              <Link
                key={template.id}
                to={`/templates/${template.slug}`}
                className="template-catalog-row"
                aria-label={`Ver detalhes do template ${template.title}`}
              >
                <span className="template-number">{String(index + (featuredTemplate ? 2 : 1)).padStart(2, "0")}</span>

                <div className="template-main">
                  <div className="template-badges">
                    <span>{template.category}</span>
                    <span data-level={template.difficulty}>{template.difficulty}</span>
                    <span><Star size={13} fill="currentColor" /> {template.rating}</span>
                  </div>
                  <h2>{template.title}</h2>
                  <p className="template-outcome">{template.outcome}</p>
                  <p className="template-description">{template.description}</p>
                  <div className="template-tags">
                    {template.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>

                <div className="template-side">
                  <div className="template-stats">
                    <span><Download size={16} /> {template.downloads} downloads</span>
                    <span><Clock3 size={16} /> {template.estimatedTime}</span>
                  </div>
                  <div className="template-price">
                    <small>Pagamento único</small>
                    <strong>{currency.format(template.price)}</strong>
                  </div>
                  <span className="detail-action">Ver detalhes do template <ArrowRight size={18} /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="catalog-confidence">
          <div className="catalog-container">
            <div className="confidence-heading">
              <p>Decida com contexto</p>
              <h2>Você sabe o que está comprando antes de chegar ao checkout.</h2>
            </div>
            <div className="confidence-list">
              <div><PlayCircle size={23} /><span><strong>Demonstração em vídeo</strong><small>Veja o fluxo funcionando e entenda a lógica.</small></span></div>
              <div><CheckCircle2 size={23} /><span><strong>Entregáveis claros</strong><small>Confira arquivos, documentação e materiais incluídos.</small></span></div>
              <div><ShieldCheck size={23} /><span><strong>Requisitos visíveis</strong><small>Saiba o que precisa configurar antes da compra.</small></span></div>
              <div><Headphones size={23} /><span><strong>Suporte informado</strong><small>Entenda como funciona o auxílio de instalação.</small></span></div>
            </div>
          </div>
        </section>

        <section className="catalog-container catalog-custom-cta">
          <div>
            <p>Não encontrou o fluxo certo?</p>
            <h2>Vamos mapear uma automação para o seu processo.</h2>
          </div>
          <Link to="/contato">Falar sobre meu projeto <ArrowRight size={18} /></Link>
        </section>
      </main>
    </div>
  );
};

const FeaturedTemplate = ({ template }: { template: TemplateItem }) => (
  <Link
    to={`/templates/${template.slug}`}
    className="featured-template"
    aria-label={`Ver detalhes do template em destaque ${template.title}`}
  >
    <div className="featured-template-main">
      <p className="featured-label"><Star size={15} fill="currentColor" /> Destaque da biblioteca</p>
      <div className="template-badges">
        <span>{template.category}</span>
        <span data-level={template.difficulty}>{template.difficulty}</span>
        <span><Star size={13} fill="currentColor" /> {template.rating}</span>
      </div>
      <h2>{template.title}</h2>
      <p className="featured-outcome">{template.outcome}</p>
      <p className="featured-description">{template.description}</p>
      <div className="template-tags">
        {template.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </div>

    <aside className="featured-template-side">
      <div className="featured-package">
        <p>Visão do pacote</p>
        <div><strong>9</strong><span>serviços no Compose</span></div>
        <div><strong>13</strong><span>workflows n8n</span></div>
        <div><strong>3</strong><span>modos de carga</span></div>
      </div>

      <div className="featured-commercial">
        <div className="template-stats">
          <span><Download size={16} /> {template.downloads} downloads</span>
          <span><Clock3 size={16} /> {template.estimatedTime}</span>
        </div>
        <div className="template-price">
          <small>Pagamento único</small>
          <strong>{currency.format(template.price)}</strong>
        </div>
        <span className="featured-detail-action">Conhecer o template completo <ArrowRight size={18} /></span>
      </div>
    </aside>
  </Link>
);

export default Templates;
