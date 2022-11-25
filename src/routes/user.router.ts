import express from 'express';
import { 
    getUser, 
    getUserEmail, 
    getUserId,
} from '../controller/user.controller';
import {
    getUserEmailSchema, 
    getUserIdSchema,
} from '../zod-schema/user.schema';
import validate from "../middleware/validate";
// import { getUserIdSchema } from '../zod-schema/user.schema';
// import { getUserId } from '../controller/user.controller';


const rout = express.Router();

rout.get('/', getUser);

rout.get('/:id', validate(getUserIdSchema), getUserId);

rout.get('/:email', validate(getUserEmailSchema), getUserEmail);



// rout.post('/', validate(addMovieSchema), getUser);

// rout.put('/:name', validate(updateMovieSchema), updateMovie);

// rout.delete('/:name', validate(deleteMovieSchema), deleteMovie);

// rout.get('/:name', validate(getMovieNameSchema), getMovieName);


// router.get('/:rating', validate(getMovieRatingSchema), getMovieRating);




export default rout;
