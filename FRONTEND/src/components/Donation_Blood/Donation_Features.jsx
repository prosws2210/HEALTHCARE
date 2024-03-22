import React, { useState } from 'react';

const Donation_Features = () => {
    const [showMore, setShowMore] = useState([false, false, false, false]);

    const handleClick = (index) => {
        const newShowMore = [...showMore];
        newShowMore[index] = !newShowMore[index];
        setShowMore(newShowMore);
    };

    const features = [
        {
            title: 'REGISTRATION AND SCREENING',
            shortText: 'During registration, dono.....',
            fullText: 'During registration, donors provide identification and basic information. They undergo screening, answering questions about health history, recent travels, and potential risk factors. This process ensures eligibility for donation and helps identify any factors that may affect the safety of the donation or recipient.',
            imagePath: '/assets/images/blood donation/online-registration.png'        },
        {
            title: 'MEDICAL HISTORY AND PHYSICAL EXAM',
            shortText: 'In the medical history revi.....',
            fullText: 'In the medical history review, a healthcare professional assesses the donor\'s health background, including past surgeries, medications, and chronic conditions. A physical exam follows, checking vital signs like blood pressure and pulse. These steps ensure the donor is in good health and suitable for blood donation.',
            imagePath: '/assets/images/blood donation/medical-report.png'
        },
        {
            title: 'HAEMOGLOBIN TEST',
            shortText: 'The haemoglobin test involv.....',
            fullText: 'The haemoglobin test involves taking a small blood sample to measure the donor\'s haemoglobin levels. Adequate haemoglobin is crucial for the donor\'s well-being and the recipient\'s safety during blood transfusion. This test ensures that the donor has sufficient oxygen-carrying capacity in their blood for a safe donation.',
            imagePath: '/assets/images/blood donation/blood-test.png'
        },
        {
            title: 'DONATION AND POST-CARE',
            shortText: 'During donation, a steri.....',
            fullText: 'During donation, a sterile needle collects blood from the donor, typically around one pint. Afterward, donors rest and receive refreshments. They are advised to drink fluids and avoid strenuous activity. Follow-up checks may occur to ensure their well-being, and donors are thanked for their life-saving contribution to healthcare.',
            imagePath: '/assets/images/blood donation/donation.png'
        },
    ];

    return (
        <div className="px-20 py-8 bg-violet-50">
            <div className="text-center p-4">
                <h2 className="text-2xl font-bold pb-2">DONATE BLOOD TO SAVE LIVES</h2>
                <div className="flex items-center justify-center pb-4 text-gray-600">
                    <p className="text-center mt-2 max-w-[600px]">
                        Your contribution can save lives. Learn more about the blood donation process and the impact of your
                        generosity.
                    </p>
                </div>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 lg:gap-24">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg flex flex-col items-center h-full">
                        <img
                            alt={feature.title}
                            className="mb-4"
                            src={feature.imagePath}
                            style={{
                                width: '200px',
                                height: '200px',
                                objectFit: 'cover',
                            }}
                        />
                        <h2 className='font-bold'>{feature.title}</h2>
                        <p>
                            {showMore[index] ? feature.fullText : feature.shortText}
                        </p>
                        <div className="mt-4">
                            <button onClick={() => handleClick(index)} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-3xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                                {showMore[index] ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Donation_Features;
