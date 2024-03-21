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
            title: 'REGISTRATION',
            shortText: 'When you arrive at the dona.....',
            fullText: 'When you arrive at the donation center, you\'ll need to complete the registration process. Please bring a valid photo ID and any relevant medical information. You can also fill out the donor questionnaire ahead of time to expedite the process.',
            imagePath: '/registration_image.jpg'
        },
        {
            title: 'SEEING',
            shortText: 'After registration, you\'ll .....',
            fullText: 'After registration, you\'ll undergo a brief health check to ensure that you\'re eligible to donate. This includes a review of your medical history and a quick physical examination. Once you\'ve completed the screening process, you\'ll be directed to the donation area.',
            imagePath: '/seeing_image.jpg'
        },
        {
            title: 'DONATION',
            shortText: 'The donation process itself .....',
            fullText: 'The donation process itself only takes about 10 minutes. Afterward, you\'ll have time to relax and enjoy some refreshments in our recovery area. We recommend avoiding strenuous physical activity for the rest of the day and staying hydrated.',
            imagePath: '/donation_image.jpg'
        },
        {
            title: 'SAVE LIFE',
            shortText: 'Your decision to donate .....',
            fullText: 'Your decision to donate blood can make a significant impact on the lives of others. Every donation has the potential to save up to three lives. Your generosity can provide hope to patients in need and contribute to their recovery.',
            imagePath: '/save_life_image.jpg'
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
                                width: '100%',
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
