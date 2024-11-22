import { Request, Response } from "express";
import { User } from "../models/user.model";
import { hashPassword, generateToken, comparePassword } from "../utils/auth";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const passwordHash = await hashPassword(password);

    const newUser: any = new User({ email, passwordHash });
    await newUser.save();

    const token = generateToken(newUser._id.toString());

    res.status(201).json({ token, userId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: "Server error during signup" });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    const user: any = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await comparePassword(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id.toString());

    res.json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Server error during login" });
  }
};
