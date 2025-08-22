import { Button } from "@/components/ui/button";
import { CheckCircle, Users, BookOpen, Video, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-6 bg-brand-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Jonathan da Cruz</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor de sistemas apaixonado por ensinar e compartilhar conhecimento em tecnologia e automação de processos.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Minha Jornada na Tecnologia</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sou Jonathan da Cruz, desenvolvedor de sistemas, instrutor e 
                  palestrante. Acredito que o aprendizado se torna mais poderoso 
                  quando compartilhado. Com quase 10 anos de experiência em Tecnologia da Informação, construí uma carreira sólida 
                  como desenvolvedor de sistemas, sempre focado em criar soluções eficientes e inovadoras.
                </p>
                <p>
                  Como instrutor na Udemy, tenho o orgulho de ter impactado mais de 6 mil alunos, 
                  compartilhando conhecimento prático sobre programação, banco de dados e automação de processos.
                </p>
                <p>
                  Minha paixão por ensinar me levou a criar conteúdo no YouTube, onde demonstro 
                  conceitos complexos de forma simples e acessível, sempre com foco na aplicação prática.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Desenvolvedor de sistemas com foco em soluções escaláveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Especialista em automação de processos com n8n</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Instrutor certificado com metodologia prática</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span>Palestrante em eventos de tecnologia</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-brand text-center">
                <Users className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-brand-primary">6K+</div>
                <div className="text-sm text-muted-foreground">Alunos na Udemy</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-brand text-center">
                <BookOpen className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-brand-primary">10</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-brand text-center">
                <Video className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-brand-primary">100+</div>
                <div className="text-sm text-muted-foreground">Vídeos publicados</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-brand text-center">
                <Award className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-brand-primary">50+</div>
                <div className="text-sm text-muted-foreground">Templates criados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 lg:px-6 bg-gradient-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Minha Missão</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Ajudar pessoas a dominarem tecnologia e automação de processos, 
            tornando o aprendizado acessível e aplicável no dia a dia profissional.
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Acredito que a tecnologia deve simplificar nossas vidas, não complicá-las. 
            Por isso, foco sempre em soluções práticas e diretas ao ponto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/conteudo">
                Ver Meu Conteúdo
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/contato">
                Fale Comigo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;