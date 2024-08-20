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
          bgImg: "https://source.unsplash.com/random/?fitness",
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
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper w-full h-auto"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    </div>
    </>
    )
}

export default Hero;