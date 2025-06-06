//  if you are using import than you have used type module in package.json
//  "start": "nodemon" - for using this as well we can start aver server(npm start)
//  "dev":"nodemon" -- for using this as well we can start aver server(npm run dev)
import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({});
import connectDB from './utils/db.js'

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http//localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));


app.get("/home",(req, res)=>{
    return res.status(200).json({
        message:"Coming from backend.",
        success:true
    })
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Running at PORT ${PORT}`);
});


