import React from 'react';
import { Link } from 'react-router-dom';

const ViewReport_Domains = () => {
    const doctors = [
        { name: 'Cardiology', image: 'assets/images/Domain_box/cardiology1.0.png', link: "/Home/Cardialogy" },
        { name: 'Dentistry', image: 'assets/images/Domain_box/dentistry1.0.png' },
        { name: 'Dermatology', image: 'assets/images/Domain_box/dermatology1.0.png' },
        { name: 'Endocrinology', image: 'assets/images/Domain_box/endocrinology1.0.png' },
        { name: 'ENT', image: 'assets/images/Domain_box/ENT1.0 (2).png' },
        { name: 'Gastroenterology', image: 'assets/images/Domain_box/Gastroenterology1.0 (2).png' },
        { name: 'Gynecology', image: 'assets/images/Domain_box/gynecology1.0.png' },
        { name: 'Nephrology', image: 'assets/images/Domain_box/nephrology1.0.png' },
        { name: 'Neurology', image: 'assets/images/Domain_box/neurology1.0.png' },
        { name: 'Neurosurgery', image: 'assets/images/Domain_box/neurosurgery1.0.png' },
        { name: 'Oncology', image: 'assets/images/Domain_box/oncology1.0.png' },
        { name: 'Ophthalmology', image: 'assets/images/Domain_box/opthalmologist1.0.png' },
        { name: 'Orthopedics', image: 'assets/images/Domain_box/orthopedic1.0.png' },
        { name: 'Pediatrics', image: 'assets/images/Domain_box/pediatric1.0.png' },
        { name: 'Plastic Surgery', image: 'assets/images/Domain_box/plastic surgery1.0.png' },
        { name: 'Psychiatry', image: 'assets/images/Domain_box/psychiatry1.0.png' },
        { name: 'Pulmonology', image: 'assets/images/Domain_box/pulmonology1.0.png' },
        { name: 'Radiology', image: 'assets/images/Domain_box/radiology1.0.png' },
        { name: 'Rheumatology', image: 'assets/images/Domain_box/rheumatology1.0.png' },
        { name: 'Urology', image: 'assets/images/Domain_box/urology1.0.png' },
        { name: 'Vascular Surgery', image: 'assets/images/Domain_box/vascular-surgery1.0.png' },
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

