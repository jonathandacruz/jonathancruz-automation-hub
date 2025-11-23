import { useEffect } from "react";
import Seo from "@/components/Seo";

const Privacidade = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
            <Seo
                title="Política de Privacidade | Jonathan da Cruz"
                description="Política de privacidade e proteção de dados de Jonathan da Cruz."
                keywords={["privacidade", "dados", "lgpd", "proteção"]}
            />

            <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
                <h1 className="text-4xl font-display font-bold text-white mb-8">Política de Privacidade</h1>

                <div className="prose prose-invert max-w-none text-slate-300">
                    <p className="lead text-xl text-slate-400 mb-8">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Coleta de Informações</h2>
                        <p>
                            Coletamos informações que você nos fornece diretamente, como quando você cria uma conta, faz uma compra, assina nossa newsletter ou entra em contato conosco. As informações podem incluir seu nome, endereço de e-mail, informações de pagamento e qualquer outra informação que você escolha fornecer.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Uso das Informações</h2>
                        <p>
                            Usamos as informações coletadas para:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Fornecer, manter e melhorar nossos serviços;</li>
                            <li>Processar transações e enviar confirmações e recibos;</li>
                            <li>Enviar avisos técnicos, atualizações, alertas de segurança e mensagens de suporte;</li>
                            <li>Responder aos seus comentários, perguntas e solicitações;</li>
                            <li>Comunicar sobre produtos, serviços, ofertas, promoções e eventos.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Compartilhamento de Informações</h2>
                        <p>
                            Não compartilhamos suas informações pessoais com terceiros, exceto conforme descrito nesta política. Podemos compartilhar informações com fornecedores, consultores e outros prestadores de serviços que precisam de acesso a essas informações para realizar trabalhos em nosso nome (como processadores de pagamento).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Cookies e Tecnologias Semelhantes</h2>
                        <p>
                            Usamos cookies e tecnologias semelhantes para coletar informações sobre sua atividade, navegador e dispositivo. Você pode configurar seu navegador para recusar todos ou alguns cookies, mas isso pode afetar a funcionalidade do site.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Segurança de Dados</h2>
                        <p>
                            Tomamos medidas razoáveis para ajudar a proteger informações sobre você contra perda, roubo, uso indevido e acesso não autorizado, divulgação, alteração e destruição.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Seus Direitos</h2>
                        <p>
                            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir, excluir e portar seus dados pessoais. Para exercer esses direitos, entre em contato conosco.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Contato</h2>
                        <p>
                            Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através do e-mail contato@jonathandacruz.com.br.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacidade;
