import {users } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import { getUserEmailSchemaType, getUserIdSchemaType } from '../zod-schema/user.schema';


export const getUser = async (req: Request, res:Response, next: NextFunction) => {
    try{
        const user = await prisma.users.findMany();
        return res.status(200).json(user);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Server Error !"});
    }
};

export const getUserId = async (req: Request, res:Response, next: NextFunction) => {
        try{
            const {id} = req.params as getUserIdSchemaType
            const user = await prisma.users.findFirst({
                where: {id}
            });
            return res.status(200).json(user);
        }catch(error){
            console.log(error);
            return res.status(500).json({message: "Server Error !"});
        }
};

export const getUserEmail = async (req: Request, res:Response, next: NextFunction) => {
    try{
        const {email} = req.params as getUserEmailSchemaType
        const user = await prisma.users.findFirst({
            where: {email}
        });
        return res.status(200).json(user);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Server Error !"});
    }
};

