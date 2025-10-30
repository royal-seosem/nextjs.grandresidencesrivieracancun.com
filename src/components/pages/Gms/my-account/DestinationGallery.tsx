'use client'
import React from 'react';
import {useMessages} from "next-intl";
import {Carousel, CarouselContent, CarouselItem} from "@/components/commons/ui/carousel";
import CardDestination from "@/components/pages/Gms/my-account/CardDestination";


const DestinationGallery = () => {
    const m = useMessages();
    const destinationList = m['gms_home']['destination-list'];
    return (
        <>
            <Carousel
                opts={{
                    loop: true
                }}>

                <CarouselContent>
                    {
                        destinationList.map((item: {
                            title: string; title_short: string; description: string; img: string; img_modal: string;
                        }, index: number) => (
                            <CarouselItem key={index} className={"basis-[300px]"}>
                                <CardDestination
                                    src={item.img}
                                    imgModal={item.img_modal}
                                    titleShort={item.title_short}
                                    title={item.title}
                                    description={item.description}/>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </>
    );
};

export default DestinationGallery;