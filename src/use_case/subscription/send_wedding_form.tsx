import React from 'react';
import {weddingFormSchema, WeddingFormType} from "@/use_case/subscription/weddingForm.schema";

const sendWeddingForm = async (req: WeddingFormType): Promise<{
    success: boolean,
    error?: { code: string, message: string }
}> => {
    const {success, error} = weddingFormSchema.safeParse(req);
    //Todo: API - Send wedding form
    if (!success){
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
};

export default sendWeddingForm;