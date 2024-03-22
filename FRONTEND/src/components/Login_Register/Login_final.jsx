import React, { useState } from "react";
import { supabase } from '../../createClient'; 
import toast from "react-hot-toast";

const Login_final = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const handleLogin = async () => {
        try {
            const { data: staffData, error: staffError } = await supabase
                .from("Staff")
                .select("*")
                .eq("Email", Email)
                .eq("Password", Password);

            const { data: patientData, error: patientError } = await supabase
                .from("Patient")
                .select("*")
                .eq("Email", Email)
                .eq("Password", Password);

            if (staffError || patientError) {
                toast.error("Login failed");
                setLoginStatus("Login failed");
            } else if (staffData.length > 0) {
                console.log('Logged in as staff', staffData);
                setLoginStatus("Logged in as staff");
                // Handle staff login
            } else if (patientData.length > 0) {
                console.log('Logged in as patient', patientData);
                setLoginStatus("Logged in as patient");
                // Handle patient login
            } else {
                toast.error("No matching user found");
                setLoginStatus("No matching user found");
            }
        } catch (error) {
            console.error('Error: ', error);
            toast.error("An error occurred during login");
            setLoginStatus("An error occurred during login");
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            <p className="mb-4 text-red-500">{loginStatus}</p>
            <div className="mb-4">
                <input
                    type="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Login
            </button>
        </div>
    );
};

export default Login_final;