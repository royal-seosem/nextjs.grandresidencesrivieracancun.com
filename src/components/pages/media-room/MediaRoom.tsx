'use client'
import React, {useCallback, useEffect} from 'react';
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/commons/ui/carousel";
import {useTranslations} from "next-intl";
import {cn} from "@/lib/utils";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import {cdn} from "@/lib/cdn";

import FlorPlans from "@/components/pages/media-room/FlorPlans";
import Tour360 from "@/components/pages/media-room/Tour360";

const MediaRoom = () => {
    const t = useTranslations('media-room');
    const [api, setApi] = React.useState<CarouselApi>();
    const [currentSlide, setCurrentSlide] = React.useState(1);

    const onSelect = useCallback(() => {
        if (!api) return;
        setCurrentSlide(api.selectedScrollSnap());
    }, [api]);

    useEffect(() => {
        if (!api) return;

        onSelect();
        api.on('select', onSelect);

        return () => {
            api.off('select', onSelect);
        };
    }, [api, onSelect]);

    return (
        <div>
            <div className="flex justify-center">
                <div className={"md:w-[800px]"}>
                    <Carousel
                        className={"mb-5"}
                        setApi={setApi}
                        opts={{
                            loop: true,
                            align: 'center',
                            skipSnaps: false,
                            dragFree: false,
                        }}>
                        <CarouselContent>
                            <CarouselItem
                                className="basis-2/5 md:basis-2/8 text-center h-[47px] px-2">
                                <div
                                    className={cn(
                                        "bg-[#fcf6eb] border-b-2 border-[#fcf6eb] flex items-center justify-center h-full",
                                        currentSlide === 0 && " border-menu2"
                                    )}
                                    onClick={() => api?.scrollTo(0)}
                                >
                                    {t('media-about.title')}
                                </div>
                            </CarouselItem>
                            <CarouselItem
                                className="basis-2/5 md:basis-2/8 text-center h-[47px] px-2">
                                <div
                                    className={cn(
                                        "bg-[#fcf6eb] border-b-2 border-[#fcf6eb] flex items-center justify-center h-full",
                                        currentSlide === 1 && " border-menu2"
                                    )}
                                    onClick={() => api?.scrollTo(1)}>
                                    {t('flor-plans.title')}
                                </div>
                            </CarouselItem>
                            <CarouselItem
                                className="basis-2/5 md:basis-2/8 text-center h-[47px] px-2">
                                <div
                                    className={cn(
                                        "bg-[#fcf6eb] border-b-2 border-[#fcf6eb] flex items-center justify-center h-full",
                                        currentSlide === 2 && " border-menu2"
                                    )}
                                    onClick={() => api?.scrollTo(2)}>
                                    {t('tour-360.title')}
                                </div>
                            </CarouselItem>
                            <CarouselItem
                                className="basis-2/5 md:basis-2/8 text-center h-[47px] px-2">
                                <div
                                    className={cn(
                                        "bg-[#fcf6eb] border-b-2 border-[#fcf6eb] flex items-center justify-center h-full",
                                        currentSlide === 0 && " border-menu2"
                                    )}
                                    onClick={() => api?.scrollTo(0)}>
                                    {t('media-about.title')}
                                </div>
                            </CarouselItem>
                            <CarouselItem
                                className="basis-2/5 md:basis-2/8 text-center h-[47px] px-2">
                                <div
                                    className={cn(
                                        "bg-[#fcf6eb] border-b-2 border-[#fcf6eb] flex items-center justify-center h-full",
                                        currentSlide === 1 && " border-menu2"
                                    )}
                                    onClick={() => api?.scrollTo(1)}>
                                    {t('flor-plans.title')}
                                </div>
                            </CarouselItem>
                            <CarouselItem
                                className="basis-2/5 md:basis-2/8 text-center h-[47px] px-2">
                                <div
                                    className={cn(
                                        "bg-[#fcf6eb] border-b-2 border-[#fcf6eb] flex items-center justify-center h-full",
                                        currentSlide === 2 && " border-menu2"
                                    )}
                                    onClick={() => api?.scrollTo(2)}>
                                    {t('tour-360.title')}
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>


            <div className={"p-5"}>
                {
                    currentSlide === 0 &&
                    <div className={"pb-5 md:flex gap-4 items-center"}>
                        <div className={"md:w-[50%]"}>
                            <h2 className="text-2xl font-bold leading-[30px]">{t('media-about.title-video')}</h2>
                            <RichTextClient id={"media-about.landing"} ns={"media-room"}/>
                        </div>
                        <div className={"md:w-[50%]"}>
                            <video className="video-media-room" poster={cdn('/video/grand-residences.jpg')}
                                   controls>
                                <source src={cdn('/video/grand-residences.mp4')} type="video/mp4"/>
                                <source src={cdn('/video/grand-residences.webm')} type="video/webm"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                }
                {
                    currentSlide === 1 &&
                    <FlorPlans/>
                }

                {
                    currentSlide === 2 &&
                    <Tour360/>
                }

            </div>

        </div>
    );
};

export default MediaRoom;