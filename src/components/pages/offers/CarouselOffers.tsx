'use client'
import React from 'react';
import {Offer} from "@/use_case/offers/get_home_offer";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CardOffer from "@/components/pages/offers/CardOffer";
import ArrowLargeDownIcon from "@/components/commons/icons/arrow-large-down.svg";
import {Button} from "@/components/commons/ui/button";
import {useTranslations} from "next-intl";

const CarouselOffers = (
    {offers}: { offers: Offer[] }
) => {
    const t = useTranslations('offers-template2');
    const [showAll, setShowAll] = React.useState(false);

    return (
        <div>
            <div className={`mb-10 ${showAll ? 'hidden' : 'block'}`}>
                <Gallery variant={"primary"} position={"bottom"}>
                    {offers.map((item, index) => (
                        <CarouselItem key={index} className={"md:basis-1/2"}>
                            <div className={"p-2 h-full"}>
                                <CardOffer offer={item}/>
                            </div>
                        </CarouselItem>
                    ))}
                </Gallery>
            </div>

            <div className={`mb-10 flex-col gap-7 ${showAll ? 'flex' : 'hidden'}`}>
                {offers.map((item, index) => (
                    <CardOffer key={index} offer={item}/>
                ))}
            </div>


            <div className={` md:hidden
                flex justify-center mb-10
                ${showAll ? 'rotate-180' : ''}`}>
                <ArrowLargeDownIcon width={48} height={49}/>
            </div>

            <div className={"text-center mb-10 md:hidden"}>
                <Button variant={"outline"} className={"uppercase"}
                    onClick={() => setShowAll(!showAll)}>
                    {t('See all available offers')}
                </Button>
            </div>
        </div>
    );
};

export default CarouselOffers;