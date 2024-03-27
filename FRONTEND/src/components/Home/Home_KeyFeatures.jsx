import React from 'react';

const Box = ({ imgSrc, altText, title, description }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-md">
      <div className="text-center">
        <div className="bg-blue-300 rounded-full p-4 w-fit mx-auto">
          <img className="w-12 h-12 mx-auto" src={imgSrc} alt={altText} />
        </div>
        <h5 className="font-bold text-lg pt-4 pb-4">{title}</h5>
        <p className="text-[13px]">{description}</p>
      </div>
    </div>
  );
};

const Home_KeyFeatures = () => {
  const keyFeaturesData = [
    {
      imgSrc: "assets\\images\\Key features\\heart-rate-monitor.png",
      altText: "Heart Rate Monitor",
      title: "Newest Technologies",
      description: "Embracing the newest technologies, we at UMEED and are committed to innovation. Our goal is to stay at the forefront of medical breakthroughs. This commitment ensures that we provide the most effective treatments and care. We believe in the power of technology to transform healthcare. By leveraging these, we aim to improve patient outcomes.",
    },
    {
      imgSrc: "assets\\images\\Key features\\doctor (3).png",
      altText: "Experienced Doctors",
      title: "Experienced Doctors",
      description: "Our team of experienced doctors at UMEED and brings a wealth of knowledge across various specialties. Their expertise, combined with a deep commitment to patient care, ensures you receive the highest standard of medical treatment. Our doctors are dedicated to helping you understand your health better, empowering you to make informed decisions about your healthcare.",
    },
    {
      imgSrc: "assets\\images\\Key features\\head-side-view.png",
      altText: "High Customer Satisfaction",
      title: "High Customer Satisfaction",
      description: "At UMEED, we take pride in the high level of satisfaction among our patients. Our commitment to patient care and focus on personalized treatment plans have resulted in positive health outcomes. We believe that patient satisfaction is a testament to our success. Your health and satisfaction are our ultimate rewards. We strive to exceed your expectations.",
    },
    {
      imgSrc: "assets\\images\\Key features\\hospital.png",
      altText: "Pharma Pipeline",
      title: "Pharma Pipeline",
      description: "Our Pharma Pipeline at UMEED and is robust and diverse. We focus on developing innovative treatments for a range of diseases. Our commitment to advancing healthcare through research and development is unwavering. We are dedicated to bringing new medicines to patients who need them. Our pipeline reflects our drive to transform patient lives by harnessing the power of science.",
    },
    {
      imgSrc: "assets\\images\\Key features\\heartbeat.png",
      altText: "Pharma Team",
      title: "Pharma Team",
      description: "Our Pharma Team at UMEED and comprises dedicated professionals with diverse backgrounds in pharmaceutical sciences. Their expertise drives our commitment to developing innovative treatments. We believe in the power of a multidisciplinary team to deliver quality healthcare solutions. Our team works tirelessly to bring safe and effective treatments to our patients.",
    },
    {
      imgSrc: "assets\\images\\Key features\\capsule.png",
      altText: "High Quality Treatments",
      title: "High Quality Treatments",
      description: "At UMEED, we are dedicated to providing high-quality treatments. Our treatments are both effective and safe, based on the latest medical research. We tailor our treatments to meet the unique needs of each patient. Our goal is to improve health outcomes and enhance the quality of life for our patients. We believe in the power of personalized care to transform health into better.",
    },
    // Add similar objects for other boxes
  ];

  return (
    <div className='bg-violet-50 py-10 px-10'>
      <div className='text-center p-4'>
        <h2 className='text-2xl font-bold pb-2'>Why choose Dr. Symptoms ???</h2>
        <p className='text-gray-600'>Take a look at assistance we offer </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6 px-4 md:px-20 justify-evenly">
        {keyFeaturesData.map((feature, index) => (
          <Box key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Home_KeyFeatures;
