'use client'
import React, {useState} from 'react';
import Modal from "@/components/commons/ui/modal/modal";
import Paragraph from "@/components/commons/ui/paragraph";
import {useTranslations} from "next-intl";
import CdnImage from "@/components/commons/ui/CdnImage";
import PaymentMethods from "@/components/commons/shared/PaymentMethods";
import LogInModalOffer from "@/components/commons/shared/my-royal/LogInModalOffer";
import Title from "@/components/commons/ui/title";
import {Button} from "@/components/commons/ui/button";
import Price from "@/components/commons/shared/price";
import Book from "@/components/commons/shared/book";
import ValidUntil from "@/components/commons/shared/ValidUntil";
import {Offer} from "@/use_case/offers/get_home_offer";

interface ModalOfferProps {
    offer: Offer;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ModalOffer = (
    {offer, open, setOpen}: ModalOfferProps,
) => {

    const [showTerms, setShowTerms] = useState(false);
    const t = useTranslations('offers')
    const tGeneral = useTranslations('general');

    return (
        <Modal open={open} setOpen={setOpen} header={offer.content.title || ""}>
            <div
                className={"@container md:max-h-[90dvh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"}>
                <div className="p-5">
                    <Title level="h3" size="sm" className="mb-5 text-center">
                        {offer.content.title || ""}
                    </Title>

                    <div className="@3xl:flex gap-5">
                        <div>
                            <p className="text-3xl font-secondary text-accent2 mb-4">
                                {offer.content.discount}
                            </p>
                            <Paragraph>{offer.content.description}</Paragraph>
                            <Paragraph className="font-bold text-base">{t('label')}</Paragraph>

                            <ul className="list-disc pl-10 mb-5 space-y-2
                                @3xl:pl-5 @3xl:mb-2 @3xl:space-y-1">
                                {(offer.content.inclusions || []).slice(0, 3).map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <Button
                                onClick={() => setShowTerms(!showTerms)}
                                className="text-base font-medium underline pl-0 mb-6"
                                variant="link">{t('label2')}</Button>
                        </div>
                        <div className="@3xl:flex flex-col">
                            <CdnImage
                                className="mb-2 object-cover grow-1"
                                alt="Offer"
                                src={offer.gallery.small}
                                width={713} height={338}/>
                            <PaymentMethods/>
                        </div>
                    </div>

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
            </div>
        </Modal>
    );
};

export default ModalOffer;