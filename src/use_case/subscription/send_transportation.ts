'use server'
import {formTransportationSchema} from "@/use_case/subscription/transportations.schema";
import {recaptchaValidate} from "@/lib/recaptcha";
import {GrFetcher, GrFetcherResponse} from "@/lib/api_grandresidences";

export const sendTransportation = async (req: unknown, token: string): Promise<GrFetcherResponse<{
    message: string,
}>> => {
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


    return await GrFetcher<GrFetcherResponse<{ message: string }>>('transportation', {
        method: 'POST',
        body: JSON.stringify(req),
        cache: 'no-store',
    })


};