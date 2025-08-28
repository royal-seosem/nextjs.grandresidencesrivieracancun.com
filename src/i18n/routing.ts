import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'es'],
    // Used when no locale matches
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    localeDetection: false,
    pathnames: {
        "/": "/",
        "/home": {
            en: "/",
            es: "/"
        },
        "/suites": {
            en: "/suites-and-villas",
            es: "/suites-y-villas",
        },
        "/gms/login": {
            en: "/gms/login",
            es: "/gms/iniciar-session"
        },

    }
});