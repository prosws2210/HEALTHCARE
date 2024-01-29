import React, { useState } from 'react';

const LoginView = ({ onRegisterClick, onRoleToggle }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCameraLogin = () => {
    console.log('Camera login clicked');

    return (
      <div className="flex">
        <div className="w-[70%] bg-violet-50 border border-gray-300 p-4 rounded-xl shadow-2xl flex flex-col">
          <h2 className="text-center text-2xl font-extrabold text-gray-900">Camera Login</h2>
          <div className="bg-gray-300 h-[20rem] mt-4 rounded-xl flex flex-col justify-end items-center pb-4">
            <div className="w-[20%] h-[2rem] bg-indigo-600 hover:bg-indigo-700 border-2 border-black text-white text-center rounded-xl shadow-lg flex items-center justify-center">
              Login
            </div>
          </div>
        </div>
        <div className="w-32"></div>
      </div>
    );
  };

  return (
    <div className="bg-violet-50 flex justify-center items-center gap-10 px-40 py-10">
      <div className="p-8 w-[100%]">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Sign in to your account</h2>
        <form className="space-y-4">
        <div>
          <label htmlFor="email-address" className="block text-gray-700 font-bold mb-2">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            pattern=".+@.+"
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm pt-8 z-20 leading-5"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                {/* ... (path data for show password icon) */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                {/* ... (path data for hide password icon) */}
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>
        <p className="mt-10 text-sm text-center">
          Don't have an account?{' '}
          <a href="#" onClick={onRegisterClick} className="font-bold text-indigo-600 hover:text-indigo-500">
            Register
          </a>
        </p>
      </div>

      <div className="w-[70%] bg-white border border-gray-300 p-4 rounded-xl shadow-2xl flex flex-col">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">Camera Login</h2>
        <div className="bg-gray-300 h-[20rem] mt-4 rounded-xl flex flex-col justify-end items-center pb-4">
          <div className="w-[50%] h-[2rem] bg-indigo-600 hover:bg-indigo-700 border-2 border-black text-white text-center rounded-xl shadow-lg flex items-center justify-center">
            Camera Login
          </div>
        </div>
      </div>
    </div>
  );
};






const RegisterStaffView = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleBloodGroupChange = (e) => {
    setBloodGroup(e.target.value);
  };

  return (
    <div className="bg-violet-50 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-[50%] md:w-96">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Staff Registration
        </h2>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
            Select Gender
          </label>
          <div className="flex">
            <button
              onClick={() => handleSelect('male')}
              className={`mr-2 ${
                selectedGender === 'male' ? 'bg-blue-500' : 'bg-gray-300'
              } text-white px-4 py-2 rounded-md`}
            >
              Male
            </button>
            <button
              onClick={() => handleSelect('female')}
              className={`mr-2 ${
                selectedGender === 'female' ? 'bg-pink-500' : 'bg-gray-300'
              } text-white px-4 py-2 rounded-md`}
            >
              Female
            </button>
            {/* Add more gender options as needed */}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="blood-group" className="block text-gray-700 font-bold mb-2">
            Blood Group
          </label>
          <select
            id="blood-group"
            name="bloodGroup"
            value={bloodGroup}
            onChange={handleBloodGroupChange}
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          >
            <option value="" disabled>
              Select Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            {/* Add more blood group options as needed */}
          </select>
        </div>
        {/* Add more fields for staff registration */}
        <button
          type="submit"
          className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </div>
    </div>
  );
};






const RegisterPatientView = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleBloodGroupChange = (e) => {
    setBloodGroup(e.target.value);
  };

  return (
    <div className="bg-violet-50 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-[50%] md:w-96">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Patient Registration
        </h2>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
            Select Gender
          </label>
          <div className="flex">
            <button
              onClick={() => handleSelect('male')}
              className={`mr-2 ${
                selectedGender === 'male' ? 'bg-blue-500' : 'bg-gray-300'
              } text-white px-4 py-2 rounded-md`}
            >
              Male
            </button>
            <button
              onClick={() => handleSelect('female')}
              className={`mr-2 ${
                selectedGender === 'female' ? 'bg-pink-500' : 'bg-gray-300'
              } text-white px-4 py-2 rounded-md`}
            >
              Female
            </button>
            {/* Add more gender options as needed */}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="blood-group" className="block text-gray-700 font-bold mb-2">
            Blood Group
          </label>
          <select
            id="blood-group"
            name="bloodGroup"
            value={bloodGroup}
            onChange={handleBloodGroupChange}
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          >
            <option value="" disabled>
              Select Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            {/* Add more blood group options as needed */}
          </select>
        </div>
        {/* Add more fields for patient registration */}
        <button
          type="submit"
          className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </div>
    </div>
  );
};






const LoginRegisterForm = () => {
  const [isLoginView, setLoginView] = useState(true);
  const [selectedRole, setSelectedRole] = useState('patient');

  const handleRoleToggle = (role) => {
    setSelectedRole(role);
  };

  const handleToggleView = () => {
    setLoginView(!isLoginView);
  };

  return (
    <div className="bg-violet-50">
      {isLoginView ? (
        <LoginView
          onToggleView={handleToggleView}
          onRoleToggle={handleRoleToggle}
        />
      ) : (
        <>
          {selectedRole === 'staff' ? (
            <RegisterStaffView />
          ) : (
            <RegisterPatientView />
          )}
        </>
      )}
      {/* Additional JSX for navigation, etc., can be added here */}
    </div>
  );
};

export default LoginRegisterForm;
