'use client'
import {useEffect, useRef, useState} from 'react';
import {useGTMEvent} from "@/components/commons/hooks/useGTMEvent";

interface PromotionData {
    promotion_id: string;
    promotion_name: string
    creative_slot: string,
    currency: string,
    items: {
        item_name: string,
        item_variant: string,
        price?: number,
    }[]
}

const useViewPromotion = (
    {promotionData}: { promotionData: PromotionData }
) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [hasViewed, setHasViewed] = useState(false);
    const pushToDataLayer = useGTMEvent();

    useEffect(() => {
        if (hasViewed || !elementRef.current) return;
        promotionData['promotion_id'] = parseInt(promotionData.promotion_id) <= 99 ? `CMS0${promotionData.promotion_id}` : `CMS${promotionData.promotion_id}`;

        const observer = new IntersectionObserver(entries => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                pushToDataLayer({
                    event: "view_promotion",
                    ecommerce: promotionData
                });
                setHasViewed(true);
                observer.disconnect();
            }
        }, {threshold: 0.5});

        observer.observe(elementRef.current);

        return () => observer.disconnect();

    }, [hasViewed, elementRef, pushToDataLayer, promotionData])

    return elementRef;
};

export default useViewPromotion;