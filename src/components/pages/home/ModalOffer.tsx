import React, {useState} from 'react';
import Modal from "@/components/commons/ui/modal/modal";
import Title from "@/components/commons/ui/title";
import Paragraph from "@/components/commons/ui/paragraph";
import {Button} from "@/components/commons/ui/button";
import CdnImage from "@/components/commons/ui/CdnImage";
import PaymentMethods from "@/components/commons/shared/PaymentMethods";
import Price from "@/components/commons/shared/price";
import Book from "@/components/commons/shared/book";
import ValidUntil from "@/components/commons/shared/ValidUntil";
import LogInModalOffer from "@/components/commons/shared/my-royal/LogInModalOffer";
import {Offer} from "@/use_case/offers/get_home_offer";
import {useTranslations} from "next-intl";

interface ModalOfferProps {
    offer: Offer
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ModalOffer = (
    {offer, open, setOpen}: ModalOfferProps,
) => {
    const tOffers = useTranslations('offers');
    const tGeneral = useTranslations('general');
    const [showTerms, setShowTerms] = useState(false);

    return (
        <Modal open={open} setOpen={setOpen} header={offer.content.title || ""}>
            <div className="p-5">
                <Title level="h3" size="sm" className="mb-5 text-center">
                    {offer.content.title || ""}
                </Title>
                <p className="text-3xl font-secondary text-accent2 mb-4">{offer.content.discount}</p>

                <Paragraph>{offer.content.description}</Paragraph>

                <Paragraph className="font-bold text-base">{tOffers('label')}</Paragraph>

                <ul className="list-disc pl-10 mb-5 space-y-2">
                    {(offer.content.inclusions || []).slice(0, 3).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <Button
                    onClick={() => setShowTerms(!showTerms)}
                    className="text-base font-medium underline pl-0 mb-6"
                    variant="link">{tOffers('label2')}</Button>

                <CdnImage
                    className="mb-2"
                    alt="Offer"
                    src={offer.gallery.small}
                    width={713} height={338}/>

                <PaymentMethods/>

                <div className="flex items-center justify-between gap-2">
                    {offer.rate !== null && <Price rate={offer.rate}/>}
                    <Book/>
                </div>

                <ValidUntil offer={offer}/>
            </div>
            <LogInModalOffer/>
            {showTerms &&
                <div className="p-5 bg-[#f0e9e2]">
                    <Paragraph>
                        {
                            offer.content.terms?.map((item: string, index: number) => (
                                <span key={index}>{item}</span>
                            ))
                        }
                    </Paragraph>
                    <button className="text-sm font-bold uppercase"
                            onClick={() => setShowTerms(false)}>
                        {tGeneral('read less')}
                    </button>
                </div>
            }
        </Modal>
    );
};

export default ModalOffer;