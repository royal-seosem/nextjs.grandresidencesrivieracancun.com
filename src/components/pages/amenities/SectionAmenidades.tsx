'use client'
import React from 'react';
import dynamic from "next/dynamic";

import CdnImage from "@/components/commons/ui/CdnImage";
import {CarouselItem} from "@/components/commons/ui/carousel";

const Gallery = dynamic(() => import("@/components/commons/ui/gallery/gallery"), {ssr: false});

const SectionAmenidades = () => {
    return (
        <div className={"mb-5 order-2 md:w-1/2"}>
            <Gallery variant={"secondary"} position={"on"}>
                <CarouselItem>
                    <CdnImage
                        className={"w-full object-cover"}
                        alt={"bottle-of-Tequila"}
                        src={"/img/activities/bottle-of-Tequila.jpg"}
                        width={600}
                        height={700}/>
                </CarouselItem>
                <CarouselItem>
                    <CdnImage
                        className={"w-full object-cover"}
                        alt={"and-dry-fruit"}
                        src={"/img/activities/Fresh-and-dry-fruit.jpg"}
                        width={600}
                        height={700}/>
                </CarouselItem>
                <CarouselItem>
                    <CdnImage
                        className={"w-full object-cover"}
                        alt={"Gifts-for-kids"}
                        src={"/img/activities/Gifts-for-kids.jpg"}
                        width={600}
                        height={700}/>
                </CarouselItem>
                <CarouselItem>
                    <CdnImage
                        className={"w-full object-cover"}
                        alt={"gr-amenities-buttler"}
                        src={"/img/activities/m-gr-amenities-buttler.jpg"}
                        width={600}
                        height={700}/>
                </CarouselItem>
                <CarouselItem>
                    <CdnImage
                        className={"w-full object-cover"}
                        alt={"gr-amenities-gift"}
                        src={"/img/activities/m-gr-amenities-gift.jpg"}
                        width={600}
                        height={700}/>
                </CarouselItem>
            </Gallery>
        </div>
    );
};

export default SectionAmenidades;