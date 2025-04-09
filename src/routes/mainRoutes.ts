import { Router } from "express";
import authRoute from "./authRoutes";


const mainRoutes=Router();

mainRoutes.use('/api',authRoute)


export default mainRoutes;