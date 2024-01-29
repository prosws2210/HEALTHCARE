import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const Home_TeamDoctors = () => {
  return (
    <div className='bg-violet-50 pt-14 pb-6'>

      <div className='text-center p-4'>
        <h2 className='text-2xl font-bold pb-2  '>Meet our Team</h2>
        <p className='text-gray-600'>Take a look at our innovative and experienced team</p>
      </div>

      <div className="flex flex-wrap px-20 pb-6 justify-evenly">
 
        <div className="w-full md:w-1/5 p-1/2 bg-white shadow-md">
          <div className="border border-white p-2">
            <div>
              <img className="teammempic object-cover" alt="" src="assets/images/team/team-memb1.jpg" loading='lazy' />
            </div>
            <div>
              <p className="font-bold pt-2 text-xs text-center">Dr. Aarav Patel<i> - PSM Dept</i></p>
              <div className="flex gap-3 p-4 pt-4 justify-between">
                <a href="https://www.facebook.com/">
                  <FaFacebook className="text-1xl mr-2" />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram className="text-1xl mr-2" />
                </a>
                <a href="https://github.com/sws2210">
                  <FaGithub className="text-1xl mr-2" />
                </a>
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="text-1xl mr-2" />
                </a>
                <a href="https://mail.google.com/">
                  <FaGooglePlusG className="text-1xl mr-2" />
                </a>
              </div>
              <p className='text-sm p-2 text-center'>15+ Years of Experience in Internal Medicine with a focus on holistic patient care</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/5 p-1/2 bg-white shadow-md">
          <div className="border border-white p-2">
            <div>
              <img className="teammempic object-cover" alt="" src="assets/images/team/team-memb2.jpg" loading='lazy' />
            </div>
            <div>
              <p className="font-bold pt-2 text-xs text-center">Dr. Priya Sharma<i> - Cardiologist</i></p>
              <div className="flex gap-3 p-4 pt-4 justify-between">
                <a href="https://www.facebook.com/">
                  <FaFacebook className="text-1xl mr-2" />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram className="text-1xl mr-2" />
                </a>
                <a href="https://github.com/sws2210">
                  <FaGithub className="text-1xl mr-2" />
                </a>
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="text-1xl mr-2" />
                </a>
                <a href="https://mail.google.com/">
                  <FaGooglePlusG className="text-1xl mr-2" />
                </a>
              </div>
              <p className='text-sm p-2 text-center'>20+ Years of Experience in Cardiology, specializing in heart health and preventive care</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/5 p-1/2 bg-white shadow-md">
          <div className="border border-white p-2">
            <div>
              <img className="teammempic object-cover" alt="" src="assets/images/team/team-memb3.jpg" loading='lazy' />
            </div>
            <div>
              <p className="font-bold pt-2 text-xs text-center">Dr. Rajesh Verma<i> - Pediatrician</i></p>
              <div className="flex gap-3 p-4 pt-4 justify-between">
                <a href="https://www.facebook.com/">
                  <FaFacebook className="text-1xl mr-2" />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram className="text-1xl mr-2" />
                </a>
                <a href="https://github.com/sws2210">
                  <FaGithub className="text-1xl mr-2" />
                </a>
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="text-1xl mr-2" />
                </a>
                <a href="https://mail.google.com/">
                  <FaGooglePlusG className="text-1xl mr-2" />
                </a>
              </div>
              <p className='text-sm p-2 text-center'>12+ Years of Experience, providing compassionate care for children's health</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/5 p-1/2 bg-white shadow-md">
          <div className="border border-white p-2">
            <div>
              <img className="teammempic object-cover" alt="" src="assets/images/team/team-memb4.jpg" loading='lazy' />
            </div>
            <div>
              <p className="font-bold pt-2 text-xs text-center">Dr. Amit Kumar<i> - Ortho. Surgeon</i></p>
              <div className="flex gap-3 p-4 pt-4 justify-between">
                <a href="https://www.facebook.com/">
                  <FaFacebook className="text-1xl mr-2" />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram className="text-1xl mr-2" />
                </a>
                <a href="https://github.com/sws2210">
                  <FaGithub className="text-1xl mr-2" />
                </a>
                <a href="https://www.linkedin.com/">
                  <FaLinkedin className="text-1xl mr-2" />
                </a>
                <a href="https://mail.google.com/">
                  <FaGooglePlusG className="text-1xl mr-2" />
                </a>
              </div>
              <p className='text-sm p-2 text-center'>18+ Years of Experience, specializing in surgical and non-surgical treatments</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home_TeamDoctors;
