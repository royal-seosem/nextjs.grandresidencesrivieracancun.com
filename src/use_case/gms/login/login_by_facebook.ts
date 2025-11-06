'use server'

import {GrFetcher, GrFetcherResponse} from "@/lib/api_grandresidences";
import {UserType} from "@/use_case/gms/login/login.schema";
import {createSession} from "@/lib/session";

export const loginByFacebook = async (credential: string): Promise<GrFetcherResponse<UserType>> => {
    const resp = await GrFetcher<GrFetcherResponse<UserType>>('gms/login-by-facebook', {
        method: 'POST',
        body: JSON.stringify({
            credential: credential
        }),
        cache: 'no-store',
    })

    if (resp.success && resp.data) {
        await createSession(resp.data.id, resp.data.name, resp.data.token);
    }

    console.log(resp);
    return resp;
}
