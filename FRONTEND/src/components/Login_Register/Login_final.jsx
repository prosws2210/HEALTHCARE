import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../createClient'; 
import toast from 'react-hot-toast';

const LoginFinal = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
    
        // Ensure email and password are strings
        const emailString = String(email);
        const passwordString = String(password);
    
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: emailString,
                password: passwordString,
            });
    
            if (error) {
                throw error;
            }
    
            toast.success('Welcome back!');
            navigate('/'); // Redirect to home page or dashboard
        } catch (error) {
            console.error("Login Error:", error);
            setError(error.message);
            toast.error(error.message);
        }
    };
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-violet-50">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                Sign in to your account
            </h2>
            <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    className="w-full mt-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sign in
                </button>
            </form>
        </div>
    );
};

export default LoginFinal;
