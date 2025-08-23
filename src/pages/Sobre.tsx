import { Button } from "@/components/ui/button";
import { CheckCircle, Users, BookOpen, Video, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-6 bg-slate-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Jonathan da Cruz</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Desenvolvedor de sistemas apaixonado por ensinar e compartilhar conhecimento em tecnologia e automação de processos.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 lg:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Minha Jornada na Tecnologia</h2>
              <div className="space-y-4 text-slate-700">
                <p className="text-lg leading-relaxed">
                  Sou Jonathan da Cruz, desenvolvedor de sistemas, instrutor e 
                  palestrante. Acredito que o aprendizado se torna mais poderoso 
                  quando compartilhado. Com quase 10 anos de experiência em Tecnologia da Informação, construí uma carreira sólida 
                  como desenvolvedor de sistemas, sempre focado em criar soluções eficientes e inovadoras.
                </p>
                <p className="leading-relaxed">
                  Como instrutor na Udemy, tenho o orgulho de ter impactado mais de 6 mil alunos, 
                  compartilhando conhecimento prático sobre programação, banco de dados e automação de processos.
                </p>
                <p className="leading-relaxed">
                  Minha paixão por ensinar me levou a criar conteúdo no YouTube, onde demonstro 
                  conceitos complexos de forma simples e acessível, sempre com foco na aplicação prática.
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span className="text-slate-800 font-medium">Desenvolvedor de sistemas com foco em soluções escaláveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span className="text-slate-800 font-medium">Especialista em automação de processos com n8n</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span className="text-slate-800 font-medium">Instrutor certificado com metodologia prática</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-primary" />
                  <span className="text-slate-800 font-medium">Palestrante em eventos de tecnologia</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-brand text-center card-hover border border-slate-100">
                <Users className="h-10 w-10 text-brand-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-brand-primary mb-2">6K+</div>
                <div className="text-sm text-slate-600 font-medium">Alunos na Udemy</div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-brand text-center card-hover border border-slate-100">
                <BookOpen className="h-10 w-10 text-brand-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-brand-primary mb-2">10</div>
                <div className="text-sm text-slate-600 font-medium">Anos de experiência</div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-brand text-center card-hover border border-slate-100">
                <Video className="h-10 w-10 text-brand-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-brand-primary mb-2">100+</div>
                <div className="text-sm text-slate-600 font-medium">Vídeos publicados</div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-brand text-center card-hover border border-slate-100">
                <Award className="h-10 w-10 text-brand-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-brand-primary mb-2">50+</div>
                <div className="text-sm text-slate-600 font-medium">Templates criados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 lg:px-6 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Minha Missão</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ajudar pessoas a dominarem tecnologia e automação de processos, 
            tornando o aprendizado acessível e aplicável no dia a dia profissional.
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Acredito que a tecnologia deve simplificar nossas vidas, não complicá-las. 
            Por isso, foco sempre em soluções práticas e diretas ao ponto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-3 h-auto rounded-xl button-hover" asChild>
              <Link to="/automacao-n8n">
                Ver Meu Conteúdo
              </Link>
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 h-auto rounded-xl button-hover" asChild>
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