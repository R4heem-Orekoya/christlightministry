import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'

import Image1 from '../assets/slide1.jpg'
import Image2 from '../assets/slide2.jpg'
import Image3 from '../assets/slide3.jpg'
import Image4 from '../assets/image4.jpg'
import { useContext } from 'react';
import { Context } from '../context/MapContext';


const Images = [Image2, Image1, Image3, Image4]

const Slider = () => {
   const { setIsMapOpen } = useContext(Context)   
   
   return (
      <Swiper
         className='h-[100dvh] relative'
         modules={[Pagination, EffectFade, Autoplay]}
         effect="fade"
         spaceBetween={10}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
         loop={true}
         autoplay={{
            delay: 3000,
            disableOnInteraction: false,
         }}
      >
         {Images.map((img, i) => (
            <SwiperSlide key={i}>
               <img className='w-full h-full object-cover z-50 relative' src={img} alt={`image ${i}`} />
            </SwiperSlide>
         ))}
         <div slot="wrapper-end" className='text-center text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full z-30 flex flex-col justify-center items-center bg-black/60 backdrop-blur-sm'>
            <div className='px-[5%] sm:px-0'>
               <h1 className='text-3xl text-balance sm:text-3xl md:text-4xl lg:text-7xl max-w-4xl leading-10 uppercase font-bold'>
                  Welcome to Christ Light Ministry
               </h1>
               <p className='my-8 text-lg'>Serice Start at 10:00 AM Sunday</p>
               <button
                  onClick={() => {
                     setIsMapOpen(true)
                  }} 
                  className='px-8 py-3 border-2 border-white text-lg font-bold hover:bg-white hover:text-zinc-950 duration-300'>
                  Come Join us
               </button>
            </div>
         </div>
      </Swiper>
   )
}

export default Slider
