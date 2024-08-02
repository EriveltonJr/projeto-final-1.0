import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Bem-vindo ao BestFitness</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;