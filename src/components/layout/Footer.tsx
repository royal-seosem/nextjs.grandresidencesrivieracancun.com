'use client'
import React from 'react';
import LogoGr from '@/components/commons/icons/LogoGrHorizontal.svg';
import LogoRoyalResorts from '@/components/commons/icons/royalresorts.svg?url';
import LogoSignatureClub from '@/components/commons/icons/signature-club.svg?url';
import LogoRoyalReservations from '@/components/commons/icons/royal-reservations.svg?url';
import IconFacebook from '@/components/commons/icons/facebook.svg';
import IconInstagram from '@/components/commons/icons/instagram.svg';
import IconTwitter from '@/components/commons/icons/twitter.svg';
import Autoplay from "embla-carousel-autoplay";
import {Link} from "@/i18n/navigation";
import {Carousel, CarouselContent, CarouselItem} from "@/components/commons/ui/carousel";
import Image from "next/image";
import {useTranslations} from "next-intl";
import BookingDrawer from "@/components/commons/shared/booking/BookingDrawer";
import BookingBtnDrawer from "@/components/commons/shared/booking/BookingBtnDrawer";

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
                    <li><Link href="/">{t("privacy policy")}</Link></li>
                    <li><Link href="/">{t("about us")}</Link></li>
                    <li><Link href="/">{t("resort policy")}</Link></li>
                </ul>
            </nav>
            <nav className="my-container  text-secondary text-base hidden lg:flex justify-between items-center mb-12">
                <div className="flex flex-col gap-2 grow">
                    <Link href="/">{t('all inclusive')}</Link>
                    <Link href="/">{t('suites')}</Link>
                    <Link href="/">{t('dining')}</Link>
                    <Link href="/">{t('activities')}</Link>
                    <Link href="/">{t('gallery')}</Link>
                    <Link href="/">{t('wedding')}</Link>
                </div>
                <div className="flex flex-col gap-2 grow">
                    <Link href="/">{t('destination')}</Link>
                    <Link href="/">{t('specials')}</Link>
                    <Link href="/" target="_blanck">Blog</Link>
                    <Link href="/">{t('faqs')}</Link>
                    <Link href="/" target="_blanck">{t('owners area')}</Link>
                    <Link href="/">{t('about us')}</Link>
                </div>

                <div className="flex flex-col gap-2 grow">
                    <Link href="/">{t('resort policy')}</Link>
                    <Link href="/" target="_blank">{t('privacy policy')}</Link>
                    <Link href="/">{t('media')}</Link>
                    <Link href="/">{t('contact')}</Link>
                </div>
            </nav>
            <article className="my-container pb-5">
                <div className="py-3 relative
                    before:absolute before:w-full before:h-[1px] before:bg-secondary before:opacity-[.3] before:left-0 before:top-0
                    after:absolute after:w-full after:h-[1px] after:bg-secondary after:opacity-[.3] after:-bottom-1 after:left-0">
                    <p className="absolute -top-2.5 bg-primary pr-3 text-white text-sm ">{t("we are part of")}</p>
                    <Carousel
                        opts={{align: "start", loop: true, containScroll: "trimSnaps"}}
                        plugins={[Autoplay({delay: 2000})]}
                    >
                        <CarouselContent className="items-center">
                            <CarouselItem className="basis-1/3 flex justify-center">
                                <figure>
                                    <Image src={LogoRoyalResorts} alt={"Logo Royal Resorts"} width={87} height={44}/>
                                    <figcaption>
                                        <span className="sr-only">Royal Resorts</span>
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 flex justify-center">
                                <figure>
                                    <Image src={LogoSignatureClub} alt={"Logo Signature Club"} width="105" height="26"/>
                                    <figcaption>
                                        <span className="sr-only">Signature Club</span>
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 flex justify-center">
                                <figure>
                                    <Image src={LogoRoyalReservations} alt={"Logo Royal Reservations"} width="101"
                                           height="45"/>
                                    <figcaption>
                                        <span className="sr-only">Royal Reservations</span>
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 flex justify-center">
                                <figure>
                                    <Image src={LogoRoyalResorts} alt={"Logo Royal Resorts"} width={87} height={44}/>
                                    <figcaption>
                                        <span className="sr-only">Royal Resorts</span>
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 flex justify-center">
                                <figure>
                                    <Image src={LogoSignatureClub} alt={"Logo Signature Club"} width="105" height="26"/>
                                    <figcaption>
                                        <span className="sr-only">Signature Club</span>
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                            <CarouselItem className="basis-1/3 flex justify-center">
                                <figure>
                                    <Image src={LogoRoyalReservations} alt={"Logo Royal Reservations"} width="101"
                                           height="45"/>
                                    <figcaption>
                                        <span className="sr-only">Royal Reservations</span>
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="flex justify-between items-center py-2">
                    <span className="text-white text-xs ">
                        &copy;  Copyright  - Royal Resorts
                    </span>
                    <Link href="/" className="text-secondary text-xs underline">
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