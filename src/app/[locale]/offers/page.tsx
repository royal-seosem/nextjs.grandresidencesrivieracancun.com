import React from 'react';
import Banner from "@/components/pages/offers/banner";
import {useMessages, useTranslations} from "next-intl";
import Paragraph from "@/components/commons/ui/paragraph";
import CdnImage from "@/components/commons/ui/CdnImage";
import CardOffer from "@/components/pages/offers/CardOffer";

const Page = () => {
    const t = useTranslations('offers-template2');
    const messages = useMessages();
    const includeList = messages['offers-template2']['includes-list'];
    return (
        <main>
            <Banner/>
            <div className="my-container pb-5">
                <Paragraph className={"text-center"}>{t('description')}</Paragraph>

                <p className={"text-2xl font-bold text-center mb-6"}>{t('includes-title')}</p>

                <ul className="">
                    {includeList.map((item: {
                        label: string,
                        img: string,
                    }, index: number) => (
                        <li key={index} className={"text-center flex items-center gap-2 mb-4"}>
                            <CdnImage
                                src={item.img}
                                alt={item.label}
                                width={36}
                                height={36}/>
                            {item.label}
                        </li>
                    ))}
                </ul>

                <CardOffer/>
            </div>
        </main>
    );
};

export default Page;