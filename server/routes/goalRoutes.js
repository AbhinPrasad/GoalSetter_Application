import express from "express";
const router = express.Router();
import { deleteGoals, getGoals, setGoals, updateGoals } from "../controllers/goalController.js";

router.get("/", getGoals);
router.post("/", setGoals);
router.put("/:id", updateGoals);
router.delete("/:id", deleteGoals);

export default router;
