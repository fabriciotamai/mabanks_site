import { useEffect, useState } from 'react';

// Images
import logo from '../../assets/images/logo.webp';
import logoMobile from '../../assets/images/logo-mobile.webp';

// Icons
import { User, MoveRight, Menu } from 'lucide-react';

// Components
import { Button } from '../Button';
import { NavBarMobile } from '../NavBarMobile';

export function NavBar() {
  const [isSmViewPort, setSmViewPort] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollInPosition, setScrollInPosition] = useState(false);

  // Change the logo based on the window size (mobile).
  useEffect(() => {
    const handleResize = () => {
      setSmViewPort(window.innerWidth < 1280);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Detecting the scroll position and updating the NavBar's
  // background and position based on that position.
  let isScrolling = false;

  function handleScroll() {
    if (!isScrolling) {
      isScrolling = true;

      requestAnimationFrame(() => {
        const scrollYPosition = window.scrollY;

        if (scrollYPosition >= 60) {
          setScrollInPosition(true);
        } else {
          setScrollInPosition(false);
        }

        isScrolling = false;
      });
    }
  }
  window.addEventListener('scroll', handleScroll);

  return (
    <div
      className={`${
        scrollInPosition ? 'fixed bg-neutral-900' : 'absolute'
      } z-10 flex w-full items-center justify-between px-5 py-4 transition duration-100 ease-in-out sm:px-16 xl:px-20`}
    >
      {/* ----------- Menu Mobile -----------*/}
      <button
        onClick={() => setShowMobileMenu(true)}
        className="mobile-btn flex rounded p-1 transition ease-in will-change-transform hover:scale-110 hover:bg-red-500 xl:hidden"
      >
        <Menu color="white" width={25} height={25} />
      </button>

      <div className="navbar-mobile xl:hidden">
        <NavBarMobile show={showMobileMenu} setShowMobileMenu={() => setShowMobileMenu(false)} />
      </div>

      {/* ----------- Menu Desktop -----------*/}
      <a href="/">
        {isSmViewPort ? <img src={logoMobile} width={70} height={45} /> : <img src={logo} width={150} height={100} />}
      </a>

      <ul className="hidden gap-7 text-xs text-stone-300 lg:text-sm xl:flex xl:text-base">
        <li className="delay-5 transition ease-in hover:text-white">
          <a href="#">Para sua empresa</a>
        </li>

        <li className="delay-5 transition ease-in hover:text-white">
          <a href="#">Para você</a>
        </li>

        <li className="delay-5 transition ease-in hover:text-white">
          <a href="#">Contato</a>
        </li>

        <li className="delay-5 transition ease-in hover:text-white">
          <a href="#">Blog</a>
        </li>
      </ul>

      <ul className="flex items-center gap-7 text-white">
        <li className="delay-5 hidden text-stone-300 transition ease-in hover:text-white lg:flex">
          <a href="#">Quem somos</a>
        </li>

        <li className="hidden hover:text-white lg:flex">
          <Button color="desktop" type={true} title="Acessar" icon={<User width={20} height={20} />} url={'#'} />
        </li>

        <li className="hover:text-white">
          <Button
            type={false}
            title={isSmViewPort ? 'Abrir conta' : 'Quero abrir minha conta'}
            icon={<MoveRight width={20} height={20} />}
            color="desktop"
            url={'#'}
          />
        </li>
      </ul>
      {/* ----------- End Menu Desktop -----------*/}
    </div>
  );
}
