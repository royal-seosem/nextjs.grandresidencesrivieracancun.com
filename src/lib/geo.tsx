import {headers} from 'next/headers';
import {Country, Reader, ReaderModel} from "@maxmind/geoip2-node";

const DB_PATH = `${process.cwd()}/geo_db/GeoLite2-Country.mmdb`;
const MTIME_INTERVAL = 1000 * 60 * 60 * 24;
let lastMtime = 0;

let reader: ReaderModel | null = null;

const openReader = async () => {
    const now = new Date();
    if (!reader) {
        reader = await Reader.open(DB_PATH);
        return;
    }

    if (now.getTime() - lastMtime < MTIME_INTERVAL) {
        return;
    }

    lastMtime = now.getTime()
    reader = await Reader.open(DB_PATH);
}

const getClientIpFromHeaders = (h: Headers): string => {
    const xff = h.get('x-forwarded-for');
    if (xff) {
        const first = xff.split(',')[0]?.trim();
        if (first) return first;
    }
    return h.get('cf-connecting-ip')
        || h.get('x-real-ip')
        || h.get('x-client-ip')
        || "";

}

export const getCountry = async (): Promise<Country | null> => {
    await openReader();
    const h = await headers();
    const ip = getClientIpFromHeaders(h);
    // const ip = "192.222.161.169"

    if (!reader) return null;
    try {
        return reader.country(ip);
    } catch (e) {
        console.log(e);
        return null
    }

}
