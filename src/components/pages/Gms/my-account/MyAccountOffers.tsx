import React from 'react';
import MyRoyalIcon from "@/components/commons/icons/my-royal.svg"
import Paragraph from "@/components/commons/ui/paragraph";
import {useTranslations} from "next-intl";
import {Offer} from "@/use_case/offers/get_home_offer";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CardOffer from "@/components/pages/offers/CardOffer";


interface MyAccountOffersProps {
    offers: Offer[]
}

const MyAccountOffers = (
    {offers}: MyAccountOffersProps,
) => {
    const t = useTranslations('gms_home');
    return (
        <div className={"bg-primary text-white"}>
            <div className={"my-container"}>
                <MyRoyalIcon className={"m-auto mb-4"} width={24} height={24}/>
                <Paragraph className={"text-center text-3xl"}>
                    {t('offers-title')}
                </Paragraph>

                <Gallery variant={"secondary"} position={"bottom"}>
                    {offers.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className={"p-2 h-full"}>
                                <CardOffer className={"bg-white text-primary"} offer={item}/>
                            </div>
                        </CarouselItem>
                    ))}
                </Gallery>
            </div>
        </div>
    );
};

export default MyAccountOffers;