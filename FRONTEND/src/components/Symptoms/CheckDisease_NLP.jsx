import React, { useState } from 'react';
// import axios from 'axios';
// import axios from 'axios';


const CheckDisease_NLP = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]); // State to store history

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCheckDisease = async () => {
    if (!input.trim()) return; // Prevent empty submissions

    try {
      setLoading(true);
      setError('');
      const response = await axios.post('http://127.0.0.1:5000/api/get_response', { user_input: input });
      setOutput(response.data.response);
      setLoading(false);
      console.log('Response:', response.data.response);

      // Update history
      setHistory([...history, { question: input, answer: response.data.response }]);
      setInput(''); // Clear input after submission
    } catch (error) {
      console.error('Error fetching response:', error);
      setError('Failed to fetch response. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-violet-50 px-4">
      <section className="bg-white min-h-screen mx-12 mt-4 mb-8 pt-14 px-14 pb-8 rounded-3xl shadow-2xl w-full flex flex-col justify-between">
        <div>
          <div className="text-left mb-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-2">WELCOME TO DR. SYMPTOMS!</h1>
            <p className="text-md text-gray-800 font-serif">
              I am your AI Doc Assistant powered by advanced language models. Just describe your symptoms, and I will work to understand and guide you toward the best possible care!
            </p>
          </div>

          <div className="mb-8">
            {loading && (
              <div className="flex justify-center items-center gap-2">
                <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-600"></div>
                <p className="text-lg text-gray-600">Loading... Please wait</p>
              </div>
            )}

            {!loading && output && (
              <div className="mt-4">
                <p className="text-black text-xl font-bold">AI Doc Response:</p>
                <div 
                  className="text-black" 
                  dangerouslySetInnerHTML={{ __html: output }} 
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-400 mb-4">Here are a few things we can try:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-xs p-4 bg-white border border-black rounded-2xl text-center">
                What could be causing my symptoms of [describe symptoms]?
              </div>
              <div className="text-xs p-4 bg-white border border-black rounded-2xl text-center">
                How should I manage my [specific health condition]?
              </div>
              <div className="text-xs p-4 bg-white border border-black rounded-2xl text-center">
                What does the term [medical term] mean?
              </div>
              <div className="text-xs p-4 bg-white border border-black rounded-2xl text-center">
                Suggest some exercises to improve my mental well-being.
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="symptom" className="text-black text-xl font-bold block mb-4">
              Enter Your Symptoms
            </label>
            <div className="mb-4">
              <input
                type="text"
                className="w-full h-12 px-4 border border-gray-800 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-bold py-2 px-8 rounded-full border-2 border-black hover:shadow-lg transform hover:scale-105 transition-transform"
                onClick={handleCheckDisease}
              >
                Check Disease
              </button>
            </div>

            {error && (
              <div className="mt-4 text-center">
                <p className="text-red-500 font-bold">Error:</p>
                <p className="text-red-500">{error}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 h-48 overflow-y-scroll border-t border-gray-300 pt-4">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">History</h2>
          {history.map((entry, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <p className="font-bold text-gray-700">Q: {entry.question}</p>
              <p className="text-gray-600">A: {entry.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CheckDisease_NLP;
