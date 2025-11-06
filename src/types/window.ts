interface CredentialResponse {
    credential: string;
}

interface GsiButtonConfiguration {
    type: 'standard' | 'icon';
    theme?: 'outline' | 'filled_blue' | 'filled_black';
    size?: 'large' | 'medium' | 'small';
    text?: 'signin' | 'signin_with' | 'signup_with' | 'continue_with';
    shape?: 'rectangular' | 'pill' | 'circle' | 'square';
    logo_alignment?: 'left' | 'center';
    width?: string;
    locale?: string,
    click_listener?: () => void,
    state?: string
}

interface GoogleAccountsId {
    initialize: (config: {
        client_id: string | undefined;
        context: string
        callback: (response: { credential: string }) => void;
    }) => void;
    prompt: () => void;

    renderButton: (
        parent: HTMLElement,
        options: GsiButtonConfiguration
    ) => void;
}


export interface FacebookLoginResponse {
    authResponse: {
        accessToken: string;
    };
}

export interface Facebook {
    init: (config: {
        appId: string | undefined;
        autoLogAppEvents: boolean;
        xfbml: boolean;
        version: string | undefined;
    }) => void;
    login: (callback: (response: FacebookLoginResponse) => void, config: {
        scope: string;
        auth_type: string;
    }) => void;
}


interface Google {
    accounts: {
        id: GoogleAccountsId;
    };
}