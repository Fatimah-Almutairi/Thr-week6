import {z} from 'zod';


export const getUserIdSchema = z.object({
    params: z.object({
        id: z.string({required_error: "Please send User Id in the params"})
    })
});


export const getUserEmailSchema = z.object({
    params: z.object({
        email: z.string({required_error: "Please send Email User in the params"})
    })
});




export type getUserIdSchemaType = z.infer<typeof getUserIdSchema>['params']

export type getUserEmailSchemaType = z.infer<typeof getUserEmailSchema>['params']

