import React from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import Paragraph from "@/components/commons/ui/paragraph";

interface CardRestaurantProps {
    title: string;
    subtitle: string;
    src: string;
    description: string;
}

const CardRestaurant = (
    {title, subtitle, src, description}: CardRestaurantProps,
) => {

    return (
        <div className={
            "md:flex gap-5"
        }>
            <CdnImage
                className="mb-5 object-cover w-full h-auto"
                width={700}
                height={600}
                src={src}
                alt={title}/>

            <div className="p-5">
                <h3 className="text-3xl text-primary mb-8 text-center">
                    {title}
                </h3>
                <h4 className="text-2xl text-accent font-bold mb-4 text-center">
                    {subtitle}
                </h4>
                <Paragraph> {description} </Paragraph>
            </div>
        </div>
    );
};

export default CardRestaurant;