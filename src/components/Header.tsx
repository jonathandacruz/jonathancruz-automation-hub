import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Comunidade N8n", href: "/automacao-n8n" },
    { name: "Templates", href: "/templates" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-lg py-2" : "bg-transparent py-4"
        }`}
    >
      <nav className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary shadow-glow group-hover:shadow-brand transition-all duration-300 group-hover:scale-105">
            <Zap className="h-5 w-5 text-white fill-white" />
          </div>
          <div className="hidden sm:block">
            <span className="text-xl font-display font-bold text-white tracking-tight">Jonathan</span>
            <div className="text-xs text-slate-400 font-medium -mt-1 tracking-wide">Automação & AI</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center bg-white/5 backdrop-blur-sm rounded-full px-2 py-1 border border-white/5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${isActive(item.href)
                  ? "text-white bg-white/10 shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/contato">
            <Button className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold px-6 py-2 h-auto rounded-full shadow-glow hover:shadow-brand transition-all duration-300 hover:-translate-y-0.5">
              Fale Comigo
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden p-2 text-white hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-fade-up">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isActive(item.href)
                    ? "text-white bg-brand-primary/20 border border-brand-primary/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 h-auto rounded-xl shadow-glow">
                  Fale Comigo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;