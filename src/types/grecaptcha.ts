interface grecaptchaConfig {
    action: string;
}

export interface grecaptcha {
    enterprise: {
        execute: (key: string, config: grecaptchaConfig) => Promise<string>
    }
}