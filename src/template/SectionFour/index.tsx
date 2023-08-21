// Icons
import { MoveRight } from 'lucide-react';

// Components
import { SectionText } from '../../components/SectionText';
import IconCredit from '../../assets/images/cardPngcredit.png'

export function SectionFour() {
  return (
    <div className="bg-[#828282] text-white">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:px-80">

        <div className="md:w-96 text-center md:text-start px-20 py-16 md:px-0 md:py-0">
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


        <div className="">

          <img src={IconCredit} width={400} height={200}    />
        </div>
      </div>
    </div>
  );
}
