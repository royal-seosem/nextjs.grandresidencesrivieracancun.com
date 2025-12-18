import React from 'react';
import {headers} from "next/headers";
import {getMessages, getTranslations} from "next-intl/server";
import SmartVideo from "@/components/commons/ui/SmartVideo";
import {cdn} from "@/lib/cdn";
import Title from "@/components/commons/ui/title";
import RestaurantTour360 from "@/components/pages/restaurants/RestaurantTour360";
import Restaurants from "@/components/pages/restaurants/Restaurants";
import Paragraph from "@/components/commons/ui/paragraph";
import CdnImage from "@/components/commons/ui/CdnImage";
import CardFlavors from "@/components/pages/restaurants/CardFlavors";
import SectionRestaurant from "@/components/pages/restaurants/SectionRestaurant";
import SectionPlace from "@/components/pages/restaurants/SectionPlace";
import SectionDescription from "@/components/pages/restaurants/SectionDescription";
import {Metadata} from "next";


export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('restaurants');
    return {
        title: t('title'),
        description: t('metadescription'),
        openGraph: {
            images: [t('og_image')],
        },
    }
}

const Page = async () => {
    const t = await getTranslations('restaurants');
    const m = await getMessages();
    const headersList = await headers();
    const isDesktop = headersList.get('sec-ch-ua-mobile') === '?0';
    const fullUrl = headersList.get('x-url') || "";

    const jdlBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://grandresidences.com/"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": m['menu']['dining'],
            "item": fullUrl
        }]
    }

    return (
        <main className={"relative"}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jdlBreadcrumbs).replace(/</g, '\\u003c'),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jdlBreadcrumbs).replace(/</g, '\\u003c'),
                }}
            />
            <div className="aspect-[95/108] md:aspect-[64/24] mb-4">
                <SmartVideo
                    isDesktop={isDesktop}
                    className="w-full h-auto"
                    srcDesktop={cdn("/video/dinning-low.mp4")}
                    srcMobile={cdn("/video/dinning-m.mp4")}
                    posterDesktop={cdn("/video/dinning.jpg")}
                    posterMobile={cdn("/video/dinning-m.jpg")}/>
            </div>

            <div className="my-container">
                <div className="flex flex-col gap-1 mb-4">
                    <Title level={"h1"} className=" order-2 text-primary text-center ">
                        {t('h1b')}
                    </Title>
                    <Title level={"h2"} size={"sm"}
                           className="order-1 text-accent font-bold text-center">
                        {t('h1a')}
                    </Title>
                </div>
                <SectionDescription/>
                <RestaurantTour360 messages={{
                    btn_360: t('btn_360'),
                    tour_360_description: t('tour_360_description')
                }}/>
                <Restaurants messages={{
                    conceptos: m['restaurants']['conceptos'],
                }}/>
                <Paragraph className={"md:hidden text-center mb-10"}>{t('menu')}</Paragraph>

                <div className={"md:flex md:justify-between md:items-center lg:gap-10"}>
                    <Title className="text-center md:text-[48px]" level={"h3"} size={"md"}>{t('bebidas izq')}</Title>
                    <CdnImage alt={"drinks"} src={"/img/restaurants/bg-bebidas.jpg"} width={600} height={589}/>
                    <Title className={"text-center md:text-[48px] hidden md:block"} level={"h3"}
                           size={"md"}>{t('bebidas der')}</Title>
                </div>

            </div>

            <CardFlavors/>
            <SectionRestaurant/>
            <SectionPlace/>
        </main>
    );
};

export default Page;