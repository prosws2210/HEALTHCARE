import React from "react";
import Navbar from "./Navbar";
import Donation_Main from "../components/Donation_Blood/Donation_Main.jsx"
import Donation_Features from "../components/Donation_Blood/Donation_Features.jsx"
import Footer from "./Footer";

const Donation = () => {
	return (
		<div>
			<Navbar />
            <Donation_Main />
            <Donation_Features />
			<Footer />
		</div>
	);
};

export default Donation;  