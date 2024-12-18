import express,{Request,Response} from "express";
import Roles from '../models/rolesModel';
import bcrypt from 'bcrypt';

const roleRouter = express.Router();
roleRouter.put('/', async(req:Request,res:Response)=>{
    try {
        const {body} = req;
        const bodyCopy={...body};
        delete bodyCopy['user'];
        const hashedPassword = await bcrypt.hash(bodyCopy.password,10);
        bodyCopy['password']=hashedPassword;
        const filter = { userName: bodyCopy.userName };
        const updateFields = { ...bodyCopy };
        const rest=await Roles.findOne(filter);
        console.log('rest',rest);
        const result = await Roles.findOneAndUpdate(filter,{$set: updateFields},{ new: true, upsert: true });
        res.status(201).json(result);
    } catch (error) {
        console.log('Error while trying to update the role and privilege',error);
    }
})


export default roleRouter;