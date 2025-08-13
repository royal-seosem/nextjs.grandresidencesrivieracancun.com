import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
    // Typically corresponds to the `[locale]` segment
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    return {
        locale,
        messages: {
            ...(await import(`./dictionaries/${locale}/commons.json`)).default,
            ...(await import(`./dictionaries/${locale}/general.json`)).default,
            ...(await import(`./dictionaries/${locale}/page_login.json`)).default
        }
        // (await import(`./dictionaries/${locale}.json`)).default
    };
});