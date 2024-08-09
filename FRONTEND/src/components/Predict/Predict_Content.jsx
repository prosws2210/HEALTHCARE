import React from 'react';

const BrainIndex_Content = () => {
  return (
    <div className="flex items-center px-20 py-12">
        {/* Photo on the left */}
        <div className="max-w-[500px] mr-8">
            <div className="relative">
                <img
                src="/assets/images/Predict/FullBody.jpg"
                alt=""
                className="w-full h-auto rounded-md shadow-xl border-8 border-neutral-100"
                style={{ height: '300px', width: '3000px' }}
                />
            </div>
        </div>

      {/* Text on the right */}
      <div className="max-w">
        <h2 className="text-2xl font-bold mb-4">Predict Diseases Based on Analysis of All Body Parts</h2>
        <p className="text-gray-700">
            Welcome to our cutting-edge platform dedicated to revolutionizing healthcare through advanced machine learning. Our state-of-the-art model leverages the power of artificial intelligence to predict diseases based on comprehensive analysis of images from all body parts. Powered by deep learning algorithms, our system goes beyond traditional diagnostic methods, offering unparalleled accuracy and efficiency in identifying a wide range of medical conditions. From early detection of diseases to personalized treatment recommendations, our platform is designed to assist healthcare professionals in making informed decisions, ultimately leading to better patient outcomes. Our commitment to innovation and excellence in healthcare drives us to continuously refine and enhance our model, ensuring it stays at the forefront of medical technology. Join us on the frontier of medical advancements as we strive to make a meaningful impact on the lives of individuals through the fusion of technology and healthcare expertise.
        </p>
      </div>
    </div>
  );
};

export default BrainIndex_Content;
