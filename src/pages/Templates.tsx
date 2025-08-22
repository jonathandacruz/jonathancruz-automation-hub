import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Eye, Zap, ArrowRight } from "lucide-react";

const Templates = () => {
  const templates = [
    {
      id: 1,
      title: "Template de Automação de Envio de E-mails com n8n",
      description: "Automatize o envio de e-mails personalizados em segundos com este template pronto para n8n. Inclui validação de dados e tratamento de erros.",
      category: "E-mail",
      difficulty: "Iniciante",
      downloads: 1250,
      rating: 4.8,
      tags: ["Gmail", "Outlook", "Webhooks"],
      featured: true
    },
    {
      id: 2,
      title: "Integração CRM com Google Sheets",
      description: "Sincronize automaticamente leads entre seu CRM e planilhas do Google. Perfeito para pequenas empresas.",
      category: "CRM",
      difficulty: "Intermediário",
      downloads: 890,
      rating: 4.9,
      tags: ["Google Sheets", "HubSpot", "Pipedrive"],
      featured: true
    },
    {
      id: 3,
      title: "Backup Automático Multi-Plataforma",
      description: "Sistema completo de backup automático para arquivos importantes em múltiplas plataformas de armazenamento.",
      category: "Backup",
      difficulty: "Avançado",
      downloads: 645,
      rating: 4.7,
      tags: ["Google Drive", "Dropbox", "AWS S3"],
      featured: false
    },
    {
      id: 4,
      title: "Notificações Inteligentes Slack/Discord",
      description: "Receba alertas automáticos baseados em métricas específicas diretamente no seu canal preferido.",
      category: "Notificações",
      difficulty: "Intermediário",
      downloads: 1120,
      rating: 4.6,
      tags: ["Slack", "Discord", "Webhooks"],
      featured: false
    },
    {
      id: 5,
      title: "Processamento de Formulários Web",
      description: "Processe e organize automaticamente dados de formulários web com validação e armazenamento inteligente.",
      category: "Formulários",
      difficulty: "Iniciante",
      downloads: 1580,
      rating: 4.9,
      tags: ["Typeform", "Google Forms", "Airtable"],
      featured: true
    },
    {
      id: 6,
      title: "Monitor de Preços E-commerce",
      description: "Monitore preços de produtos em tempo real e receba alertas quando houver mudanças significativas.",
      category: "E-commerce",
      difficulty: "Avançado",
      downloads: 432,
      rating: 4.5,
      tags: ["API", "Webhooks", "Telegram"],
      featured: false
    }
  ];

  const categories = ["Todos", "E-mail", "CRM", "Backup", "Notificações", "Formulários", "E-commerce"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante": return "bg-green-100 text-green-800";
      case "Intermediário": return "bg-yellow-100 text-yellow-800";
      case "Avançado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-6 bg-brand-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Templates de <span className="bg-gradient-primary bg-clip-text text-transparent">Automação</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Templates prontos para n8n que você pode baixar e usar imediatamente. 
            Economize tempo e acelere sua produtividade com automações testadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="brand" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Baixar Templates Gratuitos
            </Button>
            <Button variant="outline" size="lg">
              <Zap className="mr-2 h-5 w-5" />
              Ver Tutoriais
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Templates em Destaque</h2>
          <p className="text-muted-foreground text-center mb-12">
            Os templates mais populares e úteis da nossa coleção
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {templates.filter(t => t.featured).map((template) => (
              <Card key={template.id} className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getDifficultyColor(template.difficulty)}>
                      {template.difficulty}
                    </Badge>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{template.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-brand-primary transition-colors">
                    {template.title}
                  </CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-brand-muted text-brand-primary text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        {template.downloads}
                      </div>
                    </div>
                    <Button variant="brand" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Templates */}
      <section className="py-20 px-4 lg:px-6 bg-brand-muted">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Todos os Templates</h2>
              <p className="text-muted-foreground">
                Navegue por nossa coleção completa de templates
              </p>
            </div>
            
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={category === "Todos" ? "brand" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-2">
                      <Badge className={getDifficultyColor(template.difficulty)}>
                        {template.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{template.category}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm">{template.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 hover:text-brand-primary transition-colors cursor-pointer">
                    {template.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{template.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-brand-muted text-brand-primary text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Download className="h-4 w-4 mr-1" />
                      {template.downloads} downloads
                    </div>
                    <Button variant="brand" size="sm">
                      Ver Template
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 lg:px-6 bg-gradient-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Não encontrou o que procura?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Entre em contato e sugira novos templates. Estou sempre criando novas automações baseadas nas necessidades da comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Sugerir Template
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Fale Comigo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Templates;