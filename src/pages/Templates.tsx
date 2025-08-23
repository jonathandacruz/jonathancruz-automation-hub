import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Star, ShoppingCart, Sparkles, Zap, Clock, CheckCircle } from "lucide-react";

const Templates = () => {
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
      case "Iniciante": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Intermediário": return "bg-amber-100 text-amber-700 border-amber-200";
      case "Avançado": return "bg-rose-100 text-rose-700 border-rose-200";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "low": return "text-emerald-600";
      case "medium": return "text-amber-600";
      case "high": return "text-rose-600";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-6 bg-gradient-to-br from-background via-secondary/30 to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <Badge className="mb-8 px-6 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors text-base font-medium">
            <Sparkles className="mr-2 h-4 w-4" />
            Templates Premium n8n
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-foreground leading-tight tracking-tight">
            Templates de{" "}
            <span className="text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text">
              Automação
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Transforme sua produtividade com automações profissionais. 
            <br className="hidden md:block" />
            Templates testados e otimizados para máximo desempenho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-primary">R$ 37</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Por Template</div>
            </div>
            <Button size="lg" className="px-10 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <ShoppingCart className="mr-3 h-5 w-5" />
              Ver Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Templates Disponíveis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada template é cuidadosamente desenvolvido para entregar resultados reais
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="rounded-full px-6 py-2 font-medium transition-all duration-300 hover:scale-105"
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {templates.map((template) => (
              <Card key={template.id} className="group border-border/50 hover:border-primary/30 bg-card backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden relative">
                {/* Card Header */}
                <CardHeader className="pb-4 space-y-4">
                  {/* Top Row - Badges and Rating */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Badge className={`${getDifficultyColor(template.difficulty)} font-medium px-3 py-1 border`}>
                        {template.difficulty}
                      </Badge>
                      <Badge variant="outline" className="bg-secondary/50 text-secondary-foreground border-border/50 font-medium">
                        {template.category}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-foreground">{template.rating}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <CardTitle className="text-2xl lg:text-3xl group-hover:text-primary transition-colors duration-300 leading-tight">
                    {template.title}
                  </CardTitle>

                  {/* Description */}
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {template.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-muted/70 text-muted-foreground text-sm rounded-full font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Download className="h-4 w-4" />
                      <span className="text-sm font-medium">{template.downloads.toLocaleString()} downloads</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className={`text-sm font-medium ${getComplexityColor(template.complexity)}`}>
                        {template.estimatedTime}
                      </span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex justify-between items-center pt-4 border-t border-border/50">
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-primary">
                        R$ {template.price}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        Preço único
                      </div>
                    </div>
                    <Button className="px-8 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Comprar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 lg:px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-12 text-foreground">
            Por que escolher nossos templates?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">100% Funcionais</h4>
              <p className="text-muted-foreground leading-relaxed">
                Todos os templates são testados e validados antes da publicação
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Fácil Instalação</h4>
              <p className="text-muted-foreground leading-relaxed">
                Importe diretamente no n8n e comece a usar em minutos
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Suporte Premium</h4>
              <p className="text-muted-foreground leading-relaxed">
                Documentação completa e suporte direto via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 lg:px-6 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Pronto para Automatizar?
          </h2>
          
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
            Transforme sua produtividade hoje mesmo. Cada template inclui documentação completa e suporte personalizado.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-3xl lg:text-4xl font-bold mb-2">4+</div>
              <div className="text-primary-foreground/80 font-medium">Templates</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-3xl lg:text-4xl font-bold mb-2">R$ 37</div>
              <div className="text-primary-foreground/80 font-medium">Preço Único</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-3xl lg:text-4xl font-bold mb-2">24h</div>
              <div className="text-primary-foreground/80 font-medium">Suporte</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <ShoppingCart className="mr-3 h-5 w-5" />
              Comprar Templates
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-2xl backdrop-blur-sm">
              <Zap className="mr-3 h-5 w-5" />
              Fale Comigo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Templates;