import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselApi, CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import {useTranslations} from "next-intl";

interface ModalGalleryResortProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    setApiCarousel: (api: CarouselApi) => void;
    gallery: { img: string }[];
}

const ModalGalleryResort = (
    {open, setOpen, setApiCarousel, gallery}: ModalGalleryResortProps
) => {
    const t = useTranslations('gallery');
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent showCloseButton={false} className="w-[1024px] max-w-[80%] lg:max-w-[80%]">
                <DialogHeader>
                    <DialogTitle className={"hidden"} aria-readonly>Gallery</DialogTitle>
                </DialogHeader>
                <div className={"flex h-full w-full min-w-0"}>
                    <Gallery
                        setApi={setApiCarousel}
                        variant={"secondary"}
                        position={"middle"}
                        showDots={false}>
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
    );
};

export default ModalGalleryResort;