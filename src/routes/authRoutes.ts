import { Router } from 'express';
import authController from '../controller/authController';
import validate from '../validations/allvalidate'; // Import the validate middleware
import userValidation from '../validations/auth'; // Import the validation schemas

const authRoute = Router();

// This is where you define the POST request for user registration
authRoute.post('/v1/signup', validate(userValidation.register), authController.register);


authRoute.post('/v1/login', validate(userValidation.login), authController.login);

export default authRoute;