import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

const IMC = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  return (
    <div className="w-full h-auto items-center lg:py-16 
    md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
      <div className="w-full h-auto flex-items-center justify-center flex-col">
        <div className="w-full h-auto flex items-center justify-center mb-6">
          <h6 className="lg:text-lg md:text-lf sm:text-base text-base justify-center font-medium
        text-gray-200 flex items-center gap-x-2 
        bg-black/20 rounded-md py-2 px-4">
            <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600"/>
            Calculadora IMC (Índice de Massa Corporal)
          </h6>
        </div>
      </div>
    </div>
  );
}

export default IMC;
