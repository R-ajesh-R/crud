import jwt from "jsonwebtoken";
import { NextFunction,Request,Response } from "express";
export const authorize = (req:Request,res:Response,next:NextFunction) => {
    try {
        let token;
        const authHeader = req.headers.authorization as String;
        if(authHeader && authHeader.startsWith('Bearer')){
            token = authHeader.split(' ')[1];
            console.log(token)
            if(!token)
                res.status(401).json({message: "No Token, Authorization denied"});
            const decodedData=jwt.verify(token,process.env.JWT_SECRET as string);
            req.body.user=decodedData;
            next();
        }
        res.status(400).json({message:'Invalid Token!'})
    } catch (error) {
        res.status(400).json({message:"Invalid token!"});
    }
}