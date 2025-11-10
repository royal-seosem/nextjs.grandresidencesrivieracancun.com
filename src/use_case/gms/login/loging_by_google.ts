'use server'
import {createSession} from "@/lib/session";
import {GrFetcher, GrFetcherResponse} from "@/lib/api_grandresidences";
import {UserType} from "@/use_case/gms/login/login.schema";

export const loginByGoogle = async (credentials: string): Promise<GrFetcherResponse<UserType>> => {

    const resp = await GrFetcher<GrFetcherResponse<UserType>>('gms/login-by-google', {
        method: 'POST',
        body: JSON.stringify({
            credential: credentials
        }),
        cache: 'no-store',
    })

    if (resp.success && resp.data) {
        await createSession(resp.data.id, resp.data.name, resp.data.token);
    }

    return resp;
}

export const registerByGoogle = async (credentials: string): Promise<GrFetcherResponse<UserType>> => {

    const resp = await GrFetcher<GrFetcherResponse<UserType>>('gms/signup-by-facebook', {
        method: 'POST',
        body: JSON.stringify({
            credential: credentials
        }),
        cache: 'no-store',
    })

    if (resp.success && resp.data) {
        await createSession(resp.data.id, resp.data.name, resp.data.token);
    }

    return resp;
}