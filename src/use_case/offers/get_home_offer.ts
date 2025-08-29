'use server'
import {prisma} from "@/lib/prisma";
import {getOffers} from "@/generated/prisma/sql";

export const getHomeOffer = async (locale = 'en') => {
    return prisma.$queryRawTyped(getOffers(new Date(), 1, locale, locale));
}