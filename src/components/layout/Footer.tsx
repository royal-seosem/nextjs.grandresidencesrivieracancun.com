'use client'
import React from 'react';

import LogoGr from '@/components/commons/icons/LogoGrHorizontal.svg';

import IconFacebook from '@/components/commons/icons/facebook.svg';
import IconInstagram from '@/components/commons/icons/instagram.svg';
import IconTwitter from '@/components/commons/icons/twitter.svg';

import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";
import BookingBtnDrawer from "@/components/commons/shared/booking/BookingBtnDrawer";
import {BrandsCarousel} from "@/components/layout/Header/HeaderClientComponent";
import dynamic from "next/dynamic";
const BookingDrawer  = dynamic(()=> import("../commons/shared/booking/BookingDrawer"), {ssr: false});




const Footer = () => {
    const t = useTranslations('menu');

    return (
        <footer className="bg-primary">
            <div className="my-container flex flex-col md:flex-row md:justify-between md:mb-7 gap-3 py-4 items-center ">
                <LogoGr className={"w-[259px] order-2 md:order-1"}/>
                <nav className="flex gap-4 items-center order-1">
                    <a href="https://www.facebook.com/GrandResidencesRivieraCancun" target="_blanck"
                       aria-label="Facebook">
                        <IconFacebook width="24" height="24"/>
                    </a>
                    <a href="https://www.instagram.com/grandresidences/" target="_blanck" aria-label="Instagram">
                        <IconInstagram width={24} height={24}/>
                    </a>
                    <a href="https://twitter.com/G_Residences" target="_blanck" aria-label="Twitter">
                        <IconTwitter width={24} height={24}/>
                    </a>
                </nav>
            </div>
            <nav className="my-container  flex justify-center pb-4 lg:hidden">
                <ul className="text-base text-secondary flex flex-col gap-2">
                    <li><Link href="/privacy">{t("privacy policy")}</Link></li>
                    <li><Link href="/about-us">{t("about us")}</Link></li>
                    <li><Link href="/">{t("resort policy")}</Link></li>
                </ul>
            </nav>
            <nav className="my-container  text-secondary text-base hidden lg:flex justify-between items-center mb-12">
                <div className="flex flex-col gap-2 grow">
                    <Link href="/all-inclusive">{t('all inclusive')}</Link>
                    <Link href="/suites">{t('suites')}</Link>
                    <Link href="/restaurants">{t('dining')}</Link>
                    <Link href="/amenities">{t('activities')}</Link>
                    <Link href="/gallery">{t('gallery')}</Link>
                    <Link href="/weddings">{t('wedding')}</Link>
                </div>
                <div className="flex flex-col gap-2 grow">
                    <Link href="/destination">{t('destination')}</Link>
                    <Link href="/offers">{t('specials')}</Link>
                    <a href="https://blog.grandresidencesbyroyalresorts.com" target="_blanck">Blog</a>
                    <Link href="/faqs">{t('faqs')}</Link>
                    <Link href="/" target="_blanck">{t('owners area')}</Link>
                    <Link href="/about-us">{t('about us')}</Link>
                </div>

                <div className="flex flex-col gap-2 grow">
                    <Link href="/">{t('resort policy')}</Link>
                    <Link href="/privacy" target="_blank">{t('privacy policy')}</Link>
                    <Link href="/media-room">{t('media')}</Link>
                    <Link href="/">{t('contact')}</Link>
                </div>
            </nav>
            <article className="my-container pb-5">
                <div className="py-3 relative
                    before:absolute before:w-full before:h-[1px] before:bg-secondary before:opacity-[.3] before:left-0 before:top-0
                    after:absolute after:w-full after:h-[1px] after:bg-secondary after:opacity-[.3] after:-bottom-1 after:left-0">
                    <p className="absolute -top-2.5 bg-primary pr-3 text-white text-sm ">{t("we are part of")}</p>
                    <BrandsCarousel/>
                </div>
                <div className="flex justify-between items-center py-2">
                    <span className="text-white text-xs ">
                        &copy;  Copyright  - Royal Resorts
                    </span>
                    <Link href="/annoucement" className="text-secondary text-xs underline">
                        {t("title-company")}
                    </Link>
                </div>
            </article>

            <div className="z-10 lg:hidden
                fixed flex items-stretch bottom-0 w-full bg-white text-primary
                text-center">
                <Link
                    className="w-1/2 text-sm font-bold p-4"
                    href={"/offers"}>
                    SEE SPECIALS
                </Link>

                <BookingBtnDrawer
                    className="w-1/2 rounded-none"/>
            </div>

            <BookingDrawer/>
        </footer>
    );
};

export default Footer;