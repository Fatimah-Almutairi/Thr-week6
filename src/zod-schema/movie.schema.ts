import {z} from 'zod';

export const addMovieSchema = z.object({
    body: z.object({

        id: z.string({required_error: "ID is required"}),
        name: z
        .string({required_error: "Name is required"})
        .min(3),
        genre: z.enum(['Drama', 'Action', 'Comady']),
        rating: z
        .number({required_error: "Rating is required"})
        .min(1).max(5),
        duration: z
        .number({required_error: "Duration is required"})
        .min(1).max(60),
        createdat: z.date()
    })
});

export const updateMovieSchema = z.object({
    body: z.object({
        id: z.string({required_error: "ID is required"}),
        name: z
        .string({required_error: "Name is required"})
        .min(3),
        genre: z.enum(['Drama', 'Action', 'Comady']),
        rating: z
        .number({required_error: "Rating is required"})
        .min(1).max(5),
        duration: z
        .number({required_error: "Duration is required"})
        .min(1).max(60),
        createdat: z.date()
    }),
    params: z.object({
        name: z.string({required_error: "Please send name in the params"})
    })
});

export const deleteMovieSchema = z.object({
    params: z.object({
        name: z.string({required_error: "Please send name in the params"})
    })
});

export const getMovieNameSchema = z.object({
    params: z.object({
        name: z.string({required_error: "Please send name in the params"})
    })
});

export const getMovieGenreSchema = z.object({
    query: z.object({
        genre: z.enum(['Drama', 'Action', 'Comady'], {required_error: "Please select Genre from query"})
    })
});

export const getMovieRatingSchema = z.object({
    params: z.object({
        rating: z.number({required_error: "Please enter Rating from params"})
    })
});


export type updateMovieSchemaType = z.infer<typeof updateMovieSchema>['params']

export type deleteMovieSchemaType = z.infer<typeof deleteMovieSchema>['params']

export type getMovieNameSchemaType = z.infer<typeof getMovieNameSchema>['params']

export type getMovieGenreSchemaType = z.infer<typeof getMovieGenreSchema>['query']

export type getMovieRatingSchemaType = z.infer<typeof getMovieRatingSchema>['params']
