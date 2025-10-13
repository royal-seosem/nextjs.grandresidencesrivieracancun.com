import React from 'react';
import {useMessages, useTranslations} from "next-intl";
import TrophyIcon from "@/components/commons/icons/trophy.svg";
import CheckGreenIcon from "@/components/commons/icons/check-green.svg";
import CdnImage from "@/components/commons/ui/CdnImage";
import RichText from "@/components/commons/shared/RitchText";
import Paragraph from "@/components/commons/ui/paragraph";
import {Review} from "@/use_case/reviews/types";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import {format} from "date-fns";

const SectionTripadvisor = (
    {reviews}: { reviews: Review[] }
) => {
    const t = useTranslations('home');
    const {home} = useMessages();
    return (
        <section className=" bg-[linear-gradient(to_bottom,transparent,transparent_15%,#FBF1DE_15%)]
            lg:bg-[#fbf1de] lg:py-5 lg:mb-14">
            <div className="my-container  lg:flex lg:items-center lg:justify-between lg:gap-5">
                <div className="mb-14 lg:mb-0 relative
                lg:before:absolute lg:before:h-4/5 lg:before:w-full lg:before:border-r-2 lg:before:border-menu2 lg:before:top-1/2 lg:before:left-0 lg:before:-translate-y-1/2 ">
                    <div className="
                    relative bg-[#180b01] text-white pl-7 pt-7 pr-7 pb-7 w-[calc(100%-15px)] [transform-style:preserve-3d]
                    before:block before:absolute before:bg-[#763300]  before:w-full before:h-full before:left-[15px] before:top-[20px] before:opacity-30 before:[transform:translateZ(-1px)]
                    lg:before:hidden lg:bg-transparent lg:w-[480px] lg:shrink-0 lg:text-primary">
                        <div className="relative">
                            <figure className="flex items-center gap-5 mb-14 lg:mb-4">
                                <CdnImage
                                    width={123}
                                    height={25}
                                    alt={"Icon Tripadvisor"}
                                    src={"/img/logo/tripadvisor-lite.png"}/>
                                <figcaption className="flex items-center gap-5 text-base font-bold">
                                    <p>{t('tripadvisor_rating')}</p>
                                    <span className="text-5xl tracking-[-6px]">&#8226; &#8226; &#8226; &#8226;</span>
                                </figcaption>
                            </figure>

                            <p>
                                <span className="text-4xl font-medium">{t('tripadvisor excellent')} </span>
                                <span className="text-base ">{t('tripadvisor_reviews')}</span>
                            </p>
                            <div className="flex items-center gap-3 text-base font-bold">
                                <TrophyIcon className="shrink-0" width={20} height={40} fill={"#ECBA58"}/>
                                <RichText id={'tripadvisor_choice'} ns={"home"}/>
                            </div>
                            <ul className="grid grid-cols-2 gap-2">
                                {home['tripadvisor facts'].map((fact: string, index: number) => (
                                    <li key={index} className="flex items-center gap-3 text-base">
                                        <CheckGreenIcon className="shrink-0" width={20} height={20}/>
                                        {fact}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pb-5">
                    <Gallery variant={"primary"} position={"bottom"}>
                        {reviews.map((review, index) => (
                            <CarouselItem key={index}>
                                <div className="p-2">
                                    <h3 className="text-xl italic font-bold">{review.title}</h3>
                                    <Paragraph>{review.review}</Paragraph>

                                    <div className="flex items-center gap-3 text-base ">
                                        <CdnImage
                                            width={41}
                                            height={42}
                                            alt={'Icon user'}
                                            src={"/img/icons/man-2.webp"}/>

                                        <div>
                                            <p className="font-bold">{review.traveler_name}</p>
                                            <p>{format(review.review_date, 'MMMM d, yyyy')}</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}

                    </Gallery>
                </div>
            </div>

        </section>
    );
};

export default SectionTripadvisor;