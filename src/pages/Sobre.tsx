import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, BookOpen, Video, Award, Code, Zap, Heart, Target, Rocket, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Sobre = () => {
  // SEO optimization
  useEffect(() => {
    document.title = "Sobre Jonathan da Cruz - Desenvolvedor & Instrutor de n8n | 6K+ Alunos";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Conheça Jonathan da Cruz, desenvolvedor de sistemas e instrutor especialista em n8n com 10 anos de experiência e 6K+ alunos na Udemy. Automação profissional e ensino prático.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Hidden H1 */}
      <h1 className="sr-only">Jonathan da Cruz - Desenvolvedor de Sistemas e Instrutor Especialista em n8n e Automação</h1>
      
      {/* Hero Section with Floating Elements */}
      <section className="relative pt-32 pb-20 px-4 lg:px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <Badge className="mb-8 px-6 py-2 bg-blue-100 text-blue-700 border-blue-200 text-base font-medium animate-fade-in">
            Desenvolvedor & Instrutor
          </Badge>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-slate-900 leading-tight tracking-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
            Jonathan{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text">
              da Cruz
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light animate-fade-in" style={{animationDelay: '0.4s'}}>
            Transformo ideias em soluções tecnológicas e ensino pessoas a dominarem automação profissional. 
            <br className="hidden md:block" />
            <span className="text-blue-600 font-medium">6K+ alunos</span> já mudaram suas carreiras comigo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="px-10 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 button-glow" asChild>
              <Link to="/automacao-n8n">
                <Rocket className="mr-3 h-5 w-5" />
                Ver Conteúdo
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-4 text-lg font-semibold rounded-xl border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 button-bounce" asChild>
              <Link to="/contato">
                <Heart className="mr-3 h-5 w-5" />
                Fale Comigo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 lg:px-6 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
              Impacto em Números
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Mais de uma década dedicada ao ensino e desenvolvimento
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">6K+</div>
                <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">Alunos Udemy</div>
              </CardContent>
            </Card>
            
            <Card className="group border-slate-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">Anos Experiência</div>
              </CardContent>
            </Card>
            
            <Card className="group border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-emerald-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">100+</div>
                <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">Vídeos</div>
              </CardContent>
            </Card>
            
            <Card className="group border-slate-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">Templates</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 lg:px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="px-4 py-2 bg-blue-100 text-blue-700 border-blue-200 font-medium">
                  Minha História
                </Badge>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Da Paixão por Código ao{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    Ensino
                  </span>
                </h3>
              </div>
              
              <div className="space-y-6 text-slate-700">
                <p className="text-lg leading-relaxed">
                  Minha jornada começou há mais de 10 anos, quando descobri que a tecnologia 
                  poderia resolver problemas reais de forma elegante e eficiente. Desde então, 
                  venho desenvolvendo sistemas e soluções que impactam milhares de pessoas.
                </p>
                <p className="leading-relaxed">
                  Como instrutor na Udemy, tive o privilégio de ensinar mais de <span className="font-semibold text-blue-600">6 mil pessoas</span>, 
                  sempre focando em aplicação prática e resultados reais. Cada aluno que transforma 
                  sua carreira é uma vitória que me motiva a continuar.
                </p>
                <p className="leading-relaxed">
                  No YouTube, compartilho conhecimento de forma gratuita, democratizando o acesso 
                  à educação tecnológica e mostrando que conceitos complexos podem ser simples 
                  quando bem explicados.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Code, text: "Desenvolvimento de sistemas escaláveis e eficientes" },
                  { icon: Zap, text: "Especialista em automação n8n e integração de APIs" },
                  { icon: Users, text: "Metodologia de ensino prática e orientada a resultados" },
                  { icon: Star, text: "Palestrante em eventos e workshops de tecnologia" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-slate-800 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 via-purple-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Target className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Foco na Prática</h4>
                  <p className="text-slate-600 max-w-sm">
                    Ensino sempre com exemplos reais e projetos aplicáveis no dia a dia profissional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 lg:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3),transparent_70%)]"></div>
        
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <Badge className="mb-8 px-6 py-2 bg-white/10 backdrop-blur-sm text-white border-white/20 text-base font-medium">
            Minha Missão
          </Badge>
          
          <h3 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Democratizar a{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text">
              Automação
            </span>
          </h3>
          
          <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
            Transformar vidas através da educação tecnológica, tornando automação e programação 
            acessíveis para todos que desejam evoluir profissionalmente.
          </p>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Acredito que tecnologia deve ser uma ponte, não uma barreira. Por isso, 
            foco sempre em soluções práticas, diretas e que geram resultados reais.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-blue-300">Simplicidade</div>
              <div className="text-slate-300 font-medium">Conceitos complexos de forma simples</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-purple-300">Prática</div>
              <div className="text-slate-300 font-medium">Foco em aplicação real</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-emerald-300">Resultado</div>
              <div className="text-slate-300 font-medium">Transformação de carreiras</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-10 py-4 rounded-xl shadow-2xl transition-all duration-300 button-pulse" asChild>
              <Link to="/automacao-n8n">
                <Rocket className="mr-3 h-5 w-5" />
                Começar Agora
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-10 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 button-magnetic" asChild>
              <Link to="/contato">
                <Heart className="mr-3 h-5 w-5" />
                Vamos Conversar
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;