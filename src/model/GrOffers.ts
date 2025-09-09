import {OfferRate} from "@/use_case/offers/get_home_offer";

type Offer = {
    content: OfferContentKey;
    gallery: OfferGallery;

};


interface OfferContentKey {
    inclusions?: string[];
    title?: string;
    description?: string;
    discount?: string;
}

interface OfferGallery {
    big: string;
    small: string;
}


export class GrOffers {

    private readonly rateplan: "content_all" | "content_ep" | "content_bb";
    private readonly content;
    readonly rate;
    // readonly travels: gr_offer_travel[];
    readonly offerId;
    readonly bw_start: Date;
    readonly bw_end: Date;

    constructor(offer: OfferRate) {
        this.rateplan = "content_bb";
        this.rate = offer.rate;
        // this.travels = offer.travels;
        this.offerId = offer.gr_offer_id;
        this.bw_end = offer.end_date || new Date();
        this.bw_start = offer.start_date || new Date();

        if (offer.rateplan === "all_inclusive") {
            this.rateplan = "content_all";
        }

        if (offer.rateplan === "room_only") {
            this.rateplan = "content_ep";
        }

        const raw = offer[this.rateplan] ?? '{}';
        this.content = JSON.parse(raw);
    }

    public getContent<K extends keyof OfferContentKey>(key: K): OfferContentKey[K] {
        return this.content.content[key] ?? ""
    }

    public getGallery<K extends keyof OfferGallery>(key: K): OfferGallery[K] {
        const src = this.content.gallery[key] ?? ""

        if (src.indexOf('https://') !== -1) {
            return src as OfferGallery[K]
        }

        return `/img/deals/${src}`
    }

    // public getTwStart(): Date {
    //     if (this.travels.length === 0) return new Date();
    //
    //     return this.travels.reduce((min, travel) => {
    //         const date = new Date(travel?.start_date || "");
    //         return date < min ? date : min;
    //     }, new Date(this.travels[0]?.start_date || ""));
    // }
    //
    // public getTwEnd(): Date {
    //     if (this.travels.length === 0) return new Date();
    //
    //     return this.travels.reduce((max, travel) => {
    //         const date = new Date(travel?.end_date || "");
    //         return date > max ? date : max;
    //     }, new Date(this.travels[0]?.end_date || ""))
    // }

}