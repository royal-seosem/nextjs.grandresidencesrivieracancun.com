import {z} from "zod";

export const ForgotPasswordSchema = z.object({
    email: z.email().min(1).max(255),
});


export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;