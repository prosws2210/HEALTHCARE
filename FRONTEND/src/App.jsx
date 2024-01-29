import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Predict from "./pages/Predict.jsx";
import BrainIndex from "./components/Predict/BrainIndex.jsx";

import Check from "./pages/Check.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

export default function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Predict" element={<Predict />} />
					<Route path="/Predict/BrainIndex" element={<BrainIndex />} />

					<Route path="/Check" element={<Check />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Register" element={<Register />} />
				</Routes>
			</Router>
		</div>
	);
}
