import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/Contact Us/Contact_Title"
import Map from "../components/Contact Us/Contact_Map"
import Form from "../components/Contact Us/Contact_Form"
import Footer from "./Footer_New";

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Title />
        <Map />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact
