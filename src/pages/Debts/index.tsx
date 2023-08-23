// Images

// Components
import { Footer } from '../../template/Footer';
import { NavBar } from '../../template/NavBar';
import { OtherHeader } from '../../template/OtherHeader';

export function Debts() {
  return (
    <>
      <NavBar />
      <OtherHeader
        title="Negociação de dívidas:"
        description=""
        btnType={false}
        btnTitle=""
        btnColor="mobile"
        btnUrl=""
        btnContainerStyle="hidden"
        boxStyle="text-white"
        titleStyle="text-4xl sm:w-[50%] spacing-1 leading-[1.3] pt-20"
        desStyle="w-[70%] sm:w-full"
        bgUrl="/assets/images/securityAccount.png"
      />

      <div className="mb-20 mt-20 flex w-full flex-col items-center">
        <div className="flex max-w-[990px] flex-col bg-[url('/assets/images/overlayBackground.png')] bg-fixed bg-center bg-no-repeat px-5 lg:px-0">
          <h1 className="text-center text-3xl font-medium">
          Negociação de dívidas
          </h1>

          {/* Parte 1 */}
          {/* <h2 className="mb-2 mt-20 text-lg font-semibold">
            POLÍTICA DE PRIVACIDADE
          </h2> */}
          {/* <p className="mt-4 text-base">
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
          </p> */}

          {/* Parte 2 */}
          <h2 className="mb-2 mt-6 text-lg font-semibold">
            Negociação de dívidas
          </h2>
          <p className="mt-4 text-base">
          Aqui nós compramos sua briga! Temos uma equipe de negociadores profissionais pronta para negociar seus débitos, garantindo que sua empresa honre com seus compromissos da maneira mais justa.
          </p>


          {/* Parte 3 */}



          {/* Parte 4 */}





          {/* Parte 5 */}








          {/* Parte 6 */}



          {/* Parte 7 */}




          {/* Parte 8 */}



          {/* <h2 className="mb-2 mt-6 w-[50%] text-lg font-semibold">
            MA BANKS TECNOLOGIA EM MEIOS DE PAGAMETOS LTDA CNPJ nº
            00.000.000/0000-00.
          </h2> */}
        </div>
      </div>

      <Footer />
    </>
  );
}
