import React from "react";
import Donation_Main from "../components/Donation_Blood/Donation_Main.jsx"
import Donation_Features from "../components/Donation_Blood/Donation_Features.jsx"
import Form from "../components/Donation_Blood/Donation_Form.jsx"

const Donation = () => {
	return (
		<div>
            <Donation_Main />
            <Donation_Features />
			<Form />
		</div>
	);
};

export default Donation;  