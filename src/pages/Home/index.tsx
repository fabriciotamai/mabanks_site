// Components
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Header } from '../../components/Header';

// Templates
import { SectionOne } from '../../template/SectionOne';
import { SectionTwo } from '../../template/SectionTwo';

export default function Home() {
  return (
    <>
      <nav>
        <NavBar />
        <header>
          <Header />
        </header>
      </nav>

      <SectionOne />
      <SectionTwo />
      <Footer />
    </>
  );
}
