import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, BookOpen, Video, Award, Code, Zap, Heart, Target, Rocket, Star, ArrowUpRight, Github, Linkedin, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";

const Sobre = () => {
  // SEO optimization
  useEffect(() => {
    document.title = "Sobre Jonathan da Cruz - Desenvolvedor & Instrutor de n8n | 6K+ Alunos";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Conheça Jonathan da Cruz, desenvolvedor de sistemas e instrutor especialista em n8n com 10 anos de experiência e 6K+ alunos na Udemy. Automação profissional e ensino prático.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-brand-primary selection:text-white">
      {/* SEO Hidden H1 */}
      <h1 className="sr-only">Jonathan da Cruz - Desenvolvedor de Sistemas e Instrutor Especialista em n8n e Automação</h1>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10 max-w-7xl">

        {/* Header Section */}
        <div className="mb-16 text-center animate-fade-up">
          <Badge className="mb-6 px-4 py-1.5 bg-white/5 backdrop-blur-md text-slate-300 border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
            Desenvolvedor & Instrutor
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
            Jonathan <span className="text-transparent bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text">da Cruz</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Transformando complexidade em automação e conhecimento em carreira.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Card 1: Bio (Large) - 2x2 */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-8 hover:border-white/10 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center mb-6 text-brand-primary">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Paixão por Código</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Minha jornada começou há mais de 10 anos, descobrindo que a tecnologia poderia resolver problemas reais.
                  Hoje, dedico minha vida a criar sistemas escaláveis e ensinar outros a fazerem o mesmo.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <SocialLink icon={<Github className="w-5 h-5" />} href="#" label="GitHub" />
                <SocialLink icon={<Linkedin className="w-5 h-5" />} href="#" label="LinkedIn" />
                <SocialLink icon={<Instagram className="w-5 h-5" />} href="#" label="Instagram" />
              </div>
            </div>
          </div>

          {/* Card 2: Stat (Alunos) - 1x1 */}
          <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-6 hover:border-brand-primary/30 transition-all duration-500 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Users className="w-8 h-8 text-brand-primary mb-3" />
            <div className="text-4xl font-bold text-white mb-1">6K+</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Alunos</div>
          </div>

          {/* Card 3: Stat (XP) - 1x1 */}
          <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-6 hover:border-brand-secondary/30 transition-all duration-500 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <BookOpen className="w-8 h-8 text-brand-secondary mb-3" />
            <div className="text-4xl font-bold text-white mb-1">10+</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Anos XP</div>
          </div>

          {/* Card 4: Mission (Wide) - 2x1 */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-8 hover:border-white/10 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 h-full justify-center">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Minha Missão</h3>
                <p className="text-slate-400">
                  Democratizar a automação e tornar a programação acessível para todos que desejam evoluir profissionalmente.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center animate-pulse-soft">
                  <Target className="w-8 h-8 text-brand-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: YouTube (Wide) - 2x1 */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl bg-red-600/10 border border-white/5 p-6 hover:border-red-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 h-full">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0">
                  <Youtube className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Canal YouTube</h3>
                  <p className="text-slate-400 text-sm">Conteúdo gratuito semanal.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full lg:w-auto">
                <div className="text-center lg:text-right hidden lg:block">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Vídeos</div>
                </div>
                <a href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto">
                  <Button size="sm" className="w-full bg-red-600 hover:bg-red-700 text-white border-none whitespace-nowrap">
                    Inscrever-se
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 6: Skills (Wide) - 2x1 */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-8 hover:border-white/10 transition-all duration-500">
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4">Especialidades</h3>
              <div className="flex flex-wrap gap-2">
                <SkillTag label="n8n" />
                <SkillTag label="React" />
                <SkillTag label="Node.js" />
                <SkillTag label="APIs" />
                <SkillTag label="System Design" />
                <SkillTag label="Mentoria" />
              </div>
            </div>
          </div>

          {/* Card 7: CTA (Full Width) - 4x1 */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-primary/20 border border-white/10 p-8 lg:p-10 text-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Vamos construir algo incrível?</h3>
                <p className="text-slate-300">Estou disponível para consultorias e novos projetos.</p>
              </div>
              <div className="flex gap-4">
                <Link to="/contato">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl">
                    Fale Comigo <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/automacao-n8n">
                  <Button variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10 rounded-xl backdrop-blur-sm">
                    Ver Comunidade
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

const SkillTag = ({ label }: { label: string }) => (
  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default">
    {label}
  </span>
);

export default Sobre;