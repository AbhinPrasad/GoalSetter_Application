import express from "express";
const router = express.Router();
import {
	deleteGoals,
	getGoals,
	setGoals,
	updateGoals
} from "../controllers/goalController.js";

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals);

export default router;
