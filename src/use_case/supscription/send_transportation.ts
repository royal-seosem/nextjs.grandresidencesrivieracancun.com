'use server'
import {formTransportationSchema} from "@/use_case/supscription/transportations.schema";
import {ZodError} from "zod";

export const sendTransportation = async (req: unknown, token: string): Promise<{
    success: boolean,
    error?: ZodError
}> => {
    const {success, data, error} = formTransportationSchema.safeParse(req);

    if (!success) {
        return {
            success: false,
            error: error
        };
    }

    //TODO: API - Send Email transportation

    return {
        success: true
    }
};