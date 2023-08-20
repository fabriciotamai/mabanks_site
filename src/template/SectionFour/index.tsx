// Icons
import { MoveRight } from 'lucide-react';

// Components
import { SectionText } from '../../components/SectionText';
import IconCredit from '../../assets/images/cardPngcredit.png'

export function SectionFour() {
  return (
    <div className="relative mt-28 gap-28 bg-[#828282] text-white">
      <div className="gap-3xl flex flex-col items-center justify-between lg:flex-row lg:pl-[2%] xl:pl-[18%]">
        {/* ----------- Left text -----------*/}
        <div className="z-[1] mt-10 flex w-[80%] text-center sm:w-[50%] lg:mt-0 lg:w-1/4 lg:text-left xl:w-1/4">
          <SectionText
            title="Cartão da conta sem verificação de crédito e facilidade para receber."
            description="Somente o Ma Banks garante um cartão pré-pago que te coloca no controle dos seus gastos!"
            btnType={false}
            btnTitle="Peça agora!"
            btnColor="mobile"
            btnUrl="#"
            btnIcon={<MoveRight />}
            titleStyle="text-2xl font-semibold"
            desStyle="text-base"
            btnStyle="justify-center mb-36 lg:mb-0 lg:justify-start"
          />
        </div>

        {/* ----------- Right bg -----------*/}
        <div className="flex w-full lg:w-[50rem] ">
          {/* <div
            className={`h-[500px] w-full  bg-cover bg-no-repeat`}
          /> */}
          <img src={IconCredit} width={400} height={200} className="ml-28"  data-aos="fade-up" />
        </div>
      </div>
    </div>
  );
}
