import { NextFunction,Response,Request } from "express";
import IRequest from "../middlewares/IRequest";
import Content from "../model/contentModel";


const createContent=async(req:IRequest,res:Response,next:NextFunction)=>{
    try{
        const {link,type,title}=req.body;

        const newContent=await Content.create({
            link:link,
            title:title,
            type:type,
            userId:req.userId,
            tag:[]
        })
        res.status(200).json({
           message:"Data created ",
           newContent 
        })

    }
    catch(e){
        next(e)
    }
}


const viewContent=async(req:IRequest,res:Response,next:NextFunction)=>{
    try{
        const userId = req.userId;
        const content = await Content.find({
            userId: userId
        }).populate("userId", "username")
        res.json({
            content
        })
    }catch(e){
        next(e)
    }
}

const contentController={
    createContent,viewContent
}

export default contentController