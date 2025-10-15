import React from 'react';
import Paragraph from "@/components/commons/ui/paragraph";
import CdnImage from "@/components/commons/ui/CdnImage";

export interface ReviewInfo {
    titulo: string,
    descripcion: string,
    nombre: string,
    avatar: string,
    fecha: string,
}

const Review = (
    {titulo, descripcion, nombre, avatar, fecha}: ReviewInfo,
) => {
    return (
        <div className={"h-full flex flex-col"}>
            <h3 className="italic text-2xl font-bold">{titulo}</h3>
            <div className="grow">
                <Paragraph>
                    {descripcion}
                </Paragraph>
            </div>

            <div className={"flex items-center justify-start gap-2 "}>
                <CdnImage
                    width="42" height="42"
                    src={`/img/icons/${avatar}.webp`}
                    alt="Wedding Review Riviera Maya"/>
                <div className={"flex flex-col"}>
                    <p className="text-base font-bold">{nombre}</p>
                    <p className="text-base">{fecha}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;