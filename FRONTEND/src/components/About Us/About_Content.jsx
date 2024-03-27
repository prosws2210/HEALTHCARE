import React from 'react';

const About_Content = () => {
  return (
    <div className="flex items-center px-20 pt-12 pb-4">
      {/* Photo on the left */}
      <div className="max-w-[500px] mr-8">
        <div className="relative">
          <img
            src="assets/images/blog/blog_04.jpg"
            alt=""
            className="w-full h-auto rounded-md shadow-xl border-8 border-neutral-100"
            loading='lazy'
          />
        </div>
      </div>

      {/* Text on the right */}
      <div className="max-w">
        <h2 className="text-2xl font-bold mb-4">Welcome to DR. SYMPTOMS - Advancing Healthcare Excellence</h2>
        <p className="text-gray-700 font-medium">
        UMEED - HEALTHCARE, a leading name in medical expertise, exemplifies quality healthcare and academic excellence. Our dedication to advancing medical knowledge and providing exceptional healthcare services is mirrored in our cutting-edge facilities and a team of devoted professionals.
        <br />
        <br />
        With a strong focus on nurturing the next generation of healthcare leaders, UMEED - HEALTHCARE continues to be a center of academic distinction and groundbreaking medical research. 
        At UMEED - HEALTHCARE, patient well-being is paramount, and we are committed to meeting the healthcare needs of our community through evidence-based practices and continuous improvement efforts. Our collaborative approach ensures that each patient receives personalized care and the highest quality medical treatment available.
        <br />
        <br />
        Join us on our journey to redefine healthcare excellence and make a positive impact on the health and wellness of individuals and communities alike.
        </p>
      </div>
    </div>
  );
};

export default About_Content;
