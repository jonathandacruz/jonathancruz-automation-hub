import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Youtube, Instagram, MapPin, Clock, CheckCircle, Zap, Users, Star } from "lucide-react";

const Contato = () => {
  return (
    <>
      <title>Contato - Jonathan da Cruz | Desenvolvedor e Especialista em Automação n8n</title>
      <meta name="description" content="Entre em contato com Jonathan da Cruz, desenvolvedor especialista em automação n8n. Consultoria profissional, suporte técnico e desenvolvimento de soluções personalizadas." />
      <meta name="keywords" content="contato jonathan da cruz, consultoria n8n, desenvolvedor automação, especialista n8n brasil, consultoria automação empresarial" />
      <meta property="og:title" content="Contato - Jonathan da Cruz | Especialista em Automação n8n" />
      <meta property="og:description" content="Consultoria profissional em automação n8n. Entre em contato para transformar seus processos empresariais com automação inteligente." />
      <meta property="og:url" content="https://jonathandacruz.com.br/contato" />
      
      <div className="pt-16 overflow-hidden">
        {/* Hero Section Modernizado */}
        <section className="py-24 px-4 lg:px-6 bg-gradient-to-br from-brand-muted via-white to-blue-50/30 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto text-center relative z-10">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-brand-primary border-brand-primary/20 bg-brand-primary/5">
                <Zap className="w-4 h-4 mr-2" />
                Especialista em Automação n8n
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Vamos Conversar?
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Transforme seus processos empresariais com automação inteligente. 
                <span className="text-brand-primary font-semibold"> Consultoria especializada</span> para maximizar sua eficiência.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Principal */}
        <section className="py-20 px-4 lg:px-6 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Coluna 1: Informações de Contato */}
              <div className="lg:col-span-1 space-y-8">
                <div className="animate-scale-in">
                  <h2 className="text-3xl font-bold mb-8 text-foreground">Entre em Contato</h2>
                  
                  {/* Contato Principal */}
                  <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-500 group bg-gradient-to-br from-white to-blue-50/20">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Mail className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2">E-mail Profissional</h3>
                          <a 
                            href="mailto:contato@jonathandacruz.com.br" 
                            className="text-brand-primary hover:text-brand-primary/80 text-lg font-semibold transition-colors duration-200 story-link"
                          >
                            contato@jonathandacruz.com.br
                          </a>
                          <div className="flex items-center mt-3 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            Resposta garantida em até 12h úteis
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Informações Adicionais */}
                  <div className="grid grid-cols-1 gap-4">
                    <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 hover-scale">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Clock className="h-6 w-6 text-brand-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Horário de Atendimento</h4>
                            <p className="text-muted-foreground">Segunda a Sexta: 8h às 17h</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 hover-scale">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Consultoria Remota</h4>
                            <p className="text-muted-foreground">Brasil e Internacional</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Coluna 2: Serviços */}
              <div className="lg:col-span-1 space-y-6">
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Serviços Especializados</h3>
                  
                  <div className="space-y-4">
                    <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group bg-gradient-to-br from-white to-blue-50/10">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                            <Zap className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-2">Automação n8n</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Implementação completa de workflows automatizados para otimizar operações empresariais
                            </p>
                            <div className="flex items-center mt-3">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="text-sm font-medium">Especialidade Principal</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                            <Users className="h-6 w-6 text-orange-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-2">Treinamentos</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Capacitação de equipes em automação, desde básico até implementações avançadas
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                            <CheckCircle className="h-6 w-6 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-2">Integrações Custom</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Desenvolvimento de conexões únicas entre sistemas e plataformas
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Coluna 3: Redes Sociais e FAQ */}
              <div className="lg:col-span-1 space-y-8">
                {/* Redes Sociais */}
                <div className="animate-scale-in">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Conecte-se</h3>
                  <div className="space-y-3">
                    <a href="https://youtube.com/@jonathancruz" target="_blank" rel="noopener noreferrer" className="block">
                      <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Youtube className="h-6 w-6 text-red-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">YouTube</h4>
                              <p className="text-sm text-muted-foreground">Tutoriais práticos</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>

                    <a href="https://linkedin.com/in/jonathancruz" target="_blank" rel="noopener noreferrer" className="block">
                      <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Linkedin className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">LinkedIn</h4>
                              <p className="text-sm text-muted-foreground">Rede profissional</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>

                    <a href="https://instagram.com/jonathancruz.dev" target="_blank" rel="noopener noreferrer" className="block">
                      <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Instagram className="h-6 w-6 text-pink-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">Instagram</h4>
                              <p className="text-sm text-muted-foreground">Bastidores</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </div>
                </div>

                {/* FAQ Compacto */}
                <div className="animate-fade-in">
                  <h3 className="text-xl font-bold mb-4 text-foreground">FAQ Rápido</h3>
                  <div className="space-y-3">
                    <Card className="border-0 shadow-brand bg-gradient-to-br from-white to-blue-50/10">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-sm mb-2">💼 Análise gratuita?</h4>
                        <p className="text-sm text-muted-foreground">
                          Sim! 30 minutos iniciais sem custo para avaliar seu projeto.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-brand bg-gradient-to-br from-white to-green-50/10">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-sm mb-2">⏱️ Prazo de entrega?</h4>
                        <p className="text-sm text-muted-foreground">
                          Projetos simples: 3-7 dias. Complexos: 15-30 dias.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-brand bg-gradient-to-br from-white to-purple-50/10">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-sm mb-2">🌍 Atendimento global?</h4>
                        <p className="text-sm text-muted-foreground">
                          Sim! Consultoria remota para todo o mundo.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final Modernizado */}
        <section className="py-24 px-4 lg:px-6 bg-gradient-cta relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto text-center relative z-10">
            <div className="animate-scale-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
                Pronto para automatizar?
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                Transforme sua empresa com automação inteligente. 
                <span className="font-semibold"> Análise gratuita</span> de 30 minutos para descobrir seu potencial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:contato@jonathandacruz.com.br" 
                  className="inline-flex items-center px-8 py-4 bg-white text-brand-primary hover:bg-white/90 rounded-xl font-bold text-lg transition-all duration-300 shadow-orange hover:shadow-glow hover-scale group"
                >
                  <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  Solicitar Consultoria Gratuita
                </a>
                <div className="text-white/80 text-sm">
                  ✓ Sem compromisso • ✓ Resposta em 12h • ✓ Especialista certificado
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contato;