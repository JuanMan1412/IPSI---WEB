import Header from "./components/Header";
import Hero from "./components/Hero";
import Niveles from "./components/Niveles";
import Inclusion from "./components/Inclusion";
import Galeria from "./components/Galeria";
import Videos from "./components/Videos";
import Faq from "./components/Faq";
import Ubicacion from "./components/Ubicacion";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Niveles />
        <Inclusion />
        <Galeria />
        <Videos />
        <Faq />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}