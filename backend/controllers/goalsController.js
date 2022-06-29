const asyncHandler = require("express-async-handler");

const Goals = require("../models/goals");
const User = require("../models/user");

const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goals.find({ user: req.user.id });
	res.status(200).json(goals);
});

const postGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Please add a text field");
	}

	const goal = await Goals.create({
		text: req.body.text,
		user: req.user.id,
	});

	res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
	const id = req.params.id;

	const goal = await Goals.findById(id);

	if (!goal) {
		res.status(400);
		throw new Error("Goal not found");
	}

	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(404);
		throw new Error("User not found");
	}

	if (goal.user.toString() !== user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}

	const updatedGoal = await Goals.findByIdAndUpdate(id, req.body, {
		new: true,
	});

	res.json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
	const id = req.params.id;

	const goal = await Goals.findById(id);

	if (!goal) {
		res.status(400);
		throw new Error("Goal not found");
	}

	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(404);
		throw new Error("User not found");
	}

	if (goal.user.toString() !== user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}

	await Goals.remove();

	res.json({
		message: `Delete goal ${id}`,
	});
});

module.exports = {
	getGoals,
	postGoal,
	updateGoal,
	deleteGoal,
};
