import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const CheckDisease_NLP = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleCheckDisease();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCheckDisease = async () => {
    if (!input.trim()) return;

    setHistory([...history, { text: input, type: 'user' }]);
    setInput('');

    try {
      setLoading(true);
      setError('');

      const response = await fetch('http://127.0.0.1:5000/api/get_response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setOutput(data.response);
      setHistory([...history, { text: input, type: 'user' }, { text: data.response, type: 'ai' }]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching response:', error);
      setError('Failed to fetch response. Please try again.');
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  return (
    <div className="flex items-center justify-center bg-violet-50 px-4">
      <section className="bg-white min-h-screen mx-12 mt-4 mb-8 pt-14 px-14 pb-8 rounded-3xl shadow-2xl w-full flex flex-col">
        <div>
          <div className="text-left mb-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-2">WELCOME TO DR. SYMPTOMS!</h1>
            <p className="text-md text-gray-800 font-serif">
              I am your AI Doc Assistant powered by advanced language models. Just describe your symptoms, and I will work to understand and guide you toward the best possible care!
            </p>
          </div>

          <div className="flex flex-col h-96 overflow-y-auto mb-8 border border-gray-300 p-4 rounded-lg bg-gray-100 shadow-inner scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200">
            {history.map((entry, index) => (
              <div key={index} className={`mb-4 p-3 rounded-2xl shadow-md flex ${entry.type === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-800'}`}>
                <span className="mr-2 text-xl">{entry.type === 'user' ? '👤' : '🤖'}</span>
                <div className="flex-1">
                  {/* Render markdown if response contains markdown */}
                  {entry.type === 'ai' ? (
                    // <p>{entry.text}</p>
                    <ReactMarkdown>{entry.text}</ReactMarkdown>
                  ) : (
                    <p>{entry.text}</p>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-center items-center gap-2 mt-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-600"></div>
                <p className="text-lg text-gray-600">Loading... Please wait</p>
              </div>
            )}

            {error && (
              <div className="mt-4 text-center">
                <p className="text-red-500 font-bold">Error:</p>
                <p className="text-red-500">{error}</p>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-400 mb-4">Here are a few things we can try:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                type="button"
                className="text-xs p-2 bg-white border border-black rounded-2xl text-center hover:bg-gray-200"
                onClick={() => handleSuggestionClick('What could be causing my symptoms of [describe symptoms]?')}
              >
                🤔 What could be causing my symptoms <br /> of [describe symptoms]?
              </button>
              <button
                type="button"
                className="text-xs p-2 bg-white border border-black rounded-2xl text-center hover:bg-gray-200"
                onClick={() => handleSuggestionClick('How should I manage my [specific health condition]?')}
              >
                🩺 How should I manage my [health condition]?
              </button>
              <button
                type="button"
                className="text-xs p-2 bg-white border border-black rounded-2xl text-center hover:bg-gray-200"
                onClick={() => handleSuggestionClick('What does the term [medical term] mean?')}
              >
                📚 What does the term [medical term] mean?
              </button>
              <button
                type="button"
                className="text-xs p-2 bg-white border border-black rounded-2xl text-center hover:bg-gray-200"
                onClick={() => handleSuggestionClick('Suggest some exercises to improve my mental well-being.')}
              >
                🧘‍♂️ Suggest some exercises to improve my <br /> mental well-being.
              </button>
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
                autoComplete="off"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckDisease_NLP;
