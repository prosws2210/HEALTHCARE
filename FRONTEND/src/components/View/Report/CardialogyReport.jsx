import React from 'react';
import Navbar from "../../../pages/Navbar";
import Title_Cardialogy from "./Cardialogy/Title_Cardialogy";
import Body_Cardialogy from './Cardialogy/Body_Cardialogy'
import Footer from "../../../pages/Footer";

const CardialogyReport = () => {
    return (
        <div>
            <Navbar />
            <Title_Cardialogy />
            <Body_Cardialogy />
            <Footer />
        </div>
    );
};

export default CardialogyReport;
