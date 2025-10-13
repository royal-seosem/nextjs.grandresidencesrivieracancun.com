'use client'
import React from 'react';
import {Offer} from "@/use_case/offers/get_home_offer";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CardOffer from "@/components/pages/offers/CardOffer";

const CarouselOffers = (
    {offers}: { offers: Offer[] }
) => {
    return (
        <div>
            <Gallery variant={"primary"} position={"bottom"}>
                {offers.map((item, index) => (
                    <CarouselItem key={index}>
                        <CardOffer offer={item}/>
                    </CarouselItem>
                ))}
            </Gallery>
        </div>
    );
};

export default CarouselOffers;