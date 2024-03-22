import React from 'react';
import Navbar from "../../../pages/Navbar";
import Title_Heart from "./Heart/Title_Heart";
import Body_Heart from './Heart/Body_Heart'
import Footer from "../../../pages/Footer_New";

const HeartReport = () => {
    return (
        <div>
            <Navbar />
            <Title_Heart />
            <Body_Heart />
            <Footer />
        </div>
    );
};

export default HeartReport;
