import React, { useState, useRef } from 'react';

const Predict_UploadImageFinal = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  // const [prediction, setPrediction] = useState(null);
  // const [result, setResult] = useState(null);
  const [prediction1, setPrediction1] = useState(null);
  const [result1, setResult1] = useState(null);
  const [prediction2, setPrediction2] = useState(null);
  const [result2, setResult2] = useState(null);
  const [fileName, setFileName] = useState('');
  const [cancelClicked, setCancelClicked] = useState(false);

 
  // Use a ref to store the interval ID for clearing later
  const intervalRef = useRef(null);

  const handleImageUpload = (event) => {
    setSelectedFile(event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
    setFileName(event.target.files[0].name);
  };

  const handleCancel = () => {
    if (uploadProgress < 100) {
      setCancelClicked(true);
      setUploadProgress(0); // Reset progress if cancel is clicked
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      // Handle case where no file is selected
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    // Reset prediction and result to null before starting progress
    // setPrediction(null);
    // setResult(null);
    setPrediction1(null);
    setResult1(null);
    setPrediction2(null);
    setResult2(null);
    setCancelClicked(false);

    let progress = 0;
    intervalRef.current = setInterval(() => {
      if (cancelClicked) {
        clearInterval(intervalRef.current);
        setUploadProgress(0); // Reset progress if cancel is clicked
        return;
      }

      progress += 5;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(intervalRef.current);

        // Once the progress is complete, make the fetch request
        fetch('http://localhost:5000/predict', {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
            // Check if cancel button was clicked before updating the state
            if (!cancelClicked) {
              // setPrediction(data.prediction);
              // setResult(data.result);
              setPrediction1(data.prediction_model1);
              setResult1(data.result_model1);
              setPrediction2(data.prediction_model2);
              setResult2(data.result_model2);
            }
          })
          .catch(error => console.error('Error:', error));
      }
    }, 100);
  };
  

  return (
    <div className="h-full bg-purple-50 p-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">UPLOAD IMAGES TO GET YOUR PREDICTION</h1>
      <div className="flex justify-center items-start gap-10">

        {/* LEFT BOX */}
        <div className="w-1/4 p-6 bg-white rounded-lg shadow-lg flex flex-col h-[400px] h-max-[400px]">
          <h1 className="text-2xl font-bold mb-4 text-center text-black">Upload Image</h1>
          <label className="w-full h-28 flex flex-col items-center px-4 py-6 bg-purple-500 text-white rounded-md tracking-wide uppercase border border-purple-500 cursor-pointer hover:bg-purple-600 hover:text-white shadow-md">
            <svg className="h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16 4H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-8 9V7h2v6H8zm0 4v-2h2v2H8zm5-10v2h-2V7h2zm0 4v6h-2v-6h2zm0 8v-2h-2v2h2z" />
            </svg>  
            <span className="mt-2 font-semibold text-base leading-normal">Select an Image</span>
            <input type="file" className="hidden" onChange={handleImageUpload} />
          </label>
          <p className="pt-1 pl-4 text-base leading-normal truncate">
            <span className='font-semibold font-serif'>IMAGE : </span> {fileName}
          </p>
          <div className="flex justify-center space-x-4">
            <button onClick={handleSubmit} className="w-full py-3 mt-4 font-medium tracking-widest text-white uppercase bg-purple-500 shadow-lg focus:outline-none hover:bg-purple-600 hover:shadow-none rounded-full">
              Submit
            </button>
          </div>
          <hr className="border-t border-gray-400 mt-4" />
          <h4 className="font-bold mt-2 text-black">Status</h4>
          <div className='flex flex-row gap-5'>
            <progress className="w-2/3 h-2 mt-2 text-purple-500 bg-gray-300" value={uploadProgress} max="100"></progress>
            <button onClick={handleCancel} className="bg-red-500 hover:bg-red-600 text-white w-1/3 px-2 rounded-full">
              Cancel
            </button>
          </div>
          <p className="text-sm text-center mt-2 text-purple-900">{uploadProgress}% uploaded</p>
        </div>


        {/* RIGHT BOX */}
        <div className="flex flex-col w-3/4 p-6 bg-white rounded-lg shadow-lg h-[400px] h-max-[400px]">
          <h1 className="text-2xl font-bold mb-4 text-black flex justify-center items-center">Your Results</h1>
          <div className="flex justify-center items-center">
            <div className="w-1/3">
              {selectedImage && (
                <img src={selectedImage} alt="Selected" className="object-contain h-64 w-full" />
              )}
            </div>
            {/* <div className="w-2/3 px-10">
              {prediction && result && (
                <div className="p-4 bg-purple-50 rounded-lg shadow-lg border border-black">
                  <p className="text-black text-2xl">
                    <span className="font-bold">Prediction:</span> {prediction} %
                  </p>
                  <p className="text-black text-2xl">
                    <span className="font-bold">Result:</span> {result}
                  </p>
                </div>
              )}
            </div> */}
            <div className="w-2/3 px-10 flex flex-col gap-3">
              {prediction1 && result1 && (
                <div className="p-4 bg-purple-50 rounded-lg shadow-lg border">
                  <p className="text-black text-2xl">
                    <span className="font-bold">Prediction:</span> {prediction1} %
                  </p>
                  <p className="text-black text-2xl">
                    <span className="font-bold">Result:</span> {result1}
                  </p>
                </div>
              )}
              {prediction2 && result2 && (
                <div className="p-4 bg-purple-50 rounded-lg shadow-lg border">
                  <p className="text-black text-2xl">
                    <span className="font-bold">Prediction:</span> {prediction2} %
                  </p>
                  <p className="text-black text-2xl">
                    <span className="font-bold">Result:</span> {result2}
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

export default Predict_UploadImageFinal;
