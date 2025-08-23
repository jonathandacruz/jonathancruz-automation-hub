import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Eye, Zap, ArrowRight, ShoppingCart, Sparkles } from "lucide-react";

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
      price: 37
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
      price: 37
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
      price: 37
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
      price: 37
    }
  ];

  const categories = ["Todos", "Social Media", "Automação", "IA"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante": return "bg-green-100 text-green-800";
      case "Intermediário": return "bg-yellow-100 text-yellow-800";
      case "Avançado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="pt-16 bg-gradient-to-br from-background via-background to-muted/20 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 lg:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <Sparkles className="mr-2 h-4 w-4" />
              Templates Premium n8n
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-foreground leading-tight">
            Templates de 
            <span className="block text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text animate-pulse">
              Automação
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Templates profissionais para n8n desenvolvidos para máxima performance. 
            <br />
            Transforme sua produtividade com automações que realmente funcionam.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">R$ 37</p>
              <p className="text-sm text-muted-foreground">por template</p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 h-auto rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <ShoppingCart className="mr-3 h-5 w-5" />
              Ver Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Templates Premium */}
      <section className="py-24 px-4 lg:px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Templates Premium</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automações profissionais testadas e otimizadas para resultados reais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {templates.map((template) => (
              <Card key={template.id} className="group border-2 border-transparent hover:border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <Badge className={`${getDifficultyColor(template.difficulty)} font-semibold px-3 py-1`}>
                        {template.difficulty}
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {template.category}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-bold">{template.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300 mb-3">
                    {template.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {template.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-full font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-border/50">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Download className="h-4 w-4" />
                        <span>{template.downloads} downloads</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        R$ {template.price}
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 h-auto rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
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

      {/* Categories Filter */}
      <section className="py-16 px-4 lg:px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Filtrar por Categoria</h3>
              <p className="text-muted-foreground">
                Encontre o template perfeito para sua necessidade
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  className="rounded-full px-6 py-2 font-medium hover:scale-105 transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 lg:px-6 bg-gradient-to-br from-primary via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Pronto para Automatizar?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transforme sua produtividade hoje mesmo com templates profissionais. 
              Cada automação é cuidadosamente desenvolvida e testada para garantir máxima eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="text-white/80">Templates Disponíveis</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold mb-2">R$ 37</div>
                <div className="text-white/80">Preço Único</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/80">Funcionais</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-4 h-auto rounded-2xl shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300">
                <ShoppingCart className="mr-3 h-5 w-5" />
                Comprar Templates
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-10 py-4 h-auto rounded-2xl">
                <Zap className="mr-3 h-5 w-5" />
                Fale Comigo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Templates;