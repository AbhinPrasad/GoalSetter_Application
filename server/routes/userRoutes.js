import express from "express";
const router = express.Router();
import {
	registerUser,
	loginUser,
	getUserData
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me",protect, getUserData);

export default router;
