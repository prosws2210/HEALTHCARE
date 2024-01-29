import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const AboutSlider1 = () => {
  return (
    <div className="bg-violet-50 py-10">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        className="swiper_container"
      >
        {/* Swiper Slides */}
        <SwiperSlide>
          <img src="/assets/images/gallery/gallery_01.jpg" alt="slide_image" className="w-80 border-4 border-white rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/gallery/gallery_02.jpg" alt="slide_image" className="w-80 border-4 border-white rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/gallery/gallery_03.jpg" alt="slide_image" className="w-80 border-4 border-white rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/gallery/gallery_04.jpg" alt="slide_image" className="w-80 border-4 border-white rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/gallery/gallery_05.jpg" alt="slide_image" className="w-80 border-4 border-white rounded-lg shadow-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/gallery/gallery_06.jpg" alt="slide_image" className="w-80 border-4 border-white rounded-lg shadow-lg" />
        </SwiperSlide>
        {/* ... add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default AboutSlider1;
