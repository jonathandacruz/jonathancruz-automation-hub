import { Mail, Linkedin, Youtube, Instagram, MessageCircle, CheckCircle, Zap, ArrowRight, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
const Contato = () => {
  return <>
    <title>Contato - Jonathan da Cruz | Desenvolvedor e Especialista em Automação n8n</title>
    <meta name="description" content="Entre em contato com Jonathan da Cruz, desenvolvedor especialista em automação n8n. Consultoria profissional, suporte técnico e desenvolvimento de soluções personalizadas." />
    <meta name="keywords" content="contato jonathan da cruz, consultoria n8n, desenvolvedor automação, especialista n8n brasil, consultoria automação empresarial" />
    <meta property="og:title" content="Contato - Jonathan da Cruz | Especialista em Automação n8n" />
    <meta property="og:description" content="Consultoria profissional em automação n8n. Entre em contato para transformar seus processos empresariais com automação inteligente." />
    <meta property="og:url" content="https://jonathandacruz.com.br/contato" />

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section com CTA Principal */}
      <section className="py-20 lg:py-32 px-4 lg:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Especialista em Automação n8n
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-900 tracking-tight">
              Vamos criar algo
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mx-0 my-[10px] py-[10px]">
                incrível juntos?
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transforme seus processos com <strong>automação inteligente</strong>
              e descubra novas formas de impulsionar o potencial da sua empresa.
            </p>
          </div>

          {/* Contact Methods - Main CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* WhatsApp - Primary CTA */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <a href="https://wa.me/5554996137269" target="_blank" rel="noopener noreferrer" className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 group-hover:border-green-200 block">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">WhatsApp</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Conversa direta e rápida. Ideal para dúvidas pontuais e primeiros contatos.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Resposta imediata
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Consultoria
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <span className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    Iniciar conversa →
                  </span>
                </div>
              </a>
            </div>

            {/* Email - Secondary CTA */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <a href="mailto:contato@jonathandacruz.com.br" className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 group-hover:border-blue-200 block">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">E-mail</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Para projetos detalhados e propostas formais. Inclua o máximo de detalhes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-blue-600">
                    <Clock className="w-4 h-4 mr-2" />
                    Resposta em até 12h úteis
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <Shield className="w-4 h-4 mr-2" />
                    Proposta detalhada incluída
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    contato@jonathandacruz.com.br
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Trust Signals */}
           
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-2 px-1 lg:px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Como posso acelerar seu negócio
            </h2>
            <p className="text-lg text-slate-600">Soluções focadas em resultados práticos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Automação Completa</h3>
              <p className="text-slate-600 leading-relaxed">
                Workflows inteligentes que economizam horas de trabalho manual
              </p>
            </div>

            <div className="group text-center hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Consultoria Estratégica</h3>
              <p className="text-slate-600 leading-relaxed">
                Análise profunda dos seus processos para máxima eficiência
              </p>
            </div>

            <div className="group text-center hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Suporte Contínuo</h3>
              <p className="text-slate-600 leading-relaxed">
                Acompanhamento para garantir que tudo funcione perfeitamente
              </p>
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
            <a href="https://www.youtube.com/@jonathandacruz" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-red-200">
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

            <a href="https://linkedin.com/in/jonathan-dacruz" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200">
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

            <a href="https://instagram.com/jonathan_dacruz" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-pink-200">
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
            ✓ Consultoria facilitada • ✓ Resposta rápida • ✓ Especialista certificado
          </p>
        </div>
      </section>
    </div>
  </>;
};
export default Contato;