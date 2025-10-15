import React from 'react';
import CardCelebration, {CelebrationInfo} from "@/components/pages/weddings/CardCelebration";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";

interface CarouselCelebrationsProps {
    items: CelebrationInfo[];
}

const CarouselCelebrations = (
    {items}: CarouselCelebrationsProps,
) => {
    return (
        <Gallery variant={"primary"} position={"bottom"}>
            {items.map((item, index) => (
                <CarouselItem key={index} className={"basis-[350px]"}>
                    <CardCelebration {...item}/>
                </CarouselItem>
            ))}
        </Gallery>
    );
};

export default CarouselCelebrations;