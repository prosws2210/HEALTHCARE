import React from 'react';
import { Link } from "react-router-dom";

const Donation_Main = () => {
    return (
        <div className="relative h-screen flex items-center">
            {/* Background image */}
            <img
                className="absolute inset-0 w-full h-full object-cover"
                src="/assets/images/donation/edit2.jpeg"
                alt="Description of the image"
            />
            {/* Parent container */}
            <div className="w-1/2 absolute z-10 rounded ml-20 p-4 top-[18%]">                
            {/* Writeup */}
                <div className="mx-auto">
                    <h1 className="text-white font-bold text-5xl font-serif text-center">
                        HEROIC HEARTS: DONATE BLOOD, HELP OTHERS, SAVE LIVES
                    </h1>
                    <p className="text-white font-bold text-2xl font-serif mt-10 text-center">
                        Blood donation is a voluntary procedure. You agree to have blood drawn so that it can be given to someone who needs a blood transfusion.
                    </p>
                </div>
                {/* Button */}
                <Link to="http://localhost:2000/login" className="block pl-8 mt-10">
                    <button className="rounded-full px-4 py-2 bg-yellow-400 text-2xl font-bold text-black-700 transform hover:scale-110 transition-transform duration-200">              
                        DONATE ❤
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Donation_Main;
