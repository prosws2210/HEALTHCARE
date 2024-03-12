const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		isPatient: {
			type: Boolean,
			default: false,
		},
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
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		AlternatephoneNumber: {
			type: String,
			required: true,
		},
		aadharNumber: {
			type: String,
			unique: true,
			required: true,
		},
		image: {
			type: String,
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
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		confirmPassword: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
