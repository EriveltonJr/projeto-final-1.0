import { Dumbbell } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <>
    <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 
    md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse">
      <div className ="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative 
      overflow-hidden rounded-lg">
        <img
          src = "https://images.unsplash.com/photo-1526314149856-d8cf115d62f1?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt = "About image"
          className = "w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover"
        />
      </div>
      <div className ="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-star md:text-star sm:text-star text-center">
        <h6 className="text-lg font-medium text-gray-200 flex items lg:justify-start md:justify-start sm:justify-start justify-center gap-x-2 mb-3">
          <Dumbbell class name = "w-6 h-6"/>
          Sobre nós
        </h6>
      </div>
    </div>
    </>
  );
};

export default About;