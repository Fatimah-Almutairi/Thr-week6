import {z, TypeOf} from 'zod';

export const movies = z.object({
    body: z.object({

        id: z.string({required_error: "ID is required"}),
        name: z
        .string({required_error: "Name is required"})
        .min(3),
        genre: z.enum(['from server']),
        rating: z
        .number({required_error: "Rating is required"})
        .min(1).max(5),
        duration: z
        .number({required_error: "Duration is required"})
        .min(1).max(60),
        createdat: z.date()
    })
});

export type SchemaType = TypeOf<typeof movies>['body']