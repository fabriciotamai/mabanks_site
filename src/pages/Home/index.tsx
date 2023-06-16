// Components
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Header } from '../../components/Header';
import { SectionCard } from '../../components/SectionCard';

export default function Home() {
  return (
    <>
      <nav>
        <NavBar />
        <header>
          <Header />
        </header>
      </nav>

      <SectionCard
        title={'Gestão simplificada da folha de pagamentos.'}
        description={
          'Apenas no B Bank você economiza tempo com uma gestão automatizada e eficiente da folha de pagamentos.'
        }
      />
      <Footer />
    </>
  );
}
