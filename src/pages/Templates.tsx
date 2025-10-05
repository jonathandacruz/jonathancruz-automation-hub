import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Download, ShoppingCart, Clock, CheckCircle, Eye, Code, Zap, Users } from "lucide-react";
import { useState, useEffect } from "react";

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

    // Meta tags for SEO
    document.title = "Templates n8n Premium - Automação Instagram, Lotofácil, Stories | R$ 37";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Templates profissionais n8n para automação do Instagram, robô da Lotofácil, stories automáticos e agente IA para restaurantes. Preço único R$ 37.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const keywords = document.createElement('meta');
      keywords.name = 'keywords';
      keywords.content = 'n8n templates, automação instagram, robot lotofacil, stories automaticos, agente ia restaurante, templates premium';
      document.head.appendChild(keywords);
    }

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const templates = [
    {
      id: 1,
      slug: "n8n-template-instagram",
      title: "n8n - Post Viral no Instagram",
      description: "Automatize a criação e publicação de posts virais no Instagram. Inclui análise de tendências, geração de conteúdo e agendamento automático.",
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
      title: "n8n - Robô da Lotofácil",
      description: "Sistema inteligente que analisa padrões da Lotofácil e sugere números baseado em estatísticas históricas e algoritmos preditivos.",
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
      title: "n8n - Template para Stories do Instagram",
      description: "Crie e publique stories automáticos no Instagram com templates personalizáveis, músicas e efeitos visuais incríveis.",
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
      title: "n8n - Agente de IA para Restaurantes",
      description: "Assistente virtual inteligente para restaurantes que gerencia pedidos, reservas, cardápio e atendimento ao cliente automaticamente.",
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
      title: "Implatação do módulo de gestão de cobranças",
      description: "Irei te auxiliar com a instalação do servidor e customização do espoCRM",
      category: "IA",
      difficulty: "Avançado",
      downloads: 10,
      rating: 4.9,
      tags: ["IA", "CRM", "n8n", "espoCRM"],
      featured: true,
      price: 149,
      estimatedTime: "1 hora",
      complexity: "high",
      buyLink: "https://pay.hotmart.com/C101862756X"
    },
    {
      id: 6,
      slug: "n8n-automacao-shopee",
      title: "n8n-Implatação de automação da Shopee",
      description: "Como automatizar o envio de ofertas de afiliados da shopee para seu telegram",
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
      case "Iniciante": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Intermediário": return "bg-blue-50 text-blue-700 border-blue-200";
      case "Avançado": return "bg-purple-50 text-purple-700 border-purple-200";
      default: return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "low": return "text-emerald-600";
      case "medium": return "text-blue-600";
      case "high": return "text-purple-600";
      default: return "text-slate-600";
    }
  };

  // Filter templates based on selected category
  const filteredTemplates = selectedCategory === "Todos" 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Hidden H1 */}
      <h1 className="sr-only">Templates Premium n8n - Automação Instagram, Lotofácil, Stories e IA para Restaurantes</h1>
      
      {/* Hero Section */}
      <header className="pt-24 pb-16 px-4 lg:px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <Badge className="mb-8 px-6 py-2 bg-blue-100 text-blue-700 border-blue-200 text-base font-medium">
            Templates Premium n8n
          </Badge>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-slate-900 leading-tight tracking-tight">
            Templates de{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text">
              Automação
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Transforme sua produtividade com automações profissionais para n8n. 
            <br className="hidden md:block" />
            Templates testados, documentados e otimizados para máximo desempenho.
          </p>
          
          
        </div>
      </header>

      {/* Templates Grid */}
      <main className="py-20 px-4 lg:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  category === selectedCategory 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-800 hover:to-purple-800 text-white button-pulse" 
                    : "border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 button-bounce"
                }`}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredTemplates.map((template, index) => (
              <article key={template.id} className="group border-slate-200 hover:border-blue-300 bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01] overflow-hidden rounded-xl border-2">
                {/* Card Header */}
                <CardHeader className="pb-4 space-y-4">
                  {/* Top Row - Badges */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Badge className={`${getDifficultyColor(template.difficulty)} font-medium px-3 py-1 border`}>
                        {template.difficulty}
                      </Badge>
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                        {template.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">#{index + 1}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <CardTitle className="text-2xl lg:text-3xl text-slate-900 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                    {template.title}
                  </CardTitle>

                  {/* Description */}
                  <CardDescription className="text-base leading-relaxed text-slate-600">
                    {template.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm rounded-full font-medium border border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Download className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">{template.downloads.toLocaleString()} downloads</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span className={`text-sm font-medium ${getComplexityColor(template.complexity)}`}>
                        {template.estimatedTime}
                      </span>
                    </div>
                  </div>

                  {/* Modern Pricing Section */}
                  <div className="space-y-6 pt-6 border-t border-slate-200/80">
                    {/* Price Card */}
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-6 border border-slate-200/60">
                      <div className="text-center space-y-3">
                        <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text">
                          R$ {template.price}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 font-medium px-3 py-1">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Preço único
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Acesso completo + documentação + suporte
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant="outline" 
                        className="flex-1 sm:flex-none px-6 py-3 rounded-xl border-slate-300 text-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-700 transition-all duration-300 button-glow"
                        onClick={() => navigate(`/templates/${template.slug}`)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Detalhes
                      </Button>
                      
                      <Button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 button-gradient-shift" asChild>
                        <a href={template.buyLink} target="_blank" rel="noopener noreferrer">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Comprar Agora
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 px-4 lg:px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-12 text-slate-900">
            Por que escolher nossos templates?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900">100% Funcionais</h4>
              <p className="text-slate-600 leading-relaxed">
                Todos os templates são testados e validados antes da publicação
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900">Fácil Instalação</h4>
              <p className="text-slate-600 leading-relaxed">
                Importe diretamente no n8n e comece a usar em minutos
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900">Suporte Premium</h4>
              <p className="text-slate-600 leading-relaxed">
                Documentação completa e suporte direto via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 lg:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3),transparent_70%)]"></div>
        
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Pronto para Automatizar Hoje?
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
            Transforme sua produtividade com automações profissionais. Todos os templates são disponibilizados de forma gratuita na comunidade n8n.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-blue-300">4+</div>
              <div className="text-slate-300 font-medium">Templates</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-purple-300">24h</div>
              <div className="text-slate-300 font-medium">Suporte</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-emerald-300">100%</div>
              <div className="text-slate-300 font-medium">Funcionais</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-10 py-4 rounded-xl shadow-2xl button-pulse">
              <ShoppingCart className="mr-3 h-5 w-5" />
              <a href="/automacao-n8n" target="_blank" rel="noopener noreferrer">
                         
                          Comunidade n8n
                        </a>
            </Button>
            <Button  variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-xl backdrop-blur-sm button-magnetic">
              <Zap className="mr-3 h-5 w-5" />
              <a href="/contato" target="_blank" rel="noopener noreferrer">
                         
                          Fale Comigo
                        </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Templates;