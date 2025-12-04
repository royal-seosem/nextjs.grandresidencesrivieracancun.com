import React from 'react';
import SmartVideo from "@/components/commons/ui/SmartVideo";
import BookingBtnDrawer from "@/components/commons/shared/booking/BookingBtnDrawer";
import Title from "@/components/commons/ui/title";
import RichText from "@/components/commons/shared/RitchText";
import {cdn} from "@/lib/cdn";

import AllInclusiveInformation from "@/components/pages/all-inclusive/AllInclusiveInformation";
import CardThemeNights from "@/components/pages/all-inclusive/CardThemeNights";
import CardExperience from "@/components/pages/all-inclusive/CardExperience";
import ModalFlavors from "@/components/pages/all-inclusive/ModalFlavors";
import ModalThemeNights from "@/components/pages/all-inclusive/ModalThemeNights";
import ModalMoments from "@/components/pages/all-inclusive/ModalMoments";
import ModalMixology from "@/components/pages/all-inclusive/ModalMixology";
import {getMessages, getTranslations} from "next-intl/server";
import {headers} from "next/headers";
import {NextIntlClientProvider} from "next-intl";

const Page = async () => {
    const t = await getTranslations('all-inclusive');
    const m = await getMessages();
    const headersList = await headers();
    const isDesktop =  headersList.get('sec-ch-ua-mobile') === '?0';
    return (
        <NextIntlClientProvider messages={{
            "all-inclusive": m["all-inclusive"],
        }}>
            <main>
                <div className="aspect-[5/4] md:aspect-[1921/500]">
                    <SmartVideo
                        isDesktop={isDesktop}
                        className={"w-full h-auto"}
                        srcDesktop={cdn('/video/all-inclusive-banner-new.mp4')}
                        posterDesktop={cdn('/video/all-inclusive-banner-new.jpg')}
                        srcMobile={cdn('/video/all-inclusive-banner-m-new.mp4')}
                        posterMobile={cdn('/video/all-inclusive-banner-m-new.jpg')}/>
                </div>

                <nav className="bg-white shadow-md p-4 mb-14 flex flex-col items-center gap-2 md:gap-4
                    lg:flex-row lg:items-center lg:justify-center lg:gap-8 ">
                    <ul className={"text-base text-primary flex flex-col gap-2 md:flex-row lg:text-nowrap"}>
                        <li className=" relative
                           md:w-2/5 md:shrink-0 flex items-center justify-center text-center
                           md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-[70%] md:after:w-px md:after:bg-accent
                           lg:w-auto lg:px-4 ">
                            <a className={"text-accent font-bold"}>{t('package-title')}</a>
                        </li>
                        <li className="md:w-1/5 md:shrink-0 flex items-center justify-center text-center
                          relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-[70%] md:after:w-px md:after:bg-accent
                          lg:w-auto lg:px-4">
                            <a href={"#rules"}>{t('acc-rules')}</a>
                        </li>
                        <li className="md:w-1/5 md:shrink-0 flex items-center justify-center text-center
                        relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-[70%] md:after:w-px md:after:bg-accent
                        lg:w-auto lg:px-4">
                            <a href={"#faqs"}>{t('acc-faqs')}</a>
                        </li>
                        <li className="md:w-1/5 md:shrink-0 flex items-center justify-center text-center
                    lg:w-auto lg:px-4">
                            <a href={"#members"}>{t('acc-members')}</a>
                        </li>
                    </ul>

                    <BookingBtnDrawer/>
                </nav>

                <div className="my-container">
                    <div className={"flex flex-col  mb-10"}>
                        <Title level="h1" size={"lg"}
                               className="text-center font-bold mb-5 lg:mb-10 lg:text-6xl order-2">
                            {t('h1b')}
                        </Title>
                        <Title level="h2" size="sm" className="text-accent mb-4 font-bold text-center ">
                            {t('h1a')}
                        </Title>
                    </div>

                    <RichText id={"description"} ns={"all-inclusive"}/>

                    <div className="lg:hidden grid grid-cols-2 gap-2 mb-10">
                        <ModalMixology/>
                        <ModalFlavors/>
                        <ModalThemeNights/>
                        <ModalMoments/>
                    </div>
                    <div className={"hidden lg:block"}>
                        <CardThemeNights/>
                        <div className={"lg:mb-[100px]"}>
                            <CardExperience
                                className={"lg:flex-row-reverse"}
                                title={t("alimentos.titulo")}
                                description={{
                                    id: 'alimentos.descripcion',
                                    ns: 'all-inclusive'
                                }}
                                image={[
                                    {
                                        src: "/img/all-inclusive/all-inclusive-flavours-2.jpg",
                                        alt: t('alimentos.alts.0')
                                    },
                                    {
                                        src: "/img/all-inclusive/748x500-comida-1.jpg",
                                        alt: t('alimentos.alts.1')
                                    },
                                    {
                                        src: "/img/all-inclusive/748x500-comida-2.jpg",
                                        alt: t('alimentos.alts.2')
                                    }
                                ]}/>
                        </div>
                        <div className={"lg:mb-[100px]"}>
                            <CardExperience
                                title={t('mixologia.titulo')}
                                description={{id: 'mixologia.descripcion', ns: 'all-inclusive'}}
                                image={[
                                    {src: '/img/all-inclusive/all-inclusive-new.jpg', alt: t('mixologia.alts.0')},
                                    {src: '/img/all-inclusive/748x400-bebida.jpg', alt: t('mixologia.alts.1')},
                                ]}/>
                        </div>
                        <div className={"lg:mb-[100px]"}>
                            <CardExperience
                                className={"lg:flex-row-reverse"}
                                title={t('unforgettable_moments.titulo')}
                                description={{
                                    id: 'unforgettable_moments.descripcion',
                                    ns: 'all-inclusive'
                                }}
                                image={[
                                    {
                                        src: "/img/all-inclusive/unforgettable_moments.jpg",
                                        alt: t("unforgettable_moments.alts.0")
                                    }
                                ]}/>
                        </div>

                    </div>
                </div>

                <AllInclusiveInformation/>
            </main>
        </NextIntlClientProvider>

    );
};

export default Page;