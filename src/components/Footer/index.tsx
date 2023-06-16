// Icons
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import iconDownloadGoogle from '/assets/images/download-on-google.png';
import iconDownloadApple from '/assets/icons/download-on-apple.svg';

// Images
import logo from '../../assets/images/logo.webp';

// Components
import { AppDownload } from '../AppDownload';

export function Footer() {
  return (
    <footer className="flex flex-col bg-teal-950 px-10 pt-5 text-base text-stone-300 lg:px-20">
      <div className="footer-head flex flex-col justify-between gap-8 lg:flex-row ">
        <div className="infos">
          <a href="/" className="flex justify-center lg:justify-normal">
            <img src={logo} width={150} height={40} />
          </a>

          <div className="address mt-10">
            <h2 className="mb-1 font-semibold text-white">B Bank</h2>
            <p>Av. Orozimbo Maia, 1619, Cambuí, Campinas - SP</p>
            <p className="mb-4 mt-4">CEP: 13.024-035</p>
            <h2>Central de Atendimento:</h2>
            <p>0800 818 2807</p>
            <p>4003-8896</p>
            <p className="mt-4">faleconosco@t10.com.br</p>
          </div>
        </div>

        <div className="text-base">
          <h1 className="mb-4 text-lg font-semibold text-white">Informações</h1>
          <ul className="flex flex-col gap-5">
            <li>
              <a href="#" className="transition delay-[10] ease-in-out hover:text-white">
                Tarifas
              </a>
            </li>
            <li>
              <a href="#" className="transition delay-[10] ease-in-out hover:text-white">
                Politica Gerenciamento de Riscos
              </a>
            </li>
            <li>
              <a href="#" className="transition delay-[10] ease-in-out hover:text-white">
                Política de Prevenção à lavagem de dinheiro
              </a>
            </li>
            <li>
              <a href="#" className="transition delay-[10] ease-in-out hover:text-white">
                Procon
              </a>
            </li>
            <li>
              <a href="#" className="transition delay-[10] ease-in-out hover:text-white">
                Código de Defesa do Consumidor
              </a>
            </li>
          </ul>
        </div>

        <div className="text-base">
          <h1 className="mb-4 text-lg font-semibold text-white">Empresa</h1>
          <ul className="flex flex-col gap-5">
            <li>
              <a href="#" className="transition delay-[10] ease-in-out hover:text-white">
                Quem somos
              </a>
            </li>
            <li>
              <a href="#" className="transition delay-[10] ease-in-out hover:text-white">
                Contato
              </a>
            </li>
            <li>
              <a href="#" className="transition delay-[10] ease-in-out hover:text-white">
                Para sua empresa
              </a>
            </li>
            <li>
              <a href="#" className="transition delay-[10] ease-in-out hover:text-white">
                Para você
              </a>
            </li>
          </ul>

          {/* ----------- App Download buttons -----------*/}
          <AppDownload
            title="Baixe agora o app!"
            urlGoogle="https://www.google.com"
            altGoogle="Disponível no Google Play"
            iconGoogle={iconDownloadGoogle}
            urlApple="https://www.google.com"
            altApple="Disponível na Apple"
            iconApple={iconDownloadApple}
          />
        </div>
      </div>

      {/* ----------- Copyright & Terms -----------*/}
      <div className="footer-bottom mt-6 flex flex-col flex-wrap justify-between border-t-[0.1rem] md:flex-row md:items-center lg:flex-nowrap">
        <div className="flex flex-col gap-5 py-5 md:flex-row">
          <h1 className="text-sm md:hidden">Siga B Bank</h1>
          <div className="social-icons flex gap-5">
            <a href="#" className="icon-facebook rounded bg-red-400 p-2 text-white hover:bg-red-500 hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="icon-instagram rounded bg-red-400 p-2 text-white hover:bg-red-500 hover:text-white">
              <Instagram />
            </a>
            <a href="#" className="icon-facebook rounded bg-red-400 p-2 text-white hover:bg-red-500 hover:text-white">
              <Linkedin />
            </a>
            <a href="#" className="icon-youtube rounded bg-red-400 p-2 text-white hover:bg-red-500 hover:text-white">
              <Youtube />
            </a>
          </div>
        </div>

        <div className="flex flex-row text-sm lg:text-sm">
          <ul className="mb-4 mt-4 flex flex-col gap-3 px-0 sm:pl-0 md:flex-row md:gap-10 md-lg:mb-0 md-lg:mt-0 md-lg:px-10">
            <li>
              <a href="#" className="transition delay-[10] ease-in-out hover:text-white">
                Termos de uso
              </a>
            </li>
            <li>
              <a href="#" className="transition delay-[10] ease-in-out hover:text-white">
                Política de privacidade
              </a>
            </li>
            <li>
              <a href="#" className="transition delay-[10] ease-in-out hover:text-white">
                Segurança de informação
              </a>
            </li>
          </ul>
        </div>

        <p className="copyright mt-4 text-sm md:mt-0 lg:text-sm">
          Copyright © 2023, B Bank. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
