import React from 'react';
import dynamic from "next/dynamic";
import {Offer} from "@/use_case/offers/get_home_offer";
import CardOfferDesk from "@/components/pages/home/CardOfferDesk";
import {CarouselItem} from "@/components/commons/ui/carousel";
import {getMessages} from "next-intl/server";

const Gallery = dynamic(() => import("@/components/commons/ui/gallery/gallery"));

const SectionOffers = async (
    {offers}: { offers: Offer[] }
) => {
    const m = await getMessages();
    return (
        <div className="my-container hidden lg:block">
            <Gallery variant={"primary"} position={"bottom"}>
                {offers.map((offer, index) => (
                    <CarouselItem key={index}>
                        <CardOfferDesk
                            offer={offer}
                            creative_slot={"HomeOffer"}
                            messages={{
                                'per room': m["new-offers"]["per room"],
                                'starting_at': m["new-offers"]["starting_at"],
                                'plus_taxes': m["offers-template2"]["plus_taxes"],
                                'up-to': m["offers"]["up-to"],
                                'more info': m["general"]["more info"],
                                'my-royal-price': m["offers-template2"]["my-royal-price"],
                                'Log in and save even more': m["offers-template2"]["Log in and save even more"],
                            }}/>
                    </CarouselItem>
                ))}

            </Gallery>
        </div>
    );
};

export default SectionOffers;