import React, { useState } from 'react';

const LoginRegisterForm = () => {
  const [isLoginView, setLoginView] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');

  const handleRegisterClick = () => {
    setLoginView(false);
  };

  const handleBackToLoginClick = () => {
    setLoginView(true);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="bg-violet-50 justify-center py-6 px-36">
      <div className="space-y-8 flex gap-20">
        <div className="w-[100%] space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {isLoginView ? 'Sign in to your account' : 'Create a new account'}
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md space-y-4">
              {!isLoginView && (
                <div className="grid grid-cols-3 gap-8">

                {/* Full Name */}
                <div>
                  <label htmlFor="full-name" className="block text-gray-700 font-bold mb-2">Full Name</label>
                  <input id="full-name" name="full-name" type="text" autoComplete="name" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full Name" />
                </div>

                {/* Date of Birth */}
                <div>
                  <label htmlFor="date-of-birth" className="block text-gray-700 font-bold mb-2">Date of Birth</label>
                  <input id="date-of-birth" name="date-of-birth" type="date" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                </div>

                {/* Gender */}
                <div className="flex flex-col">
                  <label className="block text-gray-700 font-bold mb-2">Gender</label>
                  <div className='space-x-10'>
                    <button 
                      onClick={() => handleSelect('Male')}
                      className={`px-3 py-1 rounded focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${selectedGender === 'Male' ? 'bg-indigo-700 text-white' : 'bg-neutral-500 text-white'}`}
                    >
                      Male
                    </button>
                    <button 
                      onClick={() => handleSelect('Female')}
                      className={`px-3 py-1 rounded focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${selectedGender === 'Female' ? 'bg-indigo-700 text-white' : 'bg-neutral-500 text-white'}`}
                    >
                      Female
                    </button>
                    <button 
                      onClick={() => handleSelect('Other')}
                      className={`px-3 py-1 rounded focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${selectedGender === 'Other' ? 'bg-indigo-700 text-white' : 'bg-neutral-500 text-white'}`}
                    >
                      Other
                    </button>
                  </div>
                </div>

                {/* Aadhar Number */}
                <div>
                  <label htmlFor="aadhar-number" className="block text-gray-700 font-bold mb-2">Aadhar Number</label>
                  <input id="aadhar-number" name="aadhar-number" type="text" autoComplete="aadhar-number" required pattern="\\d{4}-\\d{4}-\\d{4}" className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Aadhar Number (XXXX-XXXX-XXXX)" />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone-number" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                  <input id="phone-number" name="phone-number" type="tel" autoComplete="tel" required pattern="\\d{10}" className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="+ 91" />
                </div>
                <div>
                  <label htmlFor="alternate-phone-number" className="block text-gray-700 font-bold mb-2">Alternate Phone Number</label>
                  <input id="alternate-phone-number" name="alternate-phone-number" type="tel" autoComplete="tel" pattern="\\d{10}" className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="+ 91" />
                </div>
              </div>
              )}


              <div className='pt-4 space-y-4'>
                  <div>
                      <label htmlFor="email-address" className="block text-gray-700 font-bold mb-2">Email address</label>
                      <input id="email-address" name="email" type="email" autoComplete="email" required pattern=".+@.+" className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                  </div>
                  <div className="relative">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                    <button type="button" onClick={toggleShowPassword} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm pt-8 z-20 leading-5">
                        {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        )}
                    </button>
                  </div>
                {!isLoginView && (
                    <div className="relative">
                        <label htmlFor="confirm-password" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                        <input id="confirm-password" name="confirm-password" type={showPassword ? "text" : "password"} autoComplete="new-password" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
                    </div>
                )}
                </div>
              </div>


            {isLoginView && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {isLoginView ? 'Sign in' : 'Register'}
              </button>
            </div>
          </form>
          <div className="text-sm text-center">
            {isLoginView ? (
              <p>
                Don't have an account?{' '}
                <button onClick={handleRegisterClick} className="font-medium text-indigo-600 hover:text-indigo-500">
                  Register
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button onClick={handleBackToLoginClick} className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign in
                </button>
              </p>
            )}
          </div>
        </div>
        {isLoginView && (
          <div className="w-[70%] bg-white border border-gray-300 p-4 rounded-xl shadow-2xl flex flex-col">
          <h2 className="text-center text-2xl font-extrabold text-gray-900">Camera Login</h2>
          <div className="bg-gray-300 h-[20rem] mt-4 rounded-xl flex flex-col justify-end items-center pb-4">
            <div className="w-[20%] h-[2rem] bg-indigo-600 hover:bg-indigo-700 border-2 border-black text-white text-center rounded-xl shadow-lg flex items-center justify-center">
              Login
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegisterForm;