'use client'
import React, {useEffect} from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import {useTranslations} from "next-intl";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselApi, CarouselItem} from "@/components/commons/ui/carousel";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";


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
            <div className="grid  grid-cols-2 gap-x-5 gap-y-4 w-full mb-10">
                <CdnImage
                    className={"col-span-2 w-full object-cover"}
                    src={"/img/gallery/resort-1.jpg"}
                    alt={"Resort"}
                    label={true}
                    width={1400}
                    height={1000}
                    onClick={() => openModal(0)}/>

                <CdnImage
                    alt={t('habitaciones')}
                    src={"/img/gallery/Rooms-1.jpg"}
                    label={true}
                    width={1400}
                    height={1000}
                    onClick={() => openModal(17)}/>

                <CdnImage
                    alt={t('restaurantes')}
                    src={"/img/gallery/Gallery-2.jpg"}
                    label={true}
                    width={1400}
                    height={1000}
                    onClick={() => openModal(28)}/>

                <CdnImage
                    alt={t('eventos')}
                    src={'/img/gallery/weddings-1.jpg'}
                    label={true}
                    width={1400}
                    height={1000}
                    onClick={() => openModal(45)}/>

                <CdnImage
                    alt={t('destino')}
                    src={"/img/gallery/destino-1.jpg"}
                    label={true}
                    width={1400}
                    height={1000}
                    onClick={() => openModal(56)}/>

                <CdnImage
                    alt={t('amenidades')}
                    src={"/img/gallery/amenities-1.jpg"}
                    label={true}
                    width={1400}
                    onClick={() => openModal(64)}
                    height={1000}/>


                <CdnImage
                    alt={t('actividades')}
                    src={"/img/gallery/activities-1.jpg"}
                    label={true}
                    width={1400}
                    onClick={() => openModal(74)}
                    height={1000}/>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent showCloseButton={false} className="w-[1024px] max-w-[80%] lg:max-w-[80%]">
                    <DialogHeader>
                        <DialogTitle className={"hidden"} aria-readonly>Gallery</DialogTitle>
                    </DialogHeader>
                    <div className={"flex h-full w-full min-w-0"}>
                        <Gallery
                            setApi={setApiCarousel}
                            variant={"secondary"} position={"middle"} showDots={false}>
                            {
                                gallery.map((item, index) => (
                                    <CarouselItem key={index} className={"w-full h-full"}>
                                        <CdnImage
                                            alt={t('actividades')}
                                            src={item.img}
                                            width={1400}
                                            height={1000}/>
                                    </CarouselItem>
                                ))
                            }
                        </Gallery>

                    </div>
                </DialogContent>

            </Dialog>
        </>
    );
};

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${
                props.left ? "arrow--left" : "arrow--right"
            } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
            )}
        </svg>
    )
}

export default GalleryResort;