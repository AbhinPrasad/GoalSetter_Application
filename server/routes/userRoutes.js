import express from "express";
const router = express.Router();
import {
	registerUser,
	loginUser,
	getUserData
} from "../controllers/userController.js";

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getUserData);

export default router;
