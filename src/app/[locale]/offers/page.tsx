import React from 'react';
import Banner from "@/components/pages/offers/banner";
import CheckGreenIcon from "@/components/commons/icons/check-green.svg";
import Paragraph from "@/components/commons/ui/paragraph";
import CdnImage from "@/components/commons/ui/CdnImage";
import {getMessages, getTranslations} from "next-intl/server";
import {getOffers} from "@/use_case/offers/get_offes";
import CarouselOffers from "@/components/pages/offers/CarouselOffers";
import LogInModalOffer from "@/components/commons/shared/my-royal/LogInModalOffer";
import RichText from "@/components/commons/shared/RitchText";
import CarouselReviews from "@/components/pages/offers/CarouselReviews";
import {getReviews} from "@/use_case/reviews/get_reviews";
import CardOfferLandscape from "@/components/pages/offers/CardOfferLandscape";

const Page = async () => {
    const t = await getTranslations('offers-template2');
    const tHome = await getTranslations('home');
    const messages = await getMessages();
    const includeList = messages['offers-template2']['includes-list'];
    const facts = messages['home']['tripadvisor facts'];

    const [offers, reviews] = await Promise.all([
        getOffers(),
        getReviews()
    ])

    return (
        <main>
            <Banner/>
            <div className="my-container pb-5">
                <Paragraph className={"text-center"}>{t('description')}</Paragraph>

                <p className={"text-2xl font-bold text-center mb-6 md:text-left"}>
                    {t('includes-title')}
                </p>

                <ul className="md:columns-2 lg:columns-3 mb-10">
                    {includeList.map((item: {
                        label: string,
                        img: string,
                    }, index: number) => (
                        <li key={index} className={"text-center flex items-center gap-2 mb-4"}>
                            <CdnImage
                                src={item.img}
                                alt={item.label}
                                width={36}
                                height={36}/>
                            {item.label}
                        </li>
                    ))}
                </ul>

                <div className="mb-10 hidden md:block">
                    <CardOfferLandscape offer={offers[0]}/>
                </div>

                <div className="mb-10 hidden md:block">
                    <LogInModalOffer/>
                </div>

                <div className="mb-10">
                    <CarouselOffers offers={offers}/>
                </div>


                <div className="mb-10 md:hidden">
                    <LogInModalOffer/>
                </div>

                <div className={"flex justify-center items-center gap-5 mb-10"}>
                    <span className="block h-[2px] bg-primary w-full"></span>
                    <CdnImage
                        src={"/img/logo/trip-advisor-traveler-choice-awards-2025.png"}
                        alt={"Trip Advisor Traveler Choice Awards 2025"}
                        width={140}
                        height={140}/>
                    <span className="block h-[2px] bg-primary w-full"></span>
                </div>

                <div className="mb-10">
                    <div className="mb-6">
                        <RichText id={"tripadvisor_choice"} ns={"home"}
                                  components={{
                                      p: (chunks) => <p className={"text-2xl font-bold text-center"}>{chunks}</p>
                                  }}/>
                    </div>

                    <p className="text-base font-bold text-center mb-6">
                        {tHome('tripadvisor excellent')} {tHome('tripadvisor_reviews')}
                    </p>

                    <ul className="columns-2 md:columns-4">
                        {facts.map((item: string, index: number) => (
                            <li key={index} className="flex items-center gap-5 mb-2">
                                <CheckGreenIcon width={16} height={16}/> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <CarouselReviews reviews={reviews}/>
            </div>
        </main>
    );
};

export default Page;