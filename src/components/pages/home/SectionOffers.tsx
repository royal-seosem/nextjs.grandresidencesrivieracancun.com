'use client'
import React from 'react';
import dynamic from "next/dynamic";
import {Offer} from "@/use_case/offers/get_home_offer";
import CardOfferDesk from "@/components/pages/home/CardOfferDesk";
import {CarouselItem} from "@/components/commons/ui/carousel";

const Gallery = dynamic(()=> import("@/components/commons/ui/gallery/gallery"));

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