import express from "express";
const router = express.Router();
import {
	deleteGoals,
	getGoals,
	setGoals,
	updateGoals
} from "../controllers/goalController.js";
import protect from "../middleware/authMiddleware.js";

router.route("/").get(protect, getGoals).post(protect, setGoals);
router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);

export default router;
