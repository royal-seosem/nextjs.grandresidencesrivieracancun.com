import React from 'react';
import {Link} from "@/i18n/navigation";
import CdnImage from "@/components/commons/ui/CdnImage";
import Paragraph from "@/components/commons/ui/paragraph";
import LinkButton from "@/components/commons/ui/link";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import {cn} from "@/lib/utils";

type LinkHref = React.ComponentProps<typeof Link>['href']; // ← Tipo del href

export interface CardAmenityProps {
    title: string;
    description: string;
    img: string;
    alt: string;
    link?: LinkHref;
    linkText?: string;
    className?: string;
}

const CardAmenity = (
    {title, description, img, alt, link, linkText, className}: CardAmenityProps,
) => {
    return (
        <div className={cn('bg-white shadow-sm rounded-xs', className)}>
            <CdnImage
                className="w-full object-cover h-auto"
                alt={alt}
                width={400}
                height={300}
                src={img}/>

            <div className="px-3.5 py-4">
                <h3 className="text-2xl font-bold">{title}</h3>
                <Paragraph>{description}</Paragraph>
                {link &&
                    <LinkButton variant={"link"} href={link}>
                        {linkText}
                        <ArrowRightIcon className="shrink-0" width={16} height={16}/>
                    </LinkButton>
                }

            </div>
        </div>
    );
};

export default CardAmenity;