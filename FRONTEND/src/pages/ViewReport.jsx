import React from "react";
import Navbar from "./Navbar";
import ViewReport_Title from "../components/View/ViewReport_Title"
import ViewReport_Domains from "../components/View/ViewReport_Domains"
import ViewPrescriptions_Domains from "../components/View/ViewPrescriptions_Domains"
import Footer from "./Footer_New";

const ViewReport = () => {
	return (
		<div>
			<Navbar />
            <ViewReport_Title />
            <ViewReport_Domains />
            <ViewPrescriptions_Domains />
			<Footer />
		</div>
	);
};

export default ViewReport;  