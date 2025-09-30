'use client'
import React from 'react';
import Image, {ImageProps} from "next/image";
import {cn} from "@/lib/utils";

type CdnImageProps = Omit<ImageProps, 'src'> & {
    src: string;
    label?: boolean
    className?: string;
    classNameImg?: string;
}

const imageConfig = {
    cdnUrl: process.env.NEXT_PUBLIC_CDN_URL || '',
} as const


const CdnImage = ({src, alt, label = false, className, classNameImg, ...props}: CdnImageProps) => {
    let srcImage = src;

    if (src.indexOf('http') == -1) {
        srcImage = `${imageConfig.cdnUrl}/${src.startsWith('/') ? src.slice(1) : src}`
    }

    if (label) {
        return (
            <figure className={cn('relative', className)}>
                <Image
                    className={cn("w-full object-cover", classNameImg)}
                    src={srcImage}
                    alt={alt}
                    {...props}
                />
                <figcaption className="p-2.5 text-sm bg-white absolute top-0 right-0 rounded-bl-sm opacity-90">
                    {alt}
                </figcaption>
            </figure>
        )
    }
    return (
        <Image
            className={className}
            src={srcImage}
            alt={alt}
            {...props}
        />
    );
};

export default CdnImage;