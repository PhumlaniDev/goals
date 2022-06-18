const express = require("express");
const router = express.Router();
const {
	getGoals,
	postGoal,
	updateGoal,
	deleteGoal,
} = require("../controllers/goalsController");

router.route("/").get(getGoals).post(postGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
