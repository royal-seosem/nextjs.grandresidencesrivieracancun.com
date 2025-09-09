'use server'
// import {getOffers} from "@/generated/prisma/sql";
// import type {gr_offer_rate, gr_offer_travel} from "@/generated/prisma";

// export type OfferRate = getOffers.Result & {
//     rate: gr_offer_rate | null;
//     travels: gr_offer_travel[];
// };

// export const getHomeOffer = async (locale = 'en'): Promise<OfferRate[]> => {
//     const rows = await prisma.$queryRawTyped(getOffers(1, new Date(), locale, locale));
//
//     const rateplanIds = rows
//         .map(row => row.rateplan_all);
//
//     const ids = rows.map(row => row.gr_offer_id)
//         .filter(f => f !== null);
//
//     const rates = await prisma.gr_offer_rate.findMany({
//         where: {
//             rate_plan: {
//                 in: rateplanIds.filter(r => r !== null)
//             }
//         }
//     })
//
//     const travels = await prisma.gr_offer_travel.findMany({
//         where: {
//             gr_offer_id: {
//                 in: ids
//             }
//         }
//     })
//
//     return rows.map(row => ({
//         ...row,
//         rate: rates.filter(rate => rate.rate_plan === row.rateplan_all)[0] ?? null,
//         travels: travels.filter(travel => travel.gr_offer_id === row.gr_offer_id)
//     }));
//
// }