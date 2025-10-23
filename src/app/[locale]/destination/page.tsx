import React from 'react';
import BookingHeader from "@/components/commons/shared/booking/BookingHeader";
import SmartVideo from "@/components/commons/ui/SmartVideo";
import {cdn} from "@/lib/cdn";
import Title from "@/components/commons/ui/title";
import {useMessages, useTranslations} from "next-intl";
import RichText from "@/components/commons/shared/RitchText";
import CardDestination from "@/components/pages/destination/CardDestination";
import CdnImage from "@/components/commons/ui/CdnImage";

const Page = () => {
    const t = useTranslations('destination');
    const m = useMessages();
    return (
        <main>
            <BookingHeader/>

            <div className="aspect-[5/4] md:aspect-[1921/500] mb-10">
                <SmartVideo
                    className="w-full h-auto"
                    posterDesktop={cdn('/video/destino.jpg')}
                    posterMobile={cdn('/video/destino-m.jpg')}
                    srcDesktop={cdn('/video/destino-low.mp4')}
                    srcMobile={cdn('/video/destino-m.mp4')}/>
            </div>

            <div className={"my-container"}>
                <Title level="h1" size="lg" className="text-center font-bold mb-5 lg:mb-10">
                    {t('h1a')}
                </Title>

                <div className={"mb-10"}>
                    <RichText id={"descripcion"} ns={"destination"}/>
                </div>

                <div className={"grid grid-cols-2 gap-2 mb-10 w-full"}>
                    <CardDestination
                        className={"col-span-2"}
                        image={"/img/destination/680x400/gr-puertomorelos.jpg"}
                        title={t('parrafo1.titulo')}
                        cardExperience={{
                            title: t('parrafo1.titulo'),
                            description: {id: 'parrafo1.descripcion', ns: 'destination'},
                            image: m['destination']['parrafo1']['gallery']
                        }}/>

                    <CardDestination
                        image={"/img/destination/680x400/Tulum.jpg"}
                        title={t('parrafo2.title-short')}
                        cardExperience={{
                            title: t('parrafo2.titulo'),
                            description: {id: 'parrafo2.descripcion', ns: 'destination'},
                            image: m['destination']['parrafo2']['gallery']
                        }}/>

                    <CardDestination
                        image={"/img/destination/gr-diving.jpg"}
                        title={t('parrafo3.title-short')}
                        cardExperience={{
                            title: t('parrafo3.titulo'),
                            description: {id: 'parrafo3.descripcion', ns: 'destination'},
                            image: m['destination']['parrafo3']['gallery']
                        }}/>

                    <CardDestination
                        className={"col-span-2"}
                        image={"/img/destination/shopping-1.jpg"}
                        title={t('parrafo4.titulo')}
                        cardExperience={{
                            title: t('parrafo4.titulo'),
                            description: {id: 'parrafo4.descripcion', ns: 'destination'},
                            image: m['destination']['parrafo4']['gallery']
                        }}/>

                    <CardDestination
                        className={"col-span-2"}
                        image={"/img/destination/gr-diving.jpg"}
                        title={t('parrafo6.titulo')}
                        cardExperience={{
                            title: t('parrafo6.titulo'),
                            description: {id: 'parrafo6.descripcion', ns: 'destination'},
                            image: m['destination']['parrafo6']['gallery']
                        }}/>


                </div>
            </div>
            <div>
                <div className={"my-container"}>
                    <h3 className={"font-secondary text-4xl mb-10 text-center"}>{t('parrafo5.titulo')}</h3>
                </div>
                <CdnImage
                    width={425} height={254}
                    className={"w-full object-cover"}
                    alt={t('parrafo5.titulo')}
                    src={"/img/destination/gr-cenotes-azul2.jpg"}/>
            </div>

        </main>
    );
};

export default Page;