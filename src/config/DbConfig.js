import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";
 
export default async function connectDB(){
    try{
        await mongoose.connect(DB_URL);
        console.log("connection successfully");
    }
    catch(error){
        console.log("something went wrong while connected toDb");
        console.log(error);

    }
}