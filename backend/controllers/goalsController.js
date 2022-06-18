const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
	res.json({
		message: "Get Goals",
	});
});

const postGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Please provide a text");
	}
});

const updateGoal = asyncHandler(async (req, res) => {
	res.json({
		message: `Update goal ${req.params.id}`,
	});
});

const deleteGoal = asyncHandler(async (req, res) => {
	res.json({
		message: `Delete goal ${req.params.id}`,
	});
});

module.exports = {
	getGoals,
	postGoal,
	updateGoal,
	deleteGoal,
};
