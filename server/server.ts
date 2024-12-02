import fs from 'fs';
import connectDB from './src/config/db';
import express,{Request,Response,NextFunction} from 'express';
import { config } from 'dotenv'; 
import cors from 'cors';
import authRouter from './src/routes/authRoutes';
import { authorize } from './src/middleware/authmiddleware';
import privilegeRouter from './src/routes/privilegeRoutes';
config();
connectDB();
const server = express();
server.use(cors());
server.use(express.json());
const logger=(req:Request,res:Response,next:NextFunction)=>{
    console.log('sdf9a8hf9a');
    next();
}
const PORT = process.env.PORT || 5000;
server.use('/api/login/signup',logger);
server.use('/api/login',logger,authRouter);
server.use('/api/privilege',authorize,privilegeRouter);
server.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`);
})