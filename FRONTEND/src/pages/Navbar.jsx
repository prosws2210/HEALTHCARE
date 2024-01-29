import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const boxShadowStyle = {
    boxShadow: '0 8px 12px -2px rgba(0, 0, 0, 0.2), 0 4px 8px -4px rgba(0, 0, 0, 0.12)',
  };

  return (
    <div className="shadow-2xl" style={boxShadowStyle}>
      <div className="flex justify-around py-2 z-10">
        <div>
          <img src="/assets/images/jipmer-mbbs.jpg" alt="" className="h-12" />
        </div>

        <div className="flex text-sm gap-14 font-bold items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/predict">Predict Disease</Link>
          <Link to="/check">Check Disease</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="flex items-center">
          <Link to="/login">
              <button className="border-2 rounded-full px-4 py-1 border-blue-500 text-sm font-medium text-blue-700 hover:bg-blue-500 hover:text-white">
                Login / Register
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
