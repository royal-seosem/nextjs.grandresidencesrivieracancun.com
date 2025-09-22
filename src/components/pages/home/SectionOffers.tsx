'use client'
import React from 'react';
import {Offer} from "@/use_case/offers/get_home_offer";
import MyRoyalIcon from '@/components/commons/icons/my-royal.svg';
import CheckGreenIcon from "@/components/commons/icons/check-green.svg";
import CdnImage from "@/components/commons/ui/CdnImage";
import Paragraph from "@/components/commons/ui/paragraph";
import {useTranslations} from "next-intl";
import PaymentMethods from "@/components/commons/shared/PaymentMethods";
import {useWebsite} from "@/context/WebSiteProvider";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import BookingBtnDrawer from "@/components/commons/shared/booking/BookingBtnDrawer";

const SectionOffers = (
    {offers}: { offers: Offer[] }
) => {
    const {user} = useWebsite();
    const t = useTranslations('new-offers');
    const tOffer = useTranslations('offers');
    const tOfferTemplate = useTranslations('offers-template2')
    const tGeneral = useTranslations('general');

    return (
        <div className="my-container hidden lg:block">
            <Gallery variant={"primary"} position={"bottom"}>
                {offers.map((offer, index) => (
                    <CarouselItem key={index}>
                        <article className="relative [transform-style:preserve-3d] py-10 px-5">
                            <CdnImage
                                width={1360}
                                height={400}
                                alt={"background"}
                                className={"absolute top-0 left-0 w-full h-full object-cover"}
                                src={offer.gallery.big}/>

                            <div className="relative max-w-[800px]">
                                <div className="flex flex-start">
                    <span className="bg-secondary text-primary p-2 text-sm font-bold">
                        {offer.ratePlan}
                    </span>
                                </div>
                                <div className="bg-white">
                                    <div className="py-5 px-4">
                                        <h3 className="text-4xl text-primary font-medium font-secondary mb-4">{offer.content.title}</h3>
                                        <span
                                            className="text-accent2 text-2xl font-bold">{offer.content.discount}</span>
                                        <Paragraph>{offer.content.description}</Paragraph>

                                        <div className={"flex justify-between items-center gap-5 mb-2"}>
                                            <ul>
                                                {(offer.content.inclusions || []).slice(0, 3).map((item: string, index: number) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <CheckGreenIcon width={16} height={16}/> {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            {offer.rate !== null &&
                                                <div className="flex flex-col">
                                                    <span
                                                        className="text-base text-primary font-bold">{t('per room')}</span>
                                                    <span className="text-lg font-secondary">{t('starting_at')}</span>
                                                    <span className="text-accent2 font-bold text-2xl">
                                        ${(offer.rate.price - offer.rate.discount).toFixed(0)} USD
                                    </span>
                                                    <span
                                                        className="text-accent2 font-bold text-base italic">{tOfferTemplate('plus_taxes')}</span>
                                                </div>
                                            }

                                            {offer.rate === null &&
                                                <div>
                                                    <span>{tOffer('up-to')}</span>
                                                    {offer.content.discount}
                                                </div>
                                            }
                                        </div>
                                        <PaymentMethods/>
                                        <div>
                                            <div className="flex items-center  gap-2">
                                                <button>
                                                    {tGeneral('more info')}
                                                </button>
                                                <BookingBtnDrawer offer={{
                                                    title: offer.content.title || "",
                                                    subtitle: "Special:",
                                                    type: "hotel",
                                                    ratePlanId: offer.ratePlanId
                                                }}/>
                                            </div>
                                        </div>
                                    </div>

                                    {!user && offer.rateLead &&
                                        <div className="flex items-center justify-center gap-4 bg-primary py-2">
                                            <span className="text-secondary">
                                                <RichTextClient id={'my-royal-price'} ns={'offers-template2'} values={{
                                                    PRICE: offer.rateLead?.price || ""
                                                }}/>
                                            </span>
                                            <button className="flex items-center gap-2 text-white">
                                                <MyRoyalIcon width={24} height={24}/>
                                                {tOfferTemplate('Log in and save even more')}
                                            </button>
                                        </div>
                                    }
                                </div>

                            </div>
                        </article>
                    </CarouselItem>
                ))}

            </Gallery>
        </div>
    );
};

export default SectionOffers;