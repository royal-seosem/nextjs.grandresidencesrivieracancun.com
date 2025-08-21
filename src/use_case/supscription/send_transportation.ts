'use server'
import {formTransportationSchema} from "@/use_case/supscription/transportations.schema";
import {recaptchaValidate} from "@/lib/recaptcha";

export const sendTransportation = async (req: unknown, token: string): Promise<{
    success: boolean,
    error?: {
        code: string,
        message: string
    }
}> => {
    const {success, error} = formTransportationSchema.safeParse(req);
    const passCaptcha = await recaptchaValidate(token, 'TRANSPORTATION_FORM');
    if (!passCaptcha) {
        return {
            success: false,
            error: {
                code: 'RECAPTCHA_ERROR',
                message: 'Error al validar el captcha'
            }
        };
    }
    if (!success) {
        return {
            success: false,
            error: {
                code: error?.issues[0].code,
                message: `${error?.issues[0].path}:  ${error?.issues[0].message}`
            }
        };
    }

    //TODO: API - Send Email transportation SubscriptionController::sendTransportation

    return {
        success: true
    }
};