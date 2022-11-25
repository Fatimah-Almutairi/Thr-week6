import express from 'express';
import { 
    addMovie, 
    deleteMovie, 
    getMovie, 
    getMovieGenre, 
    getMovieName, 
    getMovieRating, 
    updateMovie 
} from '../controller/movie.controller';
import {
    addMovieSchema, 
    updateMovieSchema, 
    deleteMovieSchema,
    getMovieNameSchema,
    getMovieGenreSchema,
    getMovieRatingSchema
} from '../zod-schema/movie.schema';
import validate from "../middleware/validate";


const router = express.Router();

router.get('/', getMovie);

router.post('/', validate(addMovieSchema), addMovie);

router.put('/:name', validate(updateMovieSchema), updateMovie);

router.delete('/:name', validate(deleteMovieSchema), deleteMovie);

router.get('/:name', validate(getMovieNameSchema), getMovieName);

router.get('/:genre', validate(getMovieGenreSchema), getMovieGenre);

router.get('/:rating', validate(getMovieRatingSchema), getMovieRating);



export default router;
