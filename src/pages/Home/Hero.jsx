import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


const Hero = () => {
    const swiperData = [
        {
          id: 1,
          bgImg: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
          slogan: "Mantenha seu corpo saudável",
          title: "Burning",
          desc: "Prepare-se para queimar muita gordura com nossos produtos de alta qualidade.",
        },
        {
          id: 2,
          bgImg: "https://source.unsplash.com/random/?gym",
          slogan: "Apenas acredite em",
          title: "Você Mesmo",
          desc: "Estamos aqui para ajudá-lo a alcançar seus objetivos.",
        },
        {
          id: 3,
          bgImg: "https://source.unsplash.com/random/?yoga",
          slogan: "Faça seu corpo crescer",
          title: "Força",
          desc: "Deixe seu corpo mais forte com nossos produtos de alta qualidade.",
        },
      ];
       
    return(
        <><div className="w-full h-auto">
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop = {true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper w-full h-auto"
        >
            <SwiperSlide 
              className="w-full h-[70vh] relative" 
              style={{ 
                backgroundImage: 
                  "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat" }}
            >

              <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>

              <div className="w-full h-full flex justify-center items-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-indigo-400 font-semibold mb-2 uppercase">
                  Mantenha seu corpo
                </h5>
              </div>
            </SwiperSlide>
        </Swiper>
    </div>
    </>
    )
}

export default Hero;