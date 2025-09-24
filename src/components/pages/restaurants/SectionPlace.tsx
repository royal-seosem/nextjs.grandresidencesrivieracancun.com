import React from 'react';
import {useMessages, useTranslations} from "next-intl";
import Title from "@/components/commons/ui/title";
import Gallery from "@/components/commons/ui/gallery/gallery";
import CdnImage from "@/components/commons/ui/CdnImage";
import {CarouselItem} from "@/components/commons/ui/carousel";

const SectionPlace = () => {
    const t = useTranslations('restaurants');
    const {restaurants: {experiencias}} = useMessages();
    return (
        <div className={"my-container"}>
            <Title level={"h2"} size={"lg"} className={"text-center mb-5"}>
                {t('experiencias title')}
            </Title>

            <Gallery variant={"primary"} position={"bottom"}>
                {experiencias.map((item: {
                    title: string
                    foto: string,
                    alt: string,
                }, index: number) => (
                    <CarouselItem key={index} className={"basis-[300px] py-2"}>
                        <figure className={"shadow-[2px_4px_10px_#be8b5e66] h-full"}>
                            <CdnImage
                                src={`/img/restaurants/${item.foto}.jpg`}
                                width={399}
                                height={342}
                                alt={item.alt}
                            />
                            <figcaption className={"text-2xl text-accent font-bold py-7 px-2 block"}>
                                {item.title}
                            </figcaption>
                        </figure>
                    </CarouselItem>

                ))}
            </Gallery>
        </div>
    );
};

export default SectionPlace;