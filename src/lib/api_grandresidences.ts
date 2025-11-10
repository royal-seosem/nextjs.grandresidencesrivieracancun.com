import * as https from "node:https";
import {getLocale} from "next-intl/server";
import {getSession} from "@/lib/session";

const apiUrl = process.env.API_URL;

export type ErrorResponse = {
    code: string,
    message: string,
}

export type BasicResponse = {
    success: boolean,
    message?: string,
    error?: ErrorResponse
}

export type GrFetcherResponse<T> = {
    data?: T,
    success: boolean,
    error?: ErrorResponse,
}

export async function GrFetcher<T>(enpoint: string, init?: RequestInit): Promise<T> {
    const url = new URL(enpoint, apiUrl);
    const locale = await getLocale();

    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    })

    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


    type RequestInitWithAgent = RequestInit & { agent?: https.Agent };

    const gmsUser = await getSession();
    const token = gmsUser?.token || "";

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
        'Accept-Language': locale,
        'Authorization-GMS': token
    }

    const options: RequestInitWithAgent = {
        headers: headers,
        agent: httpsAgent,
        ...init
    };

    const resp = await fetch(url, options);

    if (!resp.ok) {
        console.log(resp);
        throw new Error(`HTTP error! status: ${resp.status}`);
    }

    return await resp.json() as T;
}