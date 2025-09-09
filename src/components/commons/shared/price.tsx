'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import type {gr_offer_rate} from "@/generated/prisma";

interface PriceProps {
    rate: gr_offer_rate
}

const Price = ({rate}: PriceProps) => {
    const t = useTranslations('new-offers');
    const tOfferTempalte = useTranslations('offers-template2');

    if (rate.rate === null) return (<></>);
    if (rate.discount === null) return (<></>);

    return (
        <div>
            <span> {t('per room')} </span>
            <span> {t('starting_at')} </span>
            <span>
                ${(rate.rate - rate.discount).toFixed(0)} <span>SD</span>
                <span>{tOfferTempalte('plus_taxes')}</span>
            </span>
        </div>
    );
};

export default Price;