import {z} from "zod";

export const weddingFormSchema = z.object({
    name: z.string().max(50),
    lastname: z.string().max(50),
    email: z.email(),
    phone: z.string().max(20),
    type: z.string().max(25),
    celebrate: z.string().regex(/^\d{1,2}\/\d{1,2}\/\d{4}$/),
    contactusGuest: z.string().regex(/^\d{1,2}$/),
    contactusCountry: z.string().max(4),
    comment: z.string().max(255),
    policy: z.boolean(),
    budget: z.number().min(1000).max(40000),
    havedate: z.enum(['true', 'false']),
});

export type WeddingFormType = z.infer<typeof weddingFormSchema>;