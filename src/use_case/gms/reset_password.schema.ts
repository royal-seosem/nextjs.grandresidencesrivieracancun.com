import {z} from "zod";

export const ResetPasswordSchema = z.object({
    password: z.string().min(8).regex(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}/,
        "password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
    confirmPassword: z.string().min(8).max(255),
    token: z.string().min(1),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
});
export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;