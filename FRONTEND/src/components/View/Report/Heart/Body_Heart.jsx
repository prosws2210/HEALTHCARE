import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Body_Heart = () => {
    const doctors = [
        [
            {
                name: 'Patient Name',
                doctor: 'Doctor Name',
                pathologist: 'Pathologist Name',
                reportDomain: 'Cardiology',
                image: 'assets/images/team/cardiology.png',
                date: 'Report Date'
            },
            {
                name: 'Patient Name',
                doctor: 'Doctor Name',
                pathologist: 'Pathologist Name',
                reportDomain: 'Gynecology',
                image: 'assets/images/team/gynacology.png',
                date: 'Report Date'
            },
            {
                name: 'Patient Name',
                doctor: 'Doctor Name',
                pathologist: 'Pathologist Name',
                reportDomain: 'Urology',
                image: 'assets/images/team/urology.png',
                date: 'Report Date'
            }
        ]
    ];

    return (
        <div className="grid grid-cols-1 gap-8 px-32 pb-8 pt-5 justify-evenly bg-purple-50">
            {doctors.map((doctor, index) => (
                <div>
                    <div>
                        <p className="text-sm text-center">Date: {doctor.date}</p>
                    </div>
                    <div key={index} className="border bg-white border-white p-2 shadow-md rounded-2xl hover:border-blue-500">
                        <Link to={doctor.link}>
                            <div className='flex justify-left'>
                                <img className="teammempic object-cover w-28 h-28 p-6" alt="" src={doctor.image} loading='lazy' />
                                <div>
                                    <p className="font-bold pt-2 text-sm text-left">{doctor.name}</p>
                                    <p className="text-sm text-center">Doctor: {doctor.doctor}</p>
                                    <p className="text-sm text-center">Pathologist: {doctor.pathologist}</p>
                                    <p className="text-sm text-center">Report Domain: {doctor.reportDomain}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Body_Heart;
