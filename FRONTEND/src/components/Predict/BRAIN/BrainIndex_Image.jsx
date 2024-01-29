import React, { useState } from 'react';

const BrainIndex_Image = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageUpload = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setUploadProgress(progress);
      if (progress >= 100) clearInterval(interval);
    }, 100);
  };

  return (
    <div className="h-[420px] bg-violet-50 pb-20 pt-12 px-40">
        <h1 className="text-2xl font-bold mb-4 text-center underline">Upload Image to get your Prediction</h1>
        <div className='flex justify-center items-center gap-10'>
            <div className="w-[30%] p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Upload Image</h1>
                <label className="w-full h-32 flex flex-col items-center px-4 py-6 bg-blue-500 text-white rounded-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-600 hover:text-white shadow-md">
                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 4H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-8 9V7h2v6H8zm0 4v-2h2v2H8zm5-10v2h-2V7h2zm0 4v6h-2v-6h2zm0 8v-2h-2v2h2z"/></svg>
                <span className="mt-2 text-base leading-normal">Select a Image</span>
                <input type='file' className="hidden" onChange={handleImageUpload} />
                </label>
                <h4 className="font-bold mt-4">Usage</h4>
                <progress className="w-full h-2 text-blue-500 bg-gray-300" value={uploadProgress} max="100"></progress>
                <p className="text-sm text-center mt-2">{uploadProgress}% uploaded</p>
            </div>
            <div className="flex w-[100%] p-4">
                <div className="w-[50%]">
                    {/* <h1 className="text-2xl font-bold mb-4">Preview</h1> */}
                    {selectedImage && (
                    <img src={selectedImage} alt="Selected" className="object-contain h-48" />
                    )}
                </div>
                <div className="w-[50%]">
                    <h1 className="text-2xl font-bold mb-4 text-center">Your Results</h1>
                    {/* Your results go here */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default BrainIndex_Image;
