import { model, Schema,Document } from "mongoose";

interface User extends Document{
    username:string,
    password:string
}

const UserSchema=new Schema<User>({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})


const User=model<User>("User",UserSchema);

export default User