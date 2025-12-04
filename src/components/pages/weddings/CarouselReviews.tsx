'use client'
import React from 'react';
import TrophyIcon from "@/components/commons/icons/trophy.svg";
import {useMessages, useTranslations} from "next-intl";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";

import RichTextClient from "@/components/commons/shared/RitchTextClient";
import Review, {ReviewInfo} from "@/components/pages/weddings/Review";

const CarouselReviews = () => {
    const t = useMessages();
    const thome = useTranslations("home")
    const reviews = t['weddings']['comentarios']['lista'];

    return (
        <div className={"md:flex gap-5"}>
            <div className={"md:w-[48%] grow-0"}>
                <div className="
                  relative
                  before:content-['']
                  before:border-r-[3px]
                  before:border-[#BE8B5E]
                  before:absolute
                  before:top-[15%]
                  before:bottom-[15%]
                  before:right-0
                  before:w-auto
                  before:h-auto
                ">
                    <CdnImage
                        src="/img/logo/767/tripadvisor-lite.webp"
                        width={123}
                        height={25}
                        unoptimized={true}
                        alt="tripadvisor-logo"/>

                    <p className="rating-text py-4 pl-6 text-base font-bold flex items-center gap-3">
                        {thome('tripadvisor_rating')}
                        <span
                            className={"text-[50px] font-bold tracking-[-6px] leading-[20px]"}>&#8226; &#8226; &#8226; &#8226;</span>
                    </p>

                    <p className="reviews">
                        <span className={"text-3xl font-medium"}>{thome('tripadvisor')}</span>
                        {thome('tripadvisor_reviews')}
                    </p>
                    <div className={"flex gap-2"}>
                        <TrophyIcon className={"text-secondary shrink-0"} width={44} height={60}/>
                        <RichTextClient id={"tripadvisor_choice"} ns={"home"} components={{
                            p: (chunks) => <p className={"font-bold text-base"}>{chunks}</p>
                        }}/>
                    </div>

                </div>
            </div>
            <div className={"md:w-[48%] grow-0"}>
                <Gallery variant={"primary"} position={"bottom"}>
                    {
                        reviews.map((item: ReviewInfo, index: number) => (
                            <CarouselItem key={index}>
                                <Review {...item} />
                            </CarouselItem>
                        ))
                    }

                </Gallery>
            </div>
        </div>

    );
};

export default CarouselReviews;