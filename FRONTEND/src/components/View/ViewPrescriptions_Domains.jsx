import React from 'react';
import { Link } from 'react-router-dom';

const ViewReport_Domains = () => {
    const doctors = [
        { name: 'Cardiology', image: 'assets/images/Domain_box/cardiology.png' },
        { name: 'Dentistry', image: 'assets/images/Domain_box/Dentistry.png' },
        { name: 'Dermatology', image: 'assets/images/Domain_box/Dermatology.png' },
        { name: 'ENT', image: 'assets/images/Domain_box/ENT.png' },
        { name: 'Endocrinology', image: 'assets/images/Domain_box/Endocrinology.png' },
        { name: 'Gastroenterology', image: 'assets/images/Domain_box/Gastroenterology.png' },
        { name: 'Gynecology', image: 'assets/images/Domain_box/gynecology.png' },
        { name: 'Nephrology', image: 'assets/images/Domain_box/Nephrology.png' },
        { name: 'Neurology', image: 'assets/images/Domain_box/Neurology.png' },
        { name: 'Neurosurgery', image: 'assets/images/Domain_box/neurosurgery.png' },
        { name: 'Oncology', image: 'assets/images/Domain_box/oncology.png' },
        { name: 'Ophthalmology', image: 'assets/images/Domain_box/opthalmology.png' },
        { name: 'Orthopedics', image: 'assets/images/Domain_box/orthopedics.png' },
        { name: 'Pediatrics', image: 'assets/images/Domain_box/pediatric.png' },
        { name: 'Plastic Surgery', image: 'assets/images/Domain_box/plastic surgery.png' },
        { name: 'Psychiatry', image: 'assets/images/Domain_box/psychiatry.png' },
        { name: 'Pulmonology', image: 'assets/images/Domain_box/pulmonology.png' },
        { name: 'Radiology', image: 'assets/images/Domain_box/radiology.png' },
        { name: 'Rheumatology', image: 'assets/images/Domain_box/rheumatology.png' },
        { name: 'Urology', image: 'assets/images/Domain_box/urology.png' },
        { name: 'Vascular Surgery', image: 'assets/images/Domain_box/vascular surgery.png' },
    ].sort((a, b) => a.name.localeCompare(b.name));
      

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

