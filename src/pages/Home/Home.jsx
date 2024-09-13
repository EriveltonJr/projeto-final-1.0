import React from "react";
import Hero from "./Hero";
import About from "./About";
import IMC from "./IMC";
import Services from "./Services";
import Contatos from "./Contatos";
import Footer from "./Footer";

// Irá Redirecionar para as seções a partir da Navbar
const HomeSections = () => {  // Novo componente para as seções
  return (
    <div>
      <section id="hero" className="flex items-center justify-center">
        <Hero />
      </section>

      <section id="about" className="flex items-center justify-center">
        <About />
      </section>

      <section id="imc" className="flex items-center justify-center">
        <IMC />
      </section>
      
      <section id="services" className="flex items-center justify-center">
        <Services />
      </section>

      <section id="contatos" className="flex items-center justify-center">
        <Contatos />
      </section>

      <section id="footer" className="flex items-center justify-center">
        <Footer />
      </section>

      {/* Outras Seções */}

    </div>
  );
};

export default function Home() {  
  return <HomeSections />;
}