'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import {OfferRate} from "@/use_case/offers/get_home_offer";

// import type {gr_offer_rate} from "@/generated/prisma";

// interface PriceProps {
//     // rate: gr_offer_rate
// }

const Price = ({rate}: { rate: OfferRate }) => {
    const t = useTranslations('new-offers');
    const tOfferTempalte = useTranslations('offers-template2');

    if (rate.price === null) return (<></>);
    if (rate.discount === null) return (<></>);

    return (
        <div className="flex flex-col">
            <span className="font-semibold text-sm"> {t('per room')} </span>
            <span className="text-lg"> {t('starting_at')} </span>
            <span className="text-accent2 font-bold text-lg">
                ${(rate.price - rate.discount).toFixed(0)}
                <span className="text-sm"> USD</span>
                <span> {tOfferTempalte('plus_taxes')}</span>
            </span>
        </div>
    );
};

export default Price;