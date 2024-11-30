import fs from 'fs';
import connectDB from './src/config/db';
import express,{Request,Response,NextFunction} from 'express';
import { config } from 'dotenv'; 
import cors from 'cors';
import authRouter from './src/routes/authRoutes';
config();
connectDB();
const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT || 5000;
const logger=(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.body);
    next();
}
server.use('/api/login',logger,authRouter);
server.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`);
})