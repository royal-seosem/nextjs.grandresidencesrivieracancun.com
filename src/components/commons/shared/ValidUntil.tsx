import React from 'react';
import {Offer} from "@/use_case/offers/get_home_offer";
import Paragraph from "@/components/commons/ui/paragraph";
import WithTranslateCliente, {WithTranslationProps} from "@/components/commons/shared/withTranslateCliente";
import {format} from "date-fns";

interface ValidUntilProps {
    offer: Offer
}

const ValidUntil = ({offer, messages}: ValidUntilProps & WithTranslationProps) => {
    const text = messages['new-offers.valid_until'] as string;

    return (
        <Paragraph className="text-center text-base">
            {text?.replace('{BW_E}', format(offer.bookingWindow.start_date, 'MMMM d, yyyy'))
                .replace('{TW_S}', format(offer.travelWindow.start_date, 'MMMM d, yyyy'))
                .replace('{TW_E}', format(offer.travelWindow.end_date, 'MMMM d, yyyy'))}
        </Paragraph>
    );
};

export default WithTranslateCliente(ValidUntil, [
    'new-offers.valid_until'
]) as React.FC<ValidUntilProps>;