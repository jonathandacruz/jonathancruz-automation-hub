import { Mail, Linkedin, Youtube, Instagram, MessageCircle, CheckCircle, Zap, ArrowRight, Clock, Shield, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const Contato = () => {
  useEffect(() => {
    document.title = "Contato - Jonathan da Cruz | Desenvolvedor e Especialista em Automação n8n";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-primary selection:text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10 max-w-5xl">

        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-up">
          <Badge className="mb-6 px-4 py-1.5 bg-white/5 backdrop-blur-md text-brand-primary border-brand-primary/20 text-sm font-medium hover:bg-white/10 transition-colors">
            <Zap className="w-3 h-3 mr-2" />
            Vamos Conversar
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
            Vamos criar algo <br className="hidden md:block" />
            <span className="text-transparent bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text">
              incrível juntos?
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Transforme seus processos com automação inteligente e descubra novas formas de impulsionar o potencial da sua empresa.
          </p>
        </div>

        {/* Contact Methods - Main CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20 animate-fade-up" style={{ animationDelay: '0.2s' }}>

          {/* WhatsApp - Primary CTA */}
          <a href="https://wa.me/5554996137269" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-8 lg:p-10 hover:border-green-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 group-hover:text-green-500 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">WhatsApp</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Conversa direta e rápida. Ideal para dúvidas pontuais e primeiros contatos.
                </p>
                <div className="flex items-center gap-4 text-sm text-green-400 font-medium">
                  <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Resposta imediata</span>
                </div>
              </div>
            </div>
          </a>

          {/* Email - Secondary CTA */}
          <a href="mailto:contato@jonathandacruz.com.br" className="group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-brand-primary" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/20 group-hover:text-brand-primary transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">E-mail</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Para projetos detalhados e propostas formais. Inclua o máximo de detalhes.
                </p>
                <div className="flex items-center gap-4 text-sm text-brand-primary font-medium">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> Resposta em até 12h</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <SocialCard
            href="https://www.youtube.com/@jonathandacruz"
            icon={<Youtube className="w-6 h-6 text-red-500" />}
            label="YouTube"
            subLabel="Tutoriais práticos"
            hoverColor="hover:border-red-500/30"
            bgHover="group-hover:bg-red-500/5"
          />
          <SocialCard
            href="https://linkedin.com/in/jonathan-dacruz"
            icon={<Linkedin className="w-6 h-6 text-blue-500" />}
            label="LinkedIn"
            subLabel="Rede profissional"
            hoverColor="hover:border-blue-500/30"
            bgHover="group-hover:bg-blue-500/5"
          />
          <SocialCard
            href="https://instagram.com/jonathan_dacruz"
            icon={<Instagram className="w-6 h-6 text-pink-500" />}
            label="Instagram"
            subLabel="Bastidores"
            hoverColor="hover:border-pink-500/30"
            bgHover="group-hover:bg-pink-500/5"
          />
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center border-t border-white/5 pt-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-slate-500 text-sm">
            ✓ Consultoria facilitada • ✓ Resposta rápida • ✓ Especialista certificado
          </p>
        </div>

      </div>
    </div>
  );
};

const SocialCard = ({ href, icon, label, subLabel, hoverColor, bgHover }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center gap-4 p-6 rounded-2xl bg-slate-900/30 border border-white/5 transition-all duration-300 ${hoverColor} ${bgHover}`}
  >
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-white">{label}</h3>
      <p className="text-sm text-slate-400">{subLabel}</p>
    </div>
    <ArrowUpRight className="w-4 h-4 text-slate-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
  </a>
);

export default Contato;