'use client'
import React from 'react';
import Image, {ImageProps} from "next/image";

type CdnImageProps = Omit<ImageProps, 'src'> & {
    src: string;
}

const imageConfig = {
    cdnUrl: process.env.NEXT_PUBLIC_CDN_URL || '',
} as const


const CdnImage = ({src, alt, ...props}: CdnImageProps) => {
    const srcImage = `${imageConfig.cdnUrl}/${src.startsWith('/') ? src.slice(1) : src}`
    return (
        <Image
            src={srcImage}
            alt={alt}
            {...props}
        />
    );
};

export default CdnImage;