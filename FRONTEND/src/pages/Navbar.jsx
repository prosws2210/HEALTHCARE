import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const boxShadowStyle = {
    boxShadow: '0 8px 12px -2px rgba(0, 0, 0, 0.2), 0 4px 8px -4px rgba(0, 0, 0, 0.12)',
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-2xl" style={boxShadowStyle}>
      <div className="flex justify-around py-2 z-10" onMouseLeave={() => setIsOpen(false)}>
        <div className="flex items-center gap-1"> 
          <img src="/assets/images/logo.jpg" alt="" className="h-12" loading="lazy" />
          <img src="/assets/images/LOGO WRITE UP.png" alt="" className="h-6" loading="lazy" />
          {/* <img src="/assets/images/jipmer-mbbs.jpg" alt="" className="h-12" loading="lazy" /> */}
        </div>

        <div className="flex text-sm gap-14 font-bold items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>

          <div className="group relative">
            <div className="flex gap-1 cursor-pointer" onMouseEnter={() => setIsOpen(true)}>
              <div className="flex items-center">Diseases & Conditions</div>
              <div className="flex items-center"><IoIosArrowDown className="text-1xl" /></div>
            </div>

            {isOpen && (
              <div className="absolute z-10 mt-2 space-y-2 p-2 bg-white rounded-xl backdrop-blur-md shadow-lg w-40 border-2 border-black">
                <Link to="/predict" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900">Predict Disease</Link>
                <Link to="/check" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900">Check Disease</Link>
              </div>
            )}
          </div>

          <Link to="/viewreport">Reports & Prescriptions</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="flex flex-row gap-6">
          <div className="flex items-center">
            <Link to="/login">
              <button className="border-2 rounded-full px-4 py-1 border-blue-500 text-sm font-medium text-blue-700 hover:bg-blue-500 hover:text-white">
                Login / Register
              </button>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/donation">
              <button className="rounded-full px-4 py-2 bg-yellow-400 text-sm font-medium text-black-700 transform hover:scale-110 transition-transform duration-200">              
                DONATE ❤
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
