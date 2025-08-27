import React from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import PlusIcon from "@/components/commons/icons/plus.svg";
import {cn} from "@/lib/utils";

interface CardImgProps {
    className?: string;
    text: string;
    src: string;
    onClick?: () => void;
}

const CardImg = ({className, text, src, onClick}: CardImgProps) => {
    return (
        <figure className={cn('relative', className)}>
            <CdnImage
                className="w-full object-cover h-auto"
                width={319}
                height={204}
                alt={text}
                src={src}/>
            <span
                className="absolute bg-[linear-gradient(180deg,rgba(0,0,0,0)_89.09%,rgba(22,15,8,0.40)_99.79%)] w-full h-full top-0 left-0"> </span>
            <figcaption className="absolute bottom-0 left-0 w-full  bg-[#180B01]/20 ">
                <button className="flex justify-between items-center text-white px-3 py-2 w-full gap-2"
                    onClick={onClick}>
                    <span className="text-base font-bold truncate">{text}</span>
                    <PlusIcon className="shrink-0" width={30} height={30}/>
                </button>
            </figcaption>
        </figure>
    );
};

export default CardImg;