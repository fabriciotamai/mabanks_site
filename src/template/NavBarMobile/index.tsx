// Images
import logoMobile from '../../assets/images/logo-mobile.webp';

// Icons
import { X } from 'lucide-react';
import { Button } from '../../components/Button';
import iconDownloadApple from '/assets/icons/download-on-apple.svg';
import iconDownloadGoogle from '/assets/images/download-on-google.png';

interface NavMobileProps {
  show: boolean;
  setShowMobileMenu: () => void;
}

export function NavBarMobile({ show, setShowMobileMenu }: NavMobileProps) {
  const setShow = show
    ? 'translate-none ease-in'
    : 'translate-x-[-100%] ease-out';

  return (
    <div
      className={`${setShow} fixed bottom-0 left-0 right-0 top-0 bg-red-400 pt-4 transition`}
    >
      <div className="mx-auto w-[90%]">
        {/* ----------- Button X mobile -----------*/}
        <div className="nav-head flex items-center justify-between pb-16">
          <button
            onClick={() => setShowMobileMenu()}
            className="rounded p-1 hover:scale-110 hover:bg-white"
          >
            <X color="#171717" className="scale-110" />
          </button>

          <a href="/">
            <img src={logoMobile} width={70} height={45} />
          </a>

          <Button type={false} title="Abrir conta" color="mobile" url="#" />
        </div>

        {/* ----------- NavItems mobile -----------*/}
        <div className="flex flex-col">
          <div className="nav-tem">
            <ul className="flex flex-col gap-5 font-medium text-neutral-900">
              <li>
                <a href="#" className="py-2 hover:text-white">
                  Para sua empresa
                </a>
              </li>

              <li>
                <a href="#" className="py-2 hover:text-white">
                  Para você
                </a>
              </li>

              <li>
                <a href="#" className="py-2 hover:text-white">
                  Contato
                </a>
              </li>

              <li>
                <a href="#" className="py-2 hover:text-white">
                  Blog
                </a>
              </li>

              <li className="border-y-[0.1rem] border-neutral-900 py-5">
                <a href="#" className="py-5 hover:text-white">
                  Tenha seu próprio banco digital
                </a>
              </li>
            </ul>
          </div>

          {/* ----------- App Download buttons -----------*/}
          <div className="mt-10 text-xl font-semibold text-neutral-900">
            <h1>Baixe agora o app!</h1>
            <div className="mt-1 flex flex-row items-center gap-7">
              <a href="http://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img
                  className="h-auto w-60"
                  alt="Disponível no Google Play"
                  src={iconDownloadGoogle}
                />
              </a>
              <a href="http://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img
                  className="h-auto w-56"
                  alt="Disponível na Apple"
                  src={iconDownloadApple}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
