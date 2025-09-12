'use server'
import {GrFetcher} from "@/lib/api_grandresidences";
import {Review} from "@/use_case/reviews/types";

export const getReviews = async () => {
    return GrFetcher<Review[]>('reviews', {
        method: 'GET'
    });
}