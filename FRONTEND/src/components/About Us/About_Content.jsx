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
          />
        </div>
      </div>

      {/* Text on the right */}
      <div className="max-w">
        <h2 className="text-2xl font-bold mb-4">Welcome to JIPMER - Advancing Healthcare Excellence</h2>
        <p className="text-gray-700">
          JIPMER, a pioneer in medical education, stands as a beacon of quality healthcare and academic brilliance.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida.
          Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
        </p>

        <p className="mt-4 text-gray-700">
          Our commitment to advancing medical knowledge and providing top-notch healthcare services is reflected in our
          state-of-the-art facilities and a team of dedicated professionals. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna
          sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
        </p>

        <p className="mt-4 text-gray-700">
          With a rich heritage and a focus on nurturing the next generation of healthcare leaders, JIPMER continues to
          be a hub for academic excellence and innovative medical research. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin
          pulvinar. Suspendisse hendrerit ultrices mauris. Fusce tristique lacus at urna sollicitudin pulvinar.
          Suspendisse hendrerit ultrices mauris.
        </p>
        {/* Add more paragraphs with the same styling */}
      </div>
    </div>
  );
};

export default About_Content;
