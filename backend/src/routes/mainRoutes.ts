import { Router } from "express";
import authRoute from "./authRoutes";
import contentRouter from "./contentRoutes";


const mainRoutes=Router();

mainRoutes.use('/api/v1',authRoute)
mainRoutes.use('/api/v1',contentRouter)


export default mainRoutes;