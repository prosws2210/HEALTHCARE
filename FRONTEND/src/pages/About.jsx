import React from 'react'
import Title from "../components/About Us/About_Title"
import Content from "../components/About Us/About_Content"
// import Slider from "./About Us/About_Slider"
import Count from "../components/About Us/About_Count.jsx"
import Gallery from "../components/About Us/About_Gallery"


const About_Us = () => {
  return (
    <div>
        <Title />
        <Content />
        {/* <Slider /> */}
        <Count />
        <Gallery />
    </div>
  )
}

export default About_Us
