'use client'
import React from 'react';
import {OfferRate} from "@/use_case/offers/get_home_offer";
import WithTranslateCliente, {WithTranslationProps} from "@/components/commons/shared/withTranslateCliente";

interface PriceProps {
    rate: OfferRate
}

const Price = (
    {rate, messages}: PriceProps & WithTranslationProps
) => {

    // const t = useTranslations('new-offers');
    // const tOfferTempalte = useTranslations('offers-template2');

    if (rate.price === null) return (<></>);
    if (rate.discount === null) return (<></>);

    return (
        <div className="flex flex-col">
            <span className="text-lg"> {messages["new-offers.starting_at"] as string} </span>
            <span className="text-accent2 font-bold text-lg">
                ${(rate.price - rate.discount).toFixed(0)}
                <span className="text-sm"> USD</span>
                <span> {messages['offers-template2.plus_taxes'] as string}</span>
            </span>
            <span className="font-semibold text-sm"> {messages['new-offers,per room'] as string} </span>
        </div>
    );
};

export default WithTranslateCliente(Price, [
    "new-offers.starting_at",
    "new-offers.per room",
    "offers-template2.plus_taxes"
]) as React.FC<PriceProps>;