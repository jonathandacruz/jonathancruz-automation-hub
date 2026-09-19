import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Workflow, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Comunidade", href: "/automacao-n8n" },
  { name: "Templates", href: "/templates" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || isMenuOpen
          ? "border-white/10 bg-[#0b1020]/95 backdrop-blur-xl"
          : "border-transparent bg-[#0b1020]/55 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[76px] w-[calc(100%-2rem)] max-w-[1180px] items-center justify-between" aria-label="Navegação principal">
        <Link to="/" className="group flex items-center gap-3" aria-label="Jonathan da Cruz — início">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/20 bg-blue-600/15 text-cyan-300 transition-colors group-hover:bg-blue-600/25">
            <Workflow size={21} strokeWidth={2.2} />
          </span>
          <span className="grid leading-none">
            <strong className="font-display text-base font-semibold tracking-tight text-white">Jonathan da Cruz</strong>
            <small className="mt-1 text-[11px] font-medium text-slate-400">Automação com n8n</small>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm font-semibold transition-colors ${
                  active ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {item.name}
                {active && <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-cyan-300" />}
              </Link>
            );
          })}
        </div>

        <Link
          to="/contato"
          className="hidden items-center gap-2 rounded-lg border border-white/15 bg-white/[.06] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:border-cyan-300/40 hover:bg-white/10 lg:flex"
        >
          Fale comigo
          <ArrowUpRight size={16} />
        </Link>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[#0b1020] px-4 pb-5 pt-3 lg:hidden">
          <div className="mx-auto grid max-w-[1180px] gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`rounded-lg px-3 py-3 text-base font-semibold ${
                  location.pathname === item.href ? "bg-blue-600/15 text-cyan-200" : "text-slate-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contato" className="mt-2 flex items-center justify-between rounded-lg bg-blue-600 px-3 py-3 font-bold text-white">
              Fale comigo
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
