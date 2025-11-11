'use server'
import {weddingFormSchema, WeddingFormType} from "@/use_case/subscription/weddingForm.schema";
import {GrFetcher, GrFetcherResponse} from "@/lib/api_grandresidences";

const sendWeddingForm = async (req: WeddingFormType): Promise<GrFetcherResponse<{
    message: string,
}>> => {
    const {success, error} = weddingFormSchema.safeParse(req);
    //Todo: API - Send wedding form
    if (!success) {
        return {
            success: false,
            error: {
                code: error?.issues[0].code,
                message: `${error?.issues[0].path}:  ${error?.issues[0].message}`
            }
        };
    }

    return await GrFetcher<GrFetcherResponse<{ message: string }>>('wedding-form', {
        method: 'POST',
        body: JSON.stringify(req),
    });
};

export default sendWeddingForm;