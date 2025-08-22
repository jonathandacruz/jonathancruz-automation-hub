import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, BookOpen, ExternalLink, Calendar } from "lucide-react";

const Conteudo = () => {
  const videos = [
    {
      title: "Tutorial completo de n8n para iniciantes",
      description: "Aprenda desde o básico até automações avançadas com n8n",
      duration: "25:30",
      views: "15K",
      date: "2024-01-15"
    },
    {
      title: "Programação prática com PostgreSQL",
      description: "Conceitos essenciais de banco de dados PostgreSQL na prática",
      duration: "32:15",
      views: "22K",
      date: "2024-01-10"
    },
    {
      title: "Automação de e-mails com n8n e Gmail",
      description: "Como criar fluxos automatizados para envio de e-mails",
      duration: "18:45",
      views: "8.5K",
      date: "2024-01-05"
    }
  ];

  const articles = [
    {
      title: "Guia definitivo para automação com n8n",
      description: "Tudo que você precisa saber para começar a automatizar processos com n8n",
      category: "Automação",
      readTime: "8 min",
      date: "2024-01-20"
    },
    {
      title: "Melhores práticas em banco de dados PostgreSQL",
      description: "Dicas essenciais para otimizar performance e segurança em PostgreSQL",
      category: "Banco de Dados",
      readTime: "12 min",
      date: "2024-01-18"
    },
    {
      title: "Como integrar APIs REST com n8n",
      description: "Tutorial passo a passo para trabalhar com APIs em automações",
      category: "Programação",
      readTime: "10 min",
      date: "2024-01-15"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-6 bg-brand-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Conteúdo <span className="bg-gradient-primary bg-clip-text text-transparent">Educativo</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vídeos tutoriais, artigos e recursos gratuitos sobre programação, automação com n8n, 
            banco de dados PostgreSQL e muito mais.
          </p>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Últimos Vídeos do YouTube</h2>
              <p className="text-muted-foreground">
                Tutoriais práticos de n8n, programação e banco de dados
              </p>
            </div>
            <Button variant="brand" asChild>
              <a 
                href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-4 w-4" />
                Ver Canal Completo
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 group">
                <CardHeader className="p-0">
                  <div className="relative bg-gradient-primary rounded-t-lg h-48 flex items-center justify-center group-hover:opacity-90 transition-opacity">
                    <Play className="h-12 w-12 text-white" />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2">{video.title}</CardTitle>
                  <CardDescription className="mb-4">{video.description}</CardDescription>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{video.views} visualizações</span>
                    <span>{new Date(video.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 px-4 lg:px-6 bg-brand-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Artigos e Tutoriais</h2>
            <p className="text-muted-foreground">
              Conteúdo escrito detalhado sobre tecnologia e automação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="border-0 shadow-brand hover:shadow-elegant transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(article.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{article.readTime} de leitura</span>
                    <Button variant="ghost" size="sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Ler mais
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Tópicos Abordados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-brand">
              <h3 className="font-semibold text-brand-primary">Tutorial de n8n</h3>
              <p className="text-sm text-muted-foreground mt-2">Automação visual</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-brand">
              <h3 className="font-semibold text-brand-primary">Programação prática</h3>
              <p className="text-sm text-muted-foreground mt-2">Desenvolvimento</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-brand">
              <h3 className="font-semibold text-brand-primary">PostgreSQL</h3>
              <p className="text-sm text-muted-foreground mt-2">Banco de dados</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-brand">
              <h3 className="font-semibold text-brand-primary">Produtividade</h3>
              <p className="text-sm text-muted-foreground mt-2">Otimização</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 lg:px-6 bg-gradient-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Acompanhe o Conteúdo</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Não perca nenhum tutorial novo. Se inscreva no canal e ative as notificações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <a 
                href="https://www.youtube.com/channel/UC3M_z-XMGTFMBbCjVLPKkUA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-5 w-5" />
                Inscrever-se no YouTube
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <a href="mailto:contato@jonathancruz.dev">
                Sugerir Tópico
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conteudo;