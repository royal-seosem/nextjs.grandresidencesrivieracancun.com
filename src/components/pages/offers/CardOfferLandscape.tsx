'use client'
import React from 'react';
import dynamic from "next/dynamic";
import {format} from "date-fns";
import {useTranslations} from "next-intl";
import {Offer} from "@/use_case/offers/get_home_offer";
import {useWebsite} from "@/context/WebSiteProvider";
import CdnImage from "@/components/commons/ui/CdnImage";
import Price from "@/components/commons/shared/price";
import BookingBtnDrawer from "@/components/commons/shared/booking/BookingBtnDrawer";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import MyRoyalIcon from "@/components/commons/icons/my-royal.svg";

const PaymentMethods = dynamic(() => import("@/components/commons/shared/PaymentMethods"));
const ModalOffer = dynamic(() => import("@/components/pages/offers/ModalOffer"), {ssr: false});

const CardOfferLandscape = (
    {offer}: { offer: Offer }
) => {
    const t = useTranslations('new-offers');
    const tOfferTemplate = useTranslations('offers-template2')
    const {user} = useWebsite();
    const [open, setOpen] = React.useState(false);

    return (
        <article className={"shadow-md flex gap-5"}>
            <div className={"relative w-1/2 shrink-0"}>
                <CdnImage
                    className={"w-full object-cover h-full"}
                    alt={offer.content.title || ""}
                    src={offer.gallery.small || ""}
                    width={713}
                    height={338}/>
                <span
                    className={"absolute top-2 right-2 bg-secondary rounded-md py-[5px] px-[10px] font-bold"}>
                    {offer.content.discount}
                </span>
            </div>

            <div>
                <div className={"p-4"}>
                    <p className="text-2xl font-medium mb-2"> {offer.content.title} </p>

                    <ul className="list-disc ml-5 space-y-1 mb-4">
                        {offer.content.inclusions?.slice(0, 1).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <div className={"flex flex-col justify-start items-start gap-2 mb-4"}>
                        <button className={"text-base font-semibold underline"}
                                onClick={() => setOpen(true)}>read more
                        </button>
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-4">
                        {offer.rate !== null && <Price rate={offer.rate}/>}

                        <BookingBtnDrawer offer={{
                            title: offer.content.title || "",
                            subtitle: "Special:",
                            type: "hotel",
                            ratePlanId: offer.ratePlanId
                        }}/>
                    </div>

                    <PaymentMethods/>

                    <p className="text-center">
                        {t('Lowest_rate_available_from', {
                            DATE_START: format(offer.bookingWindow.start_date, 'MMMM d, yyyy'),
                            DATE_END: format(offer.bookingWindow.end_date, 'MMMM d, yyyy'),
                        })}
                    </p>

                </div>
                {!user && offer.rateLead &&
                    <div className="flex flex-col items-center justify-center gap-2 bg-primary py-2">
                        <div className="text-secondary">
                            <RichTextClient id={'my-royal-price'} ns={'offers-template2'} values={{
                                PRICE: offer.rateLead?.price || ""
                            }}/>
                        </div>
                        <button className="flex items-center gap-2 text-white underline">
                            <MyRoyalIcon width={24} height={24}/>
                            {tOfferTemplate('Log in and save even more')}
                        </button>
                    </div>
                }
            </div>

            {open && <ModalOffer offer={offer} open={open} setOpen={setOpen}/>}
        </article>
    );
};

export default CardOfferLandscape;