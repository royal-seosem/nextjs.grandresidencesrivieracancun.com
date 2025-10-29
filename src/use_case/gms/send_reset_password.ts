'use server'

import {ResetPasswordSchema, ResetPasswordSchemaType} from "@/use_case/gms/reset_password.schema";
import {BasicResponse, ErrorResponse, GrFetcher} from "@/lib/api_grandresidences";

export const sendResetPassword = async (req: ResetPasswordSchemaType): Promise<BasicResponse> => {
    const {success, error} = ResetPasswordSchema.safeParse(req);

    if (!success) {
        return {
            success: false,
            error: {
                code: error?.issues[0].code,
                message: `${error?.issues[0].path}:  ${error?.issues[0].message}`
            }
        };
    }

    return GrFetcher<{
        success: boolean,
        message: string,
        error?: ErrorResponse
    }>('gms/reset-your-password', {
        method: 'POST',
        body: JSON.stringify(req)
    })
}