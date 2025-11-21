import React from 'react';
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CardAmenity, {CardAmenityProps} from "@/components/commons/shared/CardAmenity";
import {useTranslations} from "next-intl";
import Title from "@/components/commons/ui/title";
import {Link} from "@/i18n/navigation";

type LinkHref = React.ComponentProps<typeof Link>['href']; // ← derivar tipo

const SectionAmenities = () => {
    const t = useTranslations('home');
    const amenities: Array<Omit<CardAmenityProps, 'className'> & { link: LinkHref }> = [
        {
            title: t('secciones.0.title'),
            description: t('secciones.0.descripcion'),
            img: '/img/home/gourmet-dishes-at-grand-residences-riviera-cancun.jpg',
            alt: t('secciones.0.alt'),
            link: '/restaurants',
            linkText: t('secciones.0.boton')
        },
        {
            title: t('secciones.1.title'),
            description: t('secciones.1.descripcion'),
            img: '/img/home/special-amenities-like-yoga-in-front-of-the-beach.jpg',
            alt: t('secciones.1.alt'),
            link: '/amenities',
            linkText: t('secciones.1.boton')
        },
        {
            title: t('secciones.2.title'),
            description: t('secciones.2.descripcion'),
            img: '/img/home/grand-residences-riviera-cancun-in-puerto-morelos.jpg',
            alt: t('secciones.2.alt'),
            link: '/gallery',
            linkText: t('secciones.2.boton')
        }

    ]
    return (
        <section className="my-container mb-10">
            <Title level="h2" size="md" className="mb-2">{t('otras secciones')}</Title>
            <Gallery
                variant="primary" position="bottom"
                btnClassName={"lg:hidden"}
                options={{
                    loop: true,
                    align: 'start',
                }}>
                {
                    amenities.map((item, index) => (
                        <CarouselItem key={index} className="w-[360px] basis-[360px] py-5 lg:grow px-1">
                            <CardAmenity
                                className={"h-full"}
                                {...item}/>
                        </CarouselItem>
                    ))
                }
            </Gallery>
        </section>
    );
};

export default SectionAmenities;