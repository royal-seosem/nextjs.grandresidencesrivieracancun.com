'use client'
import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import {Carousel, CarouselContent, CarouselItem} from "@/components/commons/ui/carousel";
import Image from "next/image";
import LogoRoyalResorts from '@/components/commons/icons/royalresorts.svg?url';
import LogoSignatureClub from '@/components/commons/icons/signature-club.svg?url';
import LogoRoyalReservations from '@/components/commons/icons/royal-reservations.svg?url';

const BrandsCarousel = () => {
    return (
        <Carousel
            opts={{align: "start", loop: true, containScroll: "trimSnaps"}}
            plugins={[Autoplay({delay: 2000})]}
        >
            <CarouselContent className="items-center">
                <CarouselItem className="basis-1/3 flex justify-center">
                    <figure>
                        <Image src={LogoRoyalResorts} alt={"Logo Royal Resorts"} width={87} height={44}/>
                        <figcaption>
                            <span className="sr-only">Royal Resorts</span>
                        </figcaption>
                    </figure>
                </CarouselItem>
                <CarouselItem className="basis-1/3 flex justify-center">
                    <figure>
                        <Image src={LogoSignatureClub} alt={"Logo Signature Club"} width="105" height="26"/>
                        <figcaption>
                            <span className="sr-only">Signature Club</span>
                        </figcaption>
                    </figure>
                </CarouselItem>
                <CarouselItem className="basis-1/3 flex justify-center">
                    <figure>
                        <Image src={LogoRoyalReservations} alt={"Logo Royal Reservations"} width="101"
                               height="45"/>
                        <figcaption>
                            <span className="sr-only">Royal Reservations</span>
                        </figcaption>
                    </figure>
                </CarouselItem>
                <CarouselItem className="basis-1/3 flex justify-center">
                    <figure>
                        <Image src={LogoRoyalResorts} alt={"Logo Royal Resorts"} width={87} height={44}/>
                        <figcaption>
                            <span className="sr-only">Royal Resorts</span>
                        </figcaption>
                    </figure>
                </CarouselItem>
                <CarouselItem className="basis-1/3 flex justify-center">
                    <figure>
                        <Image src={LogoSignatureClub} alt={"Logo Signature Club"} width="105" height="26"/>
                        <figcaption>
                            <span className="sr-only">Signature Club</span>
                        </figcaption>
                    </figure>
                </CarouselItem>
                <CarouselItem className="basis-1/3 flex justify-center">
                    <figure>
                        <Image src={LogoRoyalReservations} alt={"Logo Royal Reservations"} width="101"
                               height="45"/>
                        <figcaption>
                            <span className="sr-only">Royal Reservations</span>
                        </figcaption>
                    </figure>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    );
};

export default BrandsCarousel;