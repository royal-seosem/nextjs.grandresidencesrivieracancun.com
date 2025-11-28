import React from 'react';
import dynamic from "next/dynamic";
import {getTranslations} from "next-intl/server";
import CdnImage from "@/components/commons/ui/CdnImage";
import RichText from "@/components/commons/shared/RitchText";
import {getRooms} from "@/use_case/rooms/get_rooms";
import Title from "@/components/commons/ui/title";
import SectionRooms from "@/components/pages/suites/SectionRooms";
import BookingHeader from "@/components/commons/shared/booking/BookingHeader";

const Tour360 = dynamic(() => import("@/components/pages/suites/tour360"));
const WebCam = dynamic(() => import("@/components/pages/suites/WebCam"));
const SitePlan = dynamic(() => import("@/components/pages/suites/SitePlan"));

//TODO: Page Suites
const Page = async () => {
    const t = await getTranslations('suites');
    const suites = await getRooms();

    return (
        <main>
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

            <SectionRooms suites={suites}/>

        </main>
    );
};

export default Page;