'use server'

import {SignupSchema, SignupSchemaType} from "@/use_case/gms/signup/signup.schema";
import {recaptchaValidate} from "@/lib/recaptcha";
import {GrFetcher, GrFetcherResponse} from "@/lib/api_grandresidences";

export const signupByEmail = async (req: SignupSchemaType, token: string) => {
    const {success, error} = SignupSchema.safeParse(req);
    if (!success) {
        return {
            success: false,
            error: {
                code: error?.issues[0].code,
                message: `${error?.issues[0].path}:  ${error?.issues[0].message}`
            }
        }
    }

    const passCaptcha = await recaptchaValidate(token, 'SUBSCRIPTION_MY_ROYAL_FORM');

    if (!passCaptcha) {
        return {
            success: false,
            error: {
                code: 'RECAPTCHA_ERROR',
                message: 'Error al validar el captcha'
            }
        };
    }
    
    const resp = await GrFetcher<GrFetcherResponse<{ message: string }>>('gms/signup-by-email', {
        method: 'POST',
        body: JSON.stringify(req),
        cache: 'no-store',
    });

    console.log(resp);
    return resp;
}