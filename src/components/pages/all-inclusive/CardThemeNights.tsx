import React from 'react';
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import {useTranslations} from "next-intl";
import Paragraph from "@/components/commons/ui/paragraph";
import BookingBtnDrawer from "@/components/commons/shared/booking/BookingBtnDrawer";

const CardThemeNights = () => {
    const t = useTranslations('all-inclusive');
    const image = [
        {
            src: "/img/all-inclusive/all-in-gr-tematic-nights-a.jpg",
            alt: "noches.alts.0",
        },
        {
            src: "/img/all-inclusive/all-in-gr-tematic-nights-b.jpg",
            alt: "noches.alts.1",
        },
        {
            src: "/img/all-inclusive/all-in-gr-tematic-nights-c.jpg",
            alt: "noches.alts.1",
        }
    ]
    return (
        <article className="lg:flex lg:items-stretch lg:mb-[100px]">
            <div className={"lg:w-1/2 lg:shrink-0"}>
                <Gallery variant={"secondary"} position={"on"}>
                    {image.map((item, index) => (
                        <CarouselItem key={index}>
                            <CdnImage
                                className={"h-full object-cover w-full block"}
                                width={740}
                                height={400}
                                alt={item.alt}
                                src={item.src}/>
                        </CarouselItem>
                    ))}
                </Gallery>
            </div>

            <div className={"p-5 lg:pt-0 lg:pb-0 lg:flex lg:flex-col lg:justify-center"}>
                <h3 className="text-5xl mb-10 mt-10 lg:mt-0">{t('noches.titulo')}</h3>
                <RichTextClient id={"noches.descripcion"} ns={"all-inclusive"}/>
                <Paragraph>{t('invitacion')}</Paragraph>

                <BookingBtnDrawer className={"uppercase"} btnText={t('boton')}/>
            </div>
        </article>
    );
};

export default CardThemeNights;