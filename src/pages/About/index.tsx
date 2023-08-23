// Icons
import { MoveRight } from 'lucide-react';

// Components
import { SectionText } from '../../components/SectionText';
import { Section } from '../../components/Section';

// Templates
import { Footer } from '../../template/Footer';
import { NavBar } from '../../template/NavBar';
import { OtherHeader } from '../../template/OtherHeader';

export function About() {
  return (
    <>
      <NavBar />
      <OtherHeader
        title="Economize tempo, alcance resultados: nossa missão é clara e transparente."
        description="Nós somos a Ma Banks e estamos ao seu lado."
        btnType={false}
        btnTitle="Conheça os nossos produtos"
        btnIcon={<MoveRight width={20} height={20} />}
        btnColor="desktop"
        btnUrl="#"
        boxStyle="text-white"
        titleStyle="text-3xl sm:w-[50%] spacing-1 leading-[1.3] pt-20"
        desStyle="w-[70%] sm:w-full"
        btnStyle="bg-neutral-950 hover:text-neutral-950 hover:bg-white hidden"
        bgUrl="/assets/images/pictureacess.jpg"
      />

      <div className="mx-auto mb-20 mt-20 flex flex-col justify-between lg:max-w-[64%] lg:flex-row">
        <SectionText
          title="Liberte-se com Ma Banks: a escolha financeira para quem valoriza sua liberdade e autonomia."
          description=""
          btnType={false}
          btnTitle=""
          btnColor="desktop"
          desStyle="hidden"
          titleStyle="lg:text-3xl px-6 lg:px-0 md:px-[10rem] md:text-2xl text-lg lg:w-[78%] lg:text-start text-center"
          btnStyle="hidden"
          btnUrl="#"
          boxStyle="justify-center lg:justify-start"
        />

        <div className="flex flex-col items-center text-base text-zinc-500">
          <p className="px-2  text-center md:px-6 lg:w-[70%] lg:px-0 lg:text-start">
            Apresentamos a Ma Banks, uma solução financeira totalmente digital e
            abrangente, desenvolvida especificamente para atender às
            necessidades dos empreendedores brasileiros. Com mais de 20 anos de
            experiência nesse campo, entendemos a realidade e os desafios
            enfrentados pelos empresários.
          </p>
          <p className="my-5 px-2 text-center md:px-6 lg:w-[70%] lg:px-0 lg:text-start">
            Nosso objetivo é acompanhar a evolução de diversos tipos de
            negócios, desde o setor varejista até a indústria, e constantemente
            aprimorar nossos serviços. Combinamos a velocidade e agilidade de um
            produto digital com um atendimento especializado e humano. Estamos
            aqui não apenas para resolver seus problemas, mas também para
            orientá-lo a qualquer momento.
          </p>

          <p className="px-2 text-center text-neutral-950 md:px-6 lg:w-[70%] lg:px-0 lg:text-start">
            Ma Banks: Sua nova casa e parceiro de confiança para impulsionar o
            crescimento do seu negócio. Estamos ao seu lado!
          </p>
        </div>
      </div>

      <div className="">
        <Section
          bgStyle={"bg-[url('/assets/images/imgmanwhite.jpg')]"}
          title="Conheça a nossa história: Uma jornada que se conecta com a sua."
          description="Sua história é a nossa prioridade, cada minuto importa para nós."
          btnType={false}
          btnTitle="Conhecer"
          btnColor="desktop"
          desStyle="lg:w-[100%] lg:max-w-[70%] text-center lg:text-start"
          titleStyle="text-3xl lg:w-[100%] lg:max-w-[70%] text-center lg:text-start"
          btnStyle="bg-neutral-950 text-white hover:bg-neutral-800"
          boxStyle="flex items-center lg:items-start"
          btnUrl="/#planos"
        />
      </div>

      <Footer />
    </>
  );
}
