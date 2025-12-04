import React from 'react';
import dynamic from "next/dynamic";
import {getTranslations} from "next-intl/server";
import {cn} from "@/lib/utils";
import {CarouselItem} from "@/components/commons/ui/carousel";
import Paragraph from "@/components/commons/ui/paragraph";
import Title from "@/components/commons/ui/title";
import CdnImage from "@/components/commons/ui/CdnImage";

const Gallery = dynamic(() => import("@/components/commons/ui/gallery/gallery"));

const SectionRestaurant = async () => {
    const t = await getTranslations('restaurants');

    return (
        <div className={cn(
            'my-container mb-10',
            "md:flex gap-5 md:bg-[#ba998033] md:items-center md:py-14"
        )}>
            <div className={"mb-5 md:w-1/2 md:shrink-0 order-2 md:h-[350px]"}>
                <Gallery variant={"secondary"} position={"on"}>
                    <CarouselItem>
                        <figure className={"relative h-full"}>
                            <CdnImage
                                className={"h-full object-cover w-full block"}
                                src={"/img/restaurants/room-service1.jpg"}
                                alt={t('room_restautant_alt.0')}
                                width={707}
                                height={416}/>
                            <figcaption className=" p-2.5 text-sm bg-white absolute top-0 right-0 rounded-bl-sm">
                                {t('room_restautant_alt.0')}
                            </figcaption>
                        </figure>

                    </CarouselItem>
                    <CarouselItem>
                        <figure className={"relative h-full"}>
                            <CdnImage
                                className={"h-full object-cover w-full block"}
                                src={"/img/restaurants/room-service2.jpg"}
                                alt={t('room_restautant_alt.1')}
                                width={707}
                                height={416}/>
                            <figcaption className=" p-2.5 text-sm bg-white absolute top-0 right-0 rounded-bl-sm">
                                {t('room_restautant_alt.1')}
                            </figcaption>
                        </figure>

                    </CarouselItem>
                </Gallery>
            </div>

            <div className="order-1">
                <Title level={"h3"} size={"md"} className="text-center mb-5">
                    {t('room service.title')}
                </Title>

                <Paragraph>
                    {t('room service.descripcion')}
                </Paragraph>
            </div>
        </div>
    );
};

export default SectionRestaurant;