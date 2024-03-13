const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
	try {
		const {
			name,
			DOB,
			selectedGender,
			bloodGroup,
			phoneNumber,
			AlternatephoneNumber,
			aadharNumber,
			image,
			email,
			password,
			isStaff,
			staffID,
			education,
			experience,
			language,
			timing,
			deptGroup
		} = req.body;

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hashSync(password, salt);

		const newUser = new User({
			name,
			DOB,
			selectedGender,
			bloodGroup,
			phoneNumber,
			AlternatephoneNumber,
			aadharNumber,
			image,
			email,
			password: hashedPassword,
			isStaff,
			staffID,
			education,
			experience, 
			language,
			timing,
			deptGroup,
		});

		const savedUser = await newUser.save();
		res.status(200).json(savedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

//LOGIN
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		if (!user) {
			return res.status(404).json("User not found!");
		}
		const match = await bcrypt.compare(req.body.password, user.password);

		if (!match) {
			return res.status(401).json("Wrong credentials!");
		}
		const token = jwt.sign(
			{ _id: user._id, username: user.username, email: user.email },
			process.env.SECRET,
			{ expiresIn: "3d" }
		);
		const { password, ...info } = user._doc;
		res.cookie("token", token).status(200).json(info);
	} catch (err) {
		res.status(500).json({ message: "Server error", error: err.toString() });
	}
});

//LOGOUT
router.get("/logout", async (req, res) => {
	try {
		res
			.clearCookie("token", { sameSite: "none", secure: true })
			.status(200)
			.send("User logged out successfully!");
	} catch (err) {
		res.status(500).json(err);
	}
});

//REFETCH USER
router.get("/refetch", (req, res) => {
	const token = req.cookies.token;
	jwt.verify(token, process.env.SECRET, {}, async (err, data) => {
		if (err) {
			return res.status(404).json(err);
		}
		res.status(200).json(data);
	});
});

module.exports = router;
