import React from 'react';
import BookingHeader from "@/components/commons/shared/booking/BookingHeader";
import CdnImage from "@/components/commons/ui/CdnImage";
import Title from "@/components/commons/ui/title";
import RichText from "@/components/commons/shared/RitchText";
import {useMessages, useTranslations} from "next-intl";
import SectionKids from "@/components/pages/amenities/SectionKids";
import SectionActivities from "@/components/pages/amenities/SectionActivities";
import {Link} from "@/i18n/navigation";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import Paragraph from "@/components/commons/ui/paragraph";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";

const Page = () => {
    const t = useTranslations('amenities');
    const {amenities: {amenidades: {lista}}} = useMessages();
    return (
        <main>
            <BookingHeader/>
            <div className="mb-14">
                <CdnImage
                    className="md:hidden w-full object-cover"
                    alt={"Suites"}
                    width={360}
                    height={213}
                    src={"/img/activities/actividades-header-new-1.jpg"}/>
                <CdnImage
                    className="hidden md:block w-full object-cover"
                    width={1360}
                    height={400}
                    alt={"Suites"}
                    src="/img/activities/1360x400/actividades-header-new-1.jpg"
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


                <div className="mb-14">
                    <RichText id={"descripcion"} ns={"amenities"}/>
                </div>

                <SectionKids/>
                <SectionActivities/>

                <div className={"mb-14 lg:flex lg:bg-[#fcf7ec] gap-5 py-10"}>
                    <CdnImage
                        className={"mb-5 w-full object-cover lg:w-[600px] grow-0"}
                        alt={t('spa.titulo')}
                        src={"/img/activities/spa.png"}
                        width={701}
                        height={469}/>

                    <div>
                        <h3 className="text-primary text-3xl text-center mb-5 lg:text-5xl ">
                            {t('spa.titulo')}
                        </h3>

                        <p className={"mb-5"}>
                            <RichText id={"spa.descripcion"} ns={"amenities"}/>
                        </p>


                        <div className={"flex justify-center lg:justify-start"}>
                            <Link
                                className="text-primary border border-primary flex items-center gap-2 text-sm font-bold uppercase px-2 py-1 rounded-sm transition-all
                            hover:bg-secondary hover:border-secondary"
                                href="/menu-spa">
                                {t('spa.explore')}
                                <ArrowRightIcon className="shrink-0" width={16} height={16}/>
                            </Link>
                        </div>
                    </div>

                </div>

                <h3 className="text-primary text-3xl text-center mb-5 lg:text-5xl">
                    {t('amenidades.titulo')}
                </h3>

                <div className={"mb-10"}>
                    <RichText id={"amenidades.descripcion"} ns={"amenities"}/>
                </div>


                <div className={"md:flex items-start gap-5"}>
                    <div className={"mb-5 order-2 md:w-1/2"}>
                        <Gallery variant={"secondary"} position={"on"}>
                            <CarouselItem>
                                <CdnImage
                                    className={"w-full object-cover"}
                                    alt={"bottle-of-Tequila"}
                                    src={"/img/activities/bottle-of-Tequila.jpg"}
                                    width={600}
                                    height={700}/>
                            </CarouselItem>
                            <CarouselItem>
                                <CdnImage
                                    className={"w-full object-cover"}
                                    alt={"and-dry-fruit"}
                                    src={"/img/activities/Fresh-and-dry-fruit.jpg"}
                                    width={600}
                                    height={700}/>
                            </CarouselItem>
                            <CarouselItem>
                                <CdnImage
                                    className={"w-full object-cover"}
                                    alt={"Gifts-for-kids"}
                                    src={"/img/activities/Gifts-for-kids.jpg"}
                                    width={600}
                                    height={700}/>
                            </CarouselItem>
                            <CarouselItem>
                                <CdnImage
                                    className={"w-full object-cover"}
                                    alt={"gr-amenities-buttler"}
                                    src={"/img/activities/m-gr-amenities-buttler.jpg"}
                                    width={600}
                                    height={700}/>
                            </CarouselItem>
                            <CarouselItem>
                                <CdnImage
                                    className={"w-full object-cover"}
                                    alt={"gr-amenities-gift"}
                                    src={"/img/activities/m-gr-amenities-gift.jpg"}
                                    width={600}
                                    height={700}/>
                            </CarouselItem>
                        </Gallery>
                    </div>

                    <div>
                        <h3 className={"text-2xl text-primary font-bold mb-5"}>{t('amenidades.subtitulo')}</h3>
                        {
                            lista.map((item: { title: string, list: string[] }, index: number) => (
                                <div key={index} className={"mb-4"}>
                                    <h2 className={"text-lg font-bold mb-4"}>{item.title}</h2>
                                    <ul className={"list-disc ml-5"}>
                                        {
                                            item.list.map((item: string, index: number) => (
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </main>
    );
};

export default Page;