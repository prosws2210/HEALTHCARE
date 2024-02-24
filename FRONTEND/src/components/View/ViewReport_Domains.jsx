import React from 'react';
import { Link } from 'react-router-dom';

const ViewReport_Domains = () => {
    const doctors = [
        { name: 'Bones and Muscles', image: 'assets/images/team/Bones and muscles.png' },
        { name: 'Brain & Neuro', image: 'assets/images/team/brain and neuro.png' },
        { name: 'Dentistry', image: 'assets/images/team/dentistryx.png' },
        { name: 'Digestive health', image: 'assets/images/team/digestive health.png' },
        { name: 'Eye', image: 'assets/images/team/eye.png' },
        { name: 'Gall Bladder', image: 'assets/images/team/gallbladder.png' },
        { name: 'General Reports', image: 'assets/images/team/general health.png' },
        { name: 'Heart', image: 'assets/images/team/heart.png', link: "/View/Report/HeartReport"},
        { name: 'Kidney', image: 'assets/images/team/kidney.png' },
        { name: 'Liver', image: 'assets/images/team/liver.png' },
        { name: 'Lungs', image: 'assets/images/team/lungs.png' },
        { name: 'Mouth', image: 'assets/images/team/mouth.png' },
        { name: 'Pancreas', image: 'assets/images/team/pancreas.png' },
        { name: 'Reproductive health', image: 'assets/images/team/reproduction.png' },
        { name: 'Skin & Hair', image: 'assets/images/team/skin.png' },
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

