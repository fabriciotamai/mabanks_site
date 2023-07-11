// Images

// Components
import { Footer } from '../../template/Footer';
import { NavBar } from '../../template/NavBar';
import { OtherHeader } from '../../template/OtherHeader';

export function PrivacyPolicy() {
  return (
    <>
      <NavBar />
      <OtherHeader
        title="Explore nossas políticas e regulamentos em detalhes"
        description="Sem surpresas desagradáveis ou condições confusas"
        btnType={false}
        btnTitle=""
        btnColor="mobile"
        btnUrl=""
        btnContainerStyle="hidden"
        boxStyle="text-white"
        titleStyle="text-4xl sm:w-[50%] spacing-1 leading-[1.3] pt-20"
        desStyle="w-[70%] sm:w-full"
        bgUrl="/assets/images/contact-bg.png"
      />

      <div className="mb-20 mt-20 flex w-full flex-col items-center">
        <div className="flex max-w-[990px] flex-col bg-[url('/assets/images/overlayBackground.png')] bg-fixed bg-center bg-no-repeat px-5 lg:px-0">
          <h1 className="text-center text-3xl font-medium">
            Política de Privacidade
          </h1>

          {/* Parte 1 */}
          <h2 className="mb-2 mt-20 text-lg font-semibold">
            POLÍTICA DE PRIVACIDADE
          </h2>
          <p className="mt-4 text-base">
            <b>MA BANKS TECNOLOGIA EM MEIOS DE PAGAMETOS LTDA</b>, pessoa
            jurídica de direito privado, inscrita sob o CNPJ no
            00.000.000/0000-00, com sede na Av. Brasilia, no 2.219 – Camí –
            Campinas – SP, CEP: 00000-000, simplesmente denominado “MABANKS”
            vem, por meio da presente Política de Privacidade, declarar o seu
            compromisso em relação à privacidade e segurança das informações,
            informando sobre o tratamento de dados pessoais de todos os usuários
            e terceiros em relacionamento online, por meio de sua plataforma de
            serviços ou aplicativo <b>MABANKS</b>. O presente termo de Politica
            de Privacidade foi elaborado em conformidade com a Lei Geral de
            Proteção de Dados Pessoais (Lei 13.709/18), e em consonância com as
            demais normas atualizações legislativas, bem como em respeito ao
            Marco Civil da Internet (Lei 12.965/14), e será atualizada sempre
            que surgir nova legislação, estando a disposição do usuário ou
            interessado a consulta desta seção regularmente.
          </p>

          {/* Parte 2 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            1. DOS DADOS PESSOAIS COLETADOS
          </h2>
          <p className="mt-4 text-base">
            1.1 A empresa <b>MA BANKS TECNOLOGIA EM MEIOS DE PAGAMENTOS LTDA</b>
            , como controladora de dados, coleta dados quando da criação da
            conta a ser utilizada e durante a prestação de serviços a fim de
            verificar a autenticidade da identidade do usuário que utiliza o
            sistema <b>MABANKS</b>, sendo que estes dados são livremente
            fornecidos pelo próprio usuário, ou ainda, coletados através de
            fontes de dados terceiras.
          </p>
          <p className="mt-4 text-base">
            1.2 Os dados pessoais que o <b>MABANKS</b> capta são, dentre outros,
            os dados de uso, correio eletrônico, incluindo mas não limitando-se
            ao nome completo, CPF, RG, data de nascimento, números de telefones,
            endereços, dados da conta bancária, além do nome da empresa e CNPJ
            em se tratando de pessoa jurídica.
          </p>
          <p className="mt-4 text-base">
            1.3 Ao utilizar-se do sistema <b>MABANKS</b>, o usuário se
            responsabiliza pelos dados pessoais e de terceiros publicados ou
            compartilhados e confirma que tem o consentimento da parte terceira
            para fornecer dados para a empresa.
          </p>

          {/* Parte 3 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            2. OBJETIVOS DA COLETA DOS DADOS PESSOAIS
          </h2>
          <p className="mt-4 text-base">
            2.1 O tratamento de dados coletados pelo{' '}
            <b>
              MA BANKS TECNOLOGIA EM MEIOS DE PAGAMETOS LTDS GESTÃO FINANCEIRA
              S/A
            </b>{' '}
            se dará em plena conformidade com a legislação brasileira de
            proteção de dados e no estrito propósito de atendimento às seguintes
            finalidades:
          </p>
          <p className="mt-4 text-base">
            a) Para identificação dos seus usuários, nos termos da Política
            “Know Your Customer”, ou seja, “Conheça o Seu Cliente”, com o fim de
            cumprimento da legislação vigente, em especial as normativas do
            Banco Central do Brasil;
          </p>
          <p className="mt-4 text-base">
            b) Promoção dos produtos, eventos e serviços oferecidos pelo
            <b>MABANKS</b>, bem como de novas funcionalidades dos portais e
            outros desenvolvimentos que possam ser de interesse de clientes,
            usuários, seguidores ou admiradores da empresa, além da melhoria dos
            serviços prestados para realização de acompanhamento de tráfego,
            identificando grupos de perfis de usuários para fins de orientação
            publicitária;
          </p>
          <p className="mt-4 text-base">
            c) Divulgação de conteúdo relacionado às atividades exercidas pelo
            <b>MABANKS</b>;
          </p>
          <p className="mt-4 text-base">
            d) Estudar a interação dos usuários com os meios de comunicação do
            <b>MABANKS</b>, no propósito de desenvolver melhorias e novas formas
            de relacionamento, como layout de canais de contato, novas
            ferramentas de disponibilização de conteúdo, avaliação do interesse
            pelos materiais divulgados dentre outros;
          </p>
          <p className="mt-4 text-base">
            e) Estabelecer critérios de identificação do usuário cadastrado e
            suas atividades na plataforma, sistema e website;
          </p>
          <p className="mt-4 text-base">
            f) Evitar a ocorrência de fraudes contra o usuário e terceiros;
          </p>
          <p className="mt-4 text-base">
            g) Possibilitar a execução de funcionalidades do sistema, plataforma
            ou website, atendendo expectativas do usuário;
          </p>
          <p className="mt-4 text-base">
            h) Execução das obrigações contratuais estabelecidas pelo{' '}
            <b>MABANKS</b> em face de usuários clientes, incluindo prestação de
            serviços de atendimento, suporte, geração de relatórios, hospedagem
            de dados e outros;
          </p>
          <p className="mt-4 text-base">
            i) Aprimorar a experiência de uso e desenvolver melhorias do
            sistema, plataforma e website.
          </p>

          {/* Parte 4 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            3. DA PROTEÇÃO E DO ARMAZENAMENTO DOS DADOS COLETADOS
          </h2>
          <p className="mt-4 text-base">
            3.1 O <b>MABANKS</b>, objetivando a proteção dos dados dos usuários
            e de terceiros armazenados, utilizar-se-á de medidas físicas e
            digitais de segurança, como controles de acessos, criptografia de
            informações, firewall, auditoria de alterações, entre outros
            mecanismos de proteção.
          </p>
          <p className="mt-4 text-base">
            3.2 Os dados pessoais obtidos pelo <b>MABANKS</b> terão acesso
            restrito, com estrutura de segurança da informação aplicada a
            limitar o acesso de cada dado pessoal ao profissional ou setor que
            efetivamente os necessite para execução de algumas das finalidades
            declaradas do processamento de dados.
          </p>
          <p className="mt-4 text-base">
            3.3 O <b>MABANKS</b>, mesmo comprometido com as melhores práticas da
            segurança da informação, não garantirá a impossibilidade de evento
            danoso decorrente de invasões hacker ou de incidentes de segurança
            pelo acesso a sites suspeitos e/ou instalação de software malicioso,
            ou ainda falhas e vícios, salvo se comprovadamente ocasionadas por
            conduta culposa ou deliberada do próprio <b>MABANKS</b>, cabendo ao
            usuário a manutenção de segurança e integridade do dispositivo pelo
            qual acessa o sistema, o qual deverá manter atualizações do sistema
            antivírus e de segurança do sistema operacional.
          </p>
          <p className="mt-4 text-base">
            3.4.1 Cabe ao usuário zelar pela confidencialidade de informações
            relacionadas ao acesso e operação de seus dados no sistema,
            plataforma e website do <b>MABANKS</b>, tais como informações de
            login, senha, chaves de segurança, duplo fator de autenticação e
            qualquer outra solução de segurança implementada pela Declarante.
          </p>

          {/* Parte 5 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            4. DO COMPARTILHAMENTO DE DADOS
          </h2>
          <p className="mt-4 text-base">
            4.1 Os dados de natureza pessoal do Usuário somente poderão ser
            compartilhados pelo <b>MABANKS</b> com terceiros, nas hipóteses de:
          </p>
          <p className="mt-4 text-base">
            (a) sucessão empresarial, a exemplo de fusão, aquisição e
            incorporação;
          </p>
          <p className="mt-4 text-base">
            (b) contratação de serviços de processamento de dados junto a
            terceiros (operadores), tais como hospedagem de dados, sistemas de
            processamento (serviços de computação em nuvem), consultoria em
            tecnologia da informação, serviços de telecomunicação, serviços de
            entrega, serviços de publicidade e marketing, organização de
            eventos, serviços de faturamento de créditos (financeiros), serviços
            de viagens.
          </p>
          <p className="mt-4 text-base">
            4.2 O <b>MABANKS</b> compromete-se a exigir compromisso de
            confidencialidade e de conformidade com os terceiros que terão
            acesso aos dados dos usuários, inclusive dos processadores diretos e
            indiretos dos dados que poderão estar fora do território brasileiro,
            que será reduzida a termo em instrumento contratual ou em declaração
            específica com força obrigacional.
          </p>
          <p className="mt-4 text-base">
            4.3 Com a ciência e aceite dos termos desta Política de Privacidade,
            o usuário manifesta seu inequívoco, livre e informado consentimento
            com a eventual transferência de dados em atenção à ordem emanada por
            autoridades oficiais de países de fora do território brasileiro. O{' '}
            <b>MABANKS</b> esclarece ainda que o consentimento em questão é
            dispensável caso o fornecimento das informações às autoridades
            decorra de exigência legal.
          </p>

          <p className="mt-4 text-base">
            4.4 O <b>MABANKS</b> informa ao usuário que é obrigada por lei a
            compartilhar dados pessoais dos usuários em caso de exigência
            emanada de autoridade judicial, policial ou administrativa. A
            disponibilização destes dados se dará apenas mediante validação da
            ordem emitida junto aos órgãos competentes.
          </p>

          {/* Parte 6 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            5. DO USO DOS COOKIES
          </h2>
          <p className="mt-4 text-base">
            5.1 O <b>MABANKS</b> declara fazer uso de cookies para aprimorar a
            experiência de seus usuários em suas plataformas e páginas na
            Internet. Cookies são arquivos enviados pelo <b>MABANKS</b> a cada
            acesso em seu website e instalados no navegador dos usuários que
            permitem a identificação do terminal de Internet, autenticar o
            usuário, personalizar a experiência de navegação e contratação de
            serviços, registrar acessos e atividades na página. O <b>MABANKS</b>{' '}
            faz uso de cookies para execução de: (a) autenticação e segurança;
            (b) oferta de anúncios e conteúdos relacionados a suas atividades;
            (c) oferta de produtos e serviços; (d) medição de desempenho e
            estatísticas. O<b>MABANKS</b> assegura que tanto na execução de
            cookies próprios quanto de terceiros, as melhores práticas de
            segurança são adotadas para garantir a proteção dos dados pessoais
            levantados. O uso dos cookies pelo <b>MABANKS</b> poderá ser
            previamente autorizado pelo usuário quando de seu acesso às
            plataformas e websites online. As autorizações também poderão ser
            revisadas e modificadas a qualquer tempo pelo usuário. O{' '}
            <b>MABANKS</b> esclarece que o bloqueio dos cookies poderá
            interferir no pleno uso dos recursos disponibilizados, inclusive
            inviabilizar o acesso a determinadas funções e ferramentas dos
            canais e plataformas.
          </p>

          {/* Parte 7 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            6. DOS DIREITOS DO TITULAR
          </h2>
          <p className="mt-4 text-base">
            6.1 O <b>MABANKS</b> assegura ao usuário o direito de acesso aos
            dados pessoais em uso. Além do acesso, é garantido ao usuário: (a) o
            direito à retificação de seus dados; (b) o direito à portabilidade
            dos dados, quando e se aplicável; (c) o direito à oposição do uso
            dos dados para finalidade previamente autorizada; (d) o direito à
            exclusão dos dados, ressalvada a manutenção dos dados necessários ao
            cumprimento de dever legal e ao exercício do direito de defesa em
            processo judicial e/ou administrativo.
          </p>
          <p className="mt-4 text-base">
            6.2 Os dados colhidos serão mantidos pelo <b>MABANKS</b> pelo
            período necessário para a prestação dos serviços e, na hipótese de
            rescisão do contrato, conforme previsto pela Lei 9.613/98, serão
            armazenados pelo período de 05 (cinco) anos, extensíveis mediante
            solicitação do Ministério Público ou autoridades administrativas.
          </p>
          <p className="mt-4 text-base">
            6.3 O usuário pode solicitar a destruição dos dados pessoais
            constantes no <b>MABANKS</b>, sendo que para isso deverá observar as
            diretrizes constantes na Lei 9.613/98, decorrido o prazo de 05
            (cinco) anos de armazenamento obrigatório.
          </p>

          {/* Parte 8 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            7. DO CONSENTIMENTO QUANTO À COLETA DE DADOS
          </h2>
          <p className="mt-4 text-base">
            7.1 Ao se cadastrar no sistema <b>MABANKS</b>, concordando com o
            CONTRATO DE PRESTAÇÃO DE SERVIÇOS, denominado TERMOS DE USO, o
            usuário estará aceitando, também, a Política de Privacidade
            estabelecida, que estará disponível para acesso por meio do link:
            <a href="#Termos de Uso.pdf">Termos de uso</a>, estando ciente que
            não havendo concordância do usuário em relação à Política adotada,
            não é possível utilizar-se dos serviços de meios de pagamentos
            disponibilizados.
          </p>

          {/* Parte 9 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            8. INFORMAÇÕES ADICIONAIS
          </h2>
          <p className="mt-4 text-base">
            8.1 O usuário <b>MABANKS</b> reconhece e concorda com os termos
            previstos na presente Política de Privacidade, estando ciente que
            são aplicáveis as leis brasileiras para reger a relação jurídica em
            comento, reconhecendo, por fim, que a Política é complementar ao
            Contrato de Prestação de Serviços do <b>MABANKS</b>.
          </p>
          <p className="mt-4 text-base">
            8.2 Esta política é celebrada por prazo indeterminado, entrando e
            mantendo-se em vigor a partir da data do cadastro e utilização do
            sistema <b>MABANKS</b>.
          </p>
          <p className="mt-4 text-base">
            8.3 Para solicitação de esclarecimentos, dúvidas e solicitações de
            qualquer natureza relacionadas ao tratamento de dados pessoais e aos
            termos da presente política de privacidade, o <b>MABANKS</b>{' '}
            coloca-se à disposição para contato através do e-mail
            protecaodedados@mabanks.com.br, ou canal de contato disponível na
            plataforma <b>MABANKS</b>, denominado “Proteção de Dados”.
          </p>

          <h2 className="mb-2 mt-6 w-[50%] text-lg font-semibold">
            MA BANKS TECNOLOGIA EM MEIOS DE PAGAMETOS LTDA CNPJ nº
            00.000.000/0000-00.
          </h2>
        </div>
      </div>

      <Footer />
    </>
  );
}
