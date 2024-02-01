import React from 'react';
import { Link } from 'react-router-dom';

const ViewReport_Domains = () => {
    const doctors = [
        { name: 'Bones and Muscles', image: 'assets/images/team/Bones and Muscles.png' },
        { name: 'Brain & Neuro', image: 'assets/images/team/Brain & Neuro.png' },
        { name: 'Dentistry', image: 'assets/images/team/Dentistry.png' },
        { name: 'Eye', image: 'assets/images/team/Eye.png' },
        { name: 'Gall Bladder', image: 'assets/images/team/Gall Bladder.png' },
        { name: 'General Reports', image: 'assets/images/team/General.png' },
        { name: 'Heart', image: 'assets/images/team/Heart.png', link: "/View/Report/HeartReport"},
        { name: 'Intestine', image: 'assets/images/team/Intestine.png' },
        { name: 'Kidney', image: 'assets/images/team/Kidney.png' },
        { name: 'Liver', image: 'assets/images/team/Liver.png' },
        { name: 'Lungs', image: 'assets/images/team/Lungs.png' },
        { name: 'Mouth', image: 'assets/images/team/Mouth.png' },
        { name: 'Pancreas', image: 'assets/images/team/Pancreas.png' },
        { name: 'Reproductive health', image: 'assets/images/team/Reproductive health.png' },
        { name: 'Skin & Hair', image: 'assets/images/team/Skin & Hair.png' },
        { name: 'Stomach', image: 'assets/images/team/Stomach.png' },
    ].sort((a, b) => a.name.localeCompare(b.name));
      

    return (
    <div className='bg-violet-50 pt-8 pb-6'>
        <div className='text-center p-4 pb-8'>
            <h2 className='text-2xl font-bold pb-2'>Submit Your Reports</h2>
            <p className='text-gray-600'>Learn about the world class health care we provide</p>
        </div>
        
        <div className="grid grid-cols-5 gap-8 px-32 pb-6 justify-evenly">
        {doctors.map((doctor, index) => (
            <div key={index} className="border bg-white border-white p-2 shadow-md rounded-2xl hover:border-blue-500">
                <Link to={doctor.link}>
                    <div className='flex justify-center'>
                        <img className="teammempic object-cover w-28 h-28" alt="" src={doctor.image} loading='lazy' />
                    </div>
                    <div>
                        <p className="font-bold pt-2 text-sm text-center">{doctor.name}</p>
                    </div>
                </Link>
            </div>
        ))}
        </div>
    </div>
    );
};

export default ViewReport_Domains;

