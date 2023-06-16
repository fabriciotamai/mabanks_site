// Videos
import homeBg from '/assets/videos/home-bg.mp4';

// Components
import { SectionText } from '../SectionText';

// Icons
import { MoveRight } from 'lucide-react';

export function Header() {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="absolute left-0 top-0 z-[1] h-screen w-full bg-black/40" />
        <video loop autoPlay muted className="absolute left-0 top-0 h-full w-full object-cover">
          <source src={homeBg} type="video/mp4" />
        </video>
        <div className="absolute bottom-0 left-[10%] right-0 top-0 z-[1] flex items-center sm:left-[18%]">
          <SectionText
            title="Para quem é dono do próprio tempo"
            description="Base é a solução financeira completa para você e para a sua empresa."
            btnType={false}
            btnTitle="Conheça os nossos produtos"
            btnIcon={<MoveRight width={20} height={20} />}
            btnColor="desktop"
            btnUrl="#"
            boxStyle="text-white"
            titleStyle="text-5xl sm:w-[80%] spacing-1 leading-[1.3]"
            desStyle="w-[70%] sm:w-full"
          />
        </div>
      </div>
    </>
  );
}
