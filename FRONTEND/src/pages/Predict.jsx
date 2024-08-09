import React from 'react'
import Title from "../components/Predict/PredictDisease_Title"
import Domain from "../components/Predict/PredictDisease_Domain"
import Content from "../components/Predict/Predict_Content"
import Image from "../components/Predict/Predict_UploadImage"

const Predict = () => {
  return (
    <div>
			<Title />
      <Domain />
      <Content />
      <Image />
    </div>
  )
}

export default Predict
