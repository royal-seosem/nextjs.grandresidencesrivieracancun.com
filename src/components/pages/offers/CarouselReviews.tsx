'use client'
import React from 'react';
import Gallery from "@/components/commons/ui/gallery/gallery";
import {Review} from "@/use_case/reviews/types";
import CardReview from "@/components/pages/offers/CardReview";
import {CarouselItem} from "@/components/commons/ui/carousel";

interface CarouselReviewsProps {
    reviews: Review[];
}

const CarouselReviews = (
    {reviews}: CarouselReviewsProps
) => {
    return (
        <Gallery variant={"primary"} position={"bottom"}>
            {
                reviews.map((item, index) => (
                    <CarouselItem key={index} className={"lg:basis-1/2"}>
                        <CardReview review={item}/>
                    </CarouselItem>
                ))
            }
        </Gallery>
    );
};

export default CarouselReviews;