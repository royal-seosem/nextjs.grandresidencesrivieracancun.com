interface CredentialResponse {
    credential: string;
}

interface GsiButtonConfiguration {
    theme: 'outline' | 'filled_blue' | 'filled_black' | 'dark';
    size: 'large' | 'medium' | 'small';
    text?: string;
    shape: 'rectangular' | 'pill' | 'circle' | 'square';
    width?: number;
    height?: number;
    type: 'standard' | 'icon';
    label?: string;
}

interface IdConfiguration {
    client_id?: string;
    callback: (response: CredentialResponse) => void;
}

interface GoogleAccountsId {
    initialize: (config: IdConfiguration) => void;
    prompt: () => void;
    renderButton: (
        parent: HTMLElement,
        options: GsiButtonConfiguration
    ) => void;
}

interface Google {
    accounts: {
        id: GoogleAccountsId;
    };
}