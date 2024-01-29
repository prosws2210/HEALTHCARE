import React from 'react';

const Home_DoctorsMessage = () => {
  return (
    <div className='relative' style={{backgroundImage: "url('assets/images/gallery/bg1.jpg')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backdropFilter: 'blur(20px)'}}>
      <div className="absolute inset-0 bg-white bg-opacity-25"></div>
      <div className="container mx-auto px-20 pt-4 relative">
        <div className='flex items-center gap-6'>
          <div className="w-1/2">
            <img className="w-full" src="assets/images/doctt.png" alt="" />
          </div>
          <div className="flex flex-col items-left w-1/2 pl-6 bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Hello, I'm Doctor Rajesh</h2>
            <span className="text-gray-600">Expert Clinical Pediatrician in Manhattan</span>

            <p className="mt-4 text-gray-700 font-bold">
              Welcome to my practice! As a dedicated Pediatrician specializing in children's health in Manhattan, I am committed to providing compassionate and effective healthcare tailored to the unique needs of your child. Lorem Ipsum is simply text of the printing and typesetting industry.
            </p>
            <br />
            <h5 className="text-lg font-bold">Contact Information:</h5>
            <span className="text-gray-700 block">
              Feel free to reach out to me at :- <br />
              <div className='mt-4'>
                <strong>Email : </strong> dr.rajesh@example.com <br />
                <strong>Phone : </strong> 1010101010
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_DoctorsMessage;
