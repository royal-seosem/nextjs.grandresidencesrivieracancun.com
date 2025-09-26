'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import Card360Tour from "@/components/commons/shared/Card360Tour";


const CardKids = () => {
    const t = useTranslations('amenities');
    const galleryKids = [
        {
            src: '/img/activities/kids-club-in-grand-redidences-1.jpg',
            label: t('kids.alts.0'),
        },
        {
            src: '/img/activities/kids-club-in-grand-redidences-2.jpg',
            label: t('kids.alts.1'),
        },
        {
            src: '/img/activities/kids-club-in-grand-redidences-3.jpg',
            label: t('kids.alts.2'),
        },
        {
            src: '/img/activities/kids-club-in-grand-redidences-4.jpg',
            label: t('kids.alts.3'),
        },
        {
            src: '/img/activities/kids-club-in-grand-redidences-5.jpg',
            label: t('kids.alts.4'),
        },
        {
            src: '/img/activities/amenities-for-infants-in-grand-residences-1.jpg',
            label: t('kids.alts.5'),
        },
        {
            src: '/img/activities/amenities-for-infants-in-grand-residences-2.jpg',
            label: t('kids.alts.6'),
        },
        {
            src: '/img/activities/amenities-for-infants-in-grand-residences-3.jpg',
            label: t('kids.alts.7'),
        },
        {
            src: '/img/activities/amenities-for-infants-in-grand-residences-4.jpg',
            label: t('kids.alts.8'),
        },
        {
            src: '/img/activities/amenities-for-infants-in-grand-residences-5.jpg',
            label: t('kids.alts.9'),
        },
    ]

    return (
        <div className={"md:flex items-start gap-5"}>
            <div className={"md:w-1/2 md:shrink-0 md:mb-0 order-2"}>
                <Gallery variant={"secondary"} position={"on"}>
                    {galleryKids.map((item, index) => (
                        <CarouselItem key={index}>
                            <CdnImage
                                className={"h-full object-cover w-full block"}
                                src={item.src}
                                alt={item.label}
                                width={595}
                                height={510}
                                label={true}
                            />
                        </CarouselItem>
                    ))}
                </Gallery>
            </div>


            <div className={"p-5 md:p-0"}>
                <h3 className="text-3xl text-primary mb-5">
                    {t('kids.titulo')}
                </h3>

                <div>
                    <RichTextClient id={'kids.descripcion'} ns={'amenities'}/>
                </div>

                <Card360Tour
                    className={"uppercase text-base font-bold"}
                    title={`${t('btn_360')} Kids Club`}
                    btnTitle={`${t('btn_360')} Kids Club`}
                    src={"https://tour-gr.royalreservations.com/#39128504p&313.42h&89.88t"}/>
            </div>
        </div>
    );
};

export default CardKids;