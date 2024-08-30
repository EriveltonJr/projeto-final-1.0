import React from "react";
import Hero from "./Hero";
import About from "./About";
import IMC from "./IMC";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto">
        <Hero/>
        <About/>
        <IMC/>
      </div>
    </>
  );
};

export default Home;