import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast";

// Pages
import Admin from "./pages/Admin.jsx"; 

import Home from "./pages/Home";
import Cardialogy from "./components/Home/Cardialogy.jsx";

import About from "./pages/About.jsx";
import Predict from "./pages/Predict.jsx";

import Check from "./pages/Check.jsx";

import ViewReport from "./pages/ViewReport.jsx";
import HeartReport from "./components/View/Report/HeartReport.jsx";

import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Donation from "./pages/Donation.jsx";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";


export default function App() {
	return (
		<div>
			<Toaster />
			<Router>
				<Navbar />

				<Routes>
					<Route path="/admin" element={<Admin />} />

					<Route path="/" element={<Home />} />
					<Route path="/Home/Cardialogy" element={<Cardialogy />} />

					<Route path="/about" element={<About />} />
					<Route path="/predict" element={<Predict />} />

					<Route path="/check" element={<Check />} />
					<Route path="/viewreport" element={<ViewReport />} />
					<Route path="/View/Report/HeartReport" element={<HeartReport />} />

					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/donation" element={<Donation />} />
				</Routes>

				<Footer />
			</Router>
		</div>
	);
}
