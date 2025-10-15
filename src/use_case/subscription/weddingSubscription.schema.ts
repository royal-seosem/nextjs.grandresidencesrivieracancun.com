import {z} from "zod";

export const weddingSubscriptionSchema = z.object({
    first_name: z.string().max(150),
    email: z.email(),
    optin: z.int(),
    country: z.string(),
});