declare global {
    interface Window {
        dataLayer: unknown[];
    }
}

export interface GTMEvent {
    event: string;
    [key: string]: unknown;   // cualquier otra clave permitida
}

export const pushToDataLayer = <E extends GTMEvent>(data: E) => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
}

