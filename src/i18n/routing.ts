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
        "/offers": {
            en: "/offers",
            es: "/ofertas"
        },
        "/suites": {
            en: "/suites-and-villas",
            es: "/suites-y-villas",
        },
        "/restaurants": {
            en: "/dining",
            es: "/restaurantes"
        },
        "/amenities": {
            en: "/activities-and-amenities",
            es: "/actividades-y-amenidades"
        },
        "/gallery": {
            en: "/gallery",
            es: "/galeria"
        },
        "/map-resort": {
            en: "/map-resort",
            es: "/mapa-resort"
        },
        "/all-inclusive": {
            en: "/all-inclusive",
            es: "/todo-incluido"
        },
        "/weddings": {
            en: "/wedding-and-groups",
            es: "/bodas-y-grupos"
        },
        "/gms/login": {
            en: "/gms/login",
            es: "/gms/iniciar-session"
        },

        "/privacy": {
            en: "/privacy-policy",
            es: "/politica-de-privacidad"
        },

        "/destination": {
            en: "/destination",
            es: "/destino"
        },

        "/faqs": {
            en: "/faqs",
            es: "/preguntas-frecuentes"
        },

        "/media-room": {
            en: "/media-room",
            es: "/cuarto-de-prensa"
        },
        "/about-us": {
            en: "/about-us",
            es: "/acerca-de-nosotros"
        },

        "/resort-policies": {
            en: "/resort-policies",
            es: "/politicas-del-desarrollo"
        },
        //Todo: Make
        "/contact": {
            en: "/contact",
            es: "/contacto"
        },
        //Downloads
        "/menu-spa": {
            en: "/menu-spa",
            es: "/menu-spa",
        }

    }
});