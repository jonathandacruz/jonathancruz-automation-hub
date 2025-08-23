import { Mail, Linkedin, Youtube, Instagram, MessageCircle, CheckCircle, Zap } from "lucide-react";

const Contato = () => {
  return (
    <>
      <title>Contato - Jonathan da Cruz | Desenvolvedor e Especialista em Automação n8n</title>
      <meta name="description" content="Entre em contato com Jonathan da Cruz, desenvolvedor especialista em automação n8n. Consultoria profissional, suporte técnico e desenvolvimento de soluções personalizadas." />
      <meta name="keywords" content="contato jonathan da cruz, consultoria n8n, desenvolvedor automação, especialista n8n brasil, consultoria automação empresarial" />
      <meta property="og:title" content="Contato - Jonathan da Cruz | Especialista em Automação n8n" />
      <meta property="og:description" content="Consultoria profissional em automação n8n. Entre em contato para transformar seus processos empresariais com automação inteligente." />
      <meta property="og:url" content="https://jonathandacruz.com.br/contato" />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section Minimalista */}
        <section className="py-32 px-4 lg:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-slate-900">
                Vamos Conversar?
              </h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                Transforme seus processos com automação inteligente.
              </p>
              
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a 
                  href="mailto:contato@jonathandacruz.com.br"
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900">E-mail</h3>
                    <p className="text-blue-600 font-medium">contato@jonathandacruz.com.br</p>
                    <div className="flex items-center mt-3 text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Resposta em até 12h
                    </div>
                  </div>
                </a>

                <a 
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-green-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                      <MessageCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-900">WhatsApp</h3>
                    <p className="text-green-600 font-medium">Mensagem direta</p>
                    <div className="flex items-center mt-3 text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Consultoria gratuita
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 lg:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Como posso ajudar</h2>
              <p className="text-slate-600">Serviços especializados em automação</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Automação n8n</h3>
                <p className="text-slate-600">Implementação completa de workflows automatizados</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Consultoria</h3>
                <p className="text-slate-600">Análise e estratégia para otimizar processos</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Treinamentos</h3>
                <p className="text-slate-600">Capacitação de equipes em automação</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 px-4 lg:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Conecte-se</h2>
              <p className="text-slate-600">Acompanhe conteúdo e novidades</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="https://youtube.com/@jonathancruz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-red-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <Youtube className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">YouTube</h3>
                    <p className="text-sm text-slate-600">Tutoriais práticos</p>
                  </div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/jonathancruz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">LinkedIn</h3>
                    <p className="text-sm text-slate-600">Rede profissional</p>
                  </div>
                </div>
              </a>

              <a 
                href="https://instagram.com/jonathancruz.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-pink-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Instagram</h3>
                    <p className="text-sm text-slate-600">Bastidores</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Simple Footer */}
        <section className="py-12 px-4 lg:px-6 bg-slate-50">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-slate-600">
              ✓ Consultoria gratuita • ✓ Resposta rápida • ✓ Especialista certificado
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contato;