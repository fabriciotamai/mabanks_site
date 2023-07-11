// Icons
import { MoveRight } from 'lucide-react';

// Components
import { SectionText } from '../../components/SectionText';

// templates
import { ContactFrom } from '../../template/ContactFrom';
import { Footer } from '../../template/Footer';
import { NavBar } from '../../template/NavBar';
import { OtherHeader } from '../../template/OtherHeader';

export function Contact() {
  return (
    <>
      <NavBar />
      <OtherHeader
        title="Faça parte do nosso movimento pela evolução dos negócios Brasileiros!"
        description="Não perca tempo. Entre em contato que a gente te responde. :)"
        btnType={false}
        btnTitle="Conheça os nossos produtos"
        btnIcon={<MoveRight width={20} height={20} />}
        btnColor="desktop"
        btnUrl="#"
        boxStyle="text-white"
        titleStyle="text-4xl sm:w-[50%] spacing-1 leading-[1.3] pt-20"
        desStyle="w-[70%] sm:w-full"
        btnStyle="bg-neutral-950 hover:text-neutral-950 hover:bg-white hidden"
        bgUrl="/assets/images/contact-bg.png"
      />

      <div className="mb-20 mt-20 flex flex-row flex-wrap lg:max-w-[92%]">
        <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row lg:items-start lg:gap-40">
          <SectionText
            title="Empreender será um pouco mais fácil se estivermos juntos."
            description="Fale conosco e tire todas as suas dúvidas."
            btnType={false}
            btnTitle={''}
            btnColor={'desktop'}
            btnUrl={''}
            btnStyle="hidden"
            titleStyle="text-2xl"
            desStyle="text-zinc-500"
            boxStyle="lg:w-[25%] px-5 lg:px-0 text-center lg:text-start"
          />

          <div className="w-[90%] justify-items-center md:w-[40%] md:justify-items-start xl:w-[27%]">
            <ContactFrom />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
