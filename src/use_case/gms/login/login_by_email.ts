'use server'

import {LoginSchema, LoginSchemaType, UserType} from "@/use_case/gms/login/login.schema";
import {GrFetcher, GrFetcherResponse} from "@/lib/api_grandresidences";
import {createSession} from "@/lib/session";


export const loginByEmail = async (req: LoginSchemaType): Promise<GrFetcherResponse<UserType>> => {
    const {success, error} = LoginSchema.safeParse(req);

    if (!success) {
        return {
            success: false,
            error: {
                code: error?.issues[0].code,
                message: `${error?.issues[0].path}:  ${error?.issues[0].message}`
            }
        };
    }

    const resp = await GrFetcher<GrFetcherResponse<UserType>>('gms/login-by-email', {
        method: 'POST',
        body: JSON.stringify(req),
        cache: 'no-store',
    })
    console.log(resp);

    if (resp.success && resp.data) {
        await createSession(resp.data.id, resp.data.name, resp.data.token);
    }

    return resp;
}

