import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


const Footer_New = () => {
	return (
		<div className="">
			<div className="flex gap-24 bg-neutral-700 text-white px-20 pt-8 pb-8">
				<div className="w-3/12">
					<h2 className="font-bold text-xl">Call us now @</h2>
					<div className="mt-3">
						<div className="flex pb-2">
							<a href="https://www.facebook.com/">
								<FaPhone className="text-1xl mr-4 mt-2" />
							</a>
							<div>
								<h6 className="font-semibold text-xs">Emergency</h6>
								<p>
									<a href="tel:1066" className="text-blue-500">
										1066
									</a>
								</p>
							</div>
						</div>

						<div className="flex pb-2">
							<a href="https://www.facebook.com/">
								<FaPhone className="text-1xl mr-4 mt-2" />
							</a>
							<div>
								<h6 className="font-semibold text-xs">NGO contact</h6>
								<p>
									<a href="tel:4043441066" className="text-blue-500">
										+91 4043441066
									</a>
								</p>
							</div>
						</div>

						<div className="flex pb-2">
							<a href="https://www.facebook.com/">
								<FaPhone className="text-1xl mr-4 mt-2" />
							</a>
							<div>
								<h6 className="font-semibold text-xs">Health Help Line</h6>
								<p>
									<a href="tel:1860-500-1066" className="text-blue-500">
										1860-500-1066
									</a>
								</p>
							</div>
						</div>

						<Link to="/login">
							<div className="flex flex-col bottom-32 left-4 w-60 gap-y-3">
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
									Become an Umeed Member
								</button>
							</div>
						</Link>

					</div>
				</div>

				<div className="w-4/12">
					<h2 className="font-bold text-xl">Useful Links</h2>
					<div className="flex flex-col gap-2 mt-3">
						<Link to="http://localhost:1001/" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>Health-care Support</p>
							<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
						<Link to="http://localhost:1002/" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>Education Support</p>
							<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
						<Link to="http://localhost:1003/" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>Dietary Support</p>
							<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
						<Link to="http://localhost:1004/" className="border-b-2 border-neutral-500 pt-3 flex justify-between">
							<p>Social Cause Support</p>
							<MdOutlineKeyboardArrowRight className="text-2xl" />
						</Link>
					</div>
				</div>

				<div className="w-6/12">
					<h2 className="font-bold text-xl first-line">Contact Us</h2>
					<div className="text-sm italic mt-3">
						<div className="flex flex-row justify-between">
							<div className="flex flex-col">
								<div className="flex justify-between gap-8">
									<div>Anushka Mohan</div>
									<div>(22BCE5081)</div>
								</div>
								<div className="flex justify-between gap-8">
									<div>Eliksha Maheshwari</div>
									<div>(22BAI1312)</div>
								</div>
							</div>
							<div className="flex flex-col">
								<div className="flex justify-between gap-8">
									<div>Paridhi Rathore</div>
									<div>(22BCE1581)</div>
								</div>
								<div className="flex justify-between gap-8">
									<div>Shakti Swaroop Sahu</div>
									<div>(22BAI1012)</div>
								</div>
							</div>
						</div>
						
						<br />

						B.Tech in CSE - Spl. in AI with ( ML & Core ) <br />
						Vellore Institute of Technology - Chennai, Tamil Nadu, INDIA <br />

						<br />

						<strong>Phone : </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +91 1010101010 <br />
						<strong>Email : </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; random_mail@gmail.com <br />
						<a href="https://health-care-website-two.vercel.app/"> <strong>Website : </strong>&nbsp;&nbsp; www.health-care.com</a>
					</div>
				</div>
			</div>

			<div className="bg-neutral-800 text-white py-4 flex justify-between px-20">
				<div className="text-sm">
					<a href="https://github.com/sws2210">
						2024 &copy; All Rights Reserved | Designed by Developed by Team APES
					</a>
				</div>
				<div className="flex gap-4">
				<a href="https://www.facebook.com/">
					<FaFacebook className="text-1xl mr-2" />
				</a>
				<a href="https://www.instagram.com/">
					<FaInstagram className="text-1xl mr-2" />
				</a>
				<a href="https://github.com/sws2210">
					<FaGithub className="text-1xl mr-2" />
				</a>
				<a href="https://www.linkedin.com/">
					<FaLinkedin className="text-1xl mr-2" />
				</a>
				<a href="https://mail.google.com/">
					<FaGooglePlusG className="text-1xl mr-2" />
				</a>
				</div>
			</div>
		</div>
	);
};

export default Footer_New;
