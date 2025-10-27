import React from 'react';
import {useTranslations} from "next-intl";
import {Carousel, CarouselContent, CarouselItem} from "@/components/commons/ui/carousel";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface MenuProps {
    navActive: number
}

const Menu = (
    {navActive}: MenuProps,
) => {
    const t = useTranslations('general');
    const nav = [
        {
            title: t('about-us'),
            slug: '/about-us'
        },
        {
            title: t('policies'),
            slug: "/resort-policies"
        },
        {
            title: t('privacy'),
            slug: "/privacy"
        },
        {
            title: t('contact-us'),
            slug: "/contact"
        }
    ]

    return (
        <div className={"flex justify-center"}>
            <div className={"md:w-[800px]"}>
                <Carousel
                    className={"mb-5"}
                    opts={{
                        loop: true,
                        align: 'center',
                    }}>
                    <CarouselContent>
                        {
                            nav.map((item, index) => (
                                <CarouselItem key={index}
                                              className={"basis-2/5 md:basis-2/8 text-center h-[47px] px-2"}>
                                    <Link href={item.slug} className={cn(
                                        "bg-[#fcf6eb] border-b-2 border-[#fcf6eb] flex items-center justify-center h-full",
                                        nav[navActive].slug === item.slug && " border-menu2"
                                    )}>
                                        {item.title}
                                    </Link>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};

export default Menu;