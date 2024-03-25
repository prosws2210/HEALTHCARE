import React, { useState } from 'react';

const ContactForm = () => {
  const [ratingList, setRatingList] = useState([2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5]);

  const handleRatingChange = (idx, rating) => {
    setRatingList(prevRatingList => {
      const updatedRatingList = [...prevRatingList];
      updatedRatingList[idx] = rating;
      return updatedRatingList;
    });
  };

  return (
    <div className="contact-row px-20 bg-violet-50">
      <div className="container mx-auto">
        <div className="flex justify-between px-10 gap-16 pt-6">
          {/* Contact Form */}
          <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <form>

              {/* Full Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">
                  Enter Your Full Name:
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-4 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">
                  Email Address:
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-4 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="mb-6">
                <label htmlFor="mobile" className="block text-sm font-semibold text-gray-600 mb-2">
                  Mobile Number:
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                    className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-4 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  />
                </div>
              </div>

              {/* Alternate Mobile Number */}
              <div className="mb-6">
                <label htmlFor="mobile" className="block text-sm font-semibold text-gray-600 mb-2">
                  Alternative Mobile Number (Optional):
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="mobile 2"
                    name="mobile 2"
                    placeholder="Enter Alternate Mobile Number"
                    className="form-input py-2 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-4 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  />
                </div>
              </div>

              {/* Enter Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-2">
                  Enter Your Message:
                </label>
                <div className="relative rounded-md shadow-sm">
                  <textarea
                    rows="5"
                    id="message"
                    placeholder="Type your message here..."
                    className="form-input py-4 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-4 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  ></textarea>
                </div>
              </div>

              <button className="bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-4 rounded-2xl">Send Message</button>
            </form>
          </div>

          {/* Suggestion Form with Rating */}
          <div className="flex-1 p-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Patient Feedback Form</h2>

              {/* Total Div */}
              <div className='flex flex-col justify-between'>
                {/* Ratings */}
                <div className="pb-1">
                  {[
                    "Whole Services",
                    "Patient Support Services",
                    "Medical Consultation",
                    "Appointment Scheduling",
                    "Medication Management",
                    "Safety Measures",
                    "Privacy Respect"
                  ].map((label, idx) => (
                    <div key={idx} className="flex items-center space-x-4 justify-between">
                      <p className="text-gray-800 text-md font-semibold">{label} :</p>
                      <div className="flex justify-center items-center mb-2">
                        <StarRating
                          value={ratingList[idx]}
                          onChange={newValue => handleRatingChange(idx, newValue)}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comments and Submit Button */}
                <div className='pt-11'>
                  {/* Additional Suggestions */}
                  <div className="mb-6">
                    <label htmlFor="suggestion" className="block text-sm font-semibold text-gray-600 mb-2">
                    Additional Suggestions:
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <textarea
                          rows="5"
                          id="suggestion"
                          placeholder="Type your suggestions here..."
                          className="form-input py-4 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-4 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                      >
                      </textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button className="bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-4 rounded-2xl">Submit Suggestion</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Address part */}
          <div className="flex-2 p-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-8">Address Information</h2>
              
              <div className="flex items-start space-x-2">
                <div>
                  <p className="text-gray-800">VIT University Chennai Campus</p>
                  <p className="text-gray-800">Vandalur - Kelambakkam Road</p>
                  <p className="text-gray-800">Chennai - 600127</p>
                  <p className="text-gray-800">Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div>
                  <p className="text-gray-800 whitespace-nowrap"><strong>Phone:</strong> &nbsp;&nbsp;&nbsp; +91 9159669599</p>
                  <p className="text-gray-800 whitespace-nowrap"><strong>Email:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; www.vitcc@gmail.com</p>
                  <p className="text-gray-800 whitespace-nowrap"><strong>Website:</strong> &nbsp; www.vit.ac.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// StarRating component
const StarRating = ({ value, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex">
      {stars.map(starValue => (
        <span
          key={starValue}
          className={`cursor-pointer text-2xl font-bold ${starValue <= Math.round(value) ? 'text-yellow-500' : 'text-gray-300'}`}
          onClick={() => onChange(starValue)}
        >
          {starValue <= value ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};



export default ContactForm;
