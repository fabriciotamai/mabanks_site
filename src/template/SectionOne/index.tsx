// Icons
import { Briefcase, Heart, Store, User2 } from 'lucide-react';

// Components
import { SectionCard } from '../../components/SectionCard';

const sectionRowOneData = [
  {
    id: 1,
    title: 'Gestão simplificada da folha de pagamentos.',
    description:
      'Apenas no Ma Banks você economiza tempo com uma gestão automatizada e eficiente da folha de pagamentos.',
    icon: <User2 />,
  },
  {
    id: 2,
    title: 'Assessoria jurídica especializada',
    description:
      'Parceria antes mesmo de fechar negócio. Prestamos auxílio na negociação de dívidas, pois somos parceiros do seu negócio!',
    icon: <Briefcase />,
  },
];

const sectionRowTwoData = [
  {
    id: 1,
    title: 'Atendimento humanizado',
    description:
      'Não perca tempo falando com máquinas se elas não puderem ajudar. Aqui sempre terá alguém a sua disposição via abertura de ticket ou telefone.',
    icon: <Heart />,
  },
  {
    id: 2,
    title: 'Estrutura de e-commerce gratuita',
    description:
      'O sistema Ma Banks de e-commerce conta com integração com a sua conta e é o único completamente gratuito do mercado!',
    icon: <Store />,
  },
];

export function SectionOne() {
  return (
    <div className=" flex flex-col justify-center gap-14 px-10 py-16 xl:flex-row xl:gap-40 ">
      {/* ----------- Left Texts -----------*/}
      <div className="text-base text-neutral-900 xl:w-[18rem] xl:pl-4 justify-center flex flex-col">
        <h1 className="max-w-sm text-2xl font-semibold mb-4">
          Somos parceiros para o seu negócio!
        </h1>
        <p className="font-medium">
          Aqui tem gestão financeira e conta corrente num só lugar.
        </p>
      </div>

      <div className="flex flex-col gap-20">
        {/* ----------- Right Card row1 -----------*/}
        <div className="flex flex-col flex-wrap gap-10 md:flex-row">
          {sectionRowOneData.map((item: any) => {
            return (
              <div className="card" key={item.id}>
                <SectionCard
                  title={item.title}
                  description={item.description}
                  titleStyle="text-neutral-900"
                  descStyle="text-zinc-500"
                  textContainerStyle="lg:w-96"
                  icon={item.icon}
                  bgIconStyle="text-neutral-950"
                />
              </div>
            );
          })}
        </div>

        {/* ----------- Right Card row2 -----------*/}
        <div className="flex flex-col gap-10 md:flex-row">
          {sectionRowTwoData.map((item: any) => {
            return (
              <div className="car" key={item.id}>
                <SectionCard
                  title={item.title}
                  description={item.description}
                  titleStyle="text-neutral-900"
                  descStyle="text-zinc-500"
                  textContainerStyle="lg:w-96"
                  icon={item.icon}
                  bgIconStyle="text-neutral-950"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
