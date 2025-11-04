import React from 'react';
import {useMessages} from "next-intl";
import CardBlog from "@/components/pages/Gms/my-account/CardBlog";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";

const BlogList = () => {
    const m = useMessages();
    const blogList = m['gms']['blog-posts'];

    return (
        <div className={"bg-[#fcf6eb] px-5 pt-8 pb-2"}>
            <Gallery variant={"primary"} position={"bottom"}>
                {
                    blogList.map((item: {
                        title: string;
                        description: string;
                        img: string;
                        link: string;
                    }, index: number) => (
                        <CarouselItem key={index} className={"md:basis-1/2"}>
                            <CardBlog {...item}/>
                        </CarouselItem>
                    ))
                }
            </Gallery>

        </div>
    );
};

export default BlogList;