/* eslint-disable */
// @ts-nocheck
'use client'
import React, {useEffect} from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import {useTranslations} from "next-intl";
import {useLocale} from "use-intl";

const BannerEnDesk = () => {
    return (
        <object type="image/svg+xml" data="/offers-desk.svg">svg-animation</object>
    );
};

const BannerEnMobile = () => {

    return (
        <object type="image/svg+xml" data="/offers-en-mobile.svg">svg-animation</object>
    )
};

const BannerEsDesktop = () => {

    return (
        <object type="image/svg+xml" data="/offers-es-desk.svg">svg-animation</object>
    )
};

const BannerEsMobile = () => {

    return (
        <object type="image/svg+xml" data="/offers-es-mobile.svg">svg-animation</object>
    )
};

const Banner = () => {
    const t = useTranslations('offers-template2');
    const locale = useLocale();
    return (
        <div className={"relative mb-14"}>
            <CdnImage
                loading="eager"
                className={"w-full h-full object-cover md:hidden"}
                alt={t('title')}
                src={"/img/banners/offers-banner.jpg?v2"}
                width={400}
                height={300}/>

            <CdnImage
                className={"w-full h-full object-cover hidden md:block"}
                alt={t('title')}
                loading="eager"
                src={"/img/banners/1440x400/offers-banner.webp"}
                width={1440}
                height={400}/>

            <div className={"absolute inset-0 flex items-center justify-center md:hidden"}>
                {locale === 'en' &&
                    <BannerEnMobile/>
                }
                {locale === 'es' &&
                    <BannerEsMobile/>
                }
            </div>
            <div className={"absolute inset-0 items-center justify-center hidden md:flex"}>
                {locale === 'en' &&
                    <BannerEnDesk/>
                }
                {locale === 'es' &&
                    <BannerEsDesktop/>
                }
            </div>

        </div>
    )
}

export default Banner;