import {z} from "zod";

export const LoginSchema = z.object({
    email: z.email(),
    password: z.string().min(8).regex(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}/,
        "password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
})

export  type LoginSchemaType = z.infer<typeof LoginSchema>;

export type UserType = {
    id: number;
    name: string;
    uid: string;
    type: string;
    token: string;
}