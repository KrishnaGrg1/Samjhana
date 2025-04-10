import { model, Schema, Types } from "mongoose";



interface Ilink extends Document{
    hash:string,
    userId:Types.ObjectId[];
}


const linkSchema =new Schema<Ilink>({
    hash:{
        type:String,
        required:true
    },
    userId:[{
        type:Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    }]
},{
    timestamps:true
})



const Link=model<Ilink>("Link",linkSchema)

export default Link