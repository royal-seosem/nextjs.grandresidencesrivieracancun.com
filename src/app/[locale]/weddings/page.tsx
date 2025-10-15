import React from 'react';
import SmartVideo from "@/components/commons/ui/SmartVideo";
import {cdn} from "@/lib/cdn";
import Title from "@/components/commons/ui/title";
import {getMessages, getTranslations} from "next-intl/server";
import CarouselPackages from "@/components/pages/weddings/CarouselPackages";

const Page = async () => {
    const t =  await getTranslations('weddings');
    const {weddings} = await  getMessages();
    const packages = weddings.paquetes.lista
    return (
        <main>
            <SmartVideo
                className="w-full h-auto max-h-[500px] object-cover mb-4"
                posterDesktop={cdn('/img/weddings/wedding-default.jpg')}
                posterMobile={cdn('/img/weddings/wedding-default.jpg')}
                srcDesktop={cdn('/video/grand-residences-weddings.mp4')}
                srcMobile={cdn('/video/grand-residences-weddings.mp4')}/>

            <div className="my-container">
                <Title level="h1" size="sm" className="text-accent mb-4 font-bold text-center">
                    {t('h1a')}
                </Title>

                <Title level="h2" size={"lg"}
                       className="text-center font-bold mb-5 lg:mb-10"> {t('h1b')} </Title>

                <Title className={"text-center mb-6 font-bold"} size={"sm"} level={"h3"}>{t('paquetes.titulo')}</Title>

                <div className={"mb-10"}>
                    <CarouselPackages packages={packages}/>
                </div>
            </div>
        </main>
    );
};

export default Page;