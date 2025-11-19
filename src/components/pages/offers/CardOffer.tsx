'use client'
import React from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import BookingBtnDrawer from "@/components/commons/shared/booking/BookingBtnDrawer";
import PaymentMethods from "@/components/commons/shared/PaymentMethods";
import {Offer} from "@/use_case/offers/get_home_offer";
import ModalOffer from "@/components/pages/offers/ModalOffer";
import Price from "@/components/commons/shared/price";
import {useTranslations} from "next-intl";
import {format} from "date-fns";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import MyRoyalIcon from "@/components/commons/icons/my-royal.svg";
import {useWebsite} from "@/context/WebSiteProvider";
import {cn} from "@/lib/utils";
import ModalMyRoyalSignUp from "@/components/commons/shared/my-royal/ModalMyRoyalSignUp";
import useViewPromotion from "@/components/commons/hooks/datalayer/useViewPromotion";


interface CardOfferProps {
    offer: Offer;
    className?: string;
    creative_slot?: string;
}

const CardOffer = (
    {offer, className, creative_slot}: CardOfferProps
) => {
    const t = useTranslations('new-offers');
    const tOfferTemplate = useTranslations('offers-template2')
    const {user} = useWebsite();
    const [open, setOpen] = React.useState(false);
    const [showLoginMyRoyal, setShowLoginMyRoyal] = React.useState(false);

    const elementRef = useViewPromotion({
        promotionData: {
            promotion_id: offer.id,
            promotion_name: offer?.content?.title || "",
            creative_slot: creative_slot || "",
            currency: "USD",
            items: [{
                item_name: "Grand Residences Riviera Cancun",
                item_variant: offer.ratePlan,
                price: offer.rate?.price || 0,
            }]

        }
    });


    return (
        <article ref={elementRef} className={cn(
            "shadow-md h-full flex flex-col",
            className
        )}>
            <div className={"relative"}>
                <CdnImage
                    className={"w-full object-cover border-b-2 border-secondary "}
                    alt={offer.content.title || ""}
                    src={offer.gallery.small || ""}
                    width={713}
                    height={338}/>
                <span
                    className={"absolute top-2 right-2 bg-secondary rounded-md  font-bold flex items-stretch gap-1"}>
                    {
                        offer.applyGms &&
                        <span className={"bg-[#0c2d63] h-auto px-2 flex items-center justify-center rounded-l-md"}>
                            <MyRoyalIcon width={24} height={24}/>
                        </span>
                    }
                    <span className={"block py-[5px] px-2"}> {offer.content.discount} </span>
                </span>
                {offer.content.label &&
                    <span
                        className={"absolute bottom-0 left-0 py-1 px-2.5 bg-secondary rounded-tl-md rounded-tr-md font-bold"}>
                        {offer.content.label}
                    </span>
                }

            </div>

            <div className={"p-4 grow"}>
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

            {!user &&
                <div className="flex flex-col items-center justify-center gap-2 bg-primary py-2 px-3
                    lg:flex-row lg:justify-between">
                    {offer.rateLead &&
                        <div className="text-secondary">
                            <RichTextClient id={'my-royal-price'} ns={'offers-template2'} values={{
                                PRICE: offer.rateLead?.price || ""
                            }}/>
                        </div>
                    }

                    <button className="flex items-center gap-2 text-white underline"
                            onClick={() => setShowLoginMyRoyal(true)}>
                        <MyRoyalIcon width={24} height={24}/>
                        {tOfferTemplate('Log in and save even more')}
                    </button>

                </div>
            }
            <ModalOffer offer={offer} open={open} setOpen={setOpen}/>
            <ModalMyRoyalSignUp show={showLoginMyRoyal} setShow={setShowLoginMyRoyal}/>
        </article>
    );
};

export default CardOffer;