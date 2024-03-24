import React from "react";
import ViewReport_Title from "../components/View/ViewReport_Title"
import ViewReport_Domains from "../components/View/ViewReport_Domains"
import ViewPrescriptions_Domains from "../components/View/ViewPrescriptions_Domains"

const ViewReport = () => {
	return (
		<div>
            <ViewReport_Title />
            <ViewReport_Domains />
            <ViewPrescriptions_Domains />
		</div>
	);
};

export default ViewReport;  