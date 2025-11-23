import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { Youtube, BookOpen, ArrowRight, Code, Database, Zap, CheckCircle, Star, Shield, Users, MessageCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage = "/lovable-uploads/logo-compiled.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Seo
        title="Automação n8n e Consultoria | Jonathan da Cruz"
        description="Especialista em automação com n8n. Conecte sistemas, elimine tarefas repetitivas e aumente produtividade com consultoria e templates prontos."
        keywords={[
          "n8n", "automação", "automação de processos", "automação n8n", "integração de sistemas",
          "workflows automatizados", "automação empresarial", "consultoria n8n", "templates n8n"
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse-soft" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-brand-primary shadow-glow">
                <Zap className="w-4 h-4 fill-brand-primary" />
                <span>Especialista em Automação n8n</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight tracking-tight">
                Automação <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary">
                  Inteligente
                </span>
              </h1>

              <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                Domine o n8n com nossa comunidade exclusiva, templates premium e consultoria especializada. Aprenda a transformar processos manuais em automação.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/automacao-n8n">
                  <Button className="w-full sm:w-auto bg-brand-primary hover:bg-brand-secondary text-white px-8 py-6 text-lg rounded-xl shadow-glow hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
                    <Zap className="mr-2 h-5 w-5" />
                    Assinar Comunidade
                  </Button>
                </Link>

                <Link to="/templates">
                  <Button variant="outline" className="w-full sm:w-auto border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Ver Templates
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-white/5">
                <Stat number="6K+" label="Alunos" />
                <Stat number="100+" label="Automações" />
                <Stat number="5.0" label="Avaliação" />
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative lg:h-[600px] flex items-center justify-center animate-float">
              <div className="relative w-64 lg:w-full lg:max-w-xl mx-auto animate-float">
                <div className="absolute inset-0 bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none" />
                <img
                  src="/lovable-uploads/logo-compiled.png"
                  alt="Dashboard n8n"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4 shadow-xl z-20 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-white">Automação em Tempo Real</p>
                    <p className="text-xs text-slate-400">Workflows Ativos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card/30 relative">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              Tudo para sua jornada de <span className="text-brand-primary">automação</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Recursos completos para você aprender, implementar e escalar suas automações com n8n.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-brand-primary" />}
              title="Trilhas Guiadas"
              description="Do zero ao avançado. Aprenda a criar fluxos complexos com nossa metodologia passo a passo."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-brand-secondary" />}
              title="Templates Premium"
              description="Biblioteca de fluxos prontos para usar. Economize horas de desenvolvimento com modelos testados."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-brand-accent" />}
              title="Comunidade Ativa"
              description="Networking com outros especialistas. Tire dúvidas e compartilhe experiências em nosso grupo exclusivo."
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-8">
                O que os alunos dizem
              </h2>
              <div className="space-y-6">
                <TestimonialCard
                  quote="Em duas semanas publiquei 4 automações no trabalho e reduzi tarefas repetitivas em 60%."
                  author="Ricardo Silva"
                  role="Product Manager"
                />
                <TestimonialCard
                  quote="Os templates me salvaram dias de trabalho. A integração com WhatsApp ficou perfeita."
                  author="Ana Paula"
                  role="Marketing Digital"
                />
                <TestimonialCard
                  quote="A didática do Jonathan é incrível. Finalmente entendi como usar Webhooks corretamente."
                  author="Carlos Eduardo"
                  role="Desenvolvedor"
                />
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-red-600 to-red-900 rounded-3xl p-10 text-white overflow-hidden shadow-2xl shadow-red-900/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <Youtube className="w-16 h-16 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Aprenda no YouTube</h3>
                <p className="text-white/80 mb-8 text-lg">
                  Conteúdo gratuito semanal sobre n8n, automação e tecnologia. Junte-se a milhares de inscritos.
                </p>
                <a
                  href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-red-600 hover:bg-white/90 font-bold px-8 py-6 rounded-xl shadow-lg transition-all hover:scale-105">
                    <Play className="w-5 h-5 mr-2 fill-current" />
                    Inscrever-se Agora
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent" />

        <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight">
            Pronto para <span className="text-brand-primary">automatizar</span>?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            Não perca mais tempo com tarefas manuais. Comece hoje mesmo a transformar sua produtividade.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contato">
              <Button className="w-full sm:w-auto bg-brand-primary hover:bg-brand-secondary text-white px-10 py-6 text-lg rounded-xl shadow-glow hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
                Fale Comigo
              </Button>
            </Link>
            <Link to="/templates">
              <Button variant="outline" className="w-full sm:w-auto border-white/10 bg-white/5 hover:bg-white/10 text-white px-10 py-6 text-lg rounded-xl backdrop-blur-sm">
                Explorar Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Stat = ({ number, label }: { number: string; label: string }) => (
  <div>
    <div className="text-3xl font-bold text-white mb-1">{number}</div>
    <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{label}</div>
  </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 group">
    <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role }: { quote: string; author: string; role: string }) => (
  <div className="bg-card border border-white/5 p-6 rounded-2xl">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      ))}
    </div>
    <p className="text-slate-300 mb-6 italic">"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">
        {author[0]}
      </div>
      <div>
        <div className="text-white font-medium">{author}</div>
        <div className="text-xs text-slate-500">{role}</div>
      </div>
    </div>
  </div>
);

export default Home;