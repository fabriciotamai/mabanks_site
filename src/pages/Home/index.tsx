//
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Templates
import { NavBar } from '../../template/NavBar';
import { Header } from '../../template/Header';
import { Footer } from '../../template/Footer';
import { SectionOne } from '../../template/SectionOne';
import { SectionTwo } from '../../template/SectionTwo';
import { SectionThree } from '../../template/SectionThree';
import { SectionFour } from '../../template/SectionFour';
import { SectionFive } from '../../template/SectionFive';
import { SectionSix } from '../../template/SectionSix';

export function Home() {
  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>

        <Header />
      </header>

      <div>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
