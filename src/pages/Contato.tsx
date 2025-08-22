import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Youtube, Instagram, MapPin, Clock } from "lucide-react";

const Contato = () => {
  return (
    <>
      <title>Contato - Jonathan da Cruz | Desenvolvedor e Especialista em Automação n8n</title>
      <meta name="description" content="Entre em contato com Jonathan da Cruz, desenvolvedor especialista em automação n8n. Consultoria profissional, suporte técnico e desenvolvimento de soluções personalizadas." />
      <meta name="keywords" content="contato jonathan da cruz, consultoria n8n, desenvolvedor automação, especialista n8n brasil, consultoria automação empresarial" />
      <meta property="og:title" content="Contato - Jonathan da Cruz | Especialista em Automação n8n" />
      <meta property="og:description" content="Consultoria profissional em automação n8n. Entre em contato para transformar seus processos empresariais com automação inteligente." />
      <meta property="og:url" content="https://jonathandacruz.com.br/contato" />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 lg:px-6 bg-brand-muted">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Entre em <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Especialista em automação empresarial com n8n. Consultoria profissional para otimizar seus processos de negócio.
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
                        <h3 className="font-semibold mb-1">E-mail Profissional</h3>
                        <a href="mailto:contato@jonathandacruz.com.br" className="text-brand-primary hover:underline text-lg font-medium">
                          contato@jonathandacruz.com.br
                        </a>
                        <p className="text-sm text-muted-foreground">Resposta garantida em até 12 horas úteis</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">Segunda a Sexta: 8h às 17h</p>
                        <p className="text-sm text-muted-foreground">Fuso horário de Brasília (GMT-3)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Localização & Atendimento</h3>
                        <p className="text-muted-foreground">Brasil - Consultoria Remota</p>
                        <p className="text-sm text-muted-foreground">Atendimento nacional e internacional</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Available */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Serviços Disponíveis</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-6 shadow-brand border-l-4 border-brand-primary">
                      <h4 className="font-semibold mb-2 flex items-center">
                        🤖 <span className="ml-2">Consultoria em Automação n8n</span>
                      </h4>
                      <p className="text-muted-foreground">
                        Análise completa de processos, implementação de workflows automatizados e otimização de operações empresariais.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-brand border-l-4 border-brand-accent">
                      <h4 className="font-semibold mb-2 flex items-center">
                        ⚡ <span className="ml-2">Desenvolvimento de Integrações</span>
                      </h4>
                      <p className="text-muted-foreground">
                        Conecte sistemas, APIs e plataformas para criar fluxos de trabalho únicos e eficientes para seu negócio.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-brand border-l-4 border-brand-primary">
                      <h4 className="font-semibold mb-2 flex items-center">
                        📚 <span className="ml-2">Treinamentos Corporativos</span>
                      </h4>
                      <p className="text-muted-foreground">
                        Capacitação de equipes para dominar automação n8n, desde o básico até implementações avançadas.
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

                    <a href="mailto:contato@jonathandacruz.com.br">
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
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-brand">
                      <h4 className="font-semibold mb-3">💼 Como funciona a consultoria em automação?</h4>
                      <p className="text-muted-foreground">
                        Oferecemos análise inicial gratuita de até 30 minutos, seguida de proposta personalizada com cronograma detalhado e acompanhamento completo durante a implementação.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-brand">
                      <h4 className="font-semibold mb-3">⏰ Qual o prazo de resposta e entrega?</h4>
                      <p className="text-muted-foreground">
                        E-mails profissionais respondidos em até 12h úteis. Projetos de automação simples: 3-7 dias. Projetos complexos: 15-30 dias com acompanhamento semanal.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-brand">
                      <h4 className="font-semibold mb-3">🌍 Atendem empresas de qualquer porte?</h4>
                      <p className="text-muted-foreground">
                        Sim! De startups a grandes corporações. Consultoria remota para clientes no Brasil e exterior, com metodologia adaptada ao porte da empresa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 lg:px-6 bg-gradient-cta text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para automatizar seus processos?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Transforme sua empresa com automação inteligente. Entre em contato para uma análise gratuita 
              e descubra como economizar tempo e recursos com n8n.
            </p>
            <a 
              href="mailto:contato@jonathandacruz.com.br" 
              className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/30 text-white hover:bg-white/20 rounded-lg font-semibold transition-all duration-300 shadow-orange hover:shadow-glow"
            >
              <Mail className="mr-3 h-6 w-6" />
              Solicitar Consultoria Gratuita
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contato;