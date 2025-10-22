'use client'
import React from 'react';
import People2Icon from "@/components/commons/icons/people-2.svg";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import CdnImage from "@/components/commons/ui/CdnImage";
import {useTranslations} from "next-intl";
import {Button} from "@/components/commons/ui/button";
import Modal from "@/components/commons/ui/modal/modal";
import PaymentMethods from "@/components/commons/shared/PaymentMethods";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import FormWedding from "@/components/pages/weddings/FormWedding";


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
    const [showForm, setShowForm] = React.useState<boolean>(false)

    const t = useTranslations('weddings');
    const tGeneral = useTranslations('general');
    return (
        <>
            <article className="shadow-md">
                <CdnImage
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
                        <Button
                            className={"uppercase"}
                            variant={"secondary"}
                            onClick={() => setShowForm(true)}>
                            {t('formulario.titulo')}
                            <ArrowRightIcon width={16} height={16}/>
                        </Button>
                    </div>
                </div>
            </article>
            <Modal open={open} setOpen={setOpen} header={infoPackage.title}>
                <div className="p-5">
                    <h3 className={"text-2xl font-bold mb-1"}>{infoPackage.title}</h3>
                    <p className="text-lg font-medium flex items-center gap-3 mb-2">
                        <People2Icon width={24} height={24}/>
                        {infoPackage.guests}
                    </p>
                    <p className="text-2xl text-accent font-bold mb-4">{t('includes')}</p>
                    <ul className="list-disc ml-5 space-y-1 mb-4">
                        {
                            infoPackage.includes.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                    <div dangerouslySetInnerHTML={{__html: infoPackage.terms}}></div>
                    <PaymentMethods/>
                </div>
            </Modal>
            <Modal open={showForm} setOpen={setShowForm} header={t('formulario.titulo')}>
                <div className="p-5">
                    <h3 className={"text-lg font-bold"}>{t('formulario.titulo')}</h3>
                    <RichTextClient id={'formulario.descripcion'} ns={'weddings'}/>

                    <FormWedding/>
                </div>
            </Modal>
        </>

    );
};

export default CardPackage;