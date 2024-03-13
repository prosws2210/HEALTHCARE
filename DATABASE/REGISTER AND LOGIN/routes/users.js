// const Post = require("../models/Post");
// const Comment = require("../models/Comment");

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const verifyToken = require("../helper/verifyToken");

// UPDATE USER
router.put("/:id", verifyToken, async (req, res) => {
    try {
        // Check if the request body contains a password field
        if (req.body.password) {
            // If password is provided, hash it
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        // Update the user with the provided ID
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } // To return the updated document
        );
        // Send the updated user object as response
        res.status(200).json(updatedUser);
    } catch (err) {
        // If an error occurs, send an error response
        res.status(500).json({ message: err.message });
    }
});

// DELETE USER
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        // Delete the user with the provided ID
        await User.findByIdAndDelete(req.params.id);
        // Send a success message as response
        res.status(200).json({ message: "User has been deleted!" });
    } catch (err) {
        // If an error occurs, send an error response
        res.status(500).json({ message: err.message });
    }
});

// GET USER BY ID
router.get("/:id", async (req, res) => {
    try {
        // Find the user by the provided ID
        const user = await User.findById(req.params.id);
        // If user not found, return 404
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Omit password field from the user document
        const { password, ...userInfo } = user._doc;
        // Send the user information (without password) as response
        res.status(200).json(userInfo);
    } catch (err) {
        // If an error occurs, send an error response
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
 