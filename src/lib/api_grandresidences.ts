import {Agent as UndiciAgent} from "undici";
import {getLocale} from "next-intl/server";
import {getSession} from "@/lib/session";

const apiUrl = process.env.API_URL;

// Node's native fetch (undici) ignores the `agent` option and
// NODE_TLS_REJECT_UNAUTHORIZED — it needs an undici dispatcher instead.
const insecureDispatcher = process.env.NODE_ENV === "development"
    ? new UndiciAgent({connect: {rejectUnauthorized: false}})
    : undefined;

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

    type RequestInitWithDispatcher = RequestInit & { dispatcher?: UndiciAgent };

    const gmsUser = await getSession();
    const token = gmsUser?.token || "";

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
        'Accept-Language': locale,
        'Authorization-GMS': token
    }

    const options: RequestInitWithDispatcher = {
        headers: headers,
        dispatcher: insecureDispatcher,
        ...init
    };

    const resp = await fetch(url, options);

    if (!resp.ok) {
        console.log(resp);
        throw new Error(`HTTP error! status: ${resp.status}`);
    }

    return await resp.json() as T;
}