import React from 'react';

const teamMembers = [
  {
    name: "Dr. Aarav Patel",
    id: "1234",
    language: "English, Hindi",
    image: "/assets/images/team/team-memb1.jpg",
    qualification: "MBBS, MD - General Medicine, DM - Cardiology",
    experience: "15+ Years of Experience",       // MAX CHAR = 40
    time: "Mon-Sat 09:00-07:00 19:00-17:00",
  },
  {
    name: "Dr. Aarav Patel",
    id: "1234",
    language: "English, Hindi",
    image: "/assets/images/team/team-memb1.jpg",
    qualification: "MBBS, MD - General Medicine, DM - Cardiology",
    experience: "15+ Years of Experience",       // MAX CHAR = 40
    time: "Mon-Sat 09:00-07:00 19:00-17:00",
  },
  {
    name: "Dr. Aarav Patel",
    id: "1234",
    language: "English, Hindi",
    image: "/assets/images/team/team-memb1.jpg",
    qualification: "MBBS, MD - General Medicine, DM - Cardiology",
    experience: "15+ Years of Experience",       // MAX CHAR = 40
    time: "Mon-Sat 09:00-07:00 19:00-17:00",
  },
  {
    name: "Dr. Aarav Patel",
    id: "1234",
    language: "English, Hindi",
    image: "/assets/images/team/team-memb1.jpg",
    qualification: "MBBS, MD - General Medicine, DM - Cardiology",
    experience: "15+ Years of Experience",       // MAX CHAR = 40
    time: "Mon-Sat 09:00-07:00 19:00-17:00",
  },
  {
    name: "Dr. Aarav Patel",
    id: "1234",
    language: "English, Hindi",
    image: "/assets/images/team/team-memb1.jpg",
    qualification: "MBBS, MD - General Medicine, DM - Cardiology",
    experience: "15+ Years of Experience",       // MAX CHAR = 40
    time: "Mon-Sat 09:00-07:00 19:00-17:00",
  },
  {
    name: "Dr. Aarav Patel",
    id: "1234",
    language: "English, Hindi",
    image: "/assets/images/team/team-memb1.jpg",
    qualification: "MBBS, MD - General Medicine, DM - Cardiology",
    experience: "15+ Years of Experience",       // MAX CHAR = 40
    time: "Mon-Sat 09:00-07:00 19:00-17:00",
  },
  {
    name: "Dr. Aarav Patel",
    id: "1234",
    language: "English, Hindi",
    image: "/assets/images/team/team-memb1.jpg",
    qualification: "MBBS, MD - General Medicine, DM - Cardiology",
    experience: "15+ Years of Experience",       // MAX CHAR = 40
    time: "Mon-Sat 09:00-07:00 19:00-17:00",
  },
  {
    name: "Dr. Aarav Patel",
    id: "1234",
    language: "English, Hindi",
    image: "/assets/images/team/team-memb1.jpg",
    qualification: "MBBS, MD - General Medicine, DM - Cardiology",
    experience: "15+ Years of Experience",       // MAX CHAR = 40
    time: "Mon-Sat 09:00-07:00 19:00-17:00",
  },
  {
    name: "Dr. Aarav Patel",
    id: "1234",
    language: "English, Hindi",
    image: "/assets/images/team/team-memb1.jpg",
    qualification: "MBBS, MD - General Medicine, DM - Cardiology",
    experience: "15+ Years of Experience",       // MAX CHAR = 40
    time: "Mon-Sat 09:00-07:00 19:00-17:00",
  },
  {
    name: "Dr. Aarav Patel",
    id: "1234",
    language: "English, Hindi",
    image: "/assets/images/team/team-memb1.jpg",
    qualification: "MBBS, MD - General Medicine, DM - Cardiology",
    experience: "15+ Years of Experience",       // MAX CHAR = 40
    time: "Mon-Sat 09:00-07:00 19:00-17:00",
  },
];

const Cardialogy_doctors = () => {
  return (
    <div className='bg-violet-50 pt-4 pb-6'>
      <div className="px-20 pb-6">
        <div className='grid grid-cols-3 gap-10'>
            {teamMembers.map(member => (
            <div className="w-full bg-white shadow-md rounded-2xl p-2">
            <div className="flex max-h-32">
                <div className="flex-shrink-0">
                    <img className="teammempic object-cover w-32 h-32 rounded-xl" alt="" src={member.image} loading='lazy' />
                </div>
                <div className='ml-4 flex flex-col gap-y-2'>
                    <div className="font-bold px-2 text-md">{member.name}</div>
                    <div className='flex flex-col gap-y-2'>
                        <div className='text-xs px-2'>{member.qualification}</div>
                        <div className="text-xs px-2"> <strong>Staff id:</strong> <i>{member.id}</i></div>
                        <div className="text-xs px-2"> <strong>Language:</strong> <i>{member.language}</i></div>
                    </div>
                </div>
            </div>

            <p className='text-sm p-2'>
            {member.experience.length > 40
                ? `${member.experience.substring(0, 40)}...`
                : member.experience
            }
            </p>

            <hr />

            <div className="flex justify-between pt-2 px-2"> {/* Move "Book an Appointment" button to the right */}
                <div className='flex gap-3'>
                    <div className='text-xs font-bold'>Timing:</div>
                    <div className='text-xs whitespace-pre-line'>
                        {member.time.split(' ').map((time, index) => (
                        <span key={index}>{index > 0 ? '\n' : ''}{time.trim()}</span>
                        ))}
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded-full">
                Book an Appointment
                </button>
            </div>
        </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cardialogy_doctors;
