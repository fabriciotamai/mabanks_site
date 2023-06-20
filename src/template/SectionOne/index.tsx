// Icons
import { Briefcase, Heart, Store, User2 } from 'lucide-react';

// Components
import { SectionCard } from '../../components/SectionCard';

const sectionRowOneData = [
  {
    title: 'Gestão simplificada da folha de pagamentos.',
    description:
      'Apenas no B Bank você economiza tempo com uma gestão automatizada e eficiente da folha de pagamentos.',
    icon: <User2 />,
  },
  {
    title: 'Assessoria jurídica especializada',
    description:
      'Parceria antes mesmo de fechar negócio. Prestamos auxílio na negociação de dívidas, pois somos parceiros do seu negócio!',
    icon: <Briefcase />,
  },
];

const sectionRowTwoData = [
  {
    title: 'Atendimento humanizado',
    description:
      'Não perca tempo falando com máquinas se elas não puderem ajudar. Aqui sempre terá alguém a sua disposição via abertura de ticket ou telefone.',
    icon: <Heart />,
  },
  {
    title: 'Estrutura de e-commerce gratuita',
    description:
      'O sistema B Bank de e-commerce conta com integração com a sua conta e é o único completamente gratuito do mercado!',
    icon: <Store />,
  },
];

export function SectionOne() {
  return (
    <div className="mx-auto flex flex-col justify-center gap-14 px-10 py-16 xl:flex-row xl:gap-40">
      {/* ----------- Left Texts -----------*/}
      <div className="text-base text-neutral-900 xl:w-[18rem] xl:pl-4">
        <h1 className="max-w-sm text-3xl font-semibold">
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
              <div className="card">
                <SectionCard
                  title={item.title}
                  description={item.description}
                  titleStyle="text-neutral-900"
                  descStyle="text-zinc-500"
                  textContainerStyle="lg:w-96"
                  icon={item.icon}
                  bgIconStyle="text-red-500"
                />
              </div>
            );
          })}
        </div>

        {/* ----------- Right Card row2 -----------*/}
        <div className="flex flex-col gap-10 md:flex-row">
          {sectionRowTwoData.map((item: any) => {
            return (
              <div className="car">
                <SectionCard
                  title={item.title}
                  description={item.description}
                  titleStyle="text-neutral-900"
                  descStyle="text-zinc-500"
                  textContainerStyle="lg:w-96"
                  icon={item.icon}
                  bgIconStyle="text-red-500"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
