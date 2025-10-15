import React from 'react';
import Review, {ReviewInfo} from "@/components/pages/weddings/Review";
import {useMessages} from "next-intl";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";

const CarouselReviews = () => {
    const t = useMessages();
    const reviews = t['weddings']['comentarios']['lista'];
    return (
        <Gallery variant={"primary"} position={"bottom"}>
            {
                reviews.map((item: ReviewInfo, index: number) => (
                    <CarouselItem key={index}>
                        <Review {...item} />
                    </CarouselItem>
                ))
            }

        </Gallery>
    );
};

export default CarouselReviews;