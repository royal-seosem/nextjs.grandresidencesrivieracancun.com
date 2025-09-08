'use server'
import {prisma} from "@/lib/prisma";
import {getOffers} from "@/generated/prisma/sql";

export const getHomeOffer = async (locale = 'en'): Promise<getOffers.Result[]> => {
    return prisma.$queryRawTyped(getOffers(1, new Date(), locale, locale));
}