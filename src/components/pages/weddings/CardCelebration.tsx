'use client'
import React from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import Paragraph from "@/components/commons/ui/paragraph";
import FormButton from "@/components/pages/weddings/FormButton";

export interface CelebrationInfo {
    img: string,
    titulo: string,
    descripcion: string,
    alt: string
}

const CardCelebration = (
    {img, titulo, descripcion, alt}: CelebrationInfo,
) => {
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

                <FormButton/>
            </div>
        </article>
    );
};

export default CardCelebration;