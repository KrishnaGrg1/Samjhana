// src/routes/authRoutes.ts
import { Router } from 'express';
import authController from '../controller/authController';

const authRoute = Router();

// This is where you define the POST request
authRoute.post('/v1/signup', authController.register);

export default authRoute;
