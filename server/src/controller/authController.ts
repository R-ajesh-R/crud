import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Owner from '../models/ownerModel';
export const signIn = () => {
    console.log('called')
}

export const signUp = async (req:Request,res:Response) => {
    try {
        console.log('called',req.body);
        const {name, mail, password } = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const newOwner = new Owner({name,mail,password:hashedPassword});
        await newOwner.save();
        const token = jwt.sign({id:newOwner.id,role:'Owner'},process.env.JWT_SECRET as string);
        res.status(201).json({message: 'user created successfully!!',token});
    } catch (error) {
        console.log('Error while trying to signUp',error);
    }
}