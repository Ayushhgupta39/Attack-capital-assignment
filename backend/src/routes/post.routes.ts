import express, { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/auth";
import {
  createPost,
  filterPosts,
  getAllPosts,
  getPostById,
} from "../controllers/post.controller";

const router = express.Router();

// Middleware to check authentication
const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    res.status(401).json({ message: "No token, authorization denied" });
    return;
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    res.status(401).json({ message: "Token is not valid" });
    return;
  }

  req.user = decoded;
  next();
};

// Post routes
router.route("/").post(authMiddleware, createPost);
router.route("/").get(authMiddleware, filterPosts);
router.route("/all").get(getAllPosts);
router.route("/:id").get(getPostById);

export default router;
