'use server'
import {PasswordUpdateSchema, PasswordUpdateSchemaType} from "@/use_case/gms/password_update/password_update.schema";
import {GrFetcher, GrFetcherResponse} from "@/lib/api_grandresidences";


export const PostPasswordUpdate = async (rq: PasswordUpdateSchemaType): Promise<GrFetcherResponse<{
    message: string,
}>> => {
    const {success, error} = PasswordUpdateSchema.safeParse(rq);
    if (!success) {
        return {
            success: false,
            error: {
                code: error?.issues[0].code,
                message: `${error?.issues[0].path}:  ${error?.issues[0].message}`
            }
        }
    }

    return GrFetcher<GrFetcherResponse<{
        message: string,
    }>>('gms/change-password', {
        method: 'POST',
        body: JSON.stringify(rq)
    })
}