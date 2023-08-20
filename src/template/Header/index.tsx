// Videos
import homeBg from '/assets/videos/home-bg.mp4';

// Components
import { SectionText } from '../../components/SectionText';

// Icons
import { MoveRight } from 'lucide-react';

export function Header() {
  return (
    <>
      <div className="relative h-screen w-full bg-[url('/assets/images/empresario.png')] bg-cover">
        <div className="absolute left-0 top-0 z-[1] h-screen w-full bg-black/40" />
        {/* Video */}
        {/* <video
          loop
          autoPlay
          muted
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source src={homeBg} type="video/mp4" />
        </video> */}

        {/* SectionText component */}
        <div className="absolute bottom-0 left-[10%] right-0 top-0 z-[1] flex items-center sm:left-[18%]">
          <SectionText
            title="O caminho para o sucesso começa por aqui."
            description="Sua proteção é nossa prioridade. Venha para nosso banco!"
            btnType={false}
            btnTitle="Conheça os nossos produtos"
            btnIcon={<MoveRight width={20} height={20} />}
            btnColor="desktop"
            btnUrl="#"
            boxStyle="text-white"
            titleStyle="text-5xl sm:w-[70%] spacing-1 leading-[1.3]"
            desStyle="w-[70%] sm:w-full"
            btnStyle="bg-neutral-950 hover:text-neutral-950 hover:bg-white"
          />
        </div>
      </div>
    </>
  );
}
