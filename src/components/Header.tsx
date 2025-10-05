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
    { name: "Comunidade N8n", href: "/automacao-n8n" },
    { name: "Templates", href: "/templates" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700 shadow-sm">
      <nav className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        {/* Logo Modernizado */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-brand group-hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <span className="text-2xl font-bold text-white">Jonathan</span>
            <div className="text-sm text-slate-300 font-medium -mt-1">Automação & Desenvolvimento</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 relative overflow-hidden group ${
                isActive(item.href)
                  ? "text-blue-400 bg-blue-500/20 shadow-lg"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {!isActive(item.href) && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
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
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-lg border-b border-slate-700 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-white bg-white/10"
                    : "text-white hover:bg-slate-800/50"
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