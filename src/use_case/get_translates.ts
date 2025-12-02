'use server'

import {getMessages} from "next-intl/server";


export const getTranslates = async (locale: string, key: string[]) => {

    const messages = await getMessages({
        locale,
    });

    const ret = key.reduce((acc, path) => {

        let current: unknown = messages;

        for (const part of path.split('.')) {
            if (typeof current === 'object' && current !== null) {
                current = (current as Record<string, unknown>)[part];
            } else {
                current = undefined;
                break;
            }
        }

        acc[path] = current;

        return acc;
    }, {} as Record<string, unknown>);

    return ret;

}