import React from 'react'
import Title from "../components/About Us/About_Title"
import Content from "../components/About Us/About_Content"
// import Slider from "./About Us/About_Slider"
import Gallery from "../components/About Us/About_Gallery"


const About_Us = () => {
  return (
    <div>
        <Title />
        <Content />
        {/* <Slider /> */}
        <Gallery />
    </div>
  )
}

export default About_Us
