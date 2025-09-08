'use client'
import React from 'react';
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";
import Title from "@/components/commons/ui/title";
import {getOffers} from "@/generated/prisma/sql";
import {GrOffers} from "@/model/GrOffers";


const SectionOffer = (
    {
        offers
    }: { offers: getOffers.Result[] }
) => {
    const tmenu = useTranslations('menu');
    const offer = new GrOffers(offers[0]);

    return (
        <>
            <CardImg
                width={1360}
                height={400}
                text={tmenu('specials')}
                src="/img/offers/year-end-2023.jpg"/>

            <div>
                <Title level="h3" size="sm" className="mb-5 text-center">
                    {offer.getContent('title')}
                </Title>
                <p>{offer.getContent('discount')}</p>
                <p>{offer.getContent('description')}</p>
                <p></p>
                <ul>
                    {offer.getContent('inclusions')?.slice(0,3).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SectionOffer;