import React, { useState } from "react";
import RegisterPatient from "./ResisterPatient";
import RegisterStaff from "./ResisterStaff";
// import { Transition } from '@tailwindui/react';

const RegisterR = () => {
    const [selectedRole, setSelectedRole] = useState('staff');

    const handleRoleToggle = (role) => {
        setSelectedRole(role);
    }

    return (
        <div className="bg-violet-50 px-40 pb-10 pt-2">
            <h2 className="text-3xl font-extrabold text-gray-900 mt-4 mb-8 text-center">
                Create a New Account
            </h2>
            
            {/* Toggle Button */}
            <div className="flex justify-center space-x-4">
                <button
                    onClick={() => handleRoleToggle('staff')}
                    className={`px-3 py-1 rounded focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                        selectedRole === 'staff' ? 'bg-indigo-700 text-white' : 'bg-neutral-500 text-white'
                    }`}
                >
                    Staff
                </button>

                <button
                    onClick={() => handleRoleToggle('patient')}
                    className={`px-3 py-1 rounded focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                        selectedRole === 'patient' ? 'bg-indigo-700 text-white' : 'bg-neutral-500 text-white'
                    }`}
                >
                    Patient
                </button>
            </div>

            {/* Components */}
            {selectedRole === 'staff' ? <RegisterStaff /> : <RegisterPatient />}
        </div>
    );
};

export default RegisterR;