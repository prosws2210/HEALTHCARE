import React from 'react';
import { Link } from 'react-router-dom';

const domains = [
  {
    title: 'BRAIN DATA',
    subtitle: '(BRAIN TUMOUR AND RELATED DISEASES)',
    image: 'assets/images/Predict/brain_tumour.jpg',
    // link: "/Predict/BrainIndex",
  },
  {
    title: 'BONE DATA',
    subtitle: '(FRACTURE RELATED DATA)',
    image: 'assets/images/Predict/fracture.jpg',
    // link: 'bone_index.jsx',
  },
  {
    title: 'STOMACH DATA',
    subtitle: '(GASTRIC RELATED DISEASES)',
    image: 'assets/images/Predict/Gastric.jpeg',
    // link: 'stomach_index.jsx',
  },
  {
    title: 'LIVER DATA',
    subtitle: '(LIVER TUMOUR AND RELATED DISEASES)',
    image: 'assets/images/Predict/liver_tumour.jpg',
    // link: 'liver_index.jsx',
  },
  {
    title: 'LUNGS DATA',
    subtitle: '(LUNGS CANCER AND RELATED DISEASES)',
    image: 'assets/images/Predict/Lung_cancer.jpg',
    // link: 'lungs_index.jsx',
  },
  {
    title: 'EYES DATA',
    subtitle: '(RETINA BASED PROBLEMS)',
    image: 'assets/images/Predict/retina.png',
    // link: 'eye_index.jsx',
  },
  {
    title: 'HEART DATA',
    subtitle: '(CARDIOVASCULAR DISEASES)',
    image: 'assets/images/Predict/heart.jpg',
    // link: 'heart_index.jsx',
  },
  {
    title: 'KIDNEY DATA',
    subtitle: '(KIDNEY RELATED DISEASES)',
    image: 'assets/images/Predict/kidney_tumour.png',
    // link: 'Kidney_index.jsx',
  },
];

const PredictDisease_Domain = () => {
  return (
    <div className='px-20 bg-violet-50'>
      <section className="py-8">
        <div className="grid grid-cols-2 md:grid-cols-8 gap-10">
          {domains.map((domain, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-md shadow-xl border-4 border-neutral-300 flex flex-col items-center transform transition duration-500 ease-in-out hover:scale-105">
              <div className="flex rounded-full overflow-hidden mb-4 w-14 h-14 items-center border-2 border-black">
                <img className="w-full h-full object-cover" alt="" src={domain.image} />
              </div>
              <p className="text-center">
                <div className="text-center">
                  {/* Use the Link component to navigate to the specified link */}
                  <Link to={domain.link}>
                    <h1 className="font-bold text-sm">{domain.title}</h1>
                    <p className="text-xs">{domain.subtitle}</p>
                  </Link>
                </div>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


export default PredictDisease_Domain;