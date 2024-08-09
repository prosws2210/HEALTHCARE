import React, { useState } from 'react';
import axios from 'axios';

const CheckDisease_NLP = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCheckDisease = async () => {
    try {
      setError(''); // Reset error state before making the request
      const response = await axios.post('http://127.0.0.1:5000/api/get_response', { user_input: input });
      setOutput(response.data.response);
      console.log('Response:', response.data.response); // For debugging
    } catch (error) {
      console.error('Error fetching response:', error);
      setError('Failed to fetch response. Please try again.');
    }
  };

  return (
    <div className="py-8 bg-cover px-12 bg-violet-50 gap-6">
      <div className="flex flex-row h-full gap-5">
        <section className="flex flex-col justify-between rounded-3xl bg-white py-4 px-8 h-[80%] shadow-2xl">
          <div className="pt-8 px-8 pb-4 bg-white">
            <h1 className="text-4xl font-bold text-blue-600 mb-2">WELCOME TO DR. SYMPTOMS!</h1>
            <p className="text-md text-gray-800 font-serif">
              I am your AI Doc Assistant powered by advanced language models. Just describe your symptoms, and I will work to understand and guide you toward the best possible care!
            </p>
          </div>


          <div className='px-8 pb-4'>
            {output && (
              <div className="mt-4">
                <p className="text-black text-xl font-bold">AI doc Response:</p>
                <p className="text-black">{output}</p>
              </div>
            )}
          </div>


          <div className="flex flex-col px-8 py-2 space-y-4">
            <h1 className="text-1xl font-semibold text-gray-400">Here are a few things we can try</h1>
            <div className="flex flex-row items-center justify-between gap-10">
              <div className="text-xs p-2 text-center flex items-center bg-white border-black border-2 rounded-2xl w-full h-12">
                What could be causing my symptoms of [describe symptoms]?
              </div>
              <div className="text-xs p-2 text-center flex items-center bg-white border-black border-2 rounded-2xl w-full h-12">
                How should I manage my [specific health condition]?
              </div>
              <div className="text-xs p-2 text-center flex items-center bg-white border-black border-2 rounded-2xl w-full h-12">
                What does the term [medical term] mean?
              </div>
              <div className="text-xs p-2 text-center flex items-center bg-white border-black border-2 rounded-2xl w-full h-12">
                Suggest some exercises to improve my mental well-being.
              </div>
            </div>

            <div className="container mx-auto h-full">
              <div className="row h-full">
                <div className="col-md-12 h-full">
                  <div className="form-group space-y-4 h-full">
                    <label htmlFor="symptom" className="text-black text-xl font-bold">
                      Enter Your Symptoms
                    </label>
                    <div className="input-group bg-white rounded-xl">
                      <input
                        type="text"
                        className="form-control border-2 border-gray-800 px-4 rounded-lg bg-transparent w-full h-12"
                        id="symptom"
                        name="symptom"
                        required
                        placeholder="Enter your symptoms"
                        value={input}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-black rounded-full w-[15%] py-2 text-white text-lg font-bold"
                        onClick={handleCheckDisease}
                      >
                        Check Disease
                      </button>
                    </div>

                    {error && (
                      <div className="mt-4">
                        <p className="text-red-500 font-bold">Error:</p>
                        <p className="text-red-500">{error}</p>
                      </div>
                    )}

                    {/* {output && (
                      <div className="mt-4">
                        <p className="text-black text-xl font-bold">AI doc Response:</p>
                        <p className="text-black">{output}</p>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CheckDisease_NLP;
