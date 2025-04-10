import { config } from "dotenv";
import mongoose from "mongoose";
import env from "./Ienv";
config(); // Loads environment variables from a .env file


const connectToDB = () => {
  const mongoDBUrl = env.MONGODB_URL;

  if (!mongoDBUrl) {
    return Promise.reject("MONGODB_URL is not defined in environment variables");
  }

  return mongoose
    .connect(mongoDBUrl)
    .then(() => Promise.resolve("MongoDB connected"))
    .catch((error: unknown) => {
      if (error instanceof Error) {
        return Promise.reject(error.message);
      } else {
        return Promise.reject("An unknown error occurred while connecting to MongoDB");
      }
    });
};

export default connectToDB;
