import fs from 'fs';
import connectDB from './src/config/db';
import { config } from 'dotenv'; 
config();
const addNumber=(a:number,b:number)=>{
    return a+b;
}
connectDB();
console.log(addNumber(1,3))