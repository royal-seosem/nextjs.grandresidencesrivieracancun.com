import React from 'react';
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import {useTranslations} from "next-intl";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";

const Tour360 = () => {
    const t = useTranslations('media-room');

    return (
        <div>
            <h2 className="text-2xl font-bold leading-[30px]">{t('tour-360.title2')}</h2>
            <RichTextClient id={"tour-360.description"} ns={"media-room"}/>


            <Gallery variant={"primary"} position={"bottom"}>
                <CarouselItem>
                    <iframe
                        className={"w-full"}
                        src="https://www.google.com/maps/embed?pb=!4v1666729378487!6m8!1m7!1sCAoSLEFGMVFpcE1GaDVvZkxMVnE3Wm5ySUFKUDhVTHRjUzd6OTZTOUI0X29aVkhX!2m2!1d20.82714!2d-86.8970585!3f335.153514876289!4f-6.695493828654904!5f0.7820865974627469"
                        width="600" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </CarouselItem>

                <CarouselItem>
                    <iframe
                        className={"w-full"}
                        src="https://www.google.com/maps/embed?pb=!4v1666729339543!6m8!1m7!1sCAoSLEFGMVFpcE1vdnd0RGtGWUIzNHl0NUxoZVZXYjRRNEswd1lXWTR3THZhUVBM!2m2!1d20.82716754477!2d-86.897071777921!3f335.153514876289!4f-6.695493828654904!5f0.7820865974627469"
                        width="600" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </CarouselItem>
                <CarouselItem>
                    <iframe
                        className={"w-full"}
                        src="https://www.google.com/maps/embed?pb=!4v1666729427522!6m8!1m7!1sCAoSLEFGMVFpcE9sV0UwRTZhSWxFTTZCQlVLdFh5bU54NWpuaThoQ2ktd3N0OEdz!2m2!1d20.827125!2d-86.8970485!3f335.153514876289!4f-6.695493828654904!5f0.7820865974627469"
                        width="600" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </CarouselItem>
                <CarouselItem>
                    <iframe
                        className={"w-full"}
                        src="https://www.google.com/maps/embed?pb=!4v1666729480353!6m8!1m7!1sCAoSLEFGMVFpcE9iZW9qVi1PQ1d4S1pRNmFPMVkxMXE2azdOd0hiNHkwVTZTWlJy!2m2!1d20.827135!2d-86.8970785!3f101.940155149871!4f3.8657669239069605!5f0.7820865974627469"
                        width="600" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </CarouselItem>
                <CarouselItem>
                    <iframe
                        className={"w-full"}
                        src="https://www.google.com/maps/embed?pb=!4v1666729539556!6m8!1m7!1sCAoSLEFGMVFpcE13eWswZjY2aEJzMzJndVNmMF9oSVNKLWwycy1nN1FlTEtuMFBj!2m2!1d20.827137258116!2d-86.897047104201!3f101.79500071022792!4f-0.12591940574928628!5f0.7820865974627469"
                        width="600" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </CarouselItem>
                <CarouselItem>
                    <iframe
                        className={"w-full"}
                        src="https://www.google.com/maps/embed?pb=!4v1666730330311!6m8!1m7!1sCAoSLEFGMVFpcE9kUTkyWUJYbGFOQ0tkODBfd3hIZDZyVWNHdExTS2JJajM5WnFU!2m2!1d20.827127977595!2d-86.897048614107!3f331.13006938836526!4f-27.130161692254582!5f0.7820865974627469"
                        width="600" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </CarouselItem>
            </Gallery>
        </div>
    );
};

export default Tour360;