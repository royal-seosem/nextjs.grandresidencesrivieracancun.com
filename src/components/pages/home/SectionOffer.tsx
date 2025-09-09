'use client'
import React, {useState} from 'react';
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";
import Title from "@/components/commons/ui/title";
import CdnImage from "@/components/commons/ui/CdnImage";
import Image from "next/image";
import {Offer} from "@/use_case/offers/get_home_offer";
import Price from "@/components/commons/shared/price";
import Book from "@/components/commons/shared/book";
import Modal from "@/components/commons/ui/modal/modal";
import Paragraph from "@/components/commons/ui/paragraph";
import {Button} from "@/components/commons/ui/button";


const SectionOffer = ({offers}: { offers: Offer[] }) => {
    const tmenu = useTranslations('menu');
    const tNewOffers = useTranslations('new-offers');
    const tOffers = useTranslations('offers');
    const offer = offers[0];
    console.log(offer);
    const [open, setOpen] = useState(true);

    return (
        <>
            <CardImg
                width={1360}
                height={400}
                text={tmenu('specials')}
                src="/img/offers/year-end-2023.jpg"/>

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
                        className="text-base font-medium underline pl-0 mb-6"
                        variant="link">{tOffers('label2')}</Button>

                    <CdnImage
                        className="mb-2"
                        alt="Offer"
                        src={offer.gallery.small}
                        width={713} height={338}/>
                    <div className="flex items-center justify-end gap-2 text-xs font-medium">
                        <span>{tNewOffers('Aceptamos')}</span>
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

                    <div className="flex items-center justify-between gap-2">
                        {offer.rate !== null && <Price rate={offer.rate}/>}
                        <Book/>
                    </div>

                    {/*<ValidUntil offer={offer}/>*/}

                </div>
            </Modal>
        </>
    );
};

export default SectionOffer;