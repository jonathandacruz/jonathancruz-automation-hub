import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Clock, TrendingUp, ArrowRight, Play, BookOpen, Users, Award, Star, Workflow, Code, Database, ChevronRight, Target, Sparkles, CreditCard, Shield, Infinity, MessageCircle, Image, Camera, ShoppingBag, MessageSquare, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const AutomacaoN8n = () => {
  const benefits = [{
    icon: Clock,
    title: "Economia de Tempo",
    description: "Automatize tarefas repetitivas e ganhe até 10 horas por semana",
    stat: "80%",
    statLabel: "menos tempo gasto"
  }, {
    icon: TrendingUp,
    title: "Aumento de Produtividade",
    description: "Foque no que realmente importa enquanto as automações trabalham",
    stat: "3x",
    statLabel: "mais produtivo"
  }, {
    icon: Target,
    title: "Redução de Erros",
    description: "Elimine erros humanos com processos automatizados e precisos",
    stat: "95%",
    statLabel: "menos erros"
  }];

  const courseModules = [{
    number: "01",
    title: "Fundamentos do n8n",
    description: "Aprenda os conceitos básicos e configure seu primeiro workflow",
    duration: "45 min",
    topics: ["Conceitos de automação", "Instalação e configuração", "Interface visual", "Primeiro workflow"],
    difficulty: "Iniciante"
  }, {
    number: "02",
    title: "Workflows Essenciais",
    description: "Domine triggers, ações e conexões entre diferentes serviços",
    duration: "60 min",
    topics: ["Triggers avançados", "Nós essenciais", "Conectores", "Debugging"],
    difficulty: "Iniciante"
  }, {
    number: "03",
    title: "Manipulação Avançada de Dados",
    description: "Transforme e processe dados complexos entre aplicações",
    duration: "90 min",
    topics: ["JavaScript expressions", "Data transformation", "Filtros complexos", "Validação de dados"],
    difficulty: "Intermediário"
  }, {
    number: "04",
    title: "Integrações Empresariais",
    description: "Conecte sistemas corporativos e APIs populares",
    duration: "120 min",
    topics: ["APIs REST/GraphQL", "Autenticação OAuth", "Webhooks", "Rate limiting"],
    difficulty: "Intermediário"
  }, {
    number: "05",
    title: "Automações Profissionais",
    description: "Crie workflows complexos para cenários empresariais",
    duration: "75 min",
    topics: ["Loops e condições", "Error handling", "Scheduling avançado", "Monitoramento"],
    difficulty: "Avançado"
  }, {
    number: "06",
    title: "Deploy e Escalabilidade",
    description: "Coloque suas automações em produção de forma segura",
    duration: "45 min",
    topics: ["Docker deployment", "Environment variables", "Load balancing", "Security best practices"],
    difficulty: "Avançado"
  }];

  const includedTemplates = [
    { name: "Robô da Lotofácil", icon: Database },
    { name: "Direct do Instagram", icon: MessageCircle },
    { name: "Postando no Feed", icon: Image },
    { name: "Postando nos Stories", icon: Camera },
    { name: "Afiliados Shopee", icon: ShoppingBag },
    { name: "Comentários Instagram", icon: MessageSquare },
    { name: "Link de Pagamentos", icon: LinkIcon },
    { name: "Integração Mercado Pago", icon: CreditCard },
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Iniciante":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Intermediário":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Avançado":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-primary selection:text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section Modernizado */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 lg:px-6 relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <div className="animate-fade-up">
              <Badge className="mb-6 px-4 py-2 bg-white/5 backdrop-blur-md text-brand-primary border-brand-primary/20 text-sm font-medium hover:bg-white/10 transition-colors shadow-glow">
                <Sparkles className="w-4 h-4 mr-2" />
                Curso Premium • Acesso Vitalício • Certificado
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 leading-tight text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary">n8n Fundamentos</span>
                <br />Do Zero ao Profissional
              </h1>

              <p className="text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed">
                O curso mais completo e avançado de n8n do Brasil. Aprenda com metodologia profissional
                e <span className="text-white font-semibold">transforme sua carreira </span>
                criando automações que geram resultados reais.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button className="w-full sm:w-auto bg-brand-primary hover:bg-brand-secondary text-white font-bold text-lg px-10 py-6 h-auto rounded-xl shadow-glow hover:shadow-brand transition-all duration-300 hover:-translate-y-1" asChild>
                  <a href="#modulos">
                    <BookOpen className="mr-3 h-6 w-6" />
                    Descobrir Todo o Conteúdo
                  </a>
                </Button>

                <Button className="w-full sm:w-auto bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 font-semibold text-lg px-10 py-6 h-auto rounded-xl hover:-translate-y-1 transition-all duration-300" asChild>
                  <a href="https://pay.hotmart.com/J101368751T">
                    <TrendingUp className="mr-3 h-6 w-6" />
                    Garantir minha vaga
                  </a>
                </Button>
              </div>

              {/* Social Proof + ROI */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto pt-12 border-t border-white/5">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-brand-primary mb-2">R$ 10K+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Economizado</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2">120+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Alunos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-brand-accent mb-2">4.9★</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Nota Média</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-500 mb-2">7 dias</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">Garantia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O que é n8n - Modernizado */}
        <section className="py-24 px-4 lg:px-6 bg-card/30 backdrop-blur-sm border-y border-white/5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 px-3 py-1 bg-brand-primary/10 text-brand-primary border-brand-primary/20">
                    <Code className="w-4 h-4 mr-2" />
                    Open Source & Gratuito
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                    O que é o n8n?
                  </h2>
                  <p className="text-lg text-slate-400 leading-relaxed mb-6">
                    O n8n é a ferramenta de automação visual mais poderosa do mercado.
                    Uma alternativa open source ao Zapier que você pode hospedar gratuitamente
                    e customizar completamente.
                  </p>
                </div>

                <div className="space-y-4">
                  {[{
                    icon: CheckCircle,
                    text: "Interface visual drag-and-drop intuitiva"
                  }, {
                    icon: Zap,
                    text: "350+ integrações nativas (Gmail, Slack, etc)"
                  }, {
                    icon: Database,
                    text: "Self-hosted - controle total dos dados"
                  }, {
                    icon: Code,
                    text: "Código aberto e 100% gratuito"
                  }, {
                    icon: Workflow,
                    text: "JavaScript customizado para lógicas complexas"
                  }].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-200">
                      <div className="w-10 h-10 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-brand-primary" />
                      </div>
                      <span className="text-slate-300 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Visual */}
              <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-bold text-white mb-8 text-center relative z-10">Como Funciona um Workflow</h3>
                <div className="space-y-6 relative z-10">
                  <div className="bg-card border border-white/10 rounded-2xl p-6 shadow-lg hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <Play className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">1. Trigger</h4>
                        <p className="text-sm text-slate-400">Evento que inicia a automação</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ChevronRight className="h-8 w-8 text-slate-600" />
                  </div>

                  <div className="bg-card border border-white/10 rounded-2xl p-6 shadow-lg hover:border-brand-secondary/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-secondary/20 rounded-xl flex items-center justify-center">
                        <Code className="h-6 w-6 text-brand-secondary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">2. Processamento</h4>
                        <p className="text-sm text-slate-400">Transformação e lógica</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ChevronRight className="h-8 w-8 text-slate-600" />
                  </div>

                  <div className="bg-card border border-white/10 rounded-2xl p-6 shadow-lg hover:border-brand-accent/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-accent/20 rounded-xl flex items-center justify-center">
                        <Target className="h-6 w-6 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">3. Ação</h4>
                        <p className="text-sm text-slate-400">Resultado da automação</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios Modernizados */}
        <section id="beneficios" className="py-24 px-4 lg:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-4 px-3 py-1 bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20">
                <TrendingUp className="w-4 h-4 mr-2" />
                Resultados Comprovados
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Por que usar automação n8n?
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Transforme sua produtividade com dados reais de impacto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-slate-900/50 border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-brand-primary/30">
                      <benefit.icon className="h-10 w-10 text-brand-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                    <div className="text-sm text-slate-500 font-medium mb-4 uppercase tracking-wider">{benefit.statLabel}</div>
                    <CardTitle className="text-xl font-bold text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <CardDescription className="text-base text-slate-400 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Curso Módulos Modernizado */}
        <section id="modulos" className="py-24 px-4 lg:px-6 bg-card/30 backdrop-blur-sm border-y border-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-4 px-3 py-1 bg-green-500/10 text-green-400 border-green-500/20">
                <BookOpen className="w-4 h-4 mr-2" />
                Conteúdo Premium Exclusivo
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                O que está incluído no curso
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                6+ horas de conteúdo premium com metodologia profissional e projetos práticos
              </p>

              {/* Templates Access Highlight */}
              <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto mb-12 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">🎁 Bônus Exclusivo</h3>
                    <p className="text-sm text-slate-400">Incluso no seu acesso vitalício</p>
                  </div>
                </div>
                <p className="text-lg text-center text-slate-300 font-medium">
                  Com o acesso vitalício do curso, você tem <span className="text-brand-primary font-bold">acesso gratuito a todos os templates disponíveis</span> na nossa biblioteca exclusiva!
                </p>
              </div>

              {/* Included Templates Grid */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Templates Inclusos Gratuitamente:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {includedTemplates.map((template, index) => (
                    <div key={index} className="bg-slate-900/50 border border-white/5 p-4 rounded-xl flex flex-col items-center text-center hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-brand-primary group-hover:text-white group-hover:bg-brand-primary/20">
                        <template.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm text-slate-300 font-medium leading-tight group-hover:text-white transition-colors">{template.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-sm text-slate-400 mb-12">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-brand-primary" />
                  <span className="font-medium">6+ horas de conteúdo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-brand-secondary" />
                  <span className="font-medium">6 módulos práticos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Infinity className="h-5 w-5 text-brand-accent" />
                  <span className="font-medium">Acesso vitalício</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">Certificado de conclusão</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courseModules.map((module, index) => (
                <Card key={index} className="bg-slate-900/50 border-white/5 hover:border-brand-primary/30 transition-all duration-500 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-brand-primary/30">
                        <span className="text-white font-bold text-xl font-display">{module.number}</span>
                      </div>
                      <div className="text-right">
                        <Badge className={`${getComplexityColor(module.difficulty)} text-xs font-semibold mb-2`}>
                          {module.difficulty}
                        </Badge>
                        <div className="text-sm text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          {module.duration}
                        </div>
                      </div>
                    </div>

                    <CardTitle className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors mb-3">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="text-base text-slate-400 leading-relaxed">
                      {module.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <h4 className="font-semibold text-sm text-slate-300 mb-4 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-brand-primary" />
                      O que você vai dominar:
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
                          <div className="w-1.5 h-1.5 bg-brand-primary/50 rounded-full"></div>
                          <span className="text-sm text-slate-400 font-medium">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16 relative z-20">
              <Button className="w-full sm:w-auto bg-brand-primary hover:bg-brand-secondary text-white font-bold text-lg px-10 py-6 h-auto rounded-xl shadow-glow hover:shadow-brand transition-all duration-300 hover:-translate-y-1" asChild>
                <a href="https://pay.hotmart.com/J101368751T" target="_blank" rel="noopener noreferrer">
                  <CreditCard className="mr-3 h-6 w-6" />
                  Garantir minha vaga
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Final Premium */}
        <section className="py-24 px-4 lg:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent pointer-events-none" />

          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-6 px-4 py-2 bg-white/5 text-white border-white/10 text-sm font-semibold backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                Investimento que se paga em 1 mês
              </Badge>

              <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8 leading-tight text-white">
                Transforme sua carreira com <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Automação Profissional</span>
              </h2>

              <p className="text-xl lg:text-2xl text-slate-400 mb-12 leading-relaxed">
                Curso premium completo de n8n: da teoria à prática profissional.
                <br /><span className="text-white font-semibold">ROI garantido em 30 dias!</span>
              </p>

              {/* Pricing CTA */}
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-10 max-w-xl mx-auto mb-12 border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10 opacity-50" />

                <div className="relative z-10">
                  <div className="text-6xl font-bold text-white mb-2 font-display">R$ 487</div>
                  <div className="text-brand-primary font-semibold mb-6 text-lg">12x de R$ 50,37 no cartão</div>
                  <div className="flex justify-center gap-4 text-sm text-slate-400 mb-8">
                    <span className="flex items-center"><Infinity className="w-4 h-4 mr-1" /> Vitalício</span>
                    <span className="flex items-center"><Award className="w-4 h-4 mr-1" /> Certificado</span>
                    <span className="flex items-center"><Shield className="w-4 h-4 mr-1" /> Garantia</span>
                  </div>

                  <Button className="w-full bg-white text-slate-900 hover:bg-slate-200 font-bold text-xl px-8 py-6 h-auto rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300" asChild>
                    <a href="https://pay.hotmart.com/J101368751T" target="_blank" rel="noopener noreferrer">
                      <CreditCard className="mr-3 h-6 w-6" />
                      Garantir Minha Vaga
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-slate-400 text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Pagamento Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Acesso Imediato</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>Suporte Vitalício</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AutomacaoN8n;