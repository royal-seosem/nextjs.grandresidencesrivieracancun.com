'use server'

import {GrFetcher} from "@/lib/api_grandresidences";
import {Offer} from "@/use_case/offers/get_home_offer";

export const getOffers = async () => {
    return GrFetcher<Offer[]>('offers-by-section', {
        method: 'POST',
        body: JSON.stringify({
            section: 3
        })
    })
}