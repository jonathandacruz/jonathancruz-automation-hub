import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Clock, TrendingUp, ArrowRight, Play, BookOpen, Users, Award } from "lucide-react";
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

  const courseModules = [
    {
      number: "01",
      title: "Introdução ao n8n",
      description: "Fundamentos da automação e primeiros passos com n8n",
      duration: "45 min",
      topics: ["O que é automação", "Instalação do n8n", "Interface básica", "Primeiro workflow"]
    },
    {
      number: "02", 
      title: "Workflows Básicos",
      description: "Criação de automações simples e conceitos fundamentais",
      duration: "60 min",
      topics: ["Triggers e ações", "Nós básicos", "Conexões", "Teste de workflows"]
    },
    {
      number: "03",
      title: "Manipulação de Dados",
      description: "Transformação e tratamento de dados entre aplicações",
      duration: "90 min", 
      topics: ["Expressões JavaScript", "Transformação de dados", "Filtros", "Formatação"]
    },
    {
      number: "04",
      title: "Integrações Populares",
      description: "Conectando n8n com Gmail, Google Sheets, Slack e mais",
      duration: "120 min",
      topics: ["Gmail API", "Google Sheets", "Slack", "Webhooks", "APIs REST"]
    },
    {
      number: "05",
      title: "Automações Avançadas",
      description: "Workflows complexos e boas práticas de automação",
      duration: "75 min",
      topics: ["Loops e condições", "Error handling", "Scheduling", "Monitoramento"]
    },
    {
      number: "06",
      title: "Deploy e Produção",
      description: "Como colocar suas automações em produção de forma segura",
      duration: "45 min", 
      topics: ["Self-hosting", "Docker", "Variáveis de ambiente", "Backup", "Segurança"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section - SEO Optimized */}
      <section className="py-20 px-4 lg:px-6 bg-gradient-primary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            n8n Tutorial Completo em Português
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Aprenda n8n do zero ao avançado. Tutorial completo de automação de workflows, 
            integração de APIs e criação de fluxos automatizados. Curso n8n em português 
            com exemplos práticos e projetos reais.
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
                O que é o n8n? Ferramenta de Automação Open Source
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  O n8n é uma ferramenta de automação de workflow open source que permite conectar 
                  diferentes aplicações e serviços sem programação. É uma alternativa gratuita ao Zapier 
                  que você pode hospedar em seus próprios servidores.
                </p>
                <p>
                  Com interface visual drag-and-drop, o n8n permite criar automações complexas, 
                  integrar APIs, automatizar tarefas repetitivas e criar fluxos de trabalho 
                  personalizados para sua empresa ou projetos pessoais.
                </p>
                <p>
                  Ideal para desenvolvedores, empresas e freelancers que querem automatizar processos, 
                  integrar sistemas diferentes e aumentar a produtividade sem depender de plataformas pagas.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Interface visual para automação sem código</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Mais de 350+ integrações nativas (Gmail, Slack, etc)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Self-hosted - controle total dos seus dados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Código aberto e gratuito (alternativa ao Zapier)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Suporte a JavaScript e expressões customizadas</span>
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
              Por que usar automação n8n?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Benefícios da automação de processos com n8n para empresas e desenvolvedores
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

      {/* Curso n8n Fundamentos */}
      <section className="py-20 px-4 lg:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Curso n8n Fundamentos - Módulos Completos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Aprenda n8n do básico ao avançado com meu curso estruturado. 
              Cada módulo foi criado para levar você do zero à criação de automações profissionais.
            </p>
            <div className="flex justify-center gap-8 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-brand-primary" />
                6+ horas de conteúdo
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-brand-primary" />
                6 módulos práticos
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-brand-primary" />
                Projetos reais
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseModules.map((module, index) => (
              <Card key={index} className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{module.number}</span>
                    </div>
                    <span className="text-sm text-muted-foreground bg-brand-muted px-3 py-1 rounded-full">
                      {module.duration}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-brand-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-muted-foreground mb-3">O que você vai aprender:</h4>
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="brand" size="lg" asChild>
              <a 
                href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-5 w-5" />
                Assistir Curso Completo
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Curso completo disponível no meu canal do YouTube
            </p>
          </div>
        </div>
      </section>

      {/* Exemplos de Fluxos */}
      <section className="py-20 px-4 lg:px-6 bg-brand-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Exemplos Práticos de Automação n8n
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Workflows reais que você pode implementar hoje mesmo para automatizar seus processos
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
            Domine n8n Automação do Zero ao Avançado
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Curso completo de n8n em português. Aprenda automação de workflows, 
            integração de APIs e crie seus próprios projetos de automação.
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