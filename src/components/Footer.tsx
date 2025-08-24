import { Youtube, Linkedin, Instagram, Mail, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>

      <div className="container mx-auto px-4 lg:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Jonathan da Cruz</h3>
                <p className="text-slate-300 text-lg">Especialista em Automação n8n</p>
              </div>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed max-w-md mb-6">
              Transformando processos empresariais através de automação inteligente.
              Ajudando empresas a economizar tempo e recursos com soluções n8n personalizadas.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Disponível para novos projetos</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/sobre" className="text-slate-300 hover:text-white transition-colors duration-200 hover:underline">
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link to="/automacao-n8n" className="text-slate-300 hover:text-white transition-colors duration-200 hover:underline">
                  Automação n8n
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-slate-300 hover:text-white transition-colors duration-200 hover:underline">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-slate-300 hover:text-white transition-colors duration-200 hover:underline">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Conecte-se */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Conecte-se</h4>
            <div className="space-y-4 mb-6">
              <a
                href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Youtube size={18} />
                </div>
                <span>YouTube</span>
              </a>

              <a
                href="https://linkedin.com/in/jonathan-dacruz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Linkedin size={18} />
                </div>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://instagram.com/jonathan_dacruz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Instagram size={18} />
                </div>
                <span>Instagram</span>
              </a>

              <a
                href="mailto:contato@jonathandacruz.com.br"
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-slate-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Mail size={18} />
                </div>
                <span>E-mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              <footer className="text-center py-4">
                &copy; {new Date().getFullYear()} Jonathan da Cruz. Todos os direitos reservados.
              </footer>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Feito com ❤️ no Brasil</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;