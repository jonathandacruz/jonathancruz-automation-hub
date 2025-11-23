import { Youtube, Linkedin, Instagram, Mail, Zap, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group w-fit">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-brand transition-all duration-300">
                <Zap className="h-5 w-5 text-white fill-white" />
              </div>
              <div>
                <span className="text-xl font-display font-bold text-white tracking-tight">Jonathan</span>
                <div className="text-xs text-slate-400 font-medium -mt-1 tracking-wide">Automação & AI</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Transformando processos complexos em fluxos automatizados eficientes.
              Especialista em n8n e integração de sistemas.
            </p>
            <div className="flex items-center space-x-4">
              <SocialLink href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA" icon={<Youtube size={18} />} label="YouTube" color="hover:bg-red-600" />
              <SocialLink href="https://linkedin.com/in/jonathan-dacruz" icon={<Linkedin size={18} />} label="LinkedIn" color="hover:bg-blue-600" />
              <SocialLink href="https://instagram.com/jonathan_dacruz" icon={<Instagram size={18} />} label="Instagram" color="hover:bg-pink-600" />
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Navegação</h4>
            <ul className="space-y-3">
              <FooterLink to="/sobre">Sobre Mim</FooterLink>
              <FooterLink to="/automacao-n8n">Comunidade n8n</FooterLink>
              <FooterLink to="/templates">Templates Premium</FooterLink>
              <FooterLink to="/contato">Fale Comigo</FooterLink>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Recursos</h4>
            <ul className="space-y-3">

              <FooterLink to="/termos">Termos de Uso</FooterLink>
              <FooterLink to="/privacidade">Política de Privacidade</FooterLink>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Fique Atualizado</h4>
            <p className="text-slate-400 text-sm mb-4">
              Receba dicas de automação e novidades sobre n8n diretamente no seu e-mail.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all"
                />
              </div>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/20">
                Inscrever-se <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Jonathan da Cruz. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <span>Feito com</span>
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            <span>no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-white hover:-translate-y-1 ${color}`}
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link
      to={to}
      className="text-slate-400 hover:text-brand-primary transition-colors duration-200 text-sm flex items-center group"
    >
      <span className="w-0 group-hover:w-2 h-px bg-brand-primary mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
      {children}
    </Link>
  </li>
);

export default Footer;