import { Schema, model, Types,Document } from "mongoose";


// Define the Content interface for TypeScript typing
interface IContent extends Document {
    link?: string;
    type: string;
    title: string;
    tags: Types.ObjectId[];
    userId:Types.ObjectId[];
  }
  

// Define the Content schema
const contentSchema = new Schema<IContent>({
  link: {
    type: String
  },
  type: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tags: [{
    type: Types.ObjectId, 
    ref: "Tag" 
  }],
  userId:[{
    type:Types.ObjectId,
    ref:'User',
    required:true
  }]
});

// Create the Content model
const Content = model<IContent>("Content", contentSchema);

export default Content;
