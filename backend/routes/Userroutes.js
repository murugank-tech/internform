const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {
    try {

        const { name, email, phone, password } = req.body;

        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const user = new User({
            name,
            email,
            phone,
            password
        });

        await user.save();

        res.status(201).json({
            success: true,
            message: "User Registered"
        });

    } catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;