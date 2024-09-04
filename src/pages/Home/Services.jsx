import { Dumbbell, MoveRight } from 'lucide-react'
import React from 'react'
import TertiaryLink from '../../components/LinkBtn/TertiaryLink'


const Services = () => {
    const services = [
        {
          id: 1,
          serviceImg: "https://plus.unsplash.com/premium_photo-1671631630555-1cb3ffa7dfe6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Musculacão",
          desc: "Ganhe força e definição muscular com treinos completos de musculação.",
          link: "#services",
        },
        {
          id: 2,
          serviceImg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=499&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Yoga",
          desc: "Aprimore sua mente e corpo com práticas relaxantes de yoga.",
          link: "#services",
        },
        {
          id: 3,
          serviceImg: "https://images.unsplash.com/photo-1516208398649-d5d401ba8c49?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Ginástica",
          desc: "Aumente sua flexibilidade e resistência com exercícios de ginástica.",
          link: "#services",
        },
        {
          id: 4,
          serviceImg: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Dança",
          desc: "Divirta-se e queime calorias com treinos intensos de dança.",
          link: "#services",
        },
        {
          id: 5,
          serviceImg: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Boxe",
          desc: "Liberte seu estresse e ganhe força com aulas dinâmicas de boxe.",
          link: "#services",
        },
        {
          id: 6,
          serviceImg: "https://plus.unsplash.com/premium_photo-1664298346755-8fb6c33c73b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Crossfit",
          desc: "Desafie seus limites e desenvolva força total com crossfit.",
          link: "#services",
        },
        {
          id: 7,
          serviceImg: "https://images.unsplash.com/photo-1556191034-cbb6aa3cb008?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Natação",
          desc: "Melhore sua resistência e tonifique o corpo com natação.",
          link: "#services",
        },
        {
          id: 8,
          serviceImg: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Corrida",
          desc: "Melhore sua resistência cardiovascular com treinos personalizados de corrida.",
          link: "#services",
        },
      ];
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 
    md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 ">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600"/>
          Serviços  
        </h6>
        <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
            {services.map((data) => (
              <div
              key={data.id}
                    className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden 
                    cursor-pointer z-10 hover:-translater-y-2 ease-out duration-500"
                    style={{ 
                      backgroundImage:`url(${data.serviceImg})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat", 
                    }}
                >
                    <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
                    <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
                        <div className="w-14 h-14 rounded-full bg-indigo-600/80 border-4 border-indigo-600 flex items-center justify-center mb-5">
                            <Dumbbell className="w-6 h-6 text-white"/>
                        </div>
                        <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                            {data.title}
                        </h1>
                        <p className="text-base text-gray-300 font-normal text-center mb-4">
                            {data.desc}
                        </p>
                        <TertiaryLink link={data.link}>Saiba mais 
                        <MoveRight className="w-4 h-4"/>
                        </TertiaryLink>
                    </div>
              </div>

            ))}
        </div>
    </div>
    </>
  )
}

export default Services