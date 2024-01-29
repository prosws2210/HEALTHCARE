import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Footer = () => {
	return (
		<div className="">
			<div className="grid grid-cols-3 gap-20 bg-neutral-700 text-white px-20 pt-8 pb-8">

				<div>
					<h2 className="font-bold text-xl pb-2">About Us</h2>
					<p className="text-justify text-sm">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Healthify Yourself focuses on technologies that promise to reduce costs, streamline processes, and speed time-to-market. Our	commitment to patient care, high customer satisfaction, and	personalized treatment plans have resulted in positive health outcomes. We have a robust and diverse Pharma Pipeline and a
						dedicated Pharma Team working tirelessly to bring safe and effective
						treatments to our patients. Backed by our strong quality processes
						and rich experience managing global operations, we strive to exceed
						your expectations at every step of your healthcare journey.
					</p>
				</div>


				<div>
					<h2 className="font-bold text-xl pb-2">Useful Links</h2>
					<div className="flex flex-col gap-2">
						<Link to="/" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>Home</p>
							<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
						<Link to="/about" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>About Us</p>
							<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
						<Link to="/predict" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>Predict Disease</p>
							<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
						<Link to="/check" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>Check Disease</p>
							<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
						<Link to="/contact" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>Contact Us</p>
						<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
					</div>
				</div>


				<div className="">
					<h2 className="font-bold text-xl first-line pb-2">Contact Us</h2>
					<div className="text-sm italic">
						<div className="flex justify-between">
							<div>Isha Shrivastava</div>
							<div>(22BRS1181)</div>
						</div>
						<div className="flex justify-between">
							<div>Eliksha Maheshwari</div>
							<div>(22BAI1312)</div>
						</div>
						<div className="flex justify-between">
							<div>Shakti Swaroop Sahu</div>
							<div>(22BAI1012)</div>
						</div>
						<div className="flex justify-between">
							<div>Soham Jyoti Mondal</div>
							<div>(22BAI1023)</div>
						</div>
						
						<br />

						B.Tech in CSE with AI&ML <br />
						VIT Chennai <br />
						Tamil Nadu, IND <br />
						<br />
						Phone: +91 1010101010 <br />
						Email: random_mail@gmail.com <br />
						Web: www.random.in
					</div>
				</div>
			</div>

			<div className="bg-neutral-800 text-white py-4 flex justify-between px-20">
				<div className="text-sm">
					<a href="https://github.com/sws2210">
						2024 &copy; All Rights Reserved | Designed by Eliksha Maheshwari and Developed by Shakti Swaroop Sahu
					</a>
				</div>
				<div className="flex gap-3">
				<a href="https://www.facebook.com/">
					<FaFacebook className="text-2xl mr-2" />
				</a>
				<a href="https://www.instagram.com/">
					<FaInstagram className="text-2xl mr-2" />
				</a>
				<a href="https://github.com/sws2210">
					<FaGithub className="text-2xl mr-2" />
				</a>
				<a href="https://www.linkedin.com/">
					<FaLinkedin className="text-2xl mr-2" />
				</a>
				<a href="https://mail.google.com/">
					<FaGooglePlusG className="text-2xl mr-2" />
				</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
