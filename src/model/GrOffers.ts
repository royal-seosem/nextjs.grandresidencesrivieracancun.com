type Offer = {
    rateplan: string;          // p. ej. “ALL”, “EP”, “BB”
    content_all: string | null;       // JSON serializado
    content_ep: string | null;        // JSON serializado
    content_bb: string | null;        // JSON serializado
};

interface OfferContentKey {
    inclusions?: string[];
    title?: string;
    description?: string;
    discount?: string;
}


export class GrOffers {

    private readonly rateplan: "content_all" | "content_ep" | "content_bb";
    private readonly content;

    constructor(offer: Offer) {
        this.rateplan = "content_bb";

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
}