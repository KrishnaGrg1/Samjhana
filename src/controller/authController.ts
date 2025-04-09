import { Request, Response, NextFunction } from 'express';
import User from "../model/userModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import env from '../Ienv';

const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;

        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            res.status(409).json({ message: "Username already exists" });
            return; // Ensure no further code is executed after sending a response
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({
            username,
            password: hashedPassword
        });

        // Send response
        res.status(201).json({
            message: "User registered successfully",
            user: { username: newUser.username }
        });
    } catch (error) {
        next(error); // Pass errors to the error-handling middleware
    }
};

const login=async(req:Request,res:Response,next:NextFunction)=>{
    const {username,password}=req.body;

    try{
        const existingUser=await User.findOne({username:username});
        if(!existingUser){
            throw new Error("User not found")
        }
        const passwordCompare=await bcrypt.compare(password,existingUser.password);
        if(!passwordCompare){
            throw new Error("Incorrect Password")
        }
        const token=jwt.sign({userID:existingUser._id},env.JWT_Password)
        res.status(200).json({
            messsage:"Sucessfully Login ",
            token:token
        })
    }catch(error){
        next(error)
    }
}

const authController = {
    register,login
};

export default authController;