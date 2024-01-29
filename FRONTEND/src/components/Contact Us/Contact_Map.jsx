import React from 'react';

const ContactMap = () => {
  return (
    <div className="mt-0">
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107"
          height="400"
          frameBorder="0"
          className="w-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ContactMap;
