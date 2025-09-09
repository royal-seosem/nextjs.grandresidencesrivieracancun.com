import React from 'react';
import {format} from "date-fns"
import {useTranslations} from "next-intl";
import {GrOffers} from "@/model/GrOffers";

interface ValidUntilProps {
    offer: GrOffers
}

const ValidUntil = ({offer}: ValidUntilProps) => {
    const t = useTranslations('new-offers');
    return (
        <p>
            {t('valid_until', {
                BW_E: format(offer.bw_end, 'MMMM d, yyyy'),
                TW_S: format(offer.getTwStart(), 'MMMM d, yyyy'),
                TW_E: format(offer.getTwEnd(), 'MMMM d, yyyy')
            })}
        </p>
    );
};

export default ValidUntil;