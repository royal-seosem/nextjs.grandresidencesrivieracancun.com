'use client'
import dynamic from "next/dynamic";
import React, {useState} from 'react';
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";
import {Offer} from "@/use_case/offers/get_home_offer";

const ModalOffer = dynamic(() => import("@/components/pages/home/ModalOffer"), {ssr: false});


interface SectionOfferProps {
    offers: Offer[];
    className?: string;
}

const SectionOffer = (
    {offers, className}: SectionOfferProps
) => {
    const t = useTranslations('menu');
    const offer = offers[0];
    const [open, setOpen] = useState(false);

    return (
        <section className={className}>
            <CardImg
                onClick={() => setOpen(true)}
                width={1360}
                height={400}
                text={t('specials')}
                src="/img/offers/year-end-2023.jpg"/>

            {open && <ModalOffer offer={offer} open={open} setOpen={setOpen}/>}

        </section>
    );
};

export default SectionOffer;