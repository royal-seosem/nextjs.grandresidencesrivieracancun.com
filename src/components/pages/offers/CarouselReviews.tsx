'use client'
import React from 'react';
import {Review} from "@/use_case/reviews/types";
import {CarouselItem} from "@/components/commons/ui/carousel";
import dynamic from "next/dynamic";

const CardReview = dynamic(() => import("@/components/pages/offers/CardReview"));
const Gallery = dynamic(() => import("@/components/commons/ui/gallery/gallery"));

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