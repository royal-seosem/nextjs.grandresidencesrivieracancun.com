'use client'
import React from 'react';
import {Offer} from "@/use_case/offers/get_home_offer";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CardOfferDesk from "@/components/pages/home/CardOfferDesk";

const SectionOffers = (
    {offers}: { offers: Offer[] }
) => {

    return (
        <div className="my-container hidden lg:block">
            <Gallery variant={"primary"} position={"bottom"}>
                {offers.map((offer, index) => (
                    <CarouselItem key={index}>
                        <CardOfferDesk offer={offer} creative_slot={"HomeOffer"}/>
                    </CarouselItem>
                ))}

            </Gallery>
        </div>
    );
};

export default SectionOffers;