import React, { useState } from 'react';
import axios from 'axios';

const CheckDisease_NLP = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCheckDisease = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/get_response', { user_input: input });
      setOutput(response.data.response);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div className="flex items-center h-[76vh] bg-cover px-32 bg-violet-50 gap-10">
      <section className="w-[20%] border-r border-black">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          hello
        </div>        
      </section>
      <section className="w-[80%] bg-opacity-25 rounded-xl">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-md-12">
              <div className='h-[50vh] pb-6'></div>
              <div className="form-group space-y-4">

                <label htmlFor="symptom1" className="text-black text-xl font-bold">
                  Enter Your Symptoms
                </label>
                
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-2 border-gray-800 px-4 rounded-lg bg-transparent text-black w-full h-10"
                    id="symptom"
                    name="symptom"
                    required
                    placeholder="Enter your symptoms"
                    value={input}
                    onChange={handleInputChange}
                  />
                  <div className="input-group-append"></div>
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
                {output && (
                  <div className="mt-4">
                    <p className="text-black text-xl font-bold">Bot Response:</p>
                    <p className="text-black">{output}</p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CheckDisease_NLP;
