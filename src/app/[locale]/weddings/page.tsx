import React from 'react';
import SmartVideo from "@/components/commons/ui/SmartVideo";
import {cdn} from "@/lib/cdn";
import Title from "@/components/commons/ui/title";
import {getMessages, getTranslations} from "next-intl/server";
import CarouselPackages from "@/components/pages/weddings/CarouselPackages";
import CdnImage from "@/components/commons/ui/CdnImage";
import CarouselCelebrations from "@/components/pages/weddings/CarouselCelebrations";
import CardImg from "@/components/pages/home/Cardimg";
import ModalGroups from "@/components/pages/weddings/ModalGroups";
import CarouselReviews from "@/components/pages/weddings/CarouselReviews";
import WeddingSubscribe from "@/components/pages/weddings/WeddingSubscribe";
import InstagramFeed from "@/components/commons/shared/InstagramFeed";
import SectionInstagram from "@/components/pages/home/SectionInstagram";

const Page = async () => {
    const t = await getTranslations('weddings');
    const {weddings} = await getMessages();
    const packages = weddings.paquetes.lista
    const celebrations = weddings.celebraciones.lista

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

                <h3 className="text-3xl mb-10 text-center">{t('diferenciadores.titulo')}</h3>
                <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="flex flex-col items-center justify-center">
                        <CdnImage
                            className="block mb-8 rounded-full"
                            width={117} height={117}
                            src="/img/weddings/beneficios/wedding-cordinator.jpg"
                            alt={t('diferenciadores.lista.0.alt')}/>
                        <span className="text-center">{t('diferenciadores.lista.0.titulo')}</span>
                    </div>

                    <div className=" flex flex-col items-center justify-center">
                        <CdnImage
                            className="block mb-8 rounded-full"
                            width={117} height={117}
                            src="/img/weddings/beneficios/surprise-amenities.jpg"
                            alt={t('diferenciadores.lista.1.alt')}/>
                        <span className="text-center">{t('diferenciadores.lista.1.titulo')}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <CdnImage
                            className="block mb-8 rounded-full"
                            width={117} height={117}
                            src="/img/weddings/beneficios/private-transportation.jpg"
                            alt={t('diferenciadores.lista.2.alt')}/>
                        <span className="text-center">{t('diferenciadores.lista.2.titulo')}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <CdnImage
                            className="block mb-8 rounded-full"
                            width={117} height={117}
                            src="/img/weddings/beneficios/guarantee-event.jpg"
                            alt={t('diferenciadores.lista.3.alt')}/>
                        <span className="text-center">{t('diferenciadores.lista.3.titulo')}</span>
                    </div>
                </div>

                {/*Divider*/}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-[1px] bg-input grow"></div>
                    <CdnImage
                        width={52} height={52}
                        alt={"Grand Residences Riviera Cancún"}
                        src={"/img/icons/gr-separador.jpg"}/>
                    <div className="h-[1px] bg-input grow"></div>
                </div>

                {/*Celebraciones*/}
                <h3 className="text-3xl mb-10 text-center">{t('celebraciones.titulo')}</h3>
                <div className="mb-10">
                    <CarouselCelebrations items={celebrations}/>
                </div>

                {/*Group*/}
                <div className="mb-10">
                    <ModalGroups/>
                </div>

                {/*Divider*/}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-[1px] bg-input grow"></div>
                    <CdnImage
                        width={52} height={52}
                        alt={"Grand Residences Riviera Cancún"}
                        src={"/img/icons/gr-separador.jpg"}/>
                    <div className="h-[1px] bg-input grow"></div>
                </div>

                {/*Comentarios*/}
                <h3 className="text-3xl mb-10 text-center">{t('comentarios.titulo')}</h3>
                <CarouselReviews/>

                {/* Subscription form   */}
                <WeddingSubscribe/>
            </div>

            {/* Instagram Feed */}
            <SectionInstagram/>
        </main>
    );
};

export default Page;