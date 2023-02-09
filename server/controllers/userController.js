import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const registerUser = asyncHandler(async (req, res) => {
	const { name, email, phone, password } = req.body;

	if (!name || !email || !phone || !password) {
		res.status(400);
		throw new Error("Please add all fields");
	}

	// check if user exists
	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}

	// hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	//create user
	const user = await User.create({
		name,
		email,
		phone,
		password: hashedPassword
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			phone: user.phone
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

export const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user) {
		const comparePassword = await bcrypt.compare(password, user.password);
		if (comparePassword) {
			res.json({
				_id: user._id,
				name: user.name,
				email: user.email,
				phone: user.phone
			});
		} else {
			res.status(400);
			throw new Error("Wrong password");
		}
	} else {
		res.status(400);
		throw new Error("Email not found");
	}
});

export const getUserData = asyncHandler(async (req, res) => {
	res.json({ message: "getuser" });
});
