import React from 'react';
import dynamic from "next/dynamic";
import {getMessages, getTranslations} from "next-intl/server";
import CdnImage from "@/components/commons/ui/CdnImage";
import RichText from "@/components/commons/shared/RitchText";
import {getRooms} from "@/use_case/rooms/get_rooms";
import Title from "@/components/commons/ui/title";
import BookingHeader from "@/components/commons/shared/booking/BookingHeader";
import {Metadata} from "next";
import {headers} from "next/headers";

const SectionRooms = dynamic(() => import( "@/components/pages/suites/SectionRooms"));
const Tour360 = dynamic(() => import("@/components/pages/suites/tour360"));
const WebCam = dynamic(() => import("@/components/pages/suites/WebCam"));
const SitePlan = dynamic(() => import("@/components/pages/suites/SitePlan"));

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('suites');

    return {
        title: t('title'),
        description: t('metadescription'),
        openGraph: {
            title: t('title'),
            description: t('metadescription'),
            images: [
                t('og_image')
            ]
        },
    };
}


//TODO: Page Suites
const Page = async () => {
    const headersList = await headers();
    const fullUrl = headersList.get('x-url') || "";

    const [t, m, suites] = await Promise.all([
        getTranslations('suites'),
        getMessages(),
        getRooms(),
    ]);

    const dlRooms = suites.map((room) => {
        return {
            "@type": "Offer",
            "availability": "https:\/\/schema.org\/InStock",
            "price": room.roomPriceOffer,
            "priceCurrency": "USD"
        }
    })

    const maxPrice = suites.reduce((max, room) => room.roomPriceOffer > max ? room.roomPriceOffer : max, 0)
    const minPrice = suites.reduce((min, room) => room.roomPriceOffer < min ? room.roomPriceOffer : min, Infinity)
    const jdlSuites = {
        "@context": "https:\/\/schema.org",
        "@type": "Product",
        "image": "https:\/\/dev.grandresidencesrivieracancun.com\/img\/rooms\/granresidences-suites.jpg",
        "name": "Grand Residences Riviera Cancun | Riviera Maya Resort",
        "description": "Grand Residences Riviera Cancun is a luxury beachfront resort located in Riviera Maya. Offers you private transportation, gourmet all inclusive restaurants, spa and more!",
        "sku": "95939",
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "highPrice": maxPrice,
            "lowPrice": minPrice,
            "offerCount": dlRooms.length,
            "offers": dlRooms
        }
    }

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
            "name": m['menu']['suites'],
            "item": fullUrl
        }]
    }

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jdlBreadcrumbs).replace(/</g, '\\u003c'),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jdlSuites).replace(/</g, '\\u003c'),
                }}
            />
            <BookingHeader/>
            <div className="mb-14">
                <CdnImage
                    className="md:hidden w-full object-cover"
                    alt={"Suites"}
                    width={360}
                    height={213}
                    src={"/img/rooms/granresidences-suites.jpg"}/>
                <CdnImage
                    className="hidden md:block w-full object-cover"
                    width={1360}
                    height={400}
                    alt={"Suites"}
                    src="/img/rooms/1360x400/granresidences-suites.jpg"
                />
            </div>

            <div className="my-container">
                <Title level="h1" size="sm" className="text-accent mb-4 font-bold text-center">
                    {t('titulo h1a')}
                </Title>

                <Title level="h2" size={"lg"}
                       className="text-center font-bold mb-5 lg:mb-10"> {t('titulo h1b')} </Title>

                <div className="mb-14">
                    <RichText id={"descripcion general"} ns={"suites"}/>
                </div>

                <div className="flex justify-between items-stretch gap-2 py-5 lg:justify-start">
                    <Tour360/>
                    <span aria-hidden className="block h-auto w-[2px] bg-primary"></span>
                    <WebCam/>
                    <span aria-hidden className="block h-auto w-[2px] bg-primary"></span>
                    <SitePlan/>
                </div>

                <Title level={"h2"} size={"sm"} className="mb-5 font-bold">
                    {t('subtítulo')}
                </Title>
            </div>

            <SectionRooms
                suites={suites}
                suitesShort={m['suites']['suites_short']}
                suitesMobile={m['suites']['suites_mobile']}/>

        </main>
    );
};

export default Page;