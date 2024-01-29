import React from 'react'
import Navbar from "./Navbar";
import Title from "../components/Symptoms/CheckDisease_Title"
import CheckNLP from "../components/Symptoms/CheckDisease_NLP"
import Footer from "./Footer";


const Check = () => {
  return (
    <div>
        <Navbar />
        <Title />
        <CheckNLP />
        <Footer />
    </div>
  )
}

export default Check
