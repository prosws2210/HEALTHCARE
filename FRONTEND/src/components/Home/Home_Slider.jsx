import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      image: 'assets/images/slider/slider_11.jpg',
      title: 'Welcome to Dr. Symptoms',
      content: (
        <>
          <strong>Your Health, Our Priority ... </strong><br />
          Dedicated to your well-being, our mission is to provide comprehensive healthcare solutions, keeping you informed with the latest health news and offering expert advice. Let us support you on your unique health and wellness journey. From personalized insights to community engagement, we're here to empower you at every step. Choose Healthify Yourself for a holistic approach to well-being and make informed decisions for a healthier, happier life.
        </>
      ),
    },
    {
      image: 'assets/images/slider/slider_22.jpg',
      title: 'Discover What We Offer',
      content: (
        <>
          <strong>Health Information:</strong> Access reliable and up-to-date information on a wide range of health topics. <br />
          {/* <br /> */}
          <strong>Expert Advice:</strong> Receive tips and guidance from our healthcare professionals to help you maintain a healthy lifestyle. <br />
          {/* <br /> */}
          <strong>Community Support:</strong> Connect with others who are on their own health journey. Share experiences, ask questions, and find support in our community.
        </>
      ),
    },
    {
      image: 'assets/images/slider/slider_33.jpg',
      title: 'Explore Our Healthcare Services',
      content: (
        <>
          <strong>Comprehensive Medical Care:</strong> Our dedicated team provides a wide range of healthcare services, ensuring your well-being is our top priority. <br />
          {/* <br /> */}
          <strong>Patient-Centered Approach:</strong> Experience personalized care tailored to your unique needs and preferences. <br />
          {/* <br /> */}
          <strong>Modern Facilities:</strong> We are equipped with state-of-the-art facilities to deliver the highest quality healthcare services.
        </>
      ),
    },
  ];

  const handleMouseEnter = () => {
    clearInterval(swiperRef.current.autoplay.running);
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-item relative">
                <img className="w-full h-full object-cover" src={slide.image} alt={`Slide ${index + 1}`} loading='lazy' />
                <div className="absolute inset-0 flex flex-col bg-opacity-30 bg-black text-white px-20 pt-80">
                  <div className="relative z-10 max-w-[60%]">
                    <h4 className="text-4xl font-bold mb-4">{slide.title}</h4>
                    <div className="box-border p-4 border-white border-2 rounded-3xl" style={{ backdropFilter: 'blur(3px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                      <p className="text-md">{slide.content}</p>
                    </div>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Book an Appointment
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
