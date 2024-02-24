import React, { useState } from 'react';

const BrainIndex_Image = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [prediction, setPrediction] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (event) => {
    setSelectedFile(event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);
  
    fetch('http://localhost:5000/predict', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setPrediction(data.prediction);
        setResult(data.result);
      })
      .catch(error => console.error('Error:', error));

    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setUploadProgress(progress);
      if (progress >= 100) clearInterval(interval);
    }, 100);
  };

  return (
    <div className="h-full bg-purple-50 p-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">UPLOAD IMAGES TO GET YOUR PREDICTION</h1>
      <div className="flex justify-center items-start gap-10">

        <div className="w-1/4 p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center text-black">Upload Image</h1>
          <label className="w-full h-24 flex flex-col items-center px-4 py-6 bg-purple-500 text-white rounded-md tracking-wide uppercase border border-purple-500 cursor-pointer hover:bg-purple-600 hover:text-white shadow-md">
            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16 4H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-8 9V7h2v6H8zm0 4v-2h2v2H8zm5-10v2h-2V7h2zm0 4v6h-2v-6h2zm0 8v-2h-2v2h2z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select an Image</span>
            <input type="file" className="hidden" onChange={handleImageUpload} />
          </label>
          <div className="flex justify-center space-x-4">
            <button className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-red-500 shadow-lg focus:outline-none hover:bg-red-600 hover:shadow-none rounded-full">
              Cancel
            </button>
            <button onClick={handleSubmit} className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-purple-500 shadow-lg focus:outline-none hover:bg-purple-600 hover:shadow-none rounded-full">
              Submit
            </button>
          </div>
          <h4 className="font-bold mt-4 text-black">Status</h4>
          <progress className="w-full h-2 text-purple-500 bg-gray-300" value={uploadProgress} max="100"></progress>
          <p className="text-sm text-center mt-2 text-purple-900">{uploadProgress}% uploaded</p>
        </div>

        <div className="flex flex-col w-3/4 p-6 bg-white rounded-lg shadow-lg h-[356px]">
          <h1 className="text-2xl font-bold mb-4 text-black flex justify-center items-center">Your Results</h1>
          <div className="flex justify-center items-center">
            <div className="w-1/3">
              {selectedImage && (
                <img src={selectedImage} alt="Selected" className="object-contain h-64 w-full" />
              )}
            </div>
            <div className="w-2/3 px-10">
            {prediction && result && (
              <div className="p-4 bg-purple-50 rounded-lg shadow-lg">
                <p className="text-black text-2xl">
                  <span className="font-bold">Prediction:</span> {prediction}
                </p>
                <p className="text-black text-2xl">
                  <span className="font-bold">Result:</span> {result}
                </p>
              </div>
            )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BrainIndex_Image;
