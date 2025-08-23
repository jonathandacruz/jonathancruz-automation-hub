import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Clock, TrendingUp, ArrowRight, Play, BookOpen, Users, Award, Star, Workflow, Code, Database, ChevronRight, Target, Sparkles, CreditCard, Shield, Infinity } from "lucide-react";
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
  const examples = [{
    title: "Automação de E-mails Marketing",
    description: "Sistema completo de e-mail marketing com segmentação automática e follow-up personalizado",
    tools: ["Gmail", "Mailchimp", "Google Sheets"],
    complexity: "Intermediário",
    timeToImplement: "2-4 horas",
    benefits: ["Segmentação automática", "Follow-up personalizado", "Relatórios automáticos"]
  }, {
    title: "Sincronização CRM Multi-Plataforma",
    description: "Integração bidirecional entre diferentes CRMs e planilhas com validação de dados",
    tools: ["HubSpot", "Pipedrive", "Airtable"],
    complexity: "Avançado",
    timeToImplement: "4-6 horas",
    benefits: ["Dados sempre atualizados", "Validação automática", "Backup redundante"]
  }, {
    title: "Dashboard de Métricas em Tempo Real",
    description: "Coleta automática de dados e geração de relatórios visuais atualizados",
    tools: ["Google Analytics", "Slack", "Discord"],
    complexity: "Avançado",
    timeToImplement: "6-8 horas",
    benefits: ["Métricas em tempo real", "Alertas inteligentes", "Visualização automática"]
  }, {
    title: "Backup Inteligente Multi-Cloud",
    description: "Sistema de backup automático com redundância e verificação de integridade",
    tools: ["Google Drive", "Dropbox", "AWS S3"],
    complexity: "Intermediário",
    timeToImplement: "3-5 horas",
    benefits: ["Backup redundante", "Verificação automática", "Restauração rápida"]
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
  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Iniciante":
        return "bg-green-100 text-green-800 border-green-200";
      case "Intermediário":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Avançado":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  return <div className="pt-16 bg-white overflow-hidden">
      {/* Hero Section Modernizado */}
      <section className="py-24 px-4 lg:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-sm font-semibold shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Curso Premium • Acesso Vitalício • Certificado
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">n8n Fundamentos</span> 
              <br />Do Zero ao Profissional
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              O curso mais completo e avançado de n8n do Brasil. Aprenda com metodologia profissional 
              e <span className="text-white font-semibold">transforme sua carreira</span> 
              criando automações que geram resultados reais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg px-10 py-4 h-auto rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300" asChild>
                <a href="#modulos">
                  <BookOpen className="mr-3 h-6 w-6" />
                  Descobrir Todo o Conteúdo
                </a>
              </Button>
              
              <Button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-10 py-4 h-auto rounded-2xl hover:scale-105 transition-all duration-300" asChild>
                <a href="https://pay.hotmart.com/J101368751T">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Garantir minha vaga
                </a>
              </Button>
            </div>
            
            {/* Social Proof + ROI */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">R$ 10K+</div>
                <div className="text-sm text-slate-400">Economizado pelos alunos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">6K+</div>
                <div className="text-sm text-slate-400">Alunos Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">4.9★</div>
                <div className="text-sm text-slate-400">Nota Média</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">7 dias</div>
                <div className="text-sm text-slate-400">Garantia Total</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que é n8n - Modernizado */}
      <section className="py-24 px-4 lg:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 px-3 py-1 bg-blue-100 text-blue-800 border-blue-200">
                  <Code className="w-4 h-4 mr-2" />
                  Open Source & Gratuito
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  O que é o n8n?
                </h2>
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
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
              }].map((item, index) => <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-slate-800 font-medium">{item.text}</span>
                  </div>)}
              </div>
            </div>

            {/* Workflow Visual */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Como Funciona um Workflow</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Play className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">1. Trigger</h4>
                      <p className="text-sm text-slate-600">Evento que inicia a automação</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ChevronRight className="h-8 w-8 text-blue-500" />
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">2. Processamento</h4>
                      <p className="text-sm text-slate-600">Transformação e lógica</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ChevronRight className="h-8 w-8 text-blue-500" />
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">3. Ação</h4>
                      <p className="text-sm text-slate-600">Resultado da automação</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Modernizados */}
      <section id="beneficios" className="py-24 px-4 lg:px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 px-3 py-1 bg-orange-100 text-orange-800 border-orange-200">
              <TrendingUp className="w-4 h-4 mr-2" />
              Resultados Comprovados
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Por que usar automação n8n?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transforme sua produtividade com dados reais de impacto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-white overflow-hidden group">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                  <div className="text-sm text-slate-500 font-medium mb-4">{benefit.statLabel}</div>
                  <CardTitle className="text-xl font-bold text-slate-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base text-slate-600 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Curso Módulos Modernizado */}
      <section id="modulos" className="py-24 px-4 lg:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 px-3 py-1 bg-green-100 text-green-800 border-green-200">
              <BookOpen className="w-4 h-4 mr-2" />
              Conteúdo Premium Exclusivo
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              O que está incluído no curso
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              6+ horas de conteúdo premium com metodologia profissional e projetos práticos
            </p>
            
            {/* Templates Access Highlight */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6 max-w-4xl mx-auto mb-12 border border-emerald-200">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">🎁 Bônus Exclusivo</h3>
                  <p className="text-sm text-slate-600">Incluso no seu acesso vitalício</p>
                </div>
              </div>
              <p className="text-lg text-center text-slate-700 font-semibold">
                Com o acesso vitalício do curso, você tem <span className="text-emerald-600">acesso gratuito a todos os templates disponíveis</span> na nossa biblioteca exclusiva!
              </p>
            </div>
            
            <div className="flex justify-center gap-12 text-sm text-slate-600 mb-12">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-500" />
                <span className="font-medium">6+ horas de conteúdo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="font-medium">6 módulos práticos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Infinity className="h-5 w-5 text-purple-500" />
                <span className="font-medium">Acesso vitalício</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-orange-500" />
                <span className="font-medium">Certificado de conclusão</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseModules.map((module, index) => <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-white font-bold text-xl">{module.number}</span>
                    </div>
                    <div className="text-right">
                      <Badge className={`${getComplexityColor(module.difficulty)} text-xs font-semibold mb-2`}>
                        {module.difficulty}
                      </Badge>
                      <div className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {module.duration}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <h4 className="font-semibold text-sm text-slate-700 mb-4 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    O que você vai dominar:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {module.topics.map((topic, topicIndex) => <div key={topicIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-slate-700 font-medium">{topic}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-16">
            
            
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg px-10 py-4 h-auto rounded-2xl shadow-xl hover:scale-105 transition-all duration-300" asChild>
              
            </Button>
            
          </div>
        </div>
      </section>

      {/* Exemplos Práticos Modernizados */}
      

      {/* CTA Final Premium */}
      <section className="py-24 px-4 lg:px-6 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 px-4 py-2 bg-white/10 text-white border-white/20 text-sm font-semibold">
              <Star className="w-4 h-4 mr-2" />
              Investimento que se paga em 1 mês
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Transforme sua carreira com 
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Automação Profissional</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-slate-200 mb-8 leading-relaxed">
              Curso premium completo de n8n: da teoria à prática profissional. 
              <span className="text-white font-semibold">ROI garantido em 30 dias!</span>
            </p>
            
            {/* Pricing CTA */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-xl mx-auto mb-12 border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">R$ 487</div>
              <div className="text-green-300 font-semibold mb-4">12x de R$ 50,37 no cartão</div>
              <div className="flex justify-center space-x-4 text-sm text-slate-300 mb-6">
                <span>🔥 Acesso Vitalício</span>
                <span>📜 Certificado</span>
                <span>🛡️ Garantia 30 dias</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold text-xl px-12 py-5 h-auto rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300" asChild>
                <a href="https://pay.hotmart.com/J101368751T" target="_blank" rel="noopener noreferrer">
                  <CreditCard className="mr-3 h-7 w-7" />
                  Garantir Minha Vaga
                </a>
              </Button>
              
              <Button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-xl px-12 py-5 h-auto rounded-2xl hover:scale-105 transition-all duration-300" asChild>
                <Link to="/contato">
                  Consultoria Personalizada
                  <ArrowRight className="ml-3 h-7 w-7" />
                </Link>
              </Button>
            </div>
            
            <div className="flex justify-center items-center space-x-8 text-slate-300 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span>Suporte Vitalício</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AutomacaoN8n;