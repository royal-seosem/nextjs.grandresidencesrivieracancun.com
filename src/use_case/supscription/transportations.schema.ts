import {z} from "zod";
import {onlyDigits} from "@/lib/ZodValidation";

export const formTransportationSchema = z.object({
    rsvNumber: onlyDigits({max: 20}),
    name: z.string().max(150),
    email: z.email(),
    phone: onlyDigits({min: 10, max: 20}),
    dateCheckIn: z.string(),
    airline: z.string().max(150),
    numberFlight: z.string().max(20),
    book: z.string(),
    comment: z.string().max(255).optional(),
});