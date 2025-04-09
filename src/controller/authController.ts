import { Request, Response, NextFunction } from 'express';
import User from "../model/userModel";
import bcrypt from 'bcrypt';

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = await User.create({
      username,
      password: hashedPassword
    });

    // Respond with the created user
    return res.status(201).json({
      message: "User registered successfully",
      user: { username: newUser.username }
    });
  } catch (error: unknown) {
    next(error); // Pass errors to the error-handling middleware
  }
};

const authController = {
  register: register as (req: Request, res: Response, next: NextFunction) => Promise<void>
};

export default authController;

