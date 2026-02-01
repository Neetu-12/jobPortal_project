import dotenv from 'dotenv';
dotenv.config();
//  if you are using import than you have used type module in package.json
//  "start": "nodemon" - for using this as well we can start aver server(npm start)
//  "dev":"nodemon" -- for using this as well we can start aver server(npm run dev)
import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.route.js';
import companyRouter from './routes/company.route.js';
import jobRouter from './routes/job.route.js';
import application from './routes/application.route.js';
import connectDB from './utils/db.js'

const app = express();
const PORT = process.env.PORT || 3000;


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/company', companyRouter)
app.use('/api/v1/jobPost', jobRouter)
app.use('/api/v1/application', application)

app.listen(PORT, () => {
    connectDB();
    console.log(`Running at PORT ${PORT}`);
});


