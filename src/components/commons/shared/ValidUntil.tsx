import React from 'react';
import {format} from "date-fns"
import {useTranslations} from "next-intl";
import {Offer} from "@/use_case/offers/get_home_offer";
import Paragraph from "@/components/commons/ui/paragraph";

interface ValidUntilProps {
    offer: Offer
}

const ValidUntil = ({offer}: ValidUntilProps) => {
    const t = useTranslations('new-offers');
    return (
        <Paragraph className="text-center text-base">
            {t('valid_until', {
                BW_E: format(offer.bookingWindow.start_date, 'MMMM d, yyyy'),
                TW_S: format(offer.travelWindow.start_date, 'MMMM d, yyyy'),
                TW_E: format(offer.travelWindow.end_date, 'MMMM d, yyyy')
            })}
        </Paragraph>
    );
};

export default ValidUntil;