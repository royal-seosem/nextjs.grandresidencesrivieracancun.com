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
        "/all-inclusive": {
            en: "/all-inclusive",
            es: "/todo-incluido"
        },
        "/weddings": {
            en: "/wedding-and-groups",
            es: "bodas-y-grupos"
        },
        "/gms/login": {
            en: "/gms/login",
            es: "/gms/iniciar-session"
        },

    }
});