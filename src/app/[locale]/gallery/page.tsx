import React from 'react';
import BookingHeader from "@/components/commons/shared/booking/BookingHeader";
import CdnImage from "@/components/commons/ui/CdnImage";
import Title from "@/components/commons/ui/title";
import RichText from "@/components/commons/shared/RitchText";
import WebCam from "@/components/pages/suites/WebCam";
import Card360Tour from "@/components/commons/shared/Card360Tour";
import GalleryResort from "@/components/pages/gallery/GalleryResort";
import {getMessages, getTranslations} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";


const Page = async () => {
    const m = await getMessages();
    const t = await getTranslations('gallery');
    const tsuites = await getTranslations('suites');

    return (
        <NextIntlClientProvider messages={{
            gallery: m['gallery'],
        }}>
            <main>
                <BookingHeader/>
                <div className="mb-14">
                    <CdnImage
                        className="md:hidden w-full object-cover"
                        alt={"Suites"}
                        width={360}
                        height={213}
                        src={"/img/gallery/resort-1.jpg"}/>
                    <CdnImage
                        className="hidden md:block w-full object-cover"
                        width={1360}
                        height={400}
                        alt={"Suites"}
                        src="/img/gallery/1360x400/resort-1.jpg"
                    />
                </div>

                <div className="my-container">
                    <div className={"flex flex-col"}>
                        <Title level="h1" size={"lg"}
                               className="text-center font-bold mb-5 lg:mb-10 lg:text-6xl order-2">
                            {t('h1b')}
                        </Title>
                        <Title level="h2" size="sm" className="text-accent mb-4 font-bold text-center ">
                            {t('h1a')}
                        </Title>
                    </div>
                    <RichText id={"descripcion"} ns={"gallery"}/>

                    <div className={"mb-2 flex gap-4"}>
                        <WebCam
                            className={"border border-primary p-2 rounded-sm text-sm font-bold uppercase"}/>
                        <Card360Tour
                            className={"border border-primary p-2 rounded-sm text-sm font-bold uppercase"}
                            title={tsuites('btn_360')}
                            btnTitle={tsuites('btn_360')}
                            src={'https://tour-gr.royalreservations.com/#39128456p&105.53h&83.74t'}/>
                    </div>

                    <GalleryResort/>
                </div>

            </main>
        </NextIntlClientProvider>
    );
};

export default Page;