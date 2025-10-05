import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { Youtube, BookOpen, ArrowRight, Code, Database, Zap, CheckCircle, Star, Shield, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage = "/lovable-uploads/logo-compiled.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Automação n8n e Consultoria | Jonathan da Cruz"
        description="Especialista em automação com n8n. Conecte sistemas, elimine tarefas repetitivas e aumente produtividade com consultoria e templates prontos."
        keywords={[
          "n8n",
          "automação",
          "automação de processos",
          "automação n8n",
          "integração de sistemas",
          "workflows automatizados",
          "automação empresarial",
          "consultoria n8n",
          "templates n8n",
          "templates n8n gratuitos",
          "integração APIs",
          "integração com CRM",
          "webhooks",
          "api rest",
          "automação no-code",
          "open source automação",
          "self-hosted automação",
          "zapier alternativo",
          "fluxos de trabalho",
          "automação de marketing",
          "automação de dados",
          "comunidade n8n",
          "suporte n8n",
          "curso n8n",
          "estudos n8n",
          "canal n8n no youtube"
        ]}
        og={{
          title: "Automação n8n e Consultoria | Jonathan da Cruz",
          description: "Conecte sistemas e automatize processos com n8n. Consultoria e templates para acelerar resultados.",
          image: "/lovable-uploads/logo-site.png",
          type: "website",
          siteName: "Jonathan da Cruz",
          locale: "pt_BR",
        }}
        twitter={{
          card: "summary_large_image",
          title: "Automação n8n e Consultoria | Jonathan da Cruz",
          description: "Automatize tarefas e aumente produtividade com n8n.",
          image: "/lovable-uploads/logo-site.png",
        }}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Jonathan da Cruz",
            url: typeof window !== 'undefined' ? window.location.origin : undefined,
            potentialAction: {
              "@type": "SearchAction",
              target: typeof window !== 'undefined' ? `${window.location.origin}/templates?q={search_term_string}` : undefined,
              "query-input": "required name=search_term_string",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Jonathan da Cruz Automation Hub",
            url: typeof window !== 'undefined' ? window.location.origin : undefined,
            logo: typeof window !== 'undefined' ? `${window.location.origin}/lovable-uploads/logo-site.png` : undefined,
            sameAs: [
              "https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
            ]
          }
        ]}
      />
      {/* Hero Section Ultra Moderno */}
      <section className="pt-32 pb-24 px-4 lg:px-6 bg-gradient-to-br from-background via-muted/30 to-primary/5 relative overflow-hidden">
        {/* Background Effects Modernos */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.03] via-transparent to-accent/[0.05]"></div>
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-accent/25 to-primary/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-transparent via-primary/[0.02] to-transparent"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[750px]">

            {/* Left Content */}
            <div className="space-y-10 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-brand-primary px-4 py-2 rounded-full text-sm font-semibold border border-blue-200">
                  <Zap className="w-4 h-4" />
                  <span>Especialista em Automação n8n</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
                  Automação com n8n: {" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Comunidade, Templates e YouTube
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                  Conheça a <span className="font-semibold text-slate-800">comunidade de estudos n8n</span>,
                  explore <span className="font-semibold text-slate-800">templates prontos</span> e aprenda com
                  meu <span className="font-semibold text-slate-800">canal no YouTube</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <Link to="/automacao-n8n">
                  <Button variant="brand" size="lg" className="w-full sm:w-auto">
                    <Zap className="mr-2 h-5 w-5" />
                    Assinar Comunidade
                  </Button>
                </Link>

                <Link to="/templates">
                  <Button variant="premium" size="lg" className="w-full sm:w-auto">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Ver Templates n8n
                  </Button>
                </Link>

                <Button variant="youtube" size="lg" asChild className="w-full sm:w-auto">
                  <a
                    href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center relative z-10"
                  >
                    <Youtube className="mr-3 h-5 w-5" />
                    <span>Assista no YouTube</span>
                  </a>
                </Button>
              </div>

              {/* Stats Aprimorados */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">6K+</div>
                  <div className="text-sm lg:text-base text-slate-600 font-medium">Alunos Capacitados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">10+</div>
                  <div className="text-sm lg:text-base text-slate-600 font-medium">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">100+</div>
                  <div className="text-sm lg:text-base text-slate-600 font-medium">Automações Criadas</div>
                </div>
              </div>
            </div>

            {/* Right Image Modernizada */}
            <div className="relative animate-scale-in">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-3 opacity-10 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-cta rounded-3xl transform -rotate-2 opacity-5 scale-110"></div>
                <div className="relative">
                  <img
                    src={heroImage}
                    alt="Jonathan da Cruz - Especialista em Automação n8n"
                    className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white"
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(29, 78, 216, 0.15))'
                    }}
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-elegant border border-slate-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-slate-700">Disponível para consultorias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Resultados dos Alunos</h2>
            <p className="text-lg text-slate-600">Histórias reais de quem evoluiu com a comunidade n8n</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-brand border border-slate-100">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm font-semibold text-slate-700">5/5 avaliação</span>
              </div>
              <p className="text-slate-700 leading-relaxed">“Em duas semanas publiquei 4 automações no trabalho e reduzi tarefas repetitivas em 60%.”</p>
              <div className="mt-4 flex items-center text-slate-500 text-sm">
                <Users className="h-4 w-4 mr-2" />
                <span>Aluno de produto digital</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-brand border border-slate-100">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm font-semibold text-slate-700">5/5 avaliação</span>
              </div>
              <p className="text-slate-700 leading-relaxed">“Com os templates prontos consegui integrar CRM + WhatsApp e acelerar minhas vendas.”</p>
              <div className="mt-4 flex items-center text-slate-500 text-sm">
                <Users className="h-4 w-4 mr-2" />
                <span>Aluno de marketing</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-brand border border-slate-100">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-sm font-semibold text-slate-700">5/5 avaliação</span>
              </div>
              <p className="text-slate-700 leading-relaxed">“A trilha guiada me tirou da estaca zero e hoje construo fluxos complexos no n8n.”</p>
              <div className="mt-4 flex items-center text-slate-500 text-sm">
                <Users className="h-4 w-4 mr-2" />
                <span>Aluno iniciante</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Benefícios da Comunidade</h2>
            <p className="text-lg text-slate-600">Aprenda, pratique e avance com suporte contínuo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-brand border border-slate-100">
              <CheckCircle className="h-6 w-6 text-emerald-600 mb-3" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Trilhas Guiadas</h3>
              <p className="text-slate-600">Do básico ao avançado com passos claros e projetos práticos.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-brand border border-slate-100">
              <CheckCircle className="h-6 w-6 text-emerald-600 mb-3" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Templates Premium</h3>
              <p className="text-slate-600">Modelos prontos para integrar CRMs, APIs e canais de comunicação.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-brand border border-slate-100">
              <CheckCircle className="h-6 w-6 text-emerald-600 mb-3" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Suporte Semanal</h3>
              <p className="text-slate-600">Ajuda direta para desbloquear desafios e evoluir mais rápido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">O que você recebe</h2>
            <p className="text-lg text-slate-600">Tudo que precisa para dominar automação com n8n</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-brand border border-slate-100">
              <BookOpen className="h-6 w-6 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Trilhas e guias</h3>
              <p className="text-slate-600">Conteúdos organizados para acelerar sua curva de aprendizado.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-brand border border-slate-100">
              <Database className="h-6 w-6 text-purple-600 mb-3" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Templates Premium</h3>
              <p className="text-slate-600">Biblioteca de modelos prontos e atualizados.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-brand border border-slate-100">
              <MessageCircle className="h-6 w-6 text-emerald-600 mb-3" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Suporte e comunidade</h3>
              <p className="text-slate-600">Canal ativo para dúvidas, feedbacks e networking.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-brand border border-slate-100">
              <Shield className="h-6 w-6 text-slate-700 mb-3" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Garantia e confiança</h3>
              <p className="text-slate-600">Acesso estável, atualizações e segurança de conteúdo.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/automacao-n8n">
              <Button variant="brand" size="lg" className="w-full sm:w-auto">
                <Zap className="mr-2 h-5 w-5" />
                Assinar Comunidade
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Especialidades Modernizadas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              Especialidades em Automação
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Soluções completas para modernizar e otimizar seus processos empresariais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Automação n8n */}
            <div className="group bg-white rounded-3xl p-8 shadow-brand hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Automação n8n</h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Workflows automatizados para eliminar tarefas repetitivas e conectar todos os seus sistemas de forma inteligente.
              </p>
              <Link
                to="/automacao-n8n"
                className="inline-flex items-center text-brand-primary font-semibold hover:text-blue-700 transition-colors duration-200 story-link"
              >
                Saiba mais <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Desenvolvimento */}
            <div className="group bg-white rounded-3xl p-8 shadow-brand hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Integrações Custom</h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Desenvolvimento de conexões únicas entre sistemas, APIs e plataformas para criar soluções sob medida.
              </p>
              <Link
                to="/templates"
                className="inline-flex items-center text-brand-primary font-semibold hover:text-blue-700 transition-colors duration-200 story-link"
              >
                Ver templates <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Consultoria */}
            <div className="group bg-white rounded-3xl p-8 shadow-brand hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Consultoria Estratégica</h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Análise completa de processos e estratégia de automação personalizada para maximizar seus resultados.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center text-brand-primary font-semibold hover:text-blue-700 transition-colors duration-200 story-link"
              >
                Solicitar análise <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

            </div>

          </div>
        </div>
      </section>
      
      <div className="text-center mb-20">
        <Button variant="premium" size="lg" className="w-full sm:w-auto" asChild>
          <Link to="/templates">
            Ver Todos os Templates
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </Button>
      </div>


      {/* Templates Preview Modernizado */}


      {/* CTA Final Modernizada */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              Pronto para <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">automatizar</span> seus processos?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
              Transforme sua empresa com <span className="font-semibold text-white">automação inteligente</span>.
              Nossa consultoria revela oportunidades para reduzir custos, otimizar processos e aumentar seus resultados.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link to="/contato">
                <Button variant="brand" size="lg" className="w-full sm:w-auto">
                  <Zap className="mr-3 h-6 w-6" />
                  Solicitar Consultoria
                </Button>
              </Link>

              <Button variant="youtube" size="lg" asChild className="w-full sm:w-auto">
                <a
                  href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center relative z-10"
                >
                  <Youtube className="mr-3 h-5 w-5" />
                  <span>Assista no YouTube</span>
                </a>
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-slate-400 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Resposta em 12h</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Especialista certificado</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;