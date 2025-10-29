import * as https from "node:https";
import {getLocale} from "next-intl/server";

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

export async function GrFetcher<T>(enpoint: string, init?: RequestInit): Promise<T> {
    const url = new URL(enpoint, apiUrl);
    const locale = await getLocale();

    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    })

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    type RequestInitWithAgent = RequestInit & { agent?: https.Agent };

    const options: RequestInitWithAgent = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.API_TOKEN}`,
            'Accept-Language': locale,
        },
        agent: httpsAgent,
        ...init
    };

    const resp = await fetch(url, options);

    if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
    }

    return await resp.json() as T;
}