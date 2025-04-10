import { NextFunction,Response,Request, json } from "express";
import IRequest from "../middlewares/IRequest";
import Content from "../model/contentModel";
import Link from "../model/linkModel";
import randomNumber from "../services/generateHash";
import { hash } from "bcrypt";
import User from "../model/userModel";


const createContent=async(req:IRequest,res:Response,next:NextFunction)=>{
    try{
        const {link,type,title,tag}=req.body;

        const newContent=await Content.create({
            link:link,
            title:title,
            type:type,
            userId:req.userId,
            tag:tag
        })
        res.status(200).json({
           message:"Data created ",
           newContent 
        })

    }
    catch (e: unknown) {
        if (e instanceof Error) {
          console.error("Error occurred:", e.message);
        //   next(e); // Forward to Express error handler
        res.status(500).json({
            message:e.message
        })
        } else {
          console.error("Unexpected error:", e);
        //   next(new Error("An unexpected error occurred"));
        res.status(500).json({
            message:e
        })
        }
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
    }catch (e: unknown) {
        if (e instanceof Error) {
          console.error("Error occurred:", e.message);
        //   next(e); // Forward to Express error handler
        res.status(500).json({
            message:e.message
        })
        } else {
          console.error("Unexpected error:", e);
        //   next(new Error("An unexpected error occurred"));
        res.status(500).json({
            message:e
        })
        }
      }
}

const deleteContent=async(req:IRequest,res:Response,next:NextFunction)=>{
    try{
        const {contentId}=req.body;
        const existingContent=await Content.findOne({_id:contentId});
        if(!existingContent){
            res.status(403).json({
                message:"Content not found"
            })
        }
        await Content.deleteMany({_id:contentId,userId:req.userId});
        res.status(200).json({
            message:"Content Deleted successfully"
        })
    }catch (e: unknown) {
        if (e instanceof Error) {
          console.error("Error occurred:", e.message);
        //   next(e); // Forward to Express error handler
        res.status(500).json({
            message:e.message
        })
        } else {
          console.error("Unexpected error:", e);
        //   next(new Error("An unexpected error occurred"));
        res.status(500).json({
            message:e
        })
        }
      }
}

const shareContent=async(req:IRequest,res:Response,next:NextFunction)=>{
    const {share}=req.body;
    try{
        if(share){
            const existingLink=await Link.findOne({
                userId:req.userId
            })
            

            if(existingLink){
                res.json({
                    message:`${existingLink.hash}`
                })
                return 
            }
            const data=await Link.create({
               hash:randomNumber(10),
               userId:req.userId 
            })
            const hash=data.hash
            res.status(200).json({
                hash,
                message:"Share-link created successfully",
                
            })
        }else{
            await Link.deleteOne({
                userId:req.userId
            })
            res.json({
                message:"removed link"
            })
        }
        
    }catch (e: unknown) {
        if (e instanceof Error) {
          console.error("Error occurred:", e.message);
        //   next(e); // Forward to Express error handler
        res.status(500).json({
            message:e.message
        })
        } else {
          console.error("Unexpected error:", e);
        //   next(new Error("An unexpected error occurred"));
        res.status(500).json({
            message:e
        })
        }
      }
}

const shareContentLink=async(req:IRequest,res:Response,next:NextFunction)=>{
    const hash=req.params.sharelink;

    try{
        const existingLink=await Link.findOne({hash:hash});
        if(!existingLink){
            throw new Error("Sorry Invalid link")
            return 
        }
        const content=await Content.find({
            userId:existingLink.userId
        })
        const user=await User.findOne({_id:existingLink.userId})
        res.status(200).json({
            username:user?.username,
            content:content,
           
        })
    }
    catch (e: unknown) {
        if (e instanceof Error) {
          console.error("Error occurred:", e.message);
        //   next(e); // Forward to Express error handler
        res.status(500).json({
            message:e.message
        })
        } else {
          console.error("Unexpected error:", e);
        //   next(new Error("An unexpected error occurred"));
        res.status(500).json({
            message:e
        })
        }
      }
}

const contentController={
    createContent,viewContent,deleteContent,shareContent,shareContentLink
}

export default contentController