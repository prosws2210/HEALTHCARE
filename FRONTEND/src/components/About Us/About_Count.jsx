import React from 'react';
import CountUp from 'react-countup';

const About_Count = () => {
    return (
        <div className="pt-10 pb-6 bg-white">
            <h2 className="text-2xl font-bold text-center pb-6">OUR ACHIEVEMENTS IN MEDICAL</h2>            
            <div className='flex justify-center space-x-40'>
                <div className="text-center flex flex-col gap-4">
                    <p className="text-4xl font-bold text-blue-500">   
                        <CountUp end={33000} duration={5} suffix="+" />
                    </p>
                    <p className="text-md text-gray-700 font-semibold font-serif">Patients Helped this Year</p>                
                </div>
                <div className="text-center flex flex-col gap-4">
                    <p className="text-4xl font-bold text-blue-500">
                        <CountUp end={14} duration={5} suffix="+" />
                    </p>
                    <p className="text-md text-gray-700 font-semibold font-serif">Years of Medical Service</p>
                </div>
                <div className="text-center flex flex-col gap-4">
                    <p className="text-4xl font-bold text-blue-500">
                        <CountUp end={250000} duration={5} suffix="+" />
                    </p>
                    <p className="text-md text-gray-700 font-semibold font-serif">Medical Consultations this Year</p>
                </div>
            </div>
        </div>
    );
};

export default About_Count;
