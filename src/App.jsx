import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Specials from './components/Specials';
import MenuSection from './components/MenuSection';
import PriceList from './components/PriceList';
import Catering from './components/Catering';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Specials />
        <MenuSection />
        <PriceList />
        <Catering />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
