import React from 'react';
import Navbar from "../../pages/Navbar";
import Title from "../Home/Domain/Cardialogy_Title";
import Doctors from "../Home/Domain/Cardialogy_doctors";
import Footer from "../../pages/Footer";

const Cardialogy = () => {
  return (
    <div>
      <Navbar />
      <Title />
      <Doctors />
      <Footer />
    </div>
  );
};

export default Cardialogy;
