import React from 'react'
import Title from "../components/Predict/PredictDisease_Title"
import Domain from "../components/Predict/PredictDisease_Domain"
import Content from "../components/Predict/Predict_Content"
import Image from "../components/Predict/Predict_UploadImage"
import FinalImage from "../components/Predict/Predict_UploadImageFinal"

const Predict = () => {
  return (
    <div>
			<Title />
      <Domain />
      <Content />
      <Image />
      <FinalImage />
    </div>
  )
}

export default Predict
 