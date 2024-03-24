import React from 'react';
import { Rating } from "@mui/material";

const ContactForm = () => {
  const handleRatingChange = (idx, rating) => {
    setRatingList((prevRatingList) => {
        const updatedRatingList = [...prevRatingList];
        updatedRatingList[idx] = rating;
        return updatedRatingList;
    });
    // console.log(ratingList);
};

  return (
    <div className="contact-row px-20 bg-violet-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          
          {/* Contact Form */}
          <div className="p-6">
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
          <div className="p-6">
              <div className="space-y-4">
                  <h2 className="text-2xl font-bold mb-6">Patient Feedback Form</h2>
                  
                  {/* Stars Div */}
                  <div className='pb-1'>
                    <div className="flex items-center space-x-4 justify-between">
                        {/* STARS 1 */}
                        <p className="text-gray-800 text-md font-semibold">Whole Services:</p>
                        <div className="flex justify-center items-center mb-2">
                            <Rating
                                name="half-rating"
                                defaultValue={2.5}
                                precision={0.5}
                                onChange={(event, newValue) =>
                                    handleRatingChange(idx, newValue)
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 justify-between">
                        {/* STARS 2 */}
                        <p className="text-gray-800 text-md font-semibold">Patient Support Services:</p>
                        <div className="flex justify-center items-center mb-2">
                            <Rating
                                name="half-rating"
                                defaultValue={2.5}
                                precision={0.5}
                                onChange={(event, newValue) =>
                                    handleRatingChange(idx, newValue)
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 justify-between">
                        {/* STARS 3 */}
                        <p className="text-gray-800 text-md font-semibold">Medical Consultation:</p>
                        <div className="flex justify-center items-center mb-2">
                            <Rating
                                name="half-rating"
                                defaultValue={2.5}
                                precision={0.5}
                                onChange={(event, newValue) =>
                                    handleRatingChange(idx, newValue)
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 justify-between">
                        {/* STARS 4 */}
                        <p className="text-gray-800 text-md font-semibold">Appointment Scheduling:</p>
                        <div className="flex justify-center items-center mb-2">
                            <Rating
                                name="half-rating"
                                defaultValue={2.5}
                                precision={0.5}
                                onChange={(event, newValue) =>
                                    handleRatingChange(idx, newValue)
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 justify-between">
                        {/* STARS 5 */}
                        <p className="text-gray-800 text-md font-semibold">Medication Management:</p>
                        <div className="flex justify-center items-center mb-2">
                            <Rating
                                name="half-rating"
                                defaultValue={2.5}
                                precision={0.5}
                                onChange={(event, newValue) =>
                                    handleRatingChange(idx, newValue)
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 justify-between">
                        {/* STARS 6 */}
                        <p className="text-gray-800 text-md font-semibold">Safety Measures:</p>
                        <div className="flex justify-center items-center mb-2">
                            <Rating
                                name="half-rating"
                                defaultValue={2.5}
                                precision={0.5}
                                onChange={(event, newValue) =>
                                    handleRatingChange(idx, newValue)
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 justify-between">
                        {/* STARS 7 */}
                        <p className="text-gray-800 text-md font-semibold">Privacy Respect:</p>
                        <div className="flex justify-center items-center mb-2">
                            <Rating
                                name="half-rating"
                                defaultValue={2.5}
                                precision={0.5}
                                onChange={(event, newValue) =>
                                    handleRatingChange(idx, newValue)
                                }
                            />
                        </div>
                    </div>
                  </div>

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
              <div className='pt-2'>
                <button className="bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-4 rounded-2xl">Submit Suggestion</button>
              </div>
              </div>
          </div>

          {/* Address part */}
          <div className="p-6">
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

export default ContactForm;
