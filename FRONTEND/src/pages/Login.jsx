import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/Login_Register/Login_Title"
// import LoginR from '../components/Login_Register/LoginR';
import LoginR_new from '../components/Login_Register/LoginR_new';
// import Login_final from '../components/Login_Register/Login_final.jsx';
import Footer from "./Footer";

const Login = () => {
  return (
    <div>
        <Navbar />
        <Title />
        {/* <LoginR /> */}
        <LoginR_new />
        {/* <Login_final /> */}
        <Footer />
      
    </div>
  )
}

export default Login
 

