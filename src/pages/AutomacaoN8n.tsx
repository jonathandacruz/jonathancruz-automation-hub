import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Clock, TrendingUp, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const AutomacaoN8n = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize tarefas repetitivas e ganhe horas do seu dia"
    },
    {
      icon: TrendingUp,
      title: "Aumento de Produtividade",
      description: "Foque no que realmente importa enquanto as automações trabalham"
    },
    {
      icon: Zap,
      title: "Redução de Erros",
      description: "Elimine erros humanos com processos automatizados"
    }
  ];

  const examples = [
    {
      title: "Automação de E-mails",
      description: "Envio automático de e-mails personalizados baseado em triggers específicos",
      tools: ["Gmail", "Outlook", "Webhooks"]
    },
    {
      title: "Integração CRM",
      description: "Sincronização automática de leads entre diferentes plataformas",
      tools: ["HubSpot", "Pipedrive", "Google Sheets"]
    },
    {
      title: "Backup Automático",
      description: "Backup automático de dados e arquivos em múltiplas plataformas",
      tools: ["Google Drive", "Dropbox", "AWS S3"]
    },
    {
      title: "Notificações Inteligentes",
      description: "Sistema de alertas baseado em métricas e eventos importantes",
      tools: ["Slack", "Discord", "Telegram"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-6 bg-gradient-primary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Automação com n8n
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Transforme sua produtividade com automações inteligentes. 
            Aprenda a criar fluxos poderosos que eliminam tarefas repetitivas e otimizam seu trabalho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <a 
                href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Tutoriais
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/templates">
                Templates Prontos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* O que é n8n */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                O que é o n8n?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  O n8n é uma plataforma de automação de fluxo de trabalho que permite conectar 
                  diferentes aplicações e serviços de forma visual e intuitiva.
                </p>
                <p>
                  Com ele, você pode criar automações complexas sem precisar escrever código, 
                  usando uma interface drag-and-drop que torna o processo simples e acessível.
                </p>
                <p>
                  É ideal para automatizar tarefas repetitivas, integrar sistemas diferentes e 
                  criar fluxos de trabalho que economizam tempo e reduzem erros.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Interface visual intuitiva</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Mais de 200 integrações nativas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Self-hosted e código aberto</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Suporte a JavaScript customizado</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-muted rounded-3xl p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-brand">
                  <h3 className="font-semibold mb-2">Trigger</h3>
                  <p className="text-sm text-muted-foreground">Evento que inicia a automação</p>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-brand-primary" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-brand">
                  <h3 className="font-semibold mb-2">Processamento</h3>
                  <p className="text-sm text-muted-foreground">Lógica e transformação dos dados</p>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-brand-primary" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-brand">
                  <h3 className="font-semibold mb-2">Ação</h3>
                  <p className="text-sm text-muted-foreground">Resultado final da automação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 lg:px-6 bg-brand-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Por que usar automação?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra como a automação pode transformar seu dia a dia e sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exemplos de Fluxos */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Exemplos de Automações
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Alguns dos fluxos que já criei e que você pode implementar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <Card key={index} className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 text-brand-primary mr-2" />
                    {example.title}
                  </CardTitle>
                  <CardDescription>{example.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {example.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-3 py-1 bg-brand-muted text-brand-primary text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Aprenda n8n Comigo
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Domine a arte da automação e transforme sua produtividade. 
            Conteúdo prático, direto ao ponto e com exemplos reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <a 
                href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-5 w-5" />
                Canal do YouTube
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/contato">
                Fale Comigo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomacaoN8n;