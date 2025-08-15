'use server'
import {RecaptchaEnterpriseServiceClient} from "@google-cloud/recaptcha-enterprise";

const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const recaptchaSiteKey = process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_KEY;
const minScore = parseFloat(process.env.GOOGLE_CAPTCHA_SCORE || "0.8");
let client: RecaptchaEnterpriseServiceClient | null = null;
let projectPath: string | null = null;

const getClient = async (): Promise<RecaptchaEnterpriseServiceClient> => {
    if (client === null) {
        client = new RecaptchaEnterpriseServiceClient(
            keyFile ? {keyFilename: keyFile} : undefined
        );

        projectPath = client.projectPath(process.env.GOOGLE_PROJECT_ID || "");
    }

    return client;
}

export const recaptchaValidate = async (token: string, action: string) => {
    const client = await getClient();
    const [resp] = await client.createAssessment({
        parent: projectPath,
        assessment: {
            event: {
                token: token,
                siteKey: recaptchaSiteKey,
                expectedAction: action
            }
        }
    })
    

    const score = resp?.riskAnalysis?.score || 0;

    return score >= minScore;
}