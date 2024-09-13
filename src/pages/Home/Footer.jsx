import React from 'react'
import {Link} from 'react-router-dom'
import { Dumbbell } from 'lucide-react'

const Footer  = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center bg-black/30 
      flex-col py-16 lg:px-24 md:px-16 sm:px-6 px-4">
        <div className="w-full h-auto flex items-start lg:justify-between 
        md:justify-between sm:justify-center justify-center gap-5 mb-10 flex-wrap">
          <div className="lg:w-[30%] md:w-[30%] sm:w-full w-full h-auto p-2 flex 
          lg:items-start md:items-start sm:items-center items-center flex-col 
          justify-center">
            <Link className="w-fit h-auto text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
              G<span className="text-xl font-bold text-gray-300">Y</span>M
              <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
            </Link>
            <p className="text-base text-gray-500 font-normal mb-4 lg:text-start md:text-start sm:text-center text-center">
              Fitness App - Seu guia para uma vida saudável e equilibrada. Acompanhe seu progresso e conquiste seus objetivos com a gente!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer