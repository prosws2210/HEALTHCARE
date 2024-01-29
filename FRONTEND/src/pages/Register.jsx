import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/Login_Register/Login_Title"
import RegisterR from '../components/Login_Register/RegisterR';
import Footer from "./Footer";

const Register = () => {
  return (
    <div>
        <Navbar />
        <Title />
        <RegisterR/>
        <Footer />
    </div>
  )
}

export default Register