import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, Star, ShoppingCart, Clock, CheckCircle, Eye, X } from "lucide-react";
import { useState } from "react";

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const templates = [
    {
      id: 1,
      title: "n8n - Post Viral no Instagram",
      description: "Automatize a criação e publicação de posts virais no Instagram. Inclui análise de tendências, geração de conteúdo e agendamento automático.",
      category: "Social Media",
      difficulty: "Intermediário",
      downloads: 2150,
      rating: 4.9,
      tags: ["Instagram", "API", "IA", "Viral"],
      featured: true,
      price: 37,
      estimatedTime: "2-3 horas",
      complexity: "medium"
    },
    {
      id: 2,
      title: "N8n - Robô da Lotofácil",
      description: "Sistema inteligente que analisa padrões da Lotofácil e sugere números baseado em estatísticas históricas e algoritmos preditivos.",
      category: "Automação",
      difficulty: "Avançado",
      downloads: 1890,
      rating: 4.8,
      tags: ["Lotofácil", "Análise", "Estatística", "Bot"],
      featured: true,
      price: 37,
      estimatedTime: "4-5 horas",
      complexity: "high"
    },
    {
      id: 3,
      title: "n8n - Template para Stories do Instagram",
      description: "Crie e publique stories automáticos no Instagram com templates personalizáveis, músicas e efeitos visuais incríveis.",
      category: "Social Media",
      difficulty: "Iniciante",
      downloads: 3250,
      rating: 4.9,
      tags: ["Stories", "Instagram", "Templates", "Automação"],
      featured: true,
      price: 37,
      estimatedTime: "1-2 horas",
      complexity: "low"
    },
    {
      id: 4,
      title: "n8n - Agente de IA para Restaurantes",
      description: "Assistente virtual inteligente para restaurantes que gerencia pedidos, reservas, cardápio e atendimento ao cliente automaticamente.",
      category: "IA",
      difficulty: "Avançado",
      downloads: 1120,
      rating: 4.7,
      tags: ["IA", "Restaurante", "Atendimento", "Pedidos"],
      featured: true,
      price: 37,
      estimatedTime: "3-4 horas",
      complexity: "high"
    }
  ];

  const categories = ["Todos", "Social Media", "Automação", "IA"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante": return "bg-slate-100 text-slate-700 border-slate-200";
      case "Intermediário": return "bg-slate-200 text-slate-700 border-slate-300";
      case "Avançado": return "bg-slate-300 text-slate-800 border-slate-400";
      default: return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "low": return "text-slate-600";
      case "medium": return "text-slate-700";
      case "high": return "text-slate-800";
      default: return "text-slate-600";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-6 bg-slate-50 relative">
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <Badge className="mb-8 px-6 py-2 bg-slate-200 text-slate-700 border-slate-300 text-base font-medium">
            Templates Premium n8n
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-slate-900 leading-tight tracking-tight">
            Templates de{" "}
            <span className="text-slate-700">
              Automação
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Transforme sua produtividade com automações profissionais. 
            <br className="hidden md:block" />
            Templates testados e otimizados para máximo desempenho.
          </p>
          
          <div className="flex justify-center">
            <Button size="lg" className="px-10 py-4 text-lg font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-white">
              <ShoppingCart className="mr-3 h-5 w-5" />
              Ver Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20 px-4 lg:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              Templates Disponíveis
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Cada template é cuidadosamente desenvolvido para entregar resultados reais
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="rounded-full px-6 py-2 font-medium bg-slate-900 hover:bg-slate-800 text-white border-slate-300 hover:border-slate-400"
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {templates.map((template) => (
              <Card key={template.id} className="group border-slate-200 hover:border-slate-300 bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] overflow-hidden">
                {/* Card Header */}
                <CardHeader className="pb-4 space-y-4">
                  {/* Top Row - Badges and Rating */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Badge className={`${getDifficultyColor(template.difficulty)} font-medium px-3 py-1 border`}>
                        {template.difficulty}
                      </Badge>
                      <Badge className="bg-slate-100 text-slate-700 border-slate-200 font-medium">
                        {template.category}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-slate-400 text-slate-400" />
                      <span className="text-sm font-bold text-slate-900">{template.rating}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <CardTitle className="text-2xl lg:text-3xl text-slate-900 leading-tight">
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
                        className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full font-medium border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Download className="h-4 w-4" />
                      <span className="text-sm font-medium">{template.downloads.toLocaleString()} downloads</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span className={`text-sm font-medium ${getComplexityColor(template.complexity)}`}>
                        {template.estimatedTime}
                      </span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-slate-900">
                        R$ {template.price}
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">
                        Preço único
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="px-6 py-2 rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50">
                            <Eye className="h-4 w-4 mr-2" />
                            Ver Mais
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl bg-white border-slate-200">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-slate-900 mb-2">
                              {template.title}
                            </DialogTitle>
                            <DialogDescription className="text-slate-600 text-base leading-relaxed">
                              {template.description}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-6 mt-6">
                            {/* Template Details */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <h4 className="font-semibold text-slate-900">Categoria</h4>
                                <p className="text-slate-600">{template.category}</p>
                              </div>
                              <div className="space-y-2">
                                <h4 className="font-semibold text-slate-900">Dificuldade</h4>
                                <p className="text-slate-600">{template.difficulty}</p>
                              </div>
                              <div className="space-y-2">
                                <h4 className="font-semibold text-slate-900">Tempo Estimado</h4>
                                <p className="text-slate-600">{template.estimatedTime}</p>
                              </div>
                              <div className="space-y-2">
                                <h4 className="font-semibold text-slate-900">Downloads</h4>
                                <p className="text-slate-600">{template.downloads.toLocaleString()}</p>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="space-y-2">
                              <h4 className="font-semibold text-slate-900">Tecnologias</h4>
                              <div className="flex flex-wrap gap-2">
                                {template.tags.map((tag, index) => (
                                  <span 
                                    key={index}
                                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium border border-slate-200"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* What's Included */}
                            <div className="space-y-3">
                              <h4 className="font-semibold text-slate-900">O que está incluído:</h4>
                              <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-slate-600">
                                  <CheckCircle className="h-4 w-4 text-slate-500" />
                                  Template completo para n8n
                                </li>
                                <li className="flex items-center gap-2 text-slate-600">
                                  <CheckCircle className="h-4 w-4 text-slate-500" />
                                  Documentação de instalação
                                </li>
                                <li className="flex items-center gap-2 text-slate-600">
                                  <CheckCircle className="h-4 w-4 text-slate-500" />
                                  Suporte por WhatsApp
                                </li>
                                <li className="flex items-center gap-2 text-slate-600">
                                  <CheckCircle className="h-4 w-4 text-slate-500" />
                                  Atualizações gratuitas
                                </li>
                              </ul>
                            </div>

                            {/* Price and Purchase */}
                            <div className="flex justify-between items-center pt-6 border-t border-slate-200">
                              <div className="space-y-1">
                                <div className="text-3xl font-bold text-slate-900">
                                  R$ {template.price}
                                </div>
                                <div className="text-sm text-slate-500">
                                  Pagamento único
                                </div>
                              </div>
                              <Button className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl">
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                Comprar Agora
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Comprar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 lg:px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-12 text-slate-900">
            Por que escolher nossos templates?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-slate-700" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900">100% Funcionais</h4>
              <p className="text-slate-600 leading-relaxed">
                Todos os templates são testados e validados antes da publicação
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center mx-auto">
                <Download className="h-8 w-8 text-slate-700" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900">Fácil Instalação</h4>
              <p className="text-slate-600 leading-relaxed">
                Importe diretamente no n8n e comece a usar em minutos
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-slate-700" />
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
      <section className="py-24 px-4 lg:px-6 bg-slate-900 text-white relative">
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Pronto para Automatizar?
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
            Transforme sua produtividade hoje mesmo. Cada template inclui documentação completa e suporte personalizado.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="text-3xl lg:text-4xl font-bold mb-2">4+</div>
              <div className="text-slate-400 font-medium">Templates</div>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="text-3xl lg:text-4xl font-bold mb-2">24h</div>
              <div className="text-slate-400 font-medium">Suporte</div>
            </div>
            <div className="text-center p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
              <div className="text-slate-400 font-medium">Funcionais</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-10 py-4 rounded-xl">
              <ShoppingCart className="mr-3 h-5 w-5" />
              Comprar Templates
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-slate-600 text-white hover:bg-slate-800 font-semibold px-10 py-4 rounded-xl">
              Fale Comigo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Templates;