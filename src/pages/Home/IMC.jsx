import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';
import Label from '../../components/Label/Label';
import Input from '../../components/Form/Input';

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
        <div className="w-full h-auto flex items-end justify-center bg-black/20
        rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 
        flex-wrap">
          <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
            <Label htmlfor="peso"> Peso (kg)</Label>
            <Input 
              type="text"
              name="peso" 
              id="peso" 
              placeholder="Coloque seu peso"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              />
          </div>
          <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
            <Label htmlfor="altura"> Altura (cm)</Label>
            <Input 
              type="text"
              name="Altura" 
              id="Altura" 
              placeholder="Coloque sua altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IMC;