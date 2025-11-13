'use client'
import React from 'react';
import People2Icon from "@/components/commons/icons/people-2.svg";
import CdnImage from "@/components/commons/ui/CdnImage";
import {useTranslations} from "next-intl";
import {Button} from "@/components/commons/ui/button";
import Modal from "@/components/commons/ui/modal/modal";
import PaymentMethods from "@/components/commons/shared/PaymentMethods";
import FormButton from "@/components/pages/weddings/FormButton";


export interface PackageInfo {
    img: string,
    title: string,
    guests: string,
    includes: string[],
    terms: string,
    priceLabel: string
}

export interface CardPackageProps {
    infoPackage: PackageInfo
}

const CardPackage = (
    {infoPackage}: CardPackageProps,
) => {
    const [open, setOpen] = React.useState(false);

    const t = useTranslations('weddings');
    const tGeneral = useTranslations('general');
    return (
        <>
            <article className="shadow-md">
                <CdnImage
                    className={"w-full object-cover h-full"}
                    alt={infoPackage.title}
                    src={infoPackage.img}
                    width={500}
                    height={500}/>
                <div className="py-4 px-3">
                    <h3 className="text-lg font-bold mb-1">
                        {infoPackage.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-2">
                        <People2Icon width={24} height={24}/>
                        <p className="text-lg font-medium">
                            {infoPackage.guests}
                        </p>
                    </div>

                    <p className="text-lg font-bold mb-4">{t('includes')}</p>

                    <ul className="list-disc ml-5 space-y-1 mb-4">
                        {
                            infoPackage.includes.slice(0, 2).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>

                    <p className="text-xs mb-4">
                        Package price for up to 20 people $950 USD. Taxes included.
                    </p>
                    <div className="flex justify-between items-center">
                        <Button
                            className={"uppercase"}
                            variant={"outline"}
                            onClick={() => setOpen(true)}>
                            {tGeneral('read more')}
                        </Button>
                        <FormButton/>
                    </div>
                </div>
            </article>
            <Modal open={open} setOpen={setOpen} header={infoPackage.title}>
                <div className="p-5">
                    <div className="md:max-h-[calc(85dvh-50px)]
                        overflow-auto
                        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
                        hover:scrollbar-thumb-gray-400
                        [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:border-2
                        [&::-webkit-scrollbar-thumb]:border-transparent
                        hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
                        <h3 className={"text-2xl font-bold mb-1"}>{infoPackage.title}</h3>
                        <p className="text-lg font-medium flex items-center gap-3 mb-2">
                            <People2Icon width={24} height={24}/>
                            {infoPackage.guests}
                        </p>
                        <p className="text-2xl text-accent font-bold mb-4">{t('includes')}</p>
                        <ul className="list-disc ml-5 space-y-1 mb-4 lg:columns-2 lg:[column-gap:2rem]">
                            {
                                infoPackage.includes.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                        <div dangerouslySetInnerHTML={{__html: infoPackage.terms}}></div>
                        <PaymentMethods/>
                    </div>
                </div>
            </Modal>

        </>

    );
};

export default CardPackage;