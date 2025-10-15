'use client'
import React from 'react';
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import CdnImage from "@/components/commons/ui/CdnImage";
import Paragraph from "@/components/commons/ui/paragraph";
import {Button} from "@/components/commons/ui/button";
import {useTranslations} from "next-intl";

export interface CelebrationInfo {
    img: string,
    titulo: string,
    descripcion: string,
    alt: string
}

const CardCelebration = (
    {img, titulo, descripcion, alt}: CelebrationInfo,
) => {
    const t = useTranslations('weddings');
    return (
        <article>
            <CdnImage
                alt={alt}
                src={img}
                width={550} height={400}/>

            <div className="p-5">
                <h3 className="text-2xl font-bold">{titulo}</h3>

                <Paragraph>
                    {descripcion}
                </Paragraph>

                <Button className="uppercase" variant={"secondary"}>
                    {t('formulario.titulo')}
                    <ArrowRightIcon width={16} height={16}/>
                </Button>
            </div>
        </article>
    );
};

export default CardCelebration;