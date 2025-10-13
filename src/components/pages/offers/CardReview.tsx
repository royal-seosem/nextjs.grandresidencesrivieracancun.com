import React from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import Paragraph from "@/components/commons/ui/paragraph";
import {Review} from "@/use_case/reviews/types";
import {format} from "date-fns";

interface CardReviewProps {
    review: Review
}
const CardReview = (
    {review}: CardReviewProps,
) => {

    return (
        <article className="bg-[#fbf1de] py-4 px-5">
            <div className="flex items-center gap-5 mb-5">
                <CdnImage
                    alt={"User icon"}
                    src={"/img/icons/man-2.webp"}
                    width={65}
                    height={65}/>

                <div>
                    <p><b>{review.traveler_name}</b></p>
                    <p className="mb-1">{format(review.review_date, 'MMMM d, yyyy')}</p>
                    <CdnImage
                        alt={"Star icon"}
                        src={"/img/my-royal/circles-green.svg"}
                        width={61}
                        height={8}/>
                </div>
            </div>
            <Paragraph>
                {review.review}
            </Paragraph>
            <div className="flex items-center justify-end ">
                <CdnImage
                    alt={"Tripadvisor Icon"}
                    src={"/img/icons/tripadvisor-grean.svg"}
                    width={40}
                    height={48}/>

                <div>
                    <p>Publicado en</p>
                    <p><b>Tripadvisor</b></p>
                </div>
            </div>
        </article>
    );
};

export default CardReview;