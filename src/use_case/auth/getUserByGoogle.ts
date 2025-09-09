"use server";


import {GrFetcher} from "@/lib/api_grandresidences";

type User = {
    id: number;
    name: string;
    uid: string;
    type: string;
    token: string;
}

export const getUserByGoogle = async (credential: string) => {
    const data = await GrFetcher<User>(`subscription_google`, {
        method: "POST",
        body: JSON.stringify({credential})
    })
    return data;
}