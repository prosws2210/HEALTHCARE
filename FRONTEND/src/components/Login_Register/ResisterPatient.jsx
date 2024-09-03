import React, { useState } from "react";

const RegisterPatient = () => {
    const [showPassword, setShowPassword] = useState(false);

  // Personal Information
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [image, setImage] = useState(null);

  // Professional Information
  const [staffID, setStaffID] = useState(""); 
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [language, setLanguage] = useState("");
  const [timing, setTiming] = useState("");
  const [deptGroup, setDeptGroup] = useState("");

  // Account Information
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleImageChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const handleSelect = (gender) => setSelectedGender(gender);
  const handleBloodGroupChange = (e) => setBloodGroup(e.target.value);
  const handleDeptGroupChange = (e) => setDeptGroup(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleAadharNumberChange = (e) => setAadharNumber(e.target.value);

  return (
    <div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <div className="flex flex-col space-y-12">
                
          <div>
            <h1 className="text-2xl font-bold text-black mb-8">PROFILE INFORMATION</h1>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <label htmlFor="full-name" className="block text-gray-700 font-bold mb-2">Full Name</label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>

              <div className="flex flex-col">
                <label className="block text-gray-700 font-bold mb-2">Gender</label>
                <div className="space-x-10">
                  <button
                    onClick={() => handleSelect("Male")}
                    className={`px-3 py-1 rounded focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                      selectedGender === "Male"
                        ? "bg-indigo-700 text-white"
                        : "bg-neutral-500 text-white"
                    }`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => handleSelect("Female")}
                    className={`px-3 py-1 rounded focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                      selectedGender === "Female"
                        ? "bg-indigo-700 text-white"
                        : "bg-neutral-500 text-white"
                    }`}
                  >
                    Female
                  </button>
                  <button
                    onClick={() => handleSelect("Other")}
                    className={`px-3 py-1 rounded focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                      selectedGender === "Other"
                        ? "bg-indigo-700 text-white"
                        : "bg-neutral-500 text-white"
                    }`}
                  >
                    Other
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="date-of-birth" className="block text-gray-700 font-bold mb-2">Date of Birth</label>
                <input
                  id="date-of-birth"
                  name="date-of-birth"
                  type="date"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <label htmlFor="aadhar-number" className="block text-gray-700 font-bold mb-2">Aadhar Number</label>
                <input
                  id="aadhar-number"
                  name="aadhar-number"
                  type="text"
                  autoComplete="aadhar-number"
                  required
                  pattern="\d{4}-\d{4}-\d{4}"
                  value={aadharNumber}
                  onChange={handleAadharNumberChange}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Aadhar Number (XXXX-XXXX-XXXX)"
                />
              </div>

              <div>
                <label htmlFor="blood-group" className="block text-gray-700 font-bold mb-2">Blood Group</label>
                <select
                  id="blood-group"
                  name="blood-group"
                  value={bloodGroup}
                  onChange={handleBloodGroupChange}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                >
                  <option value="" disabled>Select Blood Group</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="phone-number" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  required
                  pattern="\d{10}"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="+ 91"
                />
              </div>

              {/* Alternate Phone number */}
              <div>
                <label htmlFor="Alternate-phone-number" className="block text-gray-700 font-bold mb-2">Alternate Phone Number</label>
                <input
                  id="alternate-phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  required
                  pattern="\d{10}"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="+ 91"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-black mb-8">STAFF INFORMATION</h1>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <label htmlFor="staff-id" className="block text-gray-700 font-bold mb-2">
                  Staff ID
                </label>
                <input
                  id="staff-id"
                  name="staff-id"
                  type="text"
                  autoComplete="off"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Staff ID"
                  onChange={(e)=>{setStaffID(e.target.value)}}
                />
              </div>

              <div>
                <label htmlFor="department-name" className="block text-gray-700 font-bold mb-2">Department Name</label>
                <select
                  id="department-name"
                  name="department-name"
                  value={deptGroup}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={handleDeptGroupChange}
                >
                  <option value="" className="text-gray-700" disabled><strong>Select Department Name</strong></option>
                  {[
                    "Cardiology",
                    "Dentistry",
                    "Dermatology",
                    "ENT",
                    "Endocrinology",
                    "Gastroenterology",
                    "Gynecology",
                    "Nephrology",
                    "Neurology",
                    "Neurosurgery",
                    "Oncology",
                    "Ophthalmology",
                    "Orthopaedic",
                    "Pediatrics",
                    "Plastic Surgery",
                    "Psychiatry",
                    "Pulmonology",
                    "Radiology",
                    "Rheumatology",
                    "Urology",
                    "Vascular Surgery",
                  ].map((group) => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="education" className="block text-gray-700 font-bold mb-2">Education</label>
                <input
                  id="education"
                  name="education"
                  type="text"
                  maxLength="60"
                  autoComplete="education"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Education (max 60 characters)"
                  onChange={(e)=>{setEducation(e.target.value)}}
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">Experience</label>
                <input
                  id="experience"
                  name="experience"
                  type="text"
                  maxLength="40"
                  autoComplete="experience"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Experience (max 40 characters)"
                  onChange={(e)=>{setExperience(e.target.value)}}
                />
              </div>

              <div>
                <label htmlFor="language" className="block text-gray-700 font-bold mb-2">Language</label>
                <input
                  id="language"
                  name="language"
                  type="text"
                  autoComplete="language"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Language"
                  onChange={(e)=>{setLanguage(e.target.value)}}
                />
              </div>

              <div>
                <label htmlFor="timing" className="block text-gray-700 font-bold mb-2">Timing</label>
                <input
                  id="timing"
                  name="timing"
                  type="text"
                  autoComplete="timing"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Timing : (eg: Mon-Sat 09:00-12:00 14:00-18:00)"
                  onChange={(e)=>{setTiming(e.target.value)}}
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-black mb-8">REGISTRATION INFORMATION</h1>
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-4 col-span-2">
                <div>
                  <label htmlFor="email-address" className="block text-gray-700 font-bold mb-2">Email address</label>
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
                  <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="relative">
                  <label htmlFor="confirm-password" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <div className="flex-1 pt-4 col-span-1">
                <label htmlFor="profile-image" className="block text-gray-700 font-bold mb-2">Profile Image</label>
                <div>
                  <input
                    id="profile-image"
                    name="profile-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="appearance-none rounded-full relative block px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                  <p className="font-semibold text-sm px-3 italic">Upload your passport photo</p>
                </div>
                {image && (
                  <div className="flex flex-col items-center">
                    <img src={image} alt="Profile" className="mt-4 h-32 w-32 object-cover rounded-full"/>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>


        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>

		    <p className="mt-10 text-sm text-center">
          Already have an account?{" "}
          <a
            href="/Login"
            className="font-bold text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </a>
        </p>
		
      </form>
    </div>
  );
};

export default RegisterPatient;
