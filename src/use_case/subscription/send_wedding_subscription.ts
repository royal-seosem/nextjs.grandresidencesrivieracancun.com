'use server'
import {WeddingSubscription, weddingSubscriptionSchema} from "@/use_case/subscription/weddingSubscription.schema";

export const sendWeddingSubscription = async (req: WeddingSubscription): Promise<{
    success: boolean,
    error?: { code: string, message: string }
}> => {
    const {success, error} = weddingSubscriptionSchema.safeParse(req);

    //Todo: API - Send Email wedding subscription
    if (!success) {
        return {
            success: false,
            error: {
                code: error?.issues[0].code,
                message: `${error?.issues[0].path}:  ${error?.issues[0].message}`
            }
        };
    }

    return {
        success: true,
    }
}