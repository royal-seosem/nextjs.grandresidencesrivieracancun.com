import React from 'react';
import Paragraph from "@/components/commons/ui/paragraph";
import {useTranslations} from "next-intl";
import {Offer} from "@/use_case/offers/get_home_offer";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CardOffer from "@/components/pages/offers/CardOffer";

import MyRoyalIcon from "@/components/commons/icons/my-royal.svg"
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import {Link} from "@/i18n/navigation";

interface MyAccountOffersProps {
    offers: Offer[]
}

const MyAccountOffers = (
    {offers}: MyAccountOffersProps,
) => {
    const t = useTranslations('gms_home');
    return (
        <div className="bg-primary text-white p-5 md:bg-white">
            <div className="my-container md:flex gap-5">
                <div className={"basis-1/2 lg:basis-1/3 md:bg-primary justify-center items-center md:flex md:flex-col"}>
                    <div>
                        <MyRoyalIcon className={"m-auto mb-4"} width={45} height={45}/>
                        <Paragraph className={"text-center text-3xl"}>
                            {t('offers-title')}
                        </Paragraph>
                        <div className="hidden md:flex justify-center">
                            <Link href={"/offers"}
                                  className=" uppercase text-white m-auto
                            flex items-center gap-2 rounded-md h-9 px-4 py-2 has-[>svg]:px-3
                            border border-white bg-primary
                            md:border-secondary md:text-secondary">
                                {t('offers-btn')}
                                <ArrowRightIcon className={"shrink-0"} width={16} height={16}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={"mb-2 basis-1/2 w-1/2 lg:basis-2/3 lg:w-2/3 grow-0"}>
                    <Gallery variant={"secondary"} position={"bottom"} options={{
                        align: "start",
                    }}>
                        {offers.map((item, index) => (
                            <CarouselItem key={index} className={"lg:basis-1/2"}>
                                <div className={"p-2 h-full"}>
                                    <CardOffer className={"bg-white text-primary"} offer={item}/>
                                </div>
                            </CarouselItem>
                        ))}
                    </Gallery>
                </div>

                <div className={"flex justify-center md:hidden"}>
                    <Link href={"/offers"}
                          className="
                            uppercase text-white m-auto
                            flex items-center gap-2 rounded-md
                            h-9 px-4 py-2 has-[>svg]:px-3
                            border border-white bg-primary">
                        {t('offers-btn')}
                        <ArrowRightIcon className={"shrink-0"} width={16} height={16}/>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default MyAccountOffers;