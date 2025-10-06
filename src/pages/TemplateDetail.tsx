import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ShoppingCart, Clock, CheckCircle, Star, Play, ArrowLeft, Zap, Users, Code } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { link } from "fs";

const TemplateDetail = () => {
  const { templateSlug } = useParams();
  const navigate = useNavigate();
  const [template, setTemplate] = useState(null);

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
      case "Iniciante": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Intermediário": return "bg-blue-50 text-blue-700 border-blue-200";
      case "Avançado": return "bg-purple-50 text-purple-700 border-purple-200";
      default: return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Template não encontrado</h1>
          <p className="text-xl text-slate-600 mb-8">O template que você procura não existe.</p>
          <Link to="/templates">
            <Button variant="outline" className="button-bounce">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos Templates
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Hidden H1 */}
      <h1 className="sr-only">Download {template.title} - Template n8n Premium para {template.category} - Arquivo pronto para instalação</h1>
      
      {/* Breadcrumb */}
      <nav className="pt-24 pb-8 px-4 lg:px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Início</Link>
            <span>/</span>
            <Link to="/templates" className="hover:text-blue-600 transition-colors">Templates</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{template.title}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 lg:px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/templates')}
              className="button-bounce"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos Templates
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <header className="space-y-6">
                <div className="flex items-center gap-4">
                  <Badge className={`${getDifficultyColor(template.difficulty)} font-medium px-3 py-1 border`}>
                    {template.difficulty}
                  </Badge>
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                    {template.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-slate-700">{template.rating}</span>
                  </div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Download {template.title}
                </h2>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Download className="h-5 w-5 text-green-600" />
                    <h3 className="font-bold text-green-800">Template n8n Pronto para Download</h3>
                  </div>
                  <p className="text-green-700">
                    Arquivo completo do template n8n para instalação imediata. Inclui workflow configurado, documentação e suporte técnico.
                  </p>
                </div>

                <p className="text-xl text-slate-600 leading-relaxed">
                  {template.description}
                </p>

                <div className="flex items-center gap-6 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">{template.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">{template.estimatedTime}</span>
                  </div>
                </div>
              </header>

              {/* Video Demo */}
              <section className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Play className="h-6 w-6 text-blue-600" />
                  Como Instalar o Template no n8n
                </h3>
                <p className="text-slate-600 mb-4">
                  Veja como fazer o download e instalar este template no seu n8n em poucos minutos.
                </p>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
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
              <section className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                  Funcionalidades Incluídas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {template.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Requirements */}
              <section className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Code className="h-6 w-6 text-blue-600" />
                  Requisitos Técnicos
                </h3>
                <div className="space-y-3">
                  {template.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-blue-800 font-medium">{requirement}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tags */}
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Tecnologias</h3>
                <div className="flex flex-wrap gap-3">
                  {template.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full font-medium border border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Purchase Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 pt-4">
                <Card className="border-2 border-slate-200 shadow-xl">
                  <CardHeader className="pb-6">
                    <div className="text-center space-y-4">
                      <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                        R$ {template.price}
                      </div>
                      <div className="text-sm text-slate-500 uppercase tracking-wider">
                        Pagamento único
                      </div>
                      <a href={template.link} target="_blank">
                      <Button 
                        size="lg" 
                        className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl button-gradient-shift"
                      >
                        
                        <Download className="h-5 w-5 mr-2" />
                        Download Template
                       
                      </Button>
                       </a>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        O que você recebe:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Arquivo .json do template n8n
                        </li>
                        <li className="flex items-center gap-3 text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Manual de instalação passo a passo
                        </li>
                        <li className="flex items-center gap-3 text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Tutorial em vídeo de configuração
                        </li>
                        <li className="flex items-center gap-3 text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Suporte via WhatsApp
                        </li>
                        <li className="flex items-center gap-3 text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Atualizações gratuitas
                        </li>
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Garantia de 30 dias</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TemplateDetail;