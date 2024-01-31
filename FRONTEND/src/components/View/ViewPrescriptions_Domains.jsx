import React from 'react';
import { Link } from 'react-router-dom';

const ViewReport_Domains = () => {
    const doctors = [
        { name: 'Cardiology', image: 'assets/images/team/cardiology.png', link: "/Home/Cardialogy",},
        { name: 'Gynecology', image: 'assets/images/team/gynacology.png' },
        { name: 'Urology', image: 'assets/images/team/urology.png' },
        { name: 'Radiology', image: 'assets/images/team/Radiology.png' },
        { name: 'Dentistry', image: 'assets/images/team/Dentistry.png' },
        { name: 'Neurology', image: 'assets/images/team/Neurology.png' },
        { name: 'Dermatology', image: 'assets/images/team/Dermatology.png' },
        { name: 'Nephrology', image: 'assets/images/team/Nephrology.png' },
        { name: 'Plastic Surgery', image: 'assets/images/team/Plastic Surgery.png' },
        { name: 'ENT', image: 'assets/images/team/ENT.png' },
        { name: 'Gastroenterology', image: 'assets/images/team/Gastroenterology.png' },
        { name: 'Ophthalmology', image: 'assets/images/team/Ophthalmology.png' },
        { name: 'Pulmonology', image: 'assets/images/team/Pulmonology.png' },
        // { name: 'Neonatology', image: 'assets/images/team/Neonatology.png' },
        { name: 'Orthopaedic', image: 'assets/images/team/Orthopaedic.png' },
        { name: 'Pediatrics', image: 'assets/images/team/Pediatrics.png' },
        { name: 'Rheumatology', image: 'assets/images/team/Rheumatology.png' },
        { name: 'Vascular Surgery', image: 'assets/images/team/Vascular Surgery.png' },
        { name: 'Oncology', image: 'assets/images/team/Oncology.png' },
        { name: 'Endocrinology', image: 'assets/images/team/Endocrinology.png' },
        { name: 'Neurosurgery', image: 'assets/images/team/Neurosurgery.png' },
        { name: 'Psychiatry', image: 'assets/images/team/Psychiatry.png' },
    ];
      

    return (
    <div className='bg-violet-50 pt-8 pb-6'>
        <div className='text-center p-4 pb-8'>
            <h2 className='text-2xl font-bold pb-2'>Add Your Prescriptions</h2>
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

