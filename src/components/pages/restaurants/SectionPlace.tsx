import React from 'react';
import Title from "@/components/commons/ui/title";
import Gallery from "@/components/commons/ui/gallery/gallery";
import CdnImage from "@/components/commons/ui/CdnImage";
import {CarouselItem} from "@/components/commons/ui/carousel";
import {getMessages, getTranslations} from "next-intl/server";

const SectionPlace = async () => {
    const t = await getTranslations('restaurants');
    const {restaurants: {experiencias}} = await getMessages();
    const items = [...experiencias, ...experiencias];
    return (
        <div className={"my-container"}>
            <Title level={"h2"} size={"lg"} className={"text-center mb-5"}>
                {t('experiencias title')}
            </Title>

            <Gallery variant={"primary"} position={"bottom"}>
                {items.map((item: {
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