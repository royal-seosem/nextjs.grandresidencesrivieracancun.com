import React from 'react';
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import {cn} from "@/lib/utils";

interface CardExperienceProps {
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
            <div className={"lg:w-1/2 lg:shrink-0"}>
                <Gallery variant={"secondary"} position={"on"}>
                    {image.map((item, index) => (
                        <CarouselItem key={index}>
                            <CdnImage
                                className={"h-full object-cover w-full block"}
                                width={740}
                                height={400}
                                alt={item.alt}
                                src={item.src}/>
                        </CarouselItem>
                    ))}
                </Gallery>
            </div>

            <div className={"p-5 lg:pt-0 lg:pb-0 lg:flex lg:flex-col lg:justify-center"}>
                <h3 className="text-5xl mb-10 mt-10 lg:mt-0">{title}</h3>
                <RichTextClient id={description.id} ns={description.ns}/>
            </div>
        </article>
    );
};

export default CardExperience;