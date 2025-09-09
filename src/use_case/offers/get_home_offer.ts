'use server'

import {GrFetcher} from "@/lib/api_grandresidences";

export type Offer = {
    content: OfferContentKey;
    gallery: OfferGallery;
    rate: OfferRate | null;
};

export type OfferContentKey = {
    inclusions?: string[];
    title?: string;
    description?: string;
    discount?: string;
}

export type OfferGallery = {
    big: string;
    small: string;
}

export type OfferRate = {
    price: number;
    ratePlan: string;
    discount: number;
}

export const getHomeOffer = async (language: string) => {
    return GrFetcher<Offer[]>('offers-by-section', {
        method: 'POST',
        body: JSON.stringify({
            section: 1,
            language: language
        })
    })
}