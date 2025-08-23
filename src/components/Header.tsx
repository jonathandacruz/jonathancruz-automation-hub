import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Automação n8n", href: "/automacao-n8n" },
    { name: "Templates", href: "/templates" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        {/* Logo Modernizado */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-brand group-hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <span className="text-2xl font-bold text-foreground">Jonathan</span>
            <div className="text-sm text-muted-foreground font-medium -mt-1">Automação & Desenvolvimento</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-slate-100 ${
                isActive(item.href)
                  ? "text-brand-primary bg-blue-50"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/contato">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Fale Comigo
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-brand-primary bg-blue-50"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 h-auto rounded-xl shadow-lg">
                Fale Comigo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;