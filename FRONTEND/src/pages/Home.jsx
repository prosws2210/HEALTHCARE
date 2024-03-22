import React from "react";
import Navbar from "./Navbar";
import Home_Slider from "../components/Home/Home_Slider"
import Home_KeyFeatures from "../components/Home/Home_KeyFeatures"
import Home_DoctorsMessage from "../components/Home/Home_DoctorsMessage"
import Home_DoctorsDomain from "../components/Home/Home_DoctorsDomain"
// import Footer from "./Footer";
import Footer from "./Footer_New";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Home_Slider />
			<Home_KeyFeatures />
			<Home_DoctorsMessage />
			<Home_DoctorsDomain />
			<Footer />
		</div>
	);
};

export default Home;  