import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-row px-20 bg-violet-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          
          
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

              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-2xl">Send Message</button>
            </form>
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
