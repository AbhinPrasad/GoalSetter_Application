import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel.js";

export const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find();
	res.status(200).json(goals);
});

export const setGoals = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Please add a text field");
	}

	const goal = await Goal.create({
		text: req.body.text
	});

	res.status(200).json(goal);
});

export const updateGoals = asyncHandler(async (req, res) => {
	console.log(req.params.id);
	console.log("first");
	const goal = await Goal.findById(req.params.id);
	console.log(goal);
	if (!goal) {
		console.log("not goal");
		res.status(400);
		throw new Error("Goal not found");
	}

	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	});
	console.log(updatedGoal, "updatedgoal");
	res.status(200).json(updatedGoal);
});

export const deleteGoals = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error("Goal not found");
	}

	await goal.remove();
	res.status(200).json({ id: req.params.id });
});
