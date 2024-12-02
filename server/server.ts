import fs from 'fs';
import connectDB from './src/config/db';
import express,{Request,Response,NextFunction} from 'express';
import { config } from 'dotenv'; 
import cors from 'cors';
import authRouter from './src/routes/authRoutes';
import { authorize } from './src/middleware/authmiddleware';
import privilegeRouter from './src/routes/privilegeRoutes';
import roleRouter from './src/routes/roleRoutes'
config();
connectDB();
const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT || 5000;
server.use('/api/login',authRouter);
server.use('/api/privilege',authorize,privilegeRouter);
server.use('/api/roles',authorize,roleRouter);
server.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`);
})