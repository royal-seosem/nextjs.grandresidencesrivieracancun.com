import React from 'react';
import Image from "next/image";
import ArrowBlackIcon from "@/components/commons/icons/arrow-black.svg";

interface CardBlogProps {
    title: string;
    description: string;
    img: string;
    link: string;
}

const CardBlog = (
    {title, description, img, link}: CardBlogProps,
) => {
    return (
        <article className={"flex items-stretch gap-5 p-2 bg-white"}>
            <div className={"w-[100px] shrink-0 grow-0 h-auto"}>
                <Image
                    className={"w-full object-cover h-full"}
                    width={495} height={400}
                    src={img}
                    alt={"blog"}/>
            </div>

            <div>
                <div className={"flex items-center justify-between mb-4 gap-2"}>
                    <p className={"text-lg font-medium"}>
                        {title}
                    </p>
                    <a href={link} target={"_blank"}>
                        <ArrowBlackIcon width={34} height={34}/>
                    </a>
                </div>

                <p className={"text-base"}>
                    {description}
                </p>
            </div>

        </article>
    );
};

export default CardBlog;