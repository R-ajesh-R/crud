import express,{Request,Response} from "express";
import { signIn, signUp } from "../controller/authController";
const privilegeRouter = express.Router();
const privilege = ['Roles','Teams','Country','State','Tasks'];
privilegeRouter.get('/', (req:Request,res:Response)=>{
    try {
        const user = (req as any).body.user;
        if(user.role==='Owner'){
            res.status(201).json({privilege});
        }
        // res.json();
    } catch (error) {
        res.status(400).json({message:'Error while trying to get privilege'});
    }
})


export default privilegeRouter;