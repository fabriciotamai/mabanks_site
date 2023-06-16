// Components
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Header } from '../../components/Header';

export default function Home() {
  return (
    <>
      <nav>
        <NavBar />
        <header>
          <Header />
        </header>
      </nav>

      <Footer />
    </>
  );
}
