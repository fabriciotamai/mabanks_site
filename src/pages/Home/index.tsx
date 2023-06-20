// Templates
import { NavBar } from '../../template/NavBar';
import { Header } from '../../template/Header';
import { Footer } from '../../template/Footer';
import { SectionOne } from '../../template/SectionOne';
import { SectionTwo } from '../../template/SectionTwo';
import { SectionThree } from '../../template/SectionThree';

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
        <Header />
      </header>

      <div className="content">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
