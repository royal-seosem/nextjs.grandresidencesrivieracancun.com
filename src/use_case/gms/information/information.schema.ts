import {z} from "zod";

export const InformationSchema = z.object({
    name: z.string().min(1).max(50),
    lastName: z.string().min(1).max(50),
    birthDate: z.string().regex(/^\d{1,4}-\d{1,2}-\d{2}$/),
    country: z.string().min(1).max(4),
    stateProvince: z.string().min(1).max(4),
    postalCode: z.string().min(1).max(10),
    phoneNumber: z.string().min(1).max(20),
});

export type InformationSchemaType = z.infer<typeof InformationSchema>;