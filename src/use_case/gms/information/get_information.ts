'use server'

import {GrFetcher, GrFetcherResponse} from "@/lib/api_grandresidences";
import {InformationSchemaType} from "@/use_case/gms/information/information.schema";

export const getInformation = async (): Promise<GrFetcherResponse<InformationSchemaType>> => {
    const resp = await GrFetcher<GrFetcherResponse<InformationSchemaType>>('gms/information', {
        method: 'GET',
        cache: 'no-store',
    })

    return resp;
}