import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Cardialogy from "./components/Home/Cardialogy.jsx";

import About from "./pages/About.jsx";
import Predict from "./pages/Predict.jsx";
import BrainIndex from "./components/Predict/BrainIndex.jsx";

import Check from "./pages/Check.jsx";

import ViewReport from "./pages/ViewReport.jsx";
import HeartReport from "./components/View/Report/HeartReport.jsx";

import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Donation from "./pages/Donation.jsx";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

import {Toaster} from "react-hot-toast";

export default function App() {
	return (
		<div>
			<Toaster />
			<Router>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Home/Cardialogy" element={<Cardialogy />} />

					<Route path="/About" element={<About />} />
					<Route path="/Predict" element={<Predict />} />
					<Route path="/Predict/BrainIndex" element={<BrainIndex />} />

					<Route path="/Check" element={<Check />} />
					<Route path="/ViewReport" element={<ViewReport />} />
					<Route path="/View/Report/HeartReport" element={<HeartReport />} />

					<Route path="/Contact" element={<Contact />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Register" element={<Register />} />
					<Route path="/Donation" element={<Donation />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	);
}
