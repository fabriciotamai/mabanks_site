import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Context
import { useMyContext } from '../../context/Context';

// Images
import logo from '../../assets/icons/logo.svg';
import logoMobile from '../../assets/icons/logo-mobile.svg';

// Icons
import { User, MoveRight, Menu } from 'lucide-react';

// Components
import { Button } from '../../components/Button';

// Templates
import { NavBarMobile } from '../NavBarMobile';

export function NavBar() {
  const [isSmViewPort, setSmViewPort] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollInPosition, setScrollInPosition] = useState(false);
  const { handleSetCompany } = useMyContext();

  // Scroll to plans on click
  useEffect(() => {
    const idToPlans = 'planos';
    const sectionPlan = document.getElementById(idToPlans);
    const hash = window.location.hash;

    if (sectionPlan && hash) {
      sectionPlan.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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
        scrollInPosition ? 'fixed z-50 bg-neutral-900' : 'absolute'
      } z-10 flex w-full items-center justify-between px-5 py-2 transition duration-100 ease-in-out sm:px-16 xl:px-20`}
    >
      {/* ----------- Menu Mobile -----------*/}
      <button
        onClick={() => setShowMobileMenu(true)}
        className="mobile-btn flex rounded p-1 transition ease-in will-change-transform hover:scale-110 hover:bg-red-500 xl:hidden"
      >
        <Menu color="white" width={25} height={25} />
      </button>

      <div className="navbar-mobile xl:hidden">
        <NavBarMobile
          show={showMobileMenu}
          setShowMobileMenu={() => setShowMobileMenu(false)}
        />
      </div>

      {/* ----------- Menu Desktop -----------*/}
      <a href="/">
        {isSmViewPort ? (
          <img src={logoMobile} width={55} height={45} />
        ) : (
          <img src={logo} width={180} height={'auto'} />
        )}
      </a>

      <ul className="hidden gap-7 text-xs text-stone-300 lg:text-sm xl:flex xl:text-base">
        <li className="delay-5 transition ease-in hover:text-white">
          <a href="/#planos" onClick={() => handleSetCompany(true)}>
            Para sua empresa
          </a>
        </li>

        <li className="delay-5 transition ease-in hover:text-white">
          <a href="/#planos" onClick={() => handleSetCompany(false)}>
            Para você
          </a>
        </li>

        <li className="delay-5 transition ease-in hover:text-white">
          <a href="/contato">Contato</a>
        </li>
      </ul>

      <ul className="flex items-center gap-7 text-white">
        <li className="delay-5 hidden text-stone-300 transition ease-in hover:text-white lg:flex">
          <a href="/quem-somos">Quem somos</a>
        </li>

        <li className="hidden hover:text-white lg:flex">
          <Button
            color="desktop"
            type={true}
            title="Acessar"
            icon={<User width={20} height={20} />}
            url="/login"
          />
        </li>

        <li className="hover:text-white">
          <Button
            type={false}
            title={isSmViewPort ? 'Abrir conta' : 'Quero abrir minha conta'}
            icon={<MoveRight width={20} height={20} />}
            color="desktop"
            url="/register"
            btnStyle={
              scrollInPosition
                ? 'bg-white text-neutral-950 hover:bg-neutral-500 hover:text-white'
                : 'bg-neutral-950 hover:bg-white hover:text-neutral-950 border-2'
            }
          />
        </li>
      </ul>
      {/* ----------- End Menu Desktop -----------*/}
    </div>
  );
}
