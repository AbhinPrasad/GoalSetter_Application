import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel.js";
import User from "../models/userModel.js";

// GET GOALS
// @route /api
export const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find({ user: req.user });
	res.status(200).json(goals);
});

// ADD GOALS
export const setGoals = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Please add a text field");
	}

	const goal = await Goal.create({
		text: req.body.text,
		user: req.user.id
	});

	res.status(200).json(goal);
});

// UPDATE GOALS
export const updateGoals = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error("Goal not found");
	}

	const user = await User.findById(req.user.id);

	// check for user
	if (!user) {
		res.status(401);
		throw new Error("User not found");
	}

	// make sure the logged in user matches the goal user
	if (goal.user.toString() !== user.id) {
		res.status(401);
		throw new Error("User not found");
	}

	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	});

	res.status(200).json(updatedGoal);
});

// DELETE GOALS
export const deleteGoals = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error("Goal not found");
	}

	const user = await User.findById(req.user.id);

	// check for user
	if (!user) {
		res.status(401);
		throw new Error("User not found");
	}

	// make sure the logged in user matches the goal user
	if (goal.user.toString() !== user.id) {
		res.status(401);
		throw new Error("User not found");
	}

	await goal.remove();
	res.status(200).json({ id: req.params.id });
});
