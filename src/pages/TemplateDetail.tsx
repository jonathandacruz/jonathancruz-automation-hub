import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Clock, CheckCircle, Star, Play, ArrowLeft, Zap, Users, Code, Shield, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const TemplateDetail = () => {
  const { templateSlug } = useParams();
  const navigate = useNavigate();
  const [template, setTemplate] = useState<any>(null);

  const templates = [
    {
      id: 1,
      slug: "n8n-template-instagram",
      title: "Post Viral no Instagram",
      description: "Automatize a criação e publicação de posts virais no Instagram. Inclui análise de tendências, geração de conteúdo e agendamento automático.",
      category: "Social Media",
      difficulty: "Intermediário",
      downloads: 15,
      rating: 4.9,
      tags: ["Instagram", "API", "IA", "Viral"],
      featured: true,
      price: 37,
      link: "https://pay.hotmart.com/C101345009B",
      estimatedTime: "2-3 horas",
      complexity: "medium",
      youtubeId: "BRSAI3GOhWc",
      features: [
        "Análise automática de tendências do Instagram",
        "Geração de conteúdo com IA integrada",
        "Hashtags automáticas otimizadas",
      ],
      requirements: [
        "n8n instalado (versão 1.0+)",
        "Conta Instagram Business",
        "API do Instagram Graph",
        "Chave API do OpenAI"
      ]
    },
    {
      id: 2,
      slug: "n8n-robo-lotofacil",
      title: "Robô da Lotofácil",
      description: "Faz a conferência das apostas por jogador e envia notificação via Whatsapp com a quantidade de acertos",
      category: "Automação",
      difficulty: "Avançado",
      downloads: 36,
      rating: 4.8,
      tags: ["Banco de dados", "Whatsapp", "API", "Bot"],
      featured: true,
      price: 9.90,
      link: "https://pay.hotmart.com/V101159263W",
      estimatedTime: "4-5 horas",
      complexity: "medium",
      youtubeId: "ZWhc3MCFoAg",
      features: [
        "Análise estatística avançada dos resultados",
        "Bot no Whatsapp, intuitiva para configuração",
        "Notificações automáticas de resultados",
      ],
      requirements: [
        "n8n instalado",
        "RapidAPI API Key",
        "PostgreSQL"
      ]
    },
    {
      id: 3,
      slug: "n8n-template-stories",
      title: "Template para Stories do Instagram",
      description: "Crie e publique stories automáticos no Instagram com templates personalizáveis.",
      category: "Social Media",
      difficulty: "Iniciante",
      downloads: 25,
      rating: 4.9,
      tags: ["Stories", "Instagram", "Templates", "Automação"],
      featured: true,
      link: "https://pay.hotmart.com/H101450514K",
      price: 37,
      estimatedTime: "1-2 horas",
      complexity: "low",
      youtubeId: "gLTWIXa33WE",
      features: [
        "Templates pré-configurados para stories",
        "Personalização de cores e fontes",
        "Integração com banco de imagens"
      ],
      requirements: [
        "n8n instalado (versão 1.0+)",
        "Conta Instagram Business",
        "API do Instagram Graph",
        "Chave de API Replicate"
      ]
    },
    {
      id: 4,
      slug: "n8n-agente-ia-restaurante",
      title: "Agente de IA para Restaurantes",
      description: "Assistente virtual inteligente para restaurantes que gerencia pedidos, reservas, cardápio e atendimento ao cliente automaticamente.",
      category: "IA",
      difficulty: "Avançado",
      downloads: 350,
      rating: 4.7,
      tags: ["IA", "Restaurante", "Atendimento", "Pedidos"],
      featured: true,
      link: "https://pay.hotmart.com/G100538074I",
      price: 37,
      estimatedTime: "3-4 horas",
      complexity: "high",
      youtubeId: "j-OMUYNyG-I",
      features: [
        "Chatbot inteligente para WhatsApp",
        "Gestão automática de pedidos",
        "Gerador de PIX integrado",
        "Cardápio digital interativo",
      ],
      requirements: [
        "n8n instalado (versão 1.0+)",
        "Evolution API",
        "OpenAI API Key",
        "Sistema de pagamento (Asaas)"
      ]
    },
    {
      id: 5,
      slug: "n8n-gestao-cobrancas",
      title: "Implatação do módulo de gestão de cobranças",
      description: "Irei te auxiliar com a instalação do servidor e customização do espoCRM",
      category: "Automação",
      difficulty: "Avançado",
      downloads: 10,
      rating: 4.8,
      tags: ["Banco de dados", "Whatsapp", "API", "Bot"],
      featured: true,
      price: 149,
      link: "https://pay.hotmart.com/C101862756X",
      estimatedTime: "1 hora",
      complexity: "medium",
      youtubeId: "aKYfK7QHzQk",
      features: [
        "Cadastro de fornecedores e faturas",
        "Implantação do espoCRM",
        "Consultoria exclusiva comigo para instalação",
      ],
      requirements: [
        "n8n instalado",
        "espoCRM API Key",
        "Evolution API"
      ]
    },
    {
      id: 6,
      slug: "n8n-automacao-shopee",
      title: "n8n-Implatação de automação da Shopee",
      description: "Como automatizar o envio de ofertas de afiliados da shopee para seu telegram",
      category: "Automação",
      difficulty: "Avançado",
      downloads: 10,
      rating: 4.8,
      tags: ["Afiliados", "Renda Extra", "Telegram", "Bot"],
      featured: true,
      price: 37,
      link: "https://pay.hotmart.com/S102253215G",
      estimatedTime: "1 hora",
      complexity: "medium",
      youtubeId: "noIvjB5n--c",
      features: [
        "Autenticação segura com Shopee",
        "Busca de ofertas de afiliados",
        "Envio automático para Telegram",
      ],
      requirements: [
        "n8n instalado",
        "Shopee API Key",
        "Conta do Telegram"
      ]
    },
  ];

  useEffect(() => {
    const foundTemplate = templates.find(t => t.slug === templateSlug);
    setTemplate(foundTemplate);

    if (foundTemplate) {
      // SEO Meta Tags
      document.title = `Download ${foundTemplate.title} - Template n8n | R$ ${foundTemplate.price}`;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Download ${foundTemplate.title} - Template n8n pronto para instalação. ${foundTemplate.description} Por apenas R$ ${foundTemplate.price} com suporte e documentação incluídos.`);
      }

      // Structured Data for SEO
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": foundTemplate.title,
        "description": foundTemplate.description,
        "category": foundTemplate.category,
        "brand": {
          "@type": "Brand",
          "name": "n8n Templates"
        },
        "offers": {
          "@type": "Offer",
          "price": foundTemplate.price,
          "priceCurrency": "BRL",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "n8n Templates Brasil"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": foundTemplate.rating,
          "reviewCount": foundTemplate.downloads
        },
        "video": {
          "@type": "VideoObject",
          "name": `Como instalar ${foundTemplate.title} no n8n`,
          "description": `Tutorial completo de instalação e configuração do template ${foundTemplate.title} no n8n`,
          "thumbnailUrl": `https://img.youtube.com/vi/${foundTemplate.youtubeId}/maxresdefault.jpg`,
          "embedUrl": `https://www.youtube.com/embed/${foundTemplate.youtubeId}`
        },
        "downloadUrl": "#download",
        "applicationCategory": "AutomationSoftware"
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [templateSlug]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Intermediário": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Avançado": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default: return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Template não encontrado</h1>
          <p className="text-xl text-slate-400 mb-8">O template que você procura não existe.</p>
          <Link to="/templates">
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos Templates
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-primary selection:text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px]" />
      </div>

      {/* SEO Hidden H1 */}
      <h1 className="sr-only">Download {template.title} - Template n8n Premium para {template.category} - Arquivo pronto para instalação</h1>

      {/* Breadcrumb */}
      <nav className="pt-24 pb-8 px-4 lg:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Link to="/" className="hover:text-brand-primary transition-colors">Início</Link>
            <span>/</span>
            <Link to="/templates" className="hover:text-brand-primary transition-colors">Templates</Link>
            <span>/</span>
            <span className="text-white font-medium">{template.title}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 lg:px-6 pb-20 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/templates')}
              className="text-slate-400 hover:text-white hover:bg-white/5"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos Templates
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <header className="space-y-6 animate-fade-up">
                <div className="flex items-center gap-4 flex-wrap">
                  <Badge className={`${getDifficultyColor(template.difficulty)} font-medium px-3 py-1 border`}>
                    {template.difficulty}
                  </Badge>
                  <Badge className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 font-medium">
                    {template.category}
                  </Badge>
                  <div className="flex items-center gap-1 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
                    <Star className="h-3.5 w-3.5 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-yellow-500">{template.rating}</span>
                  </div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                  {template.title}
                </h2>

                <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Download className="h-5 w-5 text-green-400" />
                    </div>
                    <h3 className="font-bold text-green-400 text-lg">Template n8n Pronto para Uso</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Arquivo completo do template n8n para instalação imediata. Inclui workflow configurado, documentação e suporte técnico.
                  </p>
                </div>

                <p className="text-xl text-slate-400 leading-relaxed">
                  {template.description}
                </p>

                <div className="flex items-center gap-6 text-slate-400 border-y border-white/5 py-6">
                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-brand-primary" />
                    <span className="font-medium text-slate-300">{template.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-brand-secondary" />
                    <span className="font-medium text-slate-300">{template.estimatedTime}</span>
                  </div>
                </div>
              </header>

              {/* Video Demo */}
              <section className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="p-2 bg-brand-primary/20 rounded-lg">
                    <Play className="h-5 w-5 text-brand-primary" />
                  </div>
                  Como Instalar o Template
                </h3>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                  <iframe
                    src={`https://www.youtube.com/embed/${template.youtubeId}?rel=0&modestbranding=1`}
                    title={`Como instalar ${template.title} no n8n - Tutorial completo`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>

              {/* Features */}
              <section className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="p-2 bg-brand-secondary/20 rounded-lg">
                    <Zap className="h-5 w-5 text-brand-secondary" />
                  </div>
                  Funcionalidades
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {template.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Requirements */}
              <section className="space-y-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="p-2 bg-brand-accent/20 rounded-lg">
                    <Code className="h-5 w-5 text-brand-accent" />
                  </div>
                  Requisitos Técnicos
                </h3>
                <div className="space-y-3">
                  {template.requirements.map((requirement: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-brand-primary/5 rounded-xl border border-brand-primary/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                      <span className="text-slate-300 font-medium">{requirement}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tags */}
              <section className="space-y-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-xl font-bold text-white">Tecnologias</h3>
                <div className="flex flex-wrap gap-3">
                  {template.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/5 text-slate-300 rounded-full font-medium border border-white/10 hover:border-brand-primary/50 hover:text-brand-primary transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Purchase Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <Card className="bg-slate-900/50 backdrop-blur-xl border-white/10 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="pb-6 relative z-10">
                    <div className="text-center space-y-4">
                      <div className="text-5xl font-display font-bold text-white">
                        R$ {template.price}
                      </div>
                      <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">
                        Pagamento único • Acesso Vitalício
                      </div>
                      <a href={template.link} target="_blank" rel="noopener noreferrer" className="block">
                        <Button
                          size="lg"
                          className="w-full py-8 text-lg font-bold bg-brand-primary hover:bg-brand-secondary text-white shadow-glow hover:shadow-brand transition-all duration-300 hover:-translate-y-1 rounded-xl"
                        >
                          <Download className="h-5 w-5 mr-2" />
                          Baixar Agora
                        </Button>
                      </a>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 relative z-10">
                    <div className="space-y-4">
                      <h4 className="font-bold text-white flex items-center gap-2">
                        <Users className="h-5 w-5 text-brand-primary" />
                        O que você recebe:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          Arquivo .json do template
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          Manual de instalação PDF
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          Vídeo tutorial passo a passo
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          Suporte via WhatsApp
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          Atualizações gratuitas
                        </li>
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                        <Shield className="h-4 w-4 text-green-500" />
                        <span>Garantia de 30 dias ou seu dinheiro de volta</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Badges */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-xs text-slate-500">Compra Segura</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="text-xs text-slate-500">Entrega Imediata</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Star className="w-5 h-5 text-yellow-500" />
                    </div>
                    <span className="text-xs text-slate-500">Suporte VIP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TemplateDetail;