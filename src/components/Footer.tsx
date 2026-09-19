import { Instagram, Linkedin, Workflow, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080d19] text-slate-300">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px] py-14 sm:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.25fr_.75fr_.75fr]">
          <div>
            <Link to="/" className="flex w-fit items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/20 bg-blue-600/15 text-cyan-300">
                <Workflow size={21} />
              </span>
              <span className="font-display text-lg font-semibold text-white">Jonathan da Cruz</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Educação, templates e consultoria para transformar processos manuais em automações claras, seguras e sustentáveis.
            </p>
            <div className="mt-6 flex gap-2">
              <SocialLink href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA" label="YouTube"><Youtube size={18} /></SocialLink>
              <SocialLink href="https://linkedin.com/in/jonathan-dacruz" label="LinkedIn"><Linkedin size={18} /></SocialLink>
              <SocialLink href="https://instagram.com/jonathan_dacruz" label="Instagram"><Instagram size={18} /></SocialLink>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white">Explore</h2>
            <nav className="mt-5 grid gap-3 text-sm" aria-label="Navegação do rodapé">
              <FooterLink to="/sobre">Sobre</FooterLink>
              <FooterLink to="/automacao-n8n">Comunidade n8n</FooterLink>
              <FooterLink to="/templates">Templates</FooterLink>
              <FooterLink to="/contato">Contato</FooterLink>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white">Informações</h2>
            <nav className="mt-5 grid gap-3 text-sm" aria-label="Links legais">
              <FooterLink to="/termos">Termos de uso</FooterLink>
              <FooterLink to="/privacidade">Privacidade</FooterLink>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Jonathan da Cruz. Todos os direitos reservados.</p>
          <p>Automação útil começa com um processo bem entendido.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[.04] text-slate-400 transition-colors hover:border-cyan-300/30 hover:text-cyan-200"
  >
    {children}
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="w-fit text-slate-400 transition-colors hover:text-white">
    {children}
  </Link>
);

export default Footer;
