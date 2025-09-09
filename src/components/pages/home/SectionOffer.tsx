'use client'
import React, {useState} from 'react';
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";
import Title from "@/components/commons/ui/title";
import {GrOffers} from "@/model/GrOffers";
import CdnImage from "@/components/commons/ui/CdnImage";
import Image from "next/image";
import {OfferRate} from "@/use_case/offers/get_home_offer";
import Price from "@/components/commons/shared/price";
import Book from "@/components/commons/shared/book";
import ValidUntil from "@/components/commons/shared/ValidUntil";
import Modal from "@/components/commons/ui/modal/modal";


const SectionOffer = ({offers}: { offers: OfferRate[] }) => {

    const tmenu = useTranslations('menu');
    const tNewOffers = useTranslations('new-offers');
    const tOffers = useTranslations('offers');
    const offer = new GrOffers(offers[0]);

    const [open, setOpen] = useState(false);

    return (
        <>
            <CardImg
                width={1360}
                height={400}
                text={tmenu('specials')}
                src="/img/offers/year-end-2023.jpg"/>

            <Modal open={open} setOpen={setOpen} header={offer.getContent('title') || ""}>
                <Title level="h3" size="sm" className="mb-5 text-center">
                    {offer.getContent('title')}
                </Title>
                <p>{offer.getContent('discount')}</p>
                <p>{offer.getContent('description')}</p>
                <p>{tOffers('label')}</p>
                <ul>
                    {offer.getContent('inclusions')?.slice(0, 3).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button>{tOffers('label2')}</button>

                <CdnImage
                    alt="Offer"
                    src={offer.getGallery('small')}
                    width={713} height={338}/>
                <div>
                    <span>{tNewOffers('Aceptamos')}</span>
                    <div>
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

                {offer.rate !== null &&
                    <span>
                        {tNewOffers('per room')}
                    </span>
                }

                <div>
                    {offer.rate !== null && <Price rate={offer.rate}/>}
                    <Book/>
                </div>

                <ValidUntil offer={offer}/>

            </Modal>
        </>
    );
};

export default SectionOffer;