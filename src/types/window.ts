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

interface IdConfiguration {
    client_id?: string;
    callback: (response: CredentialResponse) => void;

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

interface Facebook {
    init: (config: {
        appId: string | undefined;
        autoLogAppEvents: boolean;
        xfbml: boolean;
        version: string | undefined;
    }) => void;
    login: (callback: (response: { authResponse: { accessToken: string } }) => void) => void;
}


interface Google {
    accounts: {
        id: GoogleAccountsId;
    };
}