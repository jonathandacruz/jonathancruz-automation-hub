import { useEffect } from "react";
import Seo from "@/components/Seo";

const Termos = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-20">
            <Seo
                title="Termos de Uso | Jonathan da Cruz"
                description="Termos de uso e condições gerais para utilização dos serviços e produtos de Jonathan da Cruz."
                keywords={["termos de uso", "condições", "regras", "legal"]}
            />

            <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
                <h1 className="text-4xl font-display font-bold text-white mb-8">Termos de Uso</h1>

                <div className="prose prose-invert max-w-none text-slate-300">
                    <p className="lead text-xl text-slate-400 mb-8">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
                        <p>
                            Ao acessar e usar este site, você aceita e concorda em estar vinculado aos termos e disposições deste acordo.
                            Além disso, ao usar os serviços particulares deste site, você deve estar sujeito a todas as regras ou diretrizes publicadas aplicáveis a esses serviços.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Descrição dos Serviços</h2>
                        <p>
                            O site oferece templates de automação n8n, cursos e consultoria. Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto do serviço a qualquer momento.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Propriedade Intelectual</h2>
                        <p>
                            Todo o conteúdo incluído neste site, como texto, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade de Jonathan da Cruz ou de seus fornecedores de conteúdo e protegido pelas leis de direitos autorais internacionais.
                        </p>
                        <p className="mt-4">
                            Os templates adquiridos são para uso pessoal ou empresarial do comprador. É estritamente proibida a revenda, redistribuição ou compartilhamento público dos arquivos originais.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Política de Reembolso</h2>
                        <p>
                            Para produtos digitais (templates e cursos), oferecemos uma garantia de 7 dias. Se você não estiver satisfeito com o produto, entre em contato conosco dentro deste prazo para solicitar o reembolso total.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Limitação de Responsabilidade</h2>
                        <p>
                            Em nenhum caso seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou exemplares, incluindo, mas não se limitando a, danos por perda de lucros, boa vontade, uso, dados ou outras perdas intangíveis resultantes do uso ou da incapacidade de usar o serviço.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Alterações nos Termos</h2>
                        <p>
                            Reservamo-nos o direito de alterar estes termos de uso a qualquer momento. Recomendamos que você revise esta página periodicamente para quaisquer alterações. Seu uso continuado do site após a publicação de alterações constituirá sua aceitação dessas alterações.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Contato</h2>
                        <p>
                            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através da página de contato ou pelo e-mail contato@jonathandacruz.com.br.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Termos;
