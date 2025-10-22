import {z} from "zod";

export const weddingSubscriptionSchema = z.object({
    first_name: z.string().max(150),
    email: z.email(),
    optin: z.boolean().refine(value => value === true, {message: 'You must accept the terms and conditions'}),
    country: z.string(),
});

export type WeddingSubscription = z.infer<typeof weddingSubscriptionSchema>;