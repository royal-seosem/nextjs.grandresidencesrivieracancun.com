import React from 'react';
import Image from "next/image";
import WithTranslateCliente, {WithTranslationProps} from "@/components/commons/shared/withTranslateCliente";


const PaymentMethods = (
    {messages}: WithTranslationProps
) => {

    return (
        <div className="flex items-center justify-end gap-2 text-xs font-medium">
            <span>{messages["new-offers.Aceptamos"] as string}</span>
            <div className="flex items-center gap-1">
                <Image loading="lazy"
                       src="https://www.royalresorts.com/img/logo/amex.png"
                       width="25"
                       height="18" alt="American Express Logo"/>
                <Image loading="lazy" src="https://www.royalresorts.com/img/logo/mastercard.png"
                       width="24"
                       height="18" alt="Mastercard Logo"/>
                <Image loading="lazy"
                       width="25"
                       src="https://www.royalresorts.com/img/logo/visa.png"
                       height="18" alt="Visa Logo"/>
            </div>
        </div>
    );
};

export default WithTranslateCliente(PaymentMethods, [
    'new-offers.Aceptamos'
]) as React.FC<object>;