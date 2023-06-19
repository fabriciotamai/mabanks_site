// Components
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Header } from '../../components/Header';

// Templates
import { SectionOne } from '../../template/SectionOne';

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
      <Footer />
    </>
  );
}
