'use server'

import {ForgotPasswordSchema, ForgotPasswordSchemaType} from "@/use_case/gms/forgot_password.schema";
import {GrFetcher} from "@/lib/api_grandresidences";

export const sendForgotPassword = async (req: ForgotPasswordSchemaType): Promise<{
    success: boolean,
    message: string,
    error?: {
        code: string,
        message: string
    }
}> => {

    const {success, error} = ForgotPasswordSchema.safeParse(req);

    if (!success) {
        return {
            success: false,
            message: "",
            error: {
                code: error?.issues[0].code,
                message: `${error?.issues[0].path}:  ${error?.issues[0].message}`
            }
        }
    }

    return GrFetcher<{
        success: boolean,
        message: string
    }>('gms/forgot-password', {
        method: 'POST',
        body: JSON.stringify(req)
    })
}