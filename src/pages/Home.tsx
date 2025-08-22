import { Button } from "@/components/ui/button";
import { Youtube, BookOpen, ArrowRight, Code, Database, Zap } from "lucide-react";
import { Link } from "react-router-dom";
const heroImage = "/lovable-uploads/e020e825-ba4b-4684-b062-79a26a4e1e23.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Aqui, Vamos{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Aprender, Crescer E Transformar
                  </span>{" "}
                  Com Tecnologia.
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Aprenda tecnologia e automações de forma simples e prática. 
                  Conhecimento direto ao ponto para acelerar sua jornada na tecnologia.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="youtube" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="mr-2 h-5 w-5" />
                    Inscreva-se no YouTube
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/templates">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Conheça meus Templates
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary">6K+</div>
                  <div className="text-sm text-muted-foreground">Alunos na Udemy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary">10</div>
                  <div className="text-sm text-muted-foreground">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Vídeos no YouTube</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-scale-in">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-elegant">
                  <img 
                    src={heroImage}
                    alt="Jonathan da Cruz - Desenvolvedor e Instrutor"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-20 bg-brand-muted">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Especialidades em Tecnologia
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conhecimento prático em áreas essenciais para o desenvolvimento moderno
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Automação */}
            <div className="bg-white rounded-2xl p-8 shadow-brand hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automação com n8n</h3>
              <p className="text-muted-foreground mb-4">
                Criação de fluxos automatizados para aumentar produtividade e eliminar tarefas repetitivas.
              </p>
              <Link 
                to="/automacao-n8n" 
                className="text-brand-primary font-medium inline-flex items-center hover:underline"
              >
                Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Programação */}
            <div className="bg-white rounded-2xl p-8 shadow-brand hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Programação</h3>
              <p className="text-muted-foreground mb-4">
                Desenvolvimento de sistemas com foco em boas práticas e tecnologias modernas.
              </p>
              <Link 
                to="/conteudo" 
                className="text-brand-primary font-medium inline-flex items-center hover:underline"
              >
                Ver conteúdo <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Banco de Dados */}
            <div className="bg-white rounded-2xl p-8 shadow-brand hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Banco de Dados</h3>
              <p className="text-muted-foreground mb-4">
                Modelagem e otimização de bancos de dados PostgreSQL e outras tecnologias.
              </p>
              <Link 
                to="/conteudo" 
                className="text-brand-primary font-medium inline-flex items-center hover:underline"
              >
                Ver tutoriais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="py-20 bg-brand-muted">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Templates Prontos para Usar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Acelere seus projetos com templates testados e prontos para implementar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Template 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-brand hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-primary rounded-xl mb-6 flex items-center justify-center">
                <Code className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Template de Automação de E-mails</h3>
              <p className="text-muted-foreground mb-4">
                Automatize o envio de e-mails personalizados com n8n de forma simples e eficiente.
              </p>
              <div className="text-brand-primary font-medium">Gratuito</div>
            </div>

            {/* Template 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-brand hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-primary rounded-xl mb-6 flex items-center justify-center">
                <Database className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integração com Banco de Dados</h3>
              <p className="text-muted-foreground mb-4">
                Template completo para conectar e sincronizar dados entre sistemas automaticamente.
              </p>
              <div className="text-brand-primary font-medium">Premium</div>
            </div>

            {/* Template 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-brand hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-full h-48 bg-gradient-primary rounded-xl mb-6 flex items-center justify-center">
                <Zap className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automação de Relatórios</h3>
              <p className="text-muted-foreground mb-4">
                Gere e envie relatórios automaticamente com dados atualizados em tempo real.
              </p>
              <div className="text-brand-primary font-medium">Premium</div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="brand" size="lg" asChild>
              <Link to="/templates">
                Ver Todos os Templates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Pronto para acelerar sua jornada na tecnologia?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Junte-se a milhares de pessoas que já estão aprendendo e crescendo com conteúdo prático e direto ao ponto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contato">
                  Fale Comigo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-red-600 text-white hover:bg-red-700 h-11 px-8"
                >
                  <Youtube className="mr-2 h-5 w-5" />
                  Canal do YouTube
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;