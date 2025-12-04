import React from 'react';
import Paragraph from "@/components/commons/ui/paragraph";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import {getTranslations} from "next-intl/server";

const SectionDescription = async () => {
    const t = await getTranslations('restaurants');
    return (
        <div className={"hidden md:block mb-10"}>
            <Paragraph>{t('menu')}</Paragraph>
            <Gallery variant={"secondary"} position={"on"}>
                <CarouselItem>
                    <CdnImage
                        src={"img/restaurants/1360x400-dinning-carrusel-1.jpg"}
                        alt={t('conceptos.0.titulo')}
                        width={1360}
                        height={400}
                        label={true}/>
                </CarouselItem>
                <CarouselItem>
                    <CdnImage
                        src={"img/restaurants/1360x400-dinning-carrusel-2.jpg"}
                        alt={t('conceptos.1.titulo')}
                        width={1360}
                        height={400}
                        label={true}/>
                </CarouselItem>
                <CarouselItem>
                    <CdnImage
                        src={"img/restaurants/1360x400-dinning-carrusel-3.jpg"}
                        alt={t('conceptos.2.titulo')}
                        width={1360}
                        height={400}
                        label={true}/>
                </CarouselItem>
            </Gallery>
        </div>
    );
};

export default SectionDescription;