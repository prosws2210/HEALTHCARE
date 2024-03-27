import React, { useState } from 'react';
import axios from 'axios';
import { FaPhone } from "react-icons/fa6";


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
    <div className="py-8 bg-cover px-12 bg-violet-50 gap-6">
      <div className="flex flex-row h-full gap-5">
        <section className="flex flex-col justify-between w-[20%] rounded-3xl bg-white py-4 px-8 shadow-2xl">
          {/* Top div */}
        <div className='flex flex-row justify-between pt-2 pb-4 items-center bg-white border-gray-600 border-b-4'>
          <div className="text-lg font-bold text-blue-500">
            UMEED 
          </div>     
          <div className="flex items-center text-blue-500">
            <FaPhone className="text-2xl mr-2" /> 
          </div>
        </div>

          {/* Bottom div */}
          <div>
            Hello World 
          </div>  
        </section>
        <section className="flex flex-col justify-between w-[80%] rounded-3xl bg-white py-4 px-8 h-[80%] shadow-2xl">
          {/* Top writeup */}
          <div className="p-8 bg-white">
            <h1 className="text-4xl font-bold text-blue-600 mb-2 text-shadow">HEY THERE! </h1>  
            <p className="text-md text-gray-800 font-serif text-shadow">My name is DR. SYMPTOMS and I'm your personal family AI Doctor. Give me your symptoms and I will try my best to cure them!</p>
          </div>

          <div className='h-[30vh]'></div>

          {/* Bottom writeup */}
          <div className='flex flex-col px-8 py-2 space-y-4'>
            <h1 className="text-1xl font-semibold text-gray-400">Here are few things we can try</h1>
            <div className='flex flex-row items-center justify-between gap-10'>
              {/* 1st box */}
              <div className="text-xs p-2 text-center flex items-center bg-white border-black border-2 rounded-2xl w-full h-12">                
                What could be causing my symptoms of [describe symptoms] ?
              </div>
              {/* 2nd box */}
              <div className="text-xs p-2 text-center flex items-center bg-white border-black border-2 rounded-2xl w-full h-12">
                How should I manage my [specific health condition] ?
              </div>
              {/* 3rd box */}
              <div className="text-xs p-2 text-center flex items-center bg-white border-black border-2 rounded-2xl w-full h-12">
                What does the term [medical term] mean ?
              </div>
              {/* 4th box */}
              <div className="text-xs p-2 text-center flex items-center bg-white border-black border-2 rounded-2xl w-full h-12">
                Suggest some exercises to improve my mental well-being.
              </div>
            </div>
            <div className="container mx-auto h-full">
              <div className="row h-full">
                <div className="col-md-12 h-full">
                  <div className="form-group space-y-4 h-full">

                    <label htmlFor="symptom1" className="text-black text-xl font-bold">
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
          </div>
        </section>
      </div>
    </div>
  );
}

export default CheckDisease_NLP;
