import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/Login_Register/Login_Title"
import RegisterBody from "../components/Login_Register/Register_body";
// import Test from "../components/Login_Register/Sax";
// import RegisterR from '../components/Login_Register/RegisterR';
import Footer from "./Footer_New";

const Register = () => {
  return (
    <div>
        <Navbar />
        <Title />
        {/* <RegisterR/> */}
        <RegisterBody/>
        {/* <Test/> */}
        <Footer />
    </div>
  )
}

export default Register