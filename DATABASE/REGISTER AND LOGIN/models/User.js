const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,  
		},
		DOB: {
			type: Date,
			required: true,
		},
		selectedGender: {
			type: String,
			required: true,
		},
		bloodGroup: {
			type: String,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		AlternatephoneNumber: {
			type: String,
		},
		aadharNumber: {
			type: String,
			unique: true,
			required: true,
		},
		image: {
			type: String,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		isStaff: {
			type: Boolean,
			default: false,
		},
		staffID: {
			type: String,
		},
		education: {
			type: String,
		},
		experience: {
			type: String,
		},
		language: {
			type: String,
		},
		timing: {
			type: String,
		},
		deptGroup: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
