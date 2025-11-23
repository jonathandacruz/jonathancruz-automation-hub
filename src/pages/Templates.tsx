import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Download, ShoppingCart, Clock, CheckCircle, Eye, Code, Zap, Users, Star, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Seo from "@/components/Seo";

const Templates = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // SEO structured data
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Templates de Automação n8n",
      "description": "Templates profissionais para n8n - Automatize Instagram, Lotofácil, Stories e Restaurantes",
      "numberOfItems": 4,
      "itemListElement": templates.map((template, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": template.title,
        "description": template.description,
        "category": template.category,
        "offers": {
          "@type": "Offer",
          "price": template.price,
          "priceCurrency": "BRL",
          "availability": "https://schema.org/InStock"
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const templates = [
    {
      id: 1,
      slug: "n8n-template-instagram",
      title: "Post Viral no Instagram",
      description: "Automatize a criação e publicação de posts virais. Inclui análise de tendências, geração de conteúdo e agendamento.",
      category: "Social Media",
      difficulty: "Intermediário",
      downloads: 15,
      rating: 4.9,
      tags: ["Instagram", "API", "IA", "Viral"],
      featured: true,
      price: 37,
      estimatedTime: "2-3 horas",
      complexity: "medium",
      buyLink: "https://pay.hotmart.com/C101345009B"
    },
    {
      id: 2,
      slug: "n8n-robo-lotofacil",
      title: "Robô da Lotofácil",
      description: "Sistema inteligente que analisa padrões e sugere números baseado em estatísticas históricas e algoritmos preditivos.",
      category: "Automação",
      difficulty: "Avançado",
      downloads: 36,
      rating: 4.8,
      tags: ["Lotofácil", "Análise", "Estatística", "Bot"],
      featured: true,
      price: 9.99,
      estimatedTime: "4-5 horas",
      complexity: "high",
      buyLink: "https://pay.hotmart.com/V101159263W"
    },
    {
      id: 3,
      slug: "n8n-template-stories",
      title: "Stories Automáticos",
      description: "Crie e publique stories no Instagram com templates personalizáveis, músicas e efeitos visuais incríveis.",
      category: "Social Media",
      difficulty: "Iniciante",
      downloads: 25,
      rating: 4.9,
      tags: ["Stories", "Instagram", "Templates", "Automação"],
      featured: true,
      price: 37,
      estimatedTime: "1-2 horas",
      complexity: "low",
      buyLink: "https://pay.hotmart.com/H101450514K"
    },
    {
      id: 4,
      slug: "n8n-agente-ia-restaurante",
      title: "Agente IA para Restaurantes",
      description: "Assistente virtual que gerencia pedidos, reservas, cardápio e atendimento ao cliente automaticamente.",
      category: "IA",
      difficulty: "Avançado",
      downloads: 350,
      rating: 4.7,
      tags: ["IA", "Restaurante", "Atendimento", "Pedidos"],
      featured: true,
      price: 37,
      estimatedTime: "3-4 horas",
      complexity: "high",
      buyLink: "https://pay.hotmart.com/G100538074I"
    },
    {
      id: 5,
      slug: "n8n-gestao-cobrancas",
      title: "Gestão de Cobranças",
      description: "Implantação completa do módulo de gestão de cobranças com instalação do servidor e customização do EspoCRM.",
      category: "IA",
      difficulty: "Avançado",
      downloads: 10,
      rating: 4.9,
      tags: ["IA", "CRM", "n8n", "EspoCRM"],
      featured: true,
      price: 149,
      estimatedTime: "1 hora",
      complexity: "high",
      buyLink: "https://pay.hotmart.com/C101862756X"
    },
    {
      id: 6,
      slug: "n8n-automacao-shopee",
      title: "Automação Shopee",
      description: "Automatize o envio de ofertas de afiliados da Shopee diretamente para seu canal ou grupo do Telegram.",
      category: "IA",
      difficulty: "Avançado",
      downloads: 10,
      rating: 4.9,
      tags: ["IA", "Shopee", "n8n", "Afiliados"],
      featured: true,
      price: 37,
      estimatedTime: "1 hora",
      complexity: "high",
      buyLink: "https://pay.hotmart.com/S102253215G"
    }
  ];

  const categories = ["Todos", "Social Media", "Automação", "IA"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Intermediário": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Avançado": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default: return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  const filteredTemplates = selectedCategory === "Todos"
    ? templates
    : templates.filter(template => template.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Seo
        title="Templates n8n Premium | Jonathan da Cruz"
        description="Templates profissionais para n8n. Automatize Instagram, CRM, Vendas e muito mais com fluxos prontos e testados."
        keywords={["n8n templates", "automação n8n", "workflows n8n", "bot instagram", "automação whatsapp"]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse-soft" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-brand-primary shadow-glow mb-8 animate-fade-up">
            <Code className="w-4 h-4 fill-brand-primary" />
            <span>Biblioteca Premium</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 leading-tight tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Templates de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary">
              Alta Performance
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Economize horas de desenvolvimento com fluxos prontos, testados e documentados.
            Acelere seus resultados com a qualidade que você precisa.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${category === selectedCategory
                    ? "bg-brand-primary text-white border-brand-primary shadow-glow"
                    : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="pb-32 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template, index) => (
              <div
                key={template.id}
                className="group relative bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-1 hover:bg-card/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/10 animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                <div className="bg-card/90 rounded-[22px] p-6 h-full flex flex-col relative overflow-hidden">
                  {/* Top Badges */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(template.difficulty)}`}>
                        {template.difficulty}
                      </span>
                    </div>
                    {template.featured && (
                      <div className="flex items-center gap-1 text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-full text-xs font-medium border border-yellow-500/20">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Destaque</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="mb-6 flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                      {template.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {template.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-white/5">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Download className="w-4 h-4 text-brand-primary" />
                      <span>{template.downloads} vendas</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Clock className="w-4 h-4 text-brand-secondary" />
                      <span>{template.estimatedTime}</span>
                    </div>
                  </div>

                  {/* Footer & Price */}
                  <div className="flex items-end justify-between gap-4 mt-auto">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Investimento único</p>
                      <div className="text-2xl font-bold text-white">
                        R$ {template.price}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-xl hover:bg-white/10 hover:text-white text-slate-400"
                        onClick={() => navigate(`/templates/${template.slug}`)}
                      >
                        <Eye className="w-5 h-5" />
                      </Button>
                      <a href={template.buyLink} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-brand-primary hover:bg-brand-secondary text-white rounded-xl shadow-glow hover:shadow-brand transition-all">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Comprar
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card/30 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              Por que escolher nossos templates?
            </h2>
            <p className="text-slate-400 text-lg">
              Qualidade garantida para você escalar suas automações com segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<CheckCircle className="w-8 h-8 text-emerald-500" />}
              title="100% Funcionais"
              description="Todos os templates são testados exaustivamente e validados em produção antes da publicação."
            />
            <BenefitCard
              icon={<Zap className="w-8 h-8 text-brand-primary" />}
              title="Instalação Rápida"
              description="Copie e cole o JSON diretamente no seu n8n. Configuração simples e documentada."
            />
            <BenefitCard
              icon={<Users className="w-8 h-8 text-brand-secondary" />}
              title="Suporte Dedicado"
              description="Dúvidas na implementação? Nosso suporte técnico está pronto para te ajudar."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />

        <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight">
            Precisa de algo <span className="text-brand-primary">personalizado</span>?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            Desenvolvemos soluções sob medida para o seu negócio. Entre em contato para uma consultoria.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/contato">
              <Button className="w-full sm:w-auto bg-brand-primary hover:bg-brand-secondary text-white px-10 py-6 text-lg rounded-xl shadow-glow hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
                Fale com Especialista
              </Button>
            </a>
            <a href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto border-white/10 bg-white/5 hover:bg-white/10 text-white px-10 py-6 text-lg rounded-xl backdrop-blur-sm">
                Ver Tutoriais Grátis
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 group text-center">
    <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

export default Templates;