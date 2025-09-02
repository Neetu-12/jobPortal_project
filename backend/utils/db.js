import dotenv from 'dotenv';
dotenv.config(); 
// Load variables from .env into process.env

import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        // console.log(process.env.MONGO_URI );
        // mongodb+srv://sahneetu754:MuvT05JcVO1y9548@cluster0.dbcsftc.mongodb.net/job_portal
        await mongoose.connect("mongodb+srv://sahneetu754:MuvT05JcVO1y9548@cluster0.dbcsftc.mongodb.net/job_portal" || '');
        console.log("db is connected");
        
    } catch (error) {
        console.log(error);
         
    }
}

export default connectDB;