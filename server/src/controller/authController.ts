import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Owner from '../models/ownerModel';
import Roles from '../models/rolesModel';
export const signIn = async (req:Request,res:Response) => {
    try {
        const {name, password } = req.body;
        const userInfo = await Roles.findOne({userName:name});
        const isMatch = await bcrypt.compare(password, userInfo.password);
        if(!isMatch)
            res.status(401).json({message:'Password does not match'});
        else{
            const token = jwt.sign({id:userInfo.id,role:userInfo.role,userName:userInfo.userName},process.env.JWT_SECRET as string);
            res.status(201).json({message: 'user created successfully!!',token});
        }
    } catch (error) {
        console.log('Error while trying to signUp',error);
        res.status(400).json({message:'User already exist'});
    }
}

export const signUp = async (req:Request,res:Response) => {
    try {
        const {name, mail, password } = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const newOwner = new Owner({name,mail,password:hashedPassword});
        await newOwner.save();
        const token = jwt.sign({id:newOwner.id,role:'Owner'},process.env.JWT_SECRET as string);
        res.status(201).json({message: 'user created successfully!!',token});
    } catch (error) {
        console.log('Error while trying to signUp',error);
        res.status(400).json({message:'User already exist'});
    }
}