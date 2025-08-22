import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Youtube, Instagram, MapPin, Clock, Send } from "lucide-react";

const Contato = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-6 bg-brand-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Entre em <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem alguma dúvida, sugestão ou quer conversar sobre tecnologia e automação? 
            Ficarei feliz em ajudar você!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Envie uma Mensagem</h2>
              <Card className="border-0 shadow-brand">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome *</Label>
                        <Input 
                          id="name" 
                          placeholder="Seu nome completo"
                          className="border-border focus:border-brand-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="seu@email.com"
                          className="border-border focus:border-brand-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto *</Label>
                      <Input 
                        id="subject" 
                        placeholder="Sobre o que você gostaria de falar?"
                        className="border-border focus:border-brand-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Descreva sua dúvida, sugestão ou como posso ajudar você..."
                        rows={6}
                        className="border-border focus:border-brand-primary"
                      />
                    </div>
                    
                    <Button variant="brand" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

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
                      <h3 className="font-semibold mb-1">E-mail</h3>
                      <p className="text-muted-foreground">contato@jonathancruz.dev</p>
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
                      <p className="text-muted-foreground">Brasil</p>
                      <p className="text-sm text-muted-foreground">Atendimento remoto</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Conecte-se nas Redes Sociais</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Youtube className="h-8 w-8 text-red-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <h4 className="font-semibold mb-1">YouTube</h4>
                      <p className="text-sm text-muted-foreground">Tutoriais e conteúdo</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Linkedin className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <h4 className="font-semibold mb-1">LinkedIn</h4>
                      <p className="text-sm text-muted-foreground">Rede profissional</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Instagram className="h-8 w-8 text-pink-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <h4 className="font-semibold mb-1">Instagram</h4>
                      <p className="text-sm text-muted-foreground">Bastidores e dicas</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Mail className="h-8 w-8 text-brand-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <h4 className="font-semibold mb-1">E-mail</h4>
                      <p className="text-sm text-muted-foreground">Contato direto</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Perguntas Frequentes</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-brand">
                    <h4 className="font-semibold text-sm mb-2">💼 Você oferece consultoria?</h4>
                    <p className="text-sm text-muted-foreground">
                      Sim! Ofereço consultoria em automação, desenvolvimento e otimização de processos.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-brand">
                    <h4 className="font-semibold text-sm mb-2">🎓 Tem cursos disponíveis?</h4>
                    <p className="text-sm text-muted-foreground">
                      Tenho cursos na Udemy e conteúdo gratuito no YouTube. Confira a seção Conteúdo.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-brand">
                    <h4 className="font-semibold text-sm mb-2">⚡ Como solicitar um template personalizado?</h4>
                    <p className="text-sm text-muted-foreground">
                      Entre em contato descrevendo sua necessidade. Avalio a viabilidade e prazo.
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
  );
};

export default Contato;