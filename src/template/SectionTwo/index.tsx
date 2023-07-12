// Icons
import { MoveRight } from 'lucide-react';

// Images
import creditCard from '/assets/images/credit-card.png';

// Components
import { SectionText } from '../../components/SectionText';

export function SectionTwo() {
  return (
    <div className="relative gap-28 bg-teal-950 text-white">
      <div className="gap-3xl flex flex-col items-center justify-between lg:flex-row lg:pl-[2%] xl:pl-[18%]">
        {/* ----------- Left text -----------*/}
        <div className="z-[1] mt-10 flex w-[80%] text-center sm:w-[50%] lg:mt-0 lg:w-1/4 lg:text-left xl:w-1/4">
          <SectionText
            title="Estamos do seu lado para superar ainda mais desafios!"
            description="Escolha ser Ma Banks, Cronos ou Titan. Sem surpresas ou taxas escondidas."
            btnType={false}
            btnTitle="Conheça os planos Ma Banks"
            btnColor="desktop"
            btnUrl="#"
            btnIcon={<MoveRight />}
            titleStyle="text-2xl font-semibold"
            desStyle="text-base"
            btnContainerStyle="justify-center mb-36 lg:mb-0 lg:justify-start"
            btnStyle="bg-white hover:text-white hover:bg-neutral-950 text-neutral-950"
          />
        </div>

        {/* ----------- Credit card -----------*/}
        <div className="credit-card absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
          <img
            src={creditCard}
            width={280}
            height={'100%'}
            data-aos="fade-up"
            alt="Cartão de crédito - Liberte-se das limitações financeiras e desfrute da liberdade de compra"
          />
        </div>

        {/* ----------- Right bg -----------*/}
        <div className="flex w-full lg:w-[40rem]">
          <div
            className={`h-[500px] w-full bg-[url('/assets/images/dog.jpeg')] bg-cover bg-no-repeat`}
          />
        </div>
      </div>
    </div>
  );
}
