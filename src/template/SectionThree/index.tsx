// Icons
import { MoveRight } from 'lucide-react';

// Images
import cardLogo from '/assets/images/card-logo.png';

// Components
import { Card } from '../../components/Card';

export function SectionThree() {
  return (
    <>
      {/* ----------- Texts -----------*/}
      <div
        data-aos="fade-right"
        className="mb-20 mt-20 flex flex-col flex-wrap px-10 text-center text-base text-neutral-900 lg:w-[45%] lg:items-start lg:justify-start lg:pl-10 lg:pr-0 lg:text-start xl:pl-[18%]"
      >
        <h1 className="mb-6 text-3xl">
          Você ganha tempo <b>e a gente cuida do resto.</b>
        </h1>
        <p className="lg:w-[70%]">
          Vantagens que o Ma Banks oferece para você fazer o seu negócio
          crescer.
        </p>
      </div>

      <div className="mx-auto w-full xl:max-w-[64%]">
        {/* ----------- Cards Large & Small -----------*/}
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="cards grid grid-cols-1 lg:grid-cols-2">
            <div className="card-large">
              <Card
                type="bgNone"
                btnType={true}
                btnTitle="Saiba mais"
                btnColor="desktop"
                logo={cardLogo}
                btnIcon={<MoveRight />}
                title="Receba pagamentos com agilidade."
                description="Aproveite todas as vantagens do Ma Banks com o Titan, o nosso plano completo."
                btnUrl="#"
                titleStyle="w-[50%] !hidden"
                descStyle="w-[70%]"
                mainContainerStyle="!bg-[#1e1e1e]"
                image="bg-[url('/assets/images/card-image.jpeg')]"
              />
            </div>

            <div className="card-small grid">
              <Card
                type="bgNone"
                btnType={true}
                btnTitle="Saiba mais"
                btnColor="desktop"
                btnIcon={<MoveRight />}
                title="Receba pagamentos com agilidade."
                description="QR code, link, ou maquininha, tudo integrado."
                btnUrl="#"
                titleStyle="w-[50%]"
                descStyle="w-[70%]"
                logoStyle="!hidden"
                mainContainerStyle="!bg-[#1e1e1e]"
                image="bg-[url('/assets/images/card-image.jpeg')]"
              />
            </div>
          </div>

          {/* ----------- Bottom Cards Small -----------*/}
          <div className="flex w-full max-w-[1337px] flex-col items-center justify-center">
            <div className="cards grid grid-cols-1 lg:grid-cols-3">
              <div className="card-small grid">
                <Card
                  type="bgImage"
                  btnType={true}
                  btnTitle="Saiba mais"
                  btnColor="desktop"
                  btnIcon={<MoveRight />}
                  title="Simplifique o pagamento da folha."
                  description="Pagamentos automatizados para te economizar tempo."
                  btnUrl="#"
                  logoStyle="hidden"
                  titleStyle="xl:w-[80%]"
                  descStyle="w-[80%]"
                  mainContainerStyle="!bg-[#1e1e1e]"
                  mainContainerImage="bg-[url('/assets/images/card-image-old.jpeg')]"
                />
              </div>

              <div className="card-small grid">
                <Card
                  btnType={true}
                  btnTitle="Saiba mais"
                  btnColor="desktop"
                  btnIcon={<MoveRight />}
                  title="Receba pagamentos com agilidade."
                  description="Aproveite todas as vantagens do Ma Banks com o Titan, o nosso plano completo."
                  btnUrl="#"
                  logoStyle="hidden"
                  titleStyle="xl:w-[80%]"
                  descStyle="w-[80%]"
                  mainContainerStyle="!bg-teal-950"
                />
              </div>

              <div className="card-small grid">
                <Card
                  btnType={true}
                  btnTitle="Saiba mais"
                  btnColor="desktop"
                  logo={cardLogo}
                  btnIcon={<MoveRight />}
                  title="Economize tempo com o Ma Banks."
                  description="Diga adeus às filas de pedágio e estacionamentos."
                  btnUrl="#"
                  titleStyle="xl:w-[80%]"
                  descStyle="w-[80%]"
                  mainContainerStyle="!bg-red-400"
                  btnContainerStyle="hidden"
                  image="bg-[url('/assets/images/card-image.png')]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
