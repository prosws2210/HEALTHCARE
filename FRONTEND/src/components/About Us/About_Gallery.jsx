import React from 'react';
import 'tailwindcss/tailwind.css';

const About_Gallery = () => {
  const images = [
    "/assets/images/gallery/gallery_01.jpg",
    "/assets/images/gallery/gallery_02.jpg",
    "/assets/images/gallery/gallery_03.jpg",
    "/assets/images/gallery/gallery_04.jpg",
    "/assets/images/gallery/gallery_05.jpg",
    "/assets/images/gallery/gallery_06.jpg",
    // "/assets/images/gallery/gallery_07.jpg",
    "/assets/images/gallery/gallery_08.jpg",
    "/assets/images/gallery/gallery_09.jpg",
    "/assets/images/gallery/gallery_10.jpg",
    "/assets/images/gallery/gallery_11.jpg",
    "/assets/images/gallery/gallery_12.jpg",   
  ];

  return (
    <div className='bg-violet-50 py-4 px-20'>
      <div className='text-center pt-6'>
        <h2 className="text-2xl font-bold">OUR PHOTO GALLERY</h2>
      </div>
      <div className="max-w-7xl py-6 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto grid-flow-dense">
        {images.map((image, index) => (
          <div key={index} className={index % 2 === 0 ? "row-span-2" : index % 3 === 0 ? "col-span-2" : ""}>
            <img 
              src={image} 
              alt="" 
              className="w-full h-full object-cover border-8 border-white shadow-xl" 
              loading="lazy" // Add the loading attribute
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About_Gallery;
