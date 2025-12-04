import React from 'react';
import {useTranslations} from "next-intl";
import CdnImage from "@/components/commons/ui/CdnImage";
import {Review} from "@/use_case/reviews/types";
import {format} from "date-fns";

interface CardReviewProps {
    review: Review
}

const CardReview = (
    {review}: CardReviewProps,
) => {
    const t = useTranslations('general');

    const [expanded, setExpanded] = React.useState(false);
    const toggleExpanded = () => setExpanded((prev) => !prev);

    return (
        <article className="bg-[#fbf1de] h-full py-4 px-5">
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

            <div>
                <p className={"text-base mb-1"}
                   style={
                       expanded
                           ? {}
                           : {
                               display: "-webkit-box",
                               WebkitLineClamp: 2,
                               WebkitBoxOrient: "vertical",
                               overflow: "hidden",
                           }
                   }>
                    {review.review}
                </p>
                <button
                    type="button"
                    onClick={toggleExpanded}
                    className="text-sm font-semibold hover:underline mb-4"
                >
                    {expanded ? t('read less') : t('read more')}
                </button>
            </div>


            <div className="flex items-center justify-end gap-2 ">
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