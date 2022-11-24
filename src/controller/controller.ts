import { NextFunction, Request, Response } from "express";
import { SchemaType } from "../zod-schema/schema";

let movies : SchemaType[] = [];

export const getMovie = (req: Request, res:Response, next: NextFunction) => {
        return res.status(200).json(movies);
    }

export const addMovie = (req: Request, res:Response, next: NextFunction) => {
    const movie = req.body as SchemaType;
    movies.push(movie);
    return res.status(201).json({message: "Movie Addded."});
}

export const updateMovie = (req: Request, res:Response, next: NextFunction) =>{
    const updateMovie = req.body as SchemaType;
    const { id } = req.params;
    const updated = movies.filter( (movie) => {
        return movie.id !== id;
    });
    updated.push(updateMovie);
    movies = updated;
    return res.status(201).json({
        message: "Movie Updated"
    });
}

export const deleteMovie = (req: Request, res:Response, next: NextFunction) =>{
    const { id } = req.params;
    const deleted = movies.filter( (movie) =>{
        return movie.id !== id;
    });
    movies = deleted;
    return res.status(201).json({
        message: "Movie Deleted"
    });
};