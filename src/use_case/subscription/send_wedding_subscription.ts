'use server'
import {WeddingSubscription, weddingSubscriptionSchema} from "@/use_case/subscription/weddingSubscription.schema";
import {GrFetcher, GrFetcherResponse} from "@/lib/api_grandresidences";

export const sendWeddingSubscription = async (req: WeddingSubscription): Promise<GrFetcherResponse<{
    message: string,
}>> => {
    const {success, error} = weddingSubscriptionSchema.safeParse(req);

    if (!success) {
        return {
            success: false,
            error: {
                code: error?.issues[0].code,
                message: `${error?.issues[0].path}:  ${error?.issues[0].message}`
            }
        };
    }

    return await GrFetcher<GrFetcherResponse<{ message: string }>>('wedding/newsletter', {
        method: 'POST',
        body: JSON.stringify(req),
        cache: 'no-store',
    })
}