import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Body_Heart = () => {
    const doctors = [
        {
            doctor: 'Doctor Name 1',
            pathologist_id: 'Pathologist ID',
            reportDomain: 'Cardiology',
            image: '/assets/images/blood donation/cardiology.png',
            date: 'Report Date',
            labRequisition: 'Lab Requisition Details',
            pdf: 'PDF Details',
        },
        {
            doctor: 'Doctor Name 2',
            pathologist_id: 'Pathologist ID',
            reportDomain: 'Cardiology',
            image: '/assets/images/blood donation/cardiology.png',
            date: 'Report Date',
            labRequisition: 'Lab Requisition Details',
            pdf: 'PDF Details',
        },
        {
            doctor: 'Doctor Name 3',
            pathologist_id: 'Pathologist ID',
            reportDomain: 'Cardiology',
            image: '/assets/images/blood donation/cardiology.png',
            date: 'Report Date',
            labRequisition: 'Lab Requisition Details',
            pdf: 'PDF Details',
        },
        {
            doctor: 'Doctor Name 4',
            pathologist_id: 'Pathologist ID',
            reportDomain: 'Cardiology',
            image: '/assets/images/blood donation/cardiology.png',
            date: 'Report Date',
            labRequisition: 'Lab Requisition Details',
            pdf: 'PDF Details',
        },
        {
            doctor: 'Doctor Name 5',
            pathologist_id: 'Pathologist ID',
            reportDomain: 'Cardiology',
            image: '/assets/images/blood donation/cardiology.png',
            date: 'Report Date',
            labRequisition: 'Lab Requisition Details',
            pdf: 'PDF Details',
        },
        {
            doctor: 'Doctor Name 6',
            pathologist_id: 'Pathologist ID',
            reportDomain: 'Cardiology',
            image: '/assets/images/blood donation/cardiology.png',
            date: 'Report Date',
            labRequisition: 'Lab Requisition Details',
            pdf: 'PDF Details',
        },
        {
            doctor: 'Doctor Name 7',
            pathologist_id: 'Pathologist ID',
            reportDomain: 'Cardiology',
            image: '/assets/images/blood donation/cardiology.png',
            date: 'Report Date',
            labRequisition: 'Lab Requisition Details',
            pdf: 'PDF Details',
        },
        {
            doctor: 'Doctor Name 8',
            pathologist_id: 'Pathologist ID',
            reportDomain: 'Cardiology',
            image: '/assets/images/blood donation/cardiology.png',
            date: 'Report Date',
            labRequisition: 'Lab Requisition Details',
            pdf: 'PDF Details',
        },
        {
            doctor: 'Doctor Name 9',
            pathologist_id: 'Pathologist ID',
            reportDomain: 'Cardiology',
            image: '/assets/images/blood donation/cardiology.png',
            date: 'Report Date',
            labRequisition: 'Lab Requisition Details',
            pdf: 'PDF Details',
        },
        {
            doctor: 'Doctor Name 10',
            pathologist_id: 'Pathologist ID',
            reportDomain: 'Cardiology',
            image: '/assets/images/blood donation/cardiology.png',
            date: 'Report Date',
            labRequisition: 'Lab Requisition Details',
            pdf: 'PDF Details',
        },
    ];

    return (
        <div className="bg-violet-50 p-4 px-32 h-[600px]">            
            <div className="grid grid-cols-1 gap-4 pb-8 pt-5 justify-evenly bg-violet-50 overflow-y-auto max-h-[calc(12*3rem)] pr-2">
                {doctors.map((doctor, index) => (
                    <div key={index}>
                        <div className="border bg-white border-white p-2 shadow-md rounded-2xl hover:border-blue-500">
                            <Link to={doctor.link}>
                                <div className='flex justify-between'>
                                    <div className='flex justify-left border-r border-gray-300 pr-40'>
                                        <img className="teammempic object-cover w-28 h-28 p-6" alt="" src={doctor.image} loading='lazy' />
                                        <div className='flex flex-col justify-center'>
                                            <p className="text-md pl-4"><span className="font-bold">Doctor:</span> {doctor.doctor}</p>
                                            <p className="text-md pl-4"><span className="font-bold">Pathologist ID:</span> {doctor.pathologist_id}</p>
                                            <p className="text-md pl-4"><span className="font-bold">Report Domain:</span> {doctor.reportDomain}</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-2 rounded-b-none flex flex-col justify-between items-end py-5">
                                        <p className="text-md text-center pr-80"><span className="font-bold">PDF:</span> {doctor.pdf}</p>
                                        <p className="text-md text-center"><span className="font-bold">Date:</span> {doctor.date}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Body_Heart;
