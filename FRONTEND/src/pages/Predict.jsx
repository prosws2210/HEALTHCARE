import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/Predict/PredictDisease_Title"
import Domain from "../components/Predict/PredictDisease_Domain"
import Footer from "./Footer";

const Predict = () => {
  return (
    <div>
      <Navbar />
			<Title />
      <Domain />
			<Footer />
    </div>
  )
}

export default Predict
