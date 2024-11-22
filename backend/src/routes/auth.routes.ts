import express from "express";
import { loginUser, registerUser } from "../controllers/user.controller";

const router = express.Router();

// User Auth Routes
router.route("/login").post(loginUser);
router.route("/signup").post(registerUser);

export default router;
