const asyncHandler = require("express-async-handler");
const Goals = require("../models/goals");

const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goals.find();
	res.status(200).json(goals);
});

const postGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Please provide a text");
	}

	const goal = await Goals.create({
		text: req.body.text,
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
