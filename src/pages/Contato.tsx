import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Youtube, Instagram, MapPin, Clock } from "lucide-react";

const Contato = () => {
  return (
    <>
      <title>Contato - Jonathan Cruz | Desenvolvedor e Especialista em Automação</title>
      <meta name="description" content="Entre em contato com Jonathan Cruz, desenvolvedor e especialista em automação. Consultoria, suporte e parcerias em tecnologia e n8n." />
      <meta name="keywords" content="contato jonathan cruz, consultoria automação, desenvolvedor freelance, suporte n8n, contato desenvolvedor" />
      <meta property="og:title" content="Contato - Jonathan Cruz | Desenvolvedor e Especialista em Automação" />
      <meta property="og:description" content="Entre em contato para consultoria, suporte e parcerias em tecnologia e automação." />
      <meta property="og:url" content="https://jonathancruz.dev/contato" />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 lg:px-6 bg-brand-muted">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Entre em <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Especialista em desenvolvimento e automação. Consultoria, suporte técnico e parcerias em tecnologia.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 lg:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">E-mail Principal</h3>
                        <a href="mailto:contato@jonathancruz.dev" className="text-brand-primary hover:underline">
                          contato@jonathancruz.dev
                        </a>
                        <p className="text-sm text-muted-foreground">Respondo em até 24 horas</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                        <p className="text-sm text-muted-foreground">Fuso horário de Brasília (GMT-3)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Localização</h3>
                        <p className="text-muted-foreground">Brasil - Atendimento Remoto</p>
                        <p className="text-sm text-muted-foreground">Consultoria online mundial</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Available */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Serviços Disponíveis</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-brand border-l-4 border-brand-primary">
                      <h4 className="font-semibold text-sm mb-1">🔧 Consultoria em Automação</h4>
                      <p className="text-sm text-muted-foreground">
                        Análise de processos e implementação de soluções com n8n
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-brand border-l-4 border-brand-primary">
                      <h4 className="font-semibold text-sm mb-1">💻 Desenvolvimento Custom</h4>
                      <p className="text-sm text-muted-foreground">
                        Criação de aplicações e integrações personalizadas
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-brand border-l-4 border-brand-primary">
                      <h4 className="font-semibold text-sm mb-1">📚 Treinamentos</h4>
                      <p className="text-sm text-muted-foreground">
                        Cursos e workshops para equipes e empresas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media & Contact Methods */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Conecte-se nas Redes Sociais</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <a href="https://youtube.com/@jonathancruz" target="_blank" rel="noopener noreferrer">
                      <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                        <CardContent className="p-6 flex items-center space-x-4">
                          <Youtube className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform" />
                          <div>
                            <h4 className="font-semibold">YouTube</h4>
                            <p className="text-sm text-muted-foreground">Tutoriais e automações práticas</p>
                          </div>
                        </CardContent>
                      </Card>
                    </a>

                    <a href="https://linkedin.com/in/jonathancruz" target="_blank" rel="noopener noreferrer">
                      <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                        <CardContent className="p-6 flex items-center space-x-4">
                          <Linkedin className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                          <div>
                            <h4 className="font-semibold">LinkedIn</h4>
                            <p className="text-sm text-muted-foreground">Rede profissional e artigos</p>
                          </div>
                        </CardContent>
                      </Card>
                    </a>

                    <a href="https://instagram.com/jonathancruz.dev" target="_blank" rel="noopener noreferrer">
                      <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                        <CardContent className="p-6 flex items-center space-x-4">
                          <Instagram className="h-8 w-8 text-pink-600 group-hover:scale-110 transition-transform" />
                          <div>
                            <h4 className="font-semibold">Instagram</h4>
                            <p className="text-sm text-muted-foreground">Bastidores e dicas rápidas</p>
                          </div>
                        </CardContent>
                      </Card>
                    </a>

                    <a href="mailto:contato@jonathancruz.dev">
                      <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                        <CardContent className="p-6 flex items-center space-x-4">
                          <Mail className="h-8 w-8 text-brand-primary group-hover:scale-110 transition-transform" />
                          <div>
                            <h4 className="font-semibold">E-mail Direto</h4>
                            <p className="text-sm text-muted-foreground">Contato profissional imediato</p>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Perguntas Frequentes</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-brand">
                      <h4 className="font-semibold text-sm mb-2">💼 Como funciona a consultoria?</h4>
                      <p className="text-sm text-muted-foreground">
                        Análise gratuita inicial, proposta personalizada e acompanhamento durante implementação.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-brand">
                      <h4 className="font-semibold text-sm mb-2">⏰ Qual o prazo de resposta?</h4>
                      <p className="text-sm text-muted-foreground">
                        E-mails profissionais são respondidos em até 24h úteis. Urgências pelo LinkedIn.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-brand">
                      <h4 className="font-semibold text-sm mb-2">🌍 Atendem clientes internacionais?</h4>
                      <p className="text-sm text-muted-foreground">
                        Sim! Consultoria remota para clientes no Brasil e exterior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 lg:px-6 bg-gradient-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Vamos conversar?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Estou sempre disponível para ajudar com dúvidas sobre tecnologia, 
              automação ou qualquer projeto que você tenha em mente.
            </p>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <a href="mailto:contato@jonathancruz.dev" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail Direto
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contato;