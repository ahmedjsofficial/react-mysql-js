import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const ShowSlider = () => {
    const imgs = [
        {imgsrc: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {imgsrc: 'https://images.pexels.com/photos/627677/pexels-photo-627677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {imgsrc: 'https://images.pexels.com/photos/4083525/pexels-photo-4083525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
    ]
  return (
    <>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          loop={true}
        >
          {imgs.map((val, i) => (
            <SwiperSlide key={i}>
              <div className='grid items-center'>
                <img src={val.imgsrc} alt='img' className='h-96 w-full object-cover' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  )
}

export default ShowSlider