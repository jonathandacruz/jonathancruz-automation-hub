import { Button } from "@/components/ui/button";
import { Youtube, BookOpen, ArrowRight, Code, Database, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage = "/lovable-uploads/e020e825-ba4b-4684-b062-79a26a4e1e23.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
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
                  Transforme Seus{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Processos
                  </span>{" "}
                  Com Automação
                </h1>

                <p className="text-xl lg:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                  Automatize tarefas repetitivas, conecte sistemas e
                  <span className="font-semibold text-slate-800"> economize até 80% do tempo</span> da sua equipe
                  com soluções n8n personalizadas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contato">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 h-auto rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                    <Zap className="mr-2 h-5 w-5" />
                    Solicitar Consultoria
                  </Button>
                </Link>

                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-red-500 to-white-600 hover:from-red-600 hover:to-red-700 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 h-auto rounded-xl relative overflow-hidden group w-full sm:w-auto"
                >
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
              <div className="grid grid-cols-3 gap-8 pt-8">
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
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-6 h-auto rounded-xl shadow-lg hover:scale-105 transition-all duration-300" asChild>
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
                <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-4 h-auto rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <Zap className="mr-3 h-6 w-6" />
                  Solicitar Consultoria
                </Button>
              </Link>

              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-red-500 to-white-600 hover:from-red-600 hover:to-red-700 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 h-auto rounded-xl relative overflow-hidden group w-full sm:w-auto"
              >
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