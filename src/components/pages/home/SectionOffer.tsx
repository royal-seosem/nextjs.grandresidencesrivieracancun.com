'use client'
import React from 'react';
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";

import {GrOffer} from "@/use_case/offers/get_home_offer";


const SectionOffer = (

) => {
    const tmenu = useTranslations('menu');
    return (
        <>
            <CardImg
                width={1360}
                height={400}
                text={tmenu('specials')}
                src="/img/offers/year-end-2023.jpg"/>

            <div>

            </div>
        </>
    );
};

export default SectionOffer;