'use client'
import React, {useEffect} from 'react';
import dynamic from "next/dynamic";
import CdnImage from "@/components/commons/ui/CdnImage";
import {useTranslations} from "next-intl";
import {CarouselApi} from "@/components/commons/ui/carousel";

const ModalGalleryResort = dynamic(() => import("@/components/pages/gallery/ModalGalleryResort"), {ssr: false});


const gallery = [
    {"img": "/img/gallery/resort-1.jpg"},
    {"img": "/img/gallery/resort-2.jpg"},
    {"img": "/img/gallery/resort-14.jpg"},
    {"img": "/img/gallery/resort-3.jpg"},
    {"img": "/img/gallery/resort-16.jpg"},
    {"img": "/img/gallery/resort-4.jpg"},
    {"img": "/img/gallery/resort-5.jpg"},
    {"img": "/img/gallery/resort-15.jpg"},
    {"img": "/img/gallery/resort-6.jpg"},
    {"img": "/img/gallery/resort-7.jpg"},

    {"img": "/img/gallery/resort-8.jpg"},
    {"img": "/img/gallery/resort-9.jpg"},
    {"img": "/img/gallery/resort-10.jpg"},
    {"img": "/img/gallery/Rooms-12.jpg"},
    {"img": "/img/gallery/resort-11.jpg"},
    {"img": "/img/gallery/resort-12.jpg"},
    {"img": "/img/gallery/resort-13.jpg"},

    {"img": "/img/gallery/Rooms-1.jpg"},
    {"img": "/img/gallery/Rooms-2.jpg"},
    {"img": "/img/gallery/Rooms-3.jpg"},
    {"img": "/img/gallery/Rooms-4-n.jpg"},
    {"img": "/img/gallery/Rooms-5-n.jpg"},
    {"img": "/img/gallery/Rooms-6-n.jpg"},
    {"img": "/img/gallery/Rooms-7.jpg"},
    {"img": "/img/gallery/Rooms-8.jpg"},
    {"img": "/img/gallery/Rooms-9.jpg"},

    {"img": "/img/gallery/Rooms-10.jpg"},
    {"img": "/img/gallery/Rooms-11.jpg"},
    {"img": "/img/gallery/Gallery-2.jpg"},
    {"img": "/img/gallery/Gallery-3.jpg"},
    {"img": "/img/gallery/Dining-1.jpg"},
    {"img": "/img/gallery/Dining-2.jpg"},
    {"img": "/img/gallery/Gallery-4.jpg"},
    {"img": "/img/gallery/Gallery-5.jpg"},
    {"img": "/img/gallery/Gallery-6.jpg"},
    {"img": "/img/gallery/Gallery-7.jpg"},
    {"img": "/img/gallery/Gallery-8.jpg"},
    {"img": "/img/gallery/Gallery-9.jpg"},
    {"img": "/img/gallery/Gallery-10.jpg"},
    {"img": "/img/gallery/Gallery-11.jpg"},
    {"img": "/img/gallery/Gallery-12.jpg"},
    {"img": "/img/gallery/Gallery-13.jpg"},
    {"img": "/img/gallery/Gallery-14.jpg"},
    {"img": "/img/gallery/Gallery-15.jpg"},
    {"img": "/img/gallery/Gallery-16.jpg"},

    {"img": "/img/gallery/weddings-1.jpg"},
    {"img": "/img/gallery/weddings-2.jpg"},
    {"img": "/img/gallery/weddings-3.jpg"},
    {"img": "/img/gallery/weddings-4.jpg"},
    {"img": "/img/gallery/weddings-5.jpg"},
    {"img": "/img/gallery/weddings-6.jpg"},
    {"img": "/img/gallery/weddings-7.jpg"},
    {"img": "/img/gallery/weddings-8.jpg"},
    {"img": "/img/gallery/weddings-9.jpg"},
    {"img": "/img/gallery/weddings-10.jpg"},
    {"img": "/img/gallery/weddings-11.jpg"},

    {"img": "/img/gallery/destino-1.jpg"},
    {"img": "/img/gallery/destino-2.jpg"},
    {"img": "/img/gallery/destino-3.jpg"},
    {"img": "/img/gallery/destino-4.jpg"},
    {"img": "/img/gallery/destino-5.jpg"},
    {"img": "/img/gallery/destino-6.jpg"},
    {"img": "/img/gallery/destino-7.jpg"},
    {"img": "/img/gallery/destino-8.jpg"},

    {"img": "/img/gallery/amenities-1.jpg"},
    {"img": "/img/gallery/amenities-2.jpg"},
    {"img": "/img/gallery/amenities-3.jpg"},
    {"img": "/img/gallery/amenities-4.jpg"},
    {"img": "/img/gallery/amenities-6.jpg"},
    {"img": "/img/gallery/amenities-7.jpg"},
    {"img": "/img/gallery/amenities-8.jpg"},
    {"img": "/img/gallery/amenities-9.jpg"},
    {"img": "/img/gallery/amenities-10.jpg"},

    {"img": "/img/gallery/activities-1.jpg"},
    {"img": "/img/gallery/activities-2.jpg"},
    {"img": "/img/gallery/activities-3.jpg"},
    {"img": "/img/gallery/activities-12.jpg"},
    {"img": "/img/gallery/activities-4.jpg"},
    {"img": "/img/gallery/activities-5.jpg"},
    {"img": "/img/gallery/activities-6.jpg"},
    {"img": "/img/gallery/activities-7.jpg"},
    {"img": "/img/gallery/activities-8.jpg"},
    {"img": "/img/gallery/activities-9.jpg"},
    {"img": "/img/gallery/activities-10.jpg"},
    {"img": "/img/gallery/activities-11.jpg"}
];

const GalleryResort = () => {
    const t = useTranslations('gallery');
    const [open, setOpen] = React.useState(false);
    const [apiCarousel, setApiCarousel] = React.useState<CarouselApi | null>(null);
    const [targetGallery, setTargetGallery] = React.useState<number | null>(null);

    const openModal = (index: number) => {
        setApiCarousel(null);
        setOpen(true);
        setTargetGallery(index);
    }

    useEffect(() => {
        if (apiCarousel && targetGallery) {
            apiCarousel?.scrollTo(targetGallery);
            setTargetGallery(null);
        }
    }, [apiCarousel, targetGallery]);

    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-2 gap-y-2 w-full mb-10">

                <CdnImage
                    className={"col-span-2 w-full object-cover lg:col-span-2 lg:row-span-2"}
                    classNameImg={"lg:h-full"}
                    src={"/img/gallery/resort-1.jpg"}
                    alt={"Resort"}
                    label={true}
                    width={1400}
                    height={1000}
                    onClick={() => openModal(0)}/>

                <CdnImage
                    className={"lg:col-span-2"}
                    alt={t('habitaciones')}
                    src={"/img/gallery/Rooms-1.jpg"}
                    label={true}
                    width={1400}
                    height={1000}
                    onClick={() => openModal(17)}/>

                <CdnImage
                    className={"lg:col-span-2"}
                    alt={t('restaurantes')}
                    src={"/img/gallery/Gallery-2.jpg"}
                    label={true}
                    width={1400}
                    height={1000}
                    onClick={() => openModal(28)}/>

                <CdnImage
                    alt={t('eventos')}
                    className={"lg:col-span-2"}
                    src={'/img/gallery/weddings-1.jpg'}
                    label={true}
                    width={1400}
                    height={1000}
                    onClick={() => openModal(45)}/>

                <CdnImage
                    alt={t('destino')}
                    className={"lg:col-span-2"}
                    src={"/img/gallery/destino-1.jpg"}
                    label={true}
                    width={1400}
                    height={1000}
                    onClick={() => openModal(56)}/>

                <CdnImage
                    className={"lg:col-span-3"}
                    alt={t('amenidades')}
                    src={"/img/gallery/amenities-1.jpg"}
                    label={true}
                    width={1400}
                    onClick={() => openModal(64)}
                    height={1000}/>


                <CdnImage
                    className={"lg:col-span-3"}
                    alt={t('actividades')}
                    src={"/img/gallery/activities-1.jpg"}
                    label={true}
                    width={1400}
                    onClick={() => openModal(74)}
                    height={1000}/>
            </div>

            <ModalGalleryResort open={open} setOpen={setOpen}
                                gallery={gallery.filter((_, index) => index === targetGallery)}
                                setApiCarousel={setApiCarousel}/>

        </>
    );
};


export default GalleryResort;