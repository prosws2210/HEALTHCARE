import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/About Us/About_Title"
import Content from "../components/About Us/About_Content"
// import Slider from "./About Us/About_Slider"
import Gallery from "../components/About Us/About_Gallery"
import Footer from "./Footer_New";


const About_Us = () => {
  return (
    <div>
        <Navbar />
        <Title />
        <Content />
        {/* <Slider /> */}
        <Gallery />
        <Footer />
    </div>
  )
}

export default About_Us
