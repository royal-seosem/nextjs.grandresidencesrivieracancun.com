'use server'

import {GrFetcher} from "@/lib/api_grandresidences";

export type Offer = {
    id: string;
    isLead: boolean;
    applyGms: boolean;
    ratePlan: string;
    ratePlanId: string;
    content: OfferContentKey;
    gallery: OfferGallery;
    rate: OfferRate | null;
    rateLead: OfferRate | null;
    bookingWindow: OfferRangeDates;
    travelWindow: OfferRangeDates;
};

export type OfferRangeDates = {
    start_date: Date;
    end_date: Date;
}

export type OfferContentKey = {
    inclusions?: string[];
    title?: string;
    description?: string;
    discount?: string;
    terms?: string[];
    label: string
}

export type OfferGallery = {
    big: string;
    small: string;
}

export type OfferRate = {
    price: number;
    ratePlan?: string;
    discount: number;
}

export const getHomeOffer = async () => {
    return GrFetcher<Offer[]>('offers-by-section', {
        method: 'POST',
        cache: 'no-store',
        body: JSON.stringify({
            section: 1
        })
    })
}