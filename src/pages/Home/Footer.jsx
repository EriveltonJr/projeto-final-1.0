import React from 'react'
import {Link} from 'react-router-dom'
import { Dumbbell, Github, Instagram, Linkedin, MailOpen, MapPin, Phone } from 'lucide-react'

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
            <div className="w-full h-auto space-y-2">
              <div className="w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer">
                <MapPin className="w-5 h-5" />
                <p className="text-base">Av Pedro Marques de Medeiros - Parque Industrial, Picos - PI</p>
              </div>
              <div className="w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer">
                <MailOpen className="w-5 h-5" />
                <p className="text-base">IFPI@example.com</p>
              </div>
              <div className="w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer">
                <Phone className="w-5 h-5" />
                <p className="text-base">(89)99999-9999</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[65%] md:w-[65%] sm:w-full w-full h-auto p-2 flex items-center lg:justify-end md:justify-end sm:justify-center justify-center flex-wrap gap-">
            <div className="lg:w-[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex items-center flex-col justify-center">
              <h2 className="text-lg text-gray-200 font-medium mb-4">
                Serviços
              </h2>
              <div className="w-full h-auto">
                <ul className="w-full h-auto space-y-2">
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    Musculação
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    Ginástica
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    Natação
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    CrossFit
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    Corrida
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    Dança
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    Boxe
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    Yoga
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex items-center flex-col justify-center">
              <h2 className="text-lg text-gray-200 font-medium mb-4">
                Quick Link
              </h2>
              <div className="w-full h-auto">
                <ul className="w-full h-auto space-y-2">
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    Início
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    Sobre
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    IMC
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    Serviços
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    Contatos
                  </li>
                  <li className="w-full h-auto text-gray-400 hover:text-indigo-600 ease-out duration-300 cursor-pointer text-center">
                    Login
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full h-1[1.5px] flex-items-center lg:bg-gray-900 md:bg-gray-900
        sm:bg-transparent bg-transparent relative">
          <div className="w-full h-auto flex items-center lg:justify-between 
          md:justify-between sm:justify-center justify-center absolute -top-4 left-[50%] 
          translate-x-[-50%] flex-wrap-reverse gap-y-4"></div>
            <p className="text-sm text-gray-400 font-normal lg:bg-gray-900 md:bg-gray-900 
            sm:bg-transparent bg-transparent py-1 px-4 rounded-md">
              © 2024 EriveltonJr. Todos os direitos reservados.
            </p>
          <div className="w-auto h-auto flex items-center justify-center">
            <ul className="w-full h-auto flex items-center justify-center gap-x-4">
              <li className="w-8 h-8 cursor-pointer flex items-center justify-center bg-indigo-900 py-1 px-4 rounded-md text-white hover:text-white ease-out duration-700">
                <a href="/" target="_blank">
                  <Github className="w-5 h-5" />
                </a>
              </li>
              <li className="w-8 h-8 cursor-pointer flex items-center justify-center bg-indigo-900 py-1 px-4 rounded-md text-white hover:text-white ease-out duration-700">
                <a href="/" target="_blank">
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
              <li className="w-8 h-8 cursor-pointer flex items-center justify-center bg-indigo-900 py-1 px-4 rounded-md text-white hover:text-white ease-out duration-700">
                <a href="/" target="_blank">
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Footer