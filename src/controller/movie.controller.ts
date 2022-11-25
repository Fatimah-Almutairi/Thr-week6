import { movies } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/db";
import { updateMovieSchemaType, deleteMovieSchemaType, getMovieNameSchemaType,
    getMovieGenreSchemaType, 
    getMovieRatingSchemaType} from "../zod-schema/movie.schema";


export const getMovie = async (req: Request, res:Response, next: NextFunction) => {
    try{
        const movies = await prisma.movies.findMany();
        return res.status(200).json(movies);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Server Error !"});
    }
    };

export const getMovieName = async (req: Request, res:Response, next: NextFunction) => {
        try{
            const {name} = req.params as getMovieNameSchemaType;
            const movies = await prisma.movies.findFirst({
                where: {name}
            });
            return res.status(200).json(movies);
        }catch(error){
            console.log(error);
            return res.status(500).json({message: "Server Error !"});
        }
 };

 export const getMovieGenre = async (req: Request, res:Response, next: NextFunction) => {
    try{
        const {genre} = req.query as getMovieGenreSchemaType;
        const movies = await prisma.movies.findUniqueOrThrow({
            where: {genre as ['Drama', 'Action', 'Comady']},
        });
        return res.status(200).json(movies);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Server Error !"});
    }
};


export const getMovieRating = async (req: Request, res:Response, next: NextFunction) => {
    try{
        const {rating} = req.params as getMovieRatingSchemaType;
        const movies = await prisma.movies.findFirst({
            where: {rating},
        });
        return res.status(200).json(movies);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Server Error !"});
    }
};


export const addMovie = async (req: Request, res:Response, next: NextFunction) => {
    try{
        const newMovie = req.body as movies;
        await prisma.movies.create({
            data: newMovie,
        })
        return res.status(201).json({message: "Movie Addded."});
    } catch (error){
        const prismaError = error as PrismaClientKnownRequestError;
        if (prismaError.code == 'P2002') {
          return res.status(400).json({
            message: 'Check The Movie Name',
          });
        }
        return res.status(500).json({
          message: 'Server Error !',
        });
    }
}

export const updateMovie = async (req: Request, res:Response, next: NextFunction) =>{
    try{
        const updateMovie = req.body as movies;
        const { name } = req.params as updateMovieSchemaType;
        await prisma.movies.update({
            where: {name},
            data: updateMovie,
        });
        return res.status(200).json({ message: "Movie Updated"});
    }catch(error) {
        return res.status(500).json({
            message: 'Server Error !',
        });
    }
};

export const deleteMovie = async (req: Request, res:Response, next: NextFunction) =>{
    try{
        const { name } = req.params as deleteMovieSchemaType;
        await prisma.movies.delete({
            where: {name},
        });
        return res.status(200).json({  message: "Movie Deleted" });
    }catch(error) {
        return res.status(500).json({
            message: 'Server Error !',
        });
    }
};