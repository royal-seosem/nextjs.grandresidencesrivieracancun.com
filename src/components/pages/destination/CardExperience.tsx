import React from 'react';
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import {cn} from "@/lib/utils";

export interface CardExperienceProps {
    className?: string;
    title: string;
    description: {
        id: string;
        ns: string;
    };
    image: {
        src: string;
        alt: string;
    }[];
}

const CardExperience = (
    {title, description, image, className}: CardExperienceProps,
) => {

    return (
        <article className={cn("lg:flex lg:items-stretch", className)}>
            <div className={"lg:w-1/2 lg:shrink-0 grow"}>
                <Gallery variant={"secondary"} position={"on"}>
                    {image.map((item, index) => (
                        <CarouselItem key={index}>
                            <CdnImage
                                className={"h-full object-cover w-full block"}
                                width={680}
                                height={400}
                                alt={item.alt}
                                src={item.src}/>
                        </CarouselItem>
                    ))}
                </Gallery>
            </div>

            <div className={"p-5 lg:pt-0 lg:pb-0 lg:flex lg:flex-col w-[600px] shrink-0"}>
                <h3 className="text-3xl mb-2 mt-10 lg:mt-0">{title}</h3>
                <RichTextClient id={description.id} ns={description.ns}/>
            </div>
        </article>
    );
};

export default CardExperience;