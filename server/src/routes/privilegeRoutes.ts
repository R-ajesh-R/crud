import express,{Request,Response} from "express";
import Roles from "../models/rolesModel";
const privilegeRouter = express.Router();
const privilege = ['Roles','Teams','Country','State','Tasks'];
privilegeRouter.get('/', async(req:Request,res:Response)=>{
    try {
        const {user} = req.body;
        if(user.role==='Owner'){
            res.status(201).json({privilege});
        }
        const userInfo = await Roles.findOne({userName:user.userName});
        res.status(200).json({userInfo,privilege});
    } catch (error) {
        console.log('Error while getting privilege',error);
    }
})


export default privilegeRouter;