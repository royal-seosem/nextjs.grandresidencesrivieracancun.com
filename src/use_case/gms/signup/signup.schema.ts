import {z} from "zod";
import {password} from "@/lib/ZodValidation";

export const SignupSchema = z.object({
    firstName: z.string().min(1).max(50),
    lastName: z.string().min(1).max(50),
    email: z.email(),
    country: z.string().min(1).max(4),
    password: password(),
    optin: z.boolean().refine(value => value === true, {message: 'You must accept the terms and conditions'}),
});

export type SignupSchemaType = z.infer<typeof SignupSchema>;
