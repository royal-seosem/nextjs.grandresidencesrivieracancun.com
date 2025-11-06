import {z} from "zod"

export const PasswordUpdateSchema = z.object({
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long'
    }).regex(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}/,
        {
            message: '"password must contain at least one uppercase letter, one lowercase letter, one number and one special character"'
        }
    ),
});

export type PasswordUpdateSchemaType = z.infer<typeof PasswordUpdateSchema>;