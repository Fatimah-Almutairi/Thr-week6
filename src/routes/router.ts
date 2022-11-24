import express from 'express';
import { addMovie, deleteMovie, getMovie, updateMovie } from '../controller/controller';
import { movies, SchemaType } from '../zod-schema/schema';
import validate from "../middleware/validate";


const router = express.Router();

router.get('/', getMovie);

router.post('/', validate(movies), addMovie);

router.put('/:id', validate(movies), updateMovie);

router.delete('/:id', validate(movies), deleteMovie);


export default router;
