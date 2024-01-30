import React from 'react';

const teamMembers = [
  {
    name: "Dr. Aarav Patel",
    department: "PSM Dept",
    image: "/assets/images/team/team-memb1.jpg",
    experience: "15+ Years of Experience in Internal Medicine with a focus on holistic patient care",
  },
  {
    name: "Dr. Aarav Patel",
    department: "PSM Dept",
    image: "/assets/images/team/team-memb2.jpg",
    experience: "15+ Years of Experience in Internal Medicine with a focus on holistic patient care",
  },
  {
    name: "Dr. Aarav Patel",
    department: "PSM Dept",
    image: "/assets/images/team/team-memb3.jpg",
    experience: "15+ Years of Experience in Internal Medicine with a focus on holistic patient care",
  },
  {
    name: "Dr. Aarav Patel",
    department: "PSM Dept",
    image: "/assets/images/team/team-memb4.jpg",
    experience: "15+ Years of Experience in Internal Medicine with a focus on holistic patient care",
  },
  // Add other team members here...
];

const Cardialogy_doctors = () => {
  return (
    <div className='bg-violet-50 pt-4 pb-6'>
      {/* <div className='text-center p-4 pb-8'>
        <h2 className='text-2xl font-bold pb-2'>Meet our Team</h2>
        <p className='text-gray-600'>Take a look at our innovative and experienced team</p>
      </div> */}
      <div className="px-20 pb-6">
        <div className='grid grid-cols-3 gap-10'>
            {teamMembers.map(member => (
            <div className="w-full bg-white shadow-md rounded-2xl p-2">
            <div className="flex">
                <img className="teammempic object-cover w-64 h-32 rounded-xl" alt="" src={member.image} loading='lazy' />
                <div className="text-center">
                    <p className="font-bold pt-2 text-xs">{member.name}<i> - {member.department}</i></p>
                    <p className='text-sm p-2'>{member.experience}</p>
                </div>
            </div>
            {/* <div className="">
                <p className='text-sm p-2'>{member.experience}</p>
            </div> */}
            <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded-full">
                Book an Appointment
            </button>
        </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cardialogy_doctors;
