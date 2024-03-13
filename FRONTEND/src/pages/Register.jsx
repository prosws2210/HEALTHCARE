import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/Login_Register/Login_Title"
import RegisterBody from "../components/Login_Register/Register_body";
// import RegisterR from '../components/Login_Register/RegisterR';
import Footer from "./Footer";

const Register = () => {
  return (
    <div>
        <Navbar />
        <Title />
        {/* <RegisterR/> */}
        <RegisterBody/>
        <Footer />
    </div>
  )
}

export default Register