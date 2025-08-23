import { Button } from "@/components/ui/button";
import { Youtube, BookOpen, ArrowRight, Code, Database, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage = "/lovable-uploads/e020e825-ba4b-4684-b062-79a26a4e1e23.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Modernizado */}
      <section className="pt-24 pb-20 px-4 lg:px-6 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[700px]">
            
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
                  <Button 
                    className="bg-gradient-cta hover:shadow-orange transition-all duration-300 font-bold text-lg px-8 py-4 h-auto rounded-xl shadow-lg hover:scale-105"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Solicitar Consultoria
                  </Button>
                </Link>
                
                <Button variant="outline" size="lg" asChild className="border-2 border-slate-300 hover:border-brand-primary hover:bg-slate-50 font-semibold px-8 py-4 h-auto rounded-xl">
                  <a 
                    href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="mr-2 h-5 w-5 text-red-600" />
                    Ver Tutoriais
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
                className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-primary/80 transition-colors duration-200 story-link"
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
                className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-primary/80 transition-colors duration-200 story-link"
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
                className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-primary/80 transition-colors duration-200 story-link"
              >
                Solicitar análise <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview Modernizado */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              Templates Prontos para Usar
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Acelere sua implementação com automações testadas e documentadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Template 1 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-brand hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-full h-56 bg-gradient-primary flex items-center justify-center relative overflow-hidden">
                <Code className="h-20 w-20 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                  Gratuito
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-slate-900">Automação de E-mails</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Sistema completo para envio automatizado de e-mails personalizados com gatilhos inteligentes.
                </p>
                <div className="text-brand-primary font-semibold">Download Gratuito</div>
              </div>
            </div>

            {/* Template 2 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-brand hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-full h-56 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center relative overflow-hidden">
                <Database className="h-20 w-20 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                  Premium
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-slate-900">Sincronização de Dados</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Integração bidirecional entre sistemas com sincronização em tempo real e backup automático.
                </p>
                <div className="text-brand-primary font-semibold">R$ 97</div>
              </div>
            </div>

            {/* Template 3 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-brand hover:shadow-elegant transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-full h-56 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                <Zap className="h-20 w-20 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                  Premium
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-slate-900">Relatórios Automatizados</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Geração e envio automático de relatórios personalizados com dados em tempo real.
                </p>
                <div className="text-brand-primary font-semibold">R$ 197</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-primary hover:shadow-brand transition-all duration-300 font-bold text-lg px-8 py-4 h-auto rounded-xl shadow-lg hover:scale-105" asChild>
              <Link to="/templates">
                Ver Todos os Templates
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final Modernizada */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              Pronto para <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">automatizar</span> seus processos?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
              Transforme sua empresa com automação inteligente. 
              <span className="font-semibold text-white"> Consultoria gratuita</span> de 30 minutos 
              para descobrir seu potencial de automação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link to="/contato">
                <Button className="bg-gradient-cta hover:shadow-orange transition-all duration-300 font-bold text-lg px-8 py-4 h-auto rounded-xl shadow-lg hover:scale-105">
                  <Zap className="mr-3 h-6 w-6" />
                  Solicitar Consultoria Gratuita
                </Button>
              </Link>
              
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 h-auto rounded-xl" asChild>
                <a 
                  href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="mr-2 h-5 w-5" />
                  Ver Tutoriais
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