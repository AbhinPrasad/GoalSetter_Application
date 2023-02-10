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
			phone: user.phone,
			token: generateToken(user._id)
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

export const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(400);
		throw new Error("Add all fields");
	}

	const user = await User.findOne({ email });

	if (user) {
		const comparePassword = await bcrypt.compare(password, user.password);
		if (comparePassword) {
			res.json({
				_id: user._id,
				name: user.name,
				email: user.email,
				phone: user.phone,
				token: generateToken(user._id)
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
	const { _id, name, email, phone } = await User.findById(req.user.id);

	res.status(200).json({
		id: _id,
		name,
		email,
		phone
	});
});

// Generate JWT
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "10d"
	});
};
