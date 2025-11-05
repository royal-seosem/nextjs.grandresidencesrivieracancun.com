'use server'

import {InformationSchema, InformationSchemaType} from "@/use_case/gms/information/information.schema";
import {BasicResponse, GrFetcher} from "@/lib/api_grandresidences";

export const postInformation = async (req: InformationSchemaType): Promise<BasicResponse> => {
    const {success, error} = InformationSchema.safeParse(req);

    if (!success) {
        return {
            success: false,
            error: {
                code: error?.issues[0].code,
                message: `${error?.issues[0].path}:  ${error?.issues[0].message}`
            }
        };
    }

    return await GrFetcher<BasicResponse>('gms/information', {
        method: 'POST',
        cache: 'no-store',
        body: JSON.stringify(req)
    })
}