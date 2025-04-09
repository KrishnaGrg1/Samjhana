import { Document, model, Schema } from "mongoose"


interface ITag extends Document {
    title:string
}


const tagSchema=new Schema<ITag>({
    title:{
        type:String,
        required:true
    }
})

const Tag=model<ITag>("Tag",tagSchema)

export default Tag