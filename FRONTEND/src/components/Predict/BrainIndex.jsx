import React from 'react'
import Navbar from "../../pages/Navbar";
import Title from "../Predict/BRAIN/BrainIndex_Title"
import Content from "../Predict/BRAIN/BrainIndex_Content"
import Image from "../Predict/BRAIN/BrainIndex_Image"
// import Copy from "../Predict/BRAIN/BrainIndex_Image_copy"
import Footer from "../../pages/Footer";


const BrainIndex = () => {
  return (
    <div>
      <Navbar />
      <Title />
      <Content />
      <Image />
      {/* <Copy /> */}
	    <Footer />
    </div>
  )
}

export default BrainIndex
   