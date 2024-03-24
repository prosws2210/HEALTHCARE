import React from "react";
import Home_Slider from "../components/Home/Home_Slider"
import Home_KeyFeatures from "../components/Home/Home_KeyFeatures"
import Home_DoctorsMessage from "../components/Home/Home_DoctorsMessage"
import Home_DoctorsDomain from "../components/Home/Home_DoctorsDomain"


const Home = () => {
	return (
		<div>
			<Home_Slider />
			<Home_KeyFeatures />
			<Home_DoctorsMessage />
			<Home_DoctorsDomain />
		</div>
	);
};

export default Home;  