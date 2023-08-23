// Context
import { useMyContext } from '../../context/Context';

// Icons
import { Check } from 'lucide-react';

// Components
import { HorizontalTable } from '../../components/HorizontalTable';
import { useState } from 'react';

const tableToYouData = [
  {
    title: 'Cartão virtual',
    icon1: <Check />,
    icon2: <Check />,
    icon3: <Check />,
    type: true,
  },
  {
    title: 'Cartão contactless',
    icon1: 'R$ 22,90',
    icon2: <Check />,
    icon3: <Check />,
    type: true,
  },
  {
    title: 'Cartão adicional',
    icon1: 'R$ 22,90',
    icon2: 'R$ 22,90',
    icon3: <Check />,
    type: true,
  },
  {
    title: 'Pagamento de boleto via cartão',
    icon1: <Check />,
    icon2: <Check />,
    icon3: <Check />,
    type: true,
  },
  {
    title: 'Pix',
    icon1: <Check />,
    icon2: <Check />,
    icon3: <Check />,
    type: true,
  },
  {
    title: 'Transferência entre contas',
    icon1: <Check />,
    icon2: <Check />,
    icon3: <Check />,
    type: true,
  },
  {
    title: 'TED',
    icon1: 'R$ 8,99',
    icon2: 'R$ 4,99',
    icon3: 'R$ 2,99',
    type: true,
  },
  {
    title: 'Emissão de boletos',
    icon1: 'R$ 5,99',
    icon2: 'R$ 3,99',
    icon3: 'R$ 2,49',
    type: true,
  },
  {
    title: 'Saque',
    icon1: 'R$ 9,99',
    icon2: 'R$ 7,99',
    icon3: 'R$ 6,99',
    type: true,
  },
  {
    title: 'Taggy 10',
    icon1: 'R$ 14,90',
    icon2: 'R$ 14,90',
    icon3: <Check />,
    type: true,
  },
  {
    title: 'Cartão mesada',
    icon1: 'R$ 7,50',
    icon2: 'R$ 7,50',
    icon3: <Check />,
    type: true,
  },
];

const tableToCompanyData = [
  {
    title: 'Cartão virtual',
    icon1: <Check />,
    icon2: <Check />,
    icon3: <Check />,
    type: true,
  },
  {
    title: 'Cartão contactless',
    icon1: 'R$ 22,90',
    icon2: <Check />,
    icon3: <Check />,
    type: true,
  },
  {
    title: 'Cartão adicional',
    icon1: 'R$ 22,90',
    icon2: 'R$ 22,90',
    icon3: <Check />,
    type: true,
  },
  {
    title: 'Pagamento de boleto via cartão',
    icon1: <Check />,
    icon2: <Check />,
    icon3: <Check />,
    type: true,
  },
  {
    title: 'Pix',
    icon1: <Check />,
    icon2: <Check />,
    icon3: <Check />,
    type: true,
  },
  {
    title: 'Transferência entre contas',
    icon1: <Check />,
    icon2: <Check />,
    icon3: <Check />,
    type: true,
  },
  {
    title: 'TED',
    icon1: 'R$ 8,99',
    icon2: 'R$ 3,29',
    icon3: 'R$ 2,49',
    type: true,
  },
  {
    title: 'Emissão de boletos',
    icon1: 'R$ 5,99',
    icon2: 'R$ 3,29',
    icon3: 'R$ 2,49',
    type: true,
  },
  {
    title: 'Saque',
    icon1: 'R$ 9,99',
    icon2: 'R$ 7,99',
    icon3: 'R$ 6,99',
    type: true,
  },
  {
    title: 'Taggy 10',
    icon1: 'R$ 14,90',
    icon2: 'R$ 14,90',
    icon3: <Check />,
    type: true,
  },
  {
    title: 'Cartão mesada',
    icon1: 'R$ 7,50',
    icon2: 'R$ 7,50',
    icon3: <Check />,
    type: true,
  },
];

export function SectionSix() {
  const [plan, setPlan] = useState<'left' | 'mid' | 'right'>('left');
  const { company, handleSetCompany } = useMyContext();

  const handleSelectLeft = () => {
    setPlan('left');
  };

  const handleSelectMid = () => {
    setPlan('mid');
  };

  const handleSelectRight = () => {
    setPlan('right');
  };

  const handleSelectCompany = () => {
    if (company) {
      return tableToCompanyData;
    } else {
      return tableToYouData;
    }
  };

  const tableBenefits = handleSelectCompany();

  return (
    <div
      id="planos"
      className={`${
        company ? 'bg-[#3B3B3B]' : 'bg-[#585656]'
      } mt-20 flex flex-col items-center gap-5 overflow-x-hidden pb-20 pt-24`}
    >
      {/* ----------- Title -----------*/}
      <h1 className="w-[95%] text-center text-xl text-white sm:text-3xl xl:w-1/2">
        {company ? (
          <>
            <b>Conheça os planos Ma Banks, para sua empresa</b>: qual se adequá
            melhor à sua necessidade?
          </>
        ) : (
          <>
            <b>Conheça os planos Ma Banks</b>: qual se adequá melhor à sua
            necessidade?
          </>
        )}
      </h1>

      {/* ----------- Benefits table -----------*/}
      <div
        className="w-[97%] py-5 text-base text-white sm:w-[85%] lg:w-[50%]"
        data-aos="zoom-out"
      >
        {/* <table>
          <thead>
            <tr className="font-Syne font-semibold sm:text-2xl">
              <td
                className={`border-b-2 border-neutral-50/30 pb-5 text-center text-neutral-800 `}
              >
                <button
                  onClick={() =>
                    company ? handleSetCompany(false) : handleSetCompany(true)
                  }
                >
                  {company ? 'Para você?' : 'Para sua empresa?'}
                </button>
              </td>

              <td
                className={`${
                  plan === 'left'
                    ? 'border-b-2 border-neutral-800 text-neutral-800'
                    : 'border-b-[1px] border-neutral-50/30'
                } pb-5 text-center `}
              >
                <button onClick={handleSelectLeft}>Ma Banks</button>
              </td>

              <td
                className={`${
                  plan === 'mid'
                    ? 'border-b-2 border-neutral-800 text-neutral-800'
                    : 'border-b-[1px] border-neutral-50/30'
                } pb-5 text-center`}
              >
                <button onClick={handleSelectMid}>Cronos</button>
              </td>

              <td
                className={`${
                  plan === 'right'
                    ? 'border-b-2 border-neutral-800 text-neutral-800'
                    : 'border-b-[1px] border-neutral-50/30'
                } pb-5 text-center `}
              >
                <button onClick={handleSelectRight}>Titan</button>
              </td>
            </tr>

            <tr className="border-b-[1px] border-neutral-50/30">
              <td className="pb-5 text-center"></td>
              <td
                className={`${
                  plan === 'left' ? 'text-neutral-900' : 'text-neutral-100/30'
                } pb-5 pt-5 text-center`}
              >
                Sem tarifa
              </td>
              <td
                className={`${
                  plan === 'mid' ? 'text-neutral-900' : 'text-neutral-100/30'
                } pb-5 pt-5 text-center`}
              >
                R$ 9,90/mês
              </td>
              <td
                className={`${
                  plan === 'right' ? 'text-neutral-900' : 'text-neutral-100/30'
                } pb-5 pt-5 text-center`}
              >
                R$ 39,90/mês
              </td>
            </tr>
          </thead>

          {tableBenefits.map((item) => {
            return (
              <tbody key={item.title}>
                <HorizontalTable
                  key={item.title}
                  type={plan}
                  title={item.title}
                  icon1={item.icon1}
                  icon2={item.icon2}
                  icon3={item.icon3}
                />
              </tbody>
            );
          })}
        </table> */}
      </div>
    </div>
  );
}
