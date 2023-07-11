// Icons
import {
  MoveRight,
  ArrowLeftRight,
  Infinity,
  QrCode,
  CreditCard,
} from 'lucide-react';

import machineCard from '/assets/icons/machine-card.svg';

// Components
import { Button } from '../../components/Button';
import { BenefitsCard } from '../../components/BenefitsCard';

const benefitsData = [
  {
    title: 'TED',
    icon: <ArrowLeftRight />,
  },
  {
    title: 'Pix',
    icon: <Infinity />,
  },
  {
    title: 'Emissão de boletos',
    icon: <QrCode />,
  },
  {
    title: 'Cartão adicional business',
    icon: <CreditCard />,
  },
  {
    title: 'Máquina de cartão',
    iconType: machineCard,
  },
  {
    title: 'Cartão virtual',
    icon: <CreditCard />,
  },
];

export function SectionFive() {
  return (
    <div className="mx-auto mt-20 flex max-w-[84%] flex-col overflow-x-hidden text-neutral-950 xl:max-w-[64%]">
      {/* ----------- Header Texts -----------*/}
      <div className="flex flex-col items-center gap-8 xl:flex-row xl:justify-between xl:gap-40">
        <h1 className="text-center text-3xl font-semibold lg:text-start xl:w-1/3">
          Conheça as nossas soluções para você.
        </h1>

        <div className="flex flex-col items-center text-center xl:w-[46%] xl:items-start xl:text-start">
          <h3 className="mb-2 text-zinc-500">
            Soluções bancárias com mais agilidade e flexibilidade.
          </h3>

          <p className="text-zinc-500">
            Transferências e saques, emissão e pagamento de boletos (inclusive
            via cartão da conta), pagamento de tributos, internet banking
            completo e mais.
          </p>

          <div className="mt-5 flex">
            <Button
              type={false}
              title="Quero abrir minha conta"
              color="desktop"
              url="#"
              icon={<MoveRight />}
              btnStyle="bg-neutral-950 text-white hover:bg-neutral-800"
            />
          </div>
        </div>
      </div>

      {/* ----------- Benefits icons -----------*/}
      <div className="mt-24 flex items-center lg:flex-col">
        <div className="flex w-full flex-col items-center justify-between xl:flex-row xl:items-start">
          {/* Icons Letf */}
          <div className="benefits" data-aos="fade-right">
            {benefitsData.map((item) => {
              return (
                <div className="xl:w-[23rem] 2xl:w-[32rem]" key={item.title}>
                  <BenefitsCard
                    title={item.title}
                    icon={
                      item.icon ? (
                        item.icon
                      ) : (
                        <img src={item.iconType} width={21} />
                      )
                    }
                  />
                </div>
              );
            })}
          </div>

          {/* Icons Right */}
          <div className="benefits" data-aos="fade-left">
            {benefitsData.map((item) => {
              return (
                <div className="xl:w-[23rem] 2xl:w-[32rem]" key={item.title}>
                  <BenefitsCard
                    title={item.title}
                    icon={
                      item.icon ? (
                        item.icon
                      ) : (
                        <img src={item.iconType} width={21} />
                      )
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
