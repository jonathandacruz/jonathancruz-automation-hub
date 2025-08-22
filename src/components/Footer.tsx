import { Youtube, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">JC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Jonathan da Cruz</h3>
                <p className="text-white/80 text-sm">Desenvolvedor & Instrutor</p>
              </div>
            </div>
            <p className="text-white/80 text-sm max-w-md">
              Ajudando pessoas a dominarem tecnologia e automação de processos com conteúdo prático e acessível.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="/conteudo" className="hover:text-white transition-colors">Conteúdo</a></li>
              <li><a href="/automacao-n8n" className="hover:text-white transition-colors">Automação n8n</a></li>
              <li><a href="/templates" className="hover:text-white transition-colors">Templates</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-semibold mb-4">Conecte-se</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Youtube size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="mailto:contato@jonathancruz.dev" 
                className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2024 Jonathan da Cruz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;