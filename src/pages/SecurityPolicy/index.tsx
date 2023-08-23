// Images

// Components
import { Footer } from '../../template/Footer';
import { NavBar } from '../../template/NavBar';
import { OtherHeader } from '../../template/OtherHeader';

export function SecurityPolicy() {
  return (
    <>
      <NavBar />
      <OtherHeader
        title="Proteção de Dados e Segurança Cibernética"
        description="Conheça nossa abrangente Política de Segurança da Informação Cibernética."
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
          Conta Protegida
          </h1>

          {/* Parte 1 */}
          <h2 className="mb-2 mt-20 text-lg font-semibold">
            PARTE II – CONTEÚDO
          </h2>
          <h2 className="mb-2 mt-2 text-lg font-semibold">1. Introdução</h2>
          <p className="mt-4 text-base">
            A Política de Segurança da Informação & Cibernética dispõe das
            diretrizes fundamentais de segurança da informação, em consonância
            aos objetivos do <b>MA BANKS</b> permeando toda a arquitetura de
            processos. Tais diretrizes, estabelecidas com base nas boas práticas
            de mercado, órgãos reguladores e normas, garantem uma estratégia
            eficiente de segurança da informação por meio de controles para
            mitigar os riscos cibernéticos, assim como se recuperar de
            potenciais incidentes de forma tempestiva.
          </p>
          <p className="mt-4 text-base">
            Esta Política de Segurança da Informação & Cibernética tem por
            propósito aderir ao Artigo 50 da Seção II – Das Boas Práticas e da
            Governança da Lei no 13.709 (LGPD), de 14 de Agosto de 2018; às
            disposições da Resolução no 4.658, de 26 de Abril de 2018, resolvida
            pelo Banco Central do Brasil; ao capítulo 11 – Segurança das
            Informações do Roteiro Básico do Programa de Qualificação
            Operacional da BSM Supervisão de Mercados; ao requisito 12 do
            framework PCI-DSS; a seção 5 da norma brasileira ABNT NBR ISO/IEC
            27002:2013 e SPI, conforme a Resolução BCB no 1, de 12 de agosto de{' '}
            {'>'} 2020 (artigo 3o, parágrafo 5o, seção I, item B), ela deverá
            atender à {'>'} Circular BCB no 3.909, de 16 de agosto de 2018
          </p>

          {/* Parte 2 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            2. Objetivos & Estratégia
          </h2>
          <p className="mt-4 text-base">
            A Alta Administração do <b>MA BANKS</b> está, desde a sua fundação,
            comprometida na melhoria contínua dos procedimentos relacionados com
            a segurança cibernética. Tal comprometimento é expresso por meio da
            declaração da Ética como valor basilar na cultura da empresa. O
            objetivo de Segurança Cibernética no <b>MA BANKS</b> é prevenir,
            detectar e reduzir a vulnerabilidade a incidentes relacionados com o
            ambiente cibernético por meio da garantia da confidencialidade,
            integridade, disponibilidade, autenticidade, legalidade e
            privacidade das informações. Adiante, no item 5 - Principais
            disciplinas de segurança, serão demonstrados quais recursos são
            utilizados para atingir ao objetivo proposto. O detalhamento das
            diretrizes pode ser encontrado em Manuais Normativos específicos
            para esta finalidade, sinalizados oportunamente.
          </p>

          {/* Parte 3 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            3. Gestão de Riscos Cibernéticos
          </h2>
          <p className="mt-4 text-base">
            O comprometimento com a segurança e a privacidade das informações é
            uma responsabilidade de todos os colaboradores. De toda forma, as
            áreas de Riscos Operacionais e Segurança da Informação atuam de
            forma colaborativa para uma abordagem ordenada dos eventos de risco.
            A área de Segurança da Informação, estabelecida junto da equipe de
            tecnologia, é responsável por identificar e gerir os fatores de
            riscos cibernéticos, bem como implantar controles para o seu
            tratamento. A área de Planejamento é responsável por gerir a
            Arquitetura de Processos Corporativos do <b>MA BANKS</b>, mapear os
            riscos e controles do macroprocesso de Segurança da Informação e
            acompanhar se o ambiente de controle está a um nível aceitável
            frente ao apetite de risco da organização.
          </p>

          {/* Parte 4 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            4. Papeis & Responsabilidades
          </h2>
          <p className="mt-4 text-base">
            • Diretoria (Alta Administração): é responsável por prover a Missão,
            Visão e Valores do <b>MA BANKS</b>, deliberar a estratégia de
            negócio bem como estabelecer a prioridade
          </p>
          <p className="mt-4 text-base">
            adequada para desenvolvimento das disciplinas de Segurança da
            Informação em linha com as leis, regulamentos e boas práticas
            aplicáveis ao segmento financeiro.
          </p>
          <p className="mt-4 text-base">
            • Engenharia de Segurança: é responsável por prover os requisitos de
            segurança para infraestrutura e por definir a estratégia de
            arquitetura de soluções e segurança bem como implantá-las em linha
            com os objetivos definidos e diretrizes oriundas da Política de
            Segurança da Informação e Cibernética.
          </p>
          <p className="mt-4 text-base">
            • Cultura e Conscientização: é responsável por prover, em linha com
            a estratégia de segurança da informação, o Programa de
            Conscientização, treinamentos e educação contínua para colaboradores
            e terceiros, relacionamento com as comunidades de segurança e
            tecnologia bem como a educação de segurança para clientes do{' '}
            <b>MA BANKS</b>.
          </p>
          <p className="mt-4 text-base">
            • Tecnologia da Informação: os colaboradores da área de tecnologia
            são responsáveis por definir seu plano tático e operar as soluções
            tecnológicas em linha com as diretrizes estabelecidas por Segurança
            da Informação.
          </p>
          <p className="mt-4 text-base">
            • Todos os colaboradores: são responsáveis por conhecer as leis e
            regulamentos os quais o <b>MA BANKS</b> está exposto, participar dos
            treinamentos e educação contínua fomentadas pela área de Segurança
            da Informação e por trabalhar em consonância as orientações
            fornecidas.
          </p>
          <p className="mt-4 text-base">
            • Fornecedores e prestadores de serviço: são responsáveis por
            conhecer as leis e regulamentos os quais o <b>MA BANKS</b> está
            exposto, conhecer as diretrizes do Acordo de Confidencialidade
            firmado com sua empresa, participar dos treinamentos e educação
            contínua fomentadas pela área de Segurança da Informação e por
            trabalhar em consonância as orientações fornecidas.
          </p>

          {/* Parte 5 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            5. Principais disciplinas de segurança
          </h2>
          <p className="mt-4 text-base">
            Para alcançar os objetivos de segurança da informação, as
            disciplinas elencadas abaixo são operadas no <b>MA BANKS</b>{' '}
            conforme descrito:
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.1.Confidencialidade e integridade da informação
          </h2>
          <p className="mt-4 text-base">
            A <b>MA BANKS</b> se compromete a tratar de maneira ética e sigilosa
            as informações de clientes, parceiros, fornecedores, colaboradores,
            e também das informações de caráter confidencial e restritas do
            banco.
          </p>
          <p className="mt-4 text-base">
            O investimento contínuo em tecnologia e processos é requerido para,
            desta forma, assegurar controles que garantam a integridade e a
            disponibilidade das informações do <b>MA BANKS</b> e seus clientes.
          </p>
          <p className="mt-4 text-base">
            É de responsabilidade da área de Segurança da Informação prover os
            insumos para realização de capacitações e educação contínua das
            partes interessadas, como colaboradores, prestadores de serviço e
            clientes, prezando a conscientização das pessoas e considerando-as o
            elo mais importante para a proteção adequada dos ativos da
            informação.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.2.Criptografia
          </h2>
          <p className="mt-4 text-base">
            A criptografia é a ciência de escrever mensagens cifradas, ou seja,
            de forma inelegível. Na <b>MA BANKS</b>, os recursos de criptografia
            são utilizados de diversas maneiras para assegurar a
            confidencialidade, integridade, a autenticidade e não repúdio das
            informações. Com relação aos métodos criptográficos, são utilizadas
            a criptografia de chave simétrica (a mesma chave serve para
            codificar como para decodificar as informações) para garantia da
            confidencialidade, e a criptografia de chave assimétrica (utiliza
            uma chave pública e uma chave privada, que deve ser mantida em
            sigilo por seu proprietário) para garantia da confidencialidade,
            integridade e não repúdio. Além destes métodos, são utilizadas as
            funções de resumo (hash) para garantia da integridade de arquivos ou
            gerar assinaturas digitais (em conjunto com chaves assimétricas), e
            certificados digitais para associar uma chave pública a uma
            organização ou indivíduo.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.3. Prevenção e detecção de intrusão
          </h2>
          <p className="mt-4 text-base">
            Prevenção e detecção de intrusão correspondem aos recursos
            tecnológicos utilizados na estratégia de proteção da rede da{' '}
            <b>MA BANKS</b> associada as atividades de monitoramento e bloqueio
            tempestivo de qualquer tráfego suspeito que pode indicar uma
            tentativa de ataque. Para esta disciplina, são utilizadas soluções
            para analisar o tráfego de rede e determinar quais operações podem
            ser executadas, monitoramento e identificação de atividades
            potencialmente maliciosas com a oportunidade de bloqueio, além da
            identificação e contenção de ameaças persistentes.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.4. Prevenção de vazamento de informações
          </h2>
          <p className="mt-4 text-base">
            Ciente da importância das informações como ativo do banco, o{' '}
            <b>MA BANKS</b> se vale de diversos recursos para prevenção contra o
            seu vazamento. Entende-se por vazamento qualquer divulgação não
            autorizada de conteúdo de propriedade intelectual do <b>MA BANKS</b>{' '}
            que tenha um nível de classificação superior a ‘Pública’ (mais
            detalhes serão concedidos no próximo item, 5.5 – Classificação das
            informações) e que não tenha autorização expressa de seu
            proprietário. É de responsabilidade de todos os colaboradores e
            prestadores de serviço assegurar que as informações são
            compartilhadas por meios seguros. A solução de proteção contra o
            vazamento de informações tem por objetivo analisar o tráfego de
            saída da rede corporativa, informações trafegadas entre endpoints
            (computadores de trabalho), transmissão de informações para
            dispositivos como pendrives e impressão, aplicando políticas de
            alerta e/ou bloqueio em linha com os objetivos de segurança da
            informação, assegurando a confidencialidade das informações.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.5. Classificação das informações
          </h2>
          <p className="mt-4 text-base">
            A classificação das informações tem por objetivo orientar
            proprietários e consumidores das informações os controles aplicáveis
            a julgar por sua sensibilidade. Informações classificadas como
            ‘Públicas’ podem ser divulgadas sem o consentimento do seu
            proprietário, enquanto as informações classificadas como
            ‘Confidenciais’ devem ser protegidas contra divulgação não
            autorizada. No <b>MA BANKS</b>, há uma solução responsável por
            orientar as partes interessadas no manejo adequado das informações,
            e sinaliza qual o nível de sensibilidade recomendado baseado em seu
            conteúdo, além de bloqueios conforme o nível de acesso de cada
            colaborador. Toda informação que não possuir a indicação clara de
            sua sensibilidade é considerada de uso Interno’.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.6. Gestão de Vulnerabilidades
          </h2>
          <p className="mt-4 text-base">
            O processo de gestão de vulnerabilidades tem por objetivo
            identificar as fragilidades no ambiente tecnológico e avaliar o
            potencial risco para o negócio. Por gestão de vulnerabilidades
            entendemos o contexto amplo que contempla desde a identificação até
            as atividades de remediação, enquanto um scan de vulnerabilidades é
            uma ferramenta de tecnologia que apoia a identificação de
            vulnerabilidades em redes, computadores, infraestrutura e
            aplicações. Com a finalidade de otimizar os esforços para gerir este
            processo, o <b>MA BANKS</b> adotou a estratégia de dividi-lo em duas
            torres com diferentes processos e iterações pelos times: a primeira
            torre estabelecida é a da Gestão de Vulnerabilidades de
            Infraestrutura, dedicada aos ativos de base de aplicações; a segunda
            torre corresponde a Gestão de Vulnerabilidades de Aplicações, com
            enfoque direto na concepção de produtos e gestão de aplicações de
            terceiros.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.7. Cópias de Segurança Gestão de Identidades & Acessos
          </h2>
          <p className="mt-4 text-base">
            São realizadas cópias de segurança (Backups) e testes de recuperação
            (Restore) das informações corporativas e de clientes, com tempo de
            retenção em linha com as leis e regulações aplicáveis ao segmento
            financeiro. A estratégia do Plano de Backup deve ser consoante com a
            criticidade das informações as quais serão copiadas e/ou
            recuperadas, e modalidades de Backup devem ser aplicadas conforme o
            cenário, considerando o plano tático de maior eficiência
            operacional. Nos casos onde as atividades de Backup e Restore devem
            ser operadas por terceiros, as especificações dedicadas ao{' '}
            <b>MA BANKS</b>
            devem estar previstas nos acordos entre as partes.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.8. Gestão de Identidades & Acessos
          </h2>
          <p className="mt-4 text-base">
            A <b>MA BANKS</b> oferece os recursos necessários para gestão de
            autorização e autenticação dos usuários. Com suporte da solução
            provedora de identidade (IDP), é possível identificar a identidade
            de um usuário, aplicar a política de senha e atribuir recursos como
            o multifator de autenticação (MFA). Para corroborar com a estratégia
            de uma solução integrada de autenticação, faz-se necessária a adoção
            de ferramentas que suportem os protocolos de autenticação
            homologados pela área de Segurança da Informação. Quaisquer exceções
            deverão ser avaliadas pontualmente, dado que configuram risco
            cibernético. A autorização é realizada a partir do princípio de
            menor privilégio, que significa que um usuário terá acesso apenas as
            funcionalidades requeridas para o desempenho de sua função, e por
            meio da gestão de acessos mediante função (RBAC), com suporte dos
            recursos de segregação de função (SOD) para mapeamento de conflitos.
            Deste modo, assume-se que todas as aplicações do <b>MA BANKS</b>{' '}
            deverão oferecer suporte para criação de perfis de usuário para
            garantia da isometria de privilégios. A estratégia de Gestão de
            dentidades e Acessos aplica-se não somente a aplicações, mas aos
            privilégios de acesso à rede, cuja arquitetura deverá contemplar a
            segmentação por sub redes, rastreando as conexões e prevenindo o
            acesso não autorizado. Todas as movimentações de nossos
            colaboradores são registrado no nosso histórico de logs afim de
            facilitar futura investigação de qualquer risco cibernético que
            possa ter ocorrido.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.9.Responsabilidade no uso da senha
          </h2>
          <p className="mt-4 text-base">
            Todos os colaboradores do <b>MA BANKS</b> são responsáveis por zelar
            por suas informações de autenticação secreta. Para apoio as
            atividades de autenticação, há a solução para guarda de senhas de
            usuários finais, disponível para utilização nos equipamentos
            endpoint. As senhas não deverão ser compartilhadas ou armazenadas em
            locais inseguros, passível de ser descoberta por terceiros. Para as
            senhas de alto privilégio, recursos como o processo de dupla
            custódia poderão ser utilizados para proteção de sua
            confidencialidade e prevenir contra o acesso indevido e/ou não
            autorizado. Atividades de conscientização e educação continua servem
            também ao propósito de instruir os colaboradores e prestadores do{' '}
            <b>MA BANKS</b> quanto ao uso adequado de suas redenciais.
          </p>

          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.10. Utilização de Internet e correio eletrônico
          </h2>
          <p className="mt-4 text-base">
            Os recursos tecnológicos oferecidos pelo <b>MA BANKS</b> servem ao
            propósito exclusivo de apoiar o desenvolvimento das atividades
            inerentes a função dos colaboradores e prestadores de serviço. Por
            este motivo, é proibida a utilização da Internet para acesso,
            transferência ou cópia de quaisquer materiais que não estejam
            relacionados ao desempenho das atividades profissionais. Da mesma
            forma, o correio eletrônico (e-mail) serve a finalidade de
            comunicação interna e com as demais partes interessadas, com
            finalidade de apoiar as atividades profissionais, não sendo
            permitido o uso para fins pessoais. Os recursos disponibilizados são
            de propriedade do <b>MA BANKS</b>, que goza de livres privilégios
            para monitoramento, acesso e retenção de toda e qualquer informação
            tratada por este meio. Por fim, o <b>MA BANKS</b> preza pela ética e
            pelo respeito, não sendo toleradas quaisquer atitudes em dissonância
            com os valores do banco expressas por meio do comportamento na
            Internet e uso inadequado do correio eletrônico.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.11. Uso aceitável de softwares & mídias
          </h2>
          <p className="mt-4 text-base">
            Em linha com as diretrizes estabelecidas em 5.10 – Utilização de
            Internet e correio eletrônico, o uso de software e mídias também é
            de uso exclusivo para o desenvolvimento das atividades inerentes à
            função de colaboradores e prestadores de serviço. Deste modo, são
            considerados genuínos os softwares previamente homologados pela área
            de Tecnologia, disponíveis para download por meio documento interno
            divulgado aos colaboradores do <b>MA BANKS</b> . Outros softwares
            deverão ser submetidos a avaliação prévia de pertinência e caso não
            seja identificado qualquer outro recurso equivalente, o mesmo será
            submetido ao processo de homologação. Softwares sem licença de uso
            ou de forma independente, assim como licença de uso provisória são
            proibidos para utilização nos equipamentos da organização. É vetado
            o uso de equipamentos periféricos, como pendrives e quaisquer outras
            mídias removíveis, para desempenho das atividades no <b>MA BANKS</b>{' '}
            . Transferências de informações deverão ser realizadas por meio de
            recursos homologados, com anuência do proprietário da informação.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.12. Segurança física dos ambientes de operação e processamento
          </h2>
          <p className="mt-4 text-base">
            Assim como no ambiente lógico, controles compatíveis de segurança
            física são aplicados aos ambientes os quais são processadas
            informações do <b>MA BANKS</b>. Uma vez delimitado o perímetro
            interno e externo, são operados os controles para controle de acesso
            por parte de colaboradores, terceiros, prestadores de serviço e
            visitantes, mitigando o risco de acesso indevido e/ou não autorizado
            às informações e ao ambiente interno, bem como a proteção física e a
            disponibilidade de equipamentos e infraestrutura do escritório,
            contemplando os recursos de segurança ambiental. Tal disciplina está
            intimamente relacionada com o Plano de Continuidade de Negócios e
            Gestão de Crises, gerenciado pela área de Riscos Operacionais.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.13. Cultura e Conscientização de Segurança da Informação
          </h2>
          <p className="mt-4 text-base">
            Dado que “a Cultura de Segurança Cibernética corresponde as
            atitudes, crenças e valores que guiam os comportamentos para
            desenvolver a segurança da informação em uma organização”, (citação
            extraída da linha de pesquisa em Cultura de Segurança Cibernética do
            MIT – Massachussetts Institute of Technology), faz parte da
            estratégia de segurança da informação fomentar a cultura,
            conscientização e educação contínua dos colaboradores, terceiros,
            prestadores de serviço e clientes relacionada a disciplina de
            segurança da informação. A missão da Cultura de Segurança da
            Informação no <b>MA BANKS</b> é levar as partes interessadas as
            orientações para proteção das informações internas e de clientes,
            por meio da disseminação de diretrizes através de treinamentos e
            eventos, interação com comunidades, comunicações periódicas via
            canais oficiais do <b>MA BANKS</b>, portal dedicado para instrução
            de clientes, e quaisquer outros recursos que sirvam ao propósito de
            elevar a consciência de todo o público sobre o seu papel fundamental
            na proteção do banco.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.14. Relacionamento com fornecedores e prestadores de serviço
          </h2>
          <p className="mt-4 text-base">
            Segurança da Informação possui a responsabilidade de avaliar os
            aspectos de segurança no relacionamento com fornecedores e
            prestadores de serviço cujo escopo de trabalho contemple o
            tratamento de informações de propriedade intelectual do{' '}
            <b>MA BANKS</b>. A avaliação destes fornecedores soma a avaliação de
            Compliance, Arquitetura e Segurança, assim como a anuência das áreas
            de Riscos Operacionais, Dados e Jurídico. Para estes casos, são
            admitidas avaliações internas pela área de segurança, contemplando
            eventualmente a realização de testes de intrusão (pentests) quando
            pertinente ao contexto e mediante consentimento do proprietário da
            informação, bem como avaliações externas geridas pelo{' '}
            <b>MA BANKS</b>. Para finalidade de análise dos controles básicos de
            segurança, são admitidas as Declarações de Aplicabilidade (SOA)
            emitidas por órgãos de garantia para aquelas empresas que possuírem
            certificações de segurança como a ISO 27001 ou PCI DSS.
          </p>
          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">
            5.15. Prevenção, identificação e tratamento de incidentes de
            Segurança Cibernética
          </h2>
          <p className="mt-4 text-base">
            A <b>MA BANKS</b> contempla em sua estratégia de segurança da
            informação a estrutura para prevenção, identificação e tratamento de
            incidentes de segurança da informação em seu ambiente e em parceria
            com os provedores de serviço em nuvem. Para os incidentes
            relevantes, sejam eles no ambiente do <b>MA BANKS</b> ou em ambiente
            de terceiros quando comprovado impacto sobre a operação, são
            realizados os registros, análise da causa e do impacto, bem como o
            controle dos efeitos dos mesmos no <b>MA BANKS</b>. Certos cenários
            de incidentes são considerados nos testes de continuidade de
            negócios, aferindo principalmente, mas não limitando-se aos
            parâmetros da disponibilidade. No que tange o relacionamento com
            empresas terceiras e prestadores de serviço, é estabelecido por meio
            dos contratos e demais instrumentos legais a responsabilidade de
            colaboração ante a um incidente de segurança declarado.
          </p>

          <h2 className="mb-2 ml-5 mt-6 text-lg font-semibold">6. Sanções</h2>
          <p className="mt-4 text-base">
            O não cumprimento das diretrizes declaradas nesta Política
            Corporativa está sujeito a sanções conforme avaliação das áreas de
            competência. A área de Segurança da Informação é responsável por
            demandar o processo disciplinar para os casos aplicáveis, os quais
            devem ser tratados sob sigilo e zelando pela privacidade dos
            envolvidos.
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
