import React from 'react';
import {getLocale, getMessages, getTranslations} from "next-intl/server";
import BookingHeader from "@/components/commons/shared/booking/BookingHeader";
import SmartVideo from "@/components/commons/ui/SmartVideo";
import {cdn} from "@/lib/cdn";
import Title from "@/components/commons/ui/title";
import RichText from "@/components/commons/shared/RitchText";
import CdnImage from "@/components/commons/ui/CdnImage";
import CardDestination from "@/components/pages/destination/CardDestination";
import CardExperience from "@/components/pages/destination/CardExperience";
import BookingBtnDrawer from "@/components/commons/shared/booking/BookingBtnDrawer";
import {NextIntlClientProvider} from "next-intl";
import {headers} from "next/headers";


const Page = async () => {
    const t = await getTranslations('destination');
    const {destination, home, general, "all-inclusive": allInclusive} = await getMessages();

    const headersList = await headers();
    const isDesktop = headersList.get('sec-ch-ua-mobile') === '?0';

    const locale = await getLocale()
    return (
        <NextIntlClientProvider messages={{
            destination: destination,
            "general": {
                "read more": general['read more'],
                privacy: general['privacy'],
            },
            "home": {
                tripadvisor: home['tripadvisor'],
                tripadvisor_reviews: home['tripadvisor_reviews'],
                tripadvisor_rating: home['tripadvisor_rating'],
                tripadvisor_choice: home['tripadvisor_choice'],
            },
            "all-inclusive": {
                mixologia: {
                    titulo:  allInclusive['mixologia']['titulo'],
                }
            }
        }}>
            <main>
                <BookingHeader/>

                <div className="aspect-[5/4] md:aspect-[1921/500] mb-10">
                    <SmartVideo
                        isDesktop={isDesktop}
                        className="w-full h-auto"
                        posterDesktop={cdn('/video/destino.jpg')}
                        posterMobile={cdn('/video/destino-m.jpg')}
                        srcDesktop={cdn('/video/destino-low.mp4')}
                        srcMobile={cdn('/video/destino-m.mp4')}/>
                </div>

                <div className={"my-container"}>
                    <Title level="h1" size="lg" className="text-center font-bold mb-5 lg:mb-10 lg:font-normal">
                        {t('h1a')}
                    </Title>

                    <div className={"mb-10"}>
                        <RichText id={"descripcion"} ns={"destination"}/>
                    </div>

                    <div className={"grid grid-cols-2 gap-2 mb-10 w-full lg:hidden"}>
                        <CardDestination
                            className={"col-span-2"}
                            image={"/img/destination/680x400/gr-puertomorelos.jpg"}
                            title={t('parrafo1.titulo')}
                            cardExperience={{
                                title: t('parrafo1.titulo'),
                                description: {id: 'parrafo1.descripcion', ns: 'destination'},
                                image: destination['parrafo1']['gallery']
                            }}/>

                        <CardDestination
                            image={"/img/destination/680x400/Tulum.jpg"}
                            title={t('parrafo2.title-short')}
                            cardExperience={{
                                title: t('parrafo2.titulo'),
                                description: {id: 'parrafo2.descripcion', ns: 'destination'},
                                image: destination['parrafo2']['gallery']
                            }}/>

                        <CardDestination
                            image={"/img/destination/gr-diving.jpg"}
                            title={t('parrafo3.title-short')}
                            cardExperience={{
                                title: t('parrafo3.titulo'),
                                description: {id: 'parrafo3.descripcion', ns: 'destination'},
                                image: destination['parrafo3']['gallery']
                            }}/>

                        <CardDestination
                            className={"col-span-2"}
                            image={"/img/destination/shopping-1.jpg"}
                            title={t('parrafo4.titulo')}
                            cardExperience={{
                                title: t('parrafo4.titulo'),
                                description: {id: 'parrafo4.descripcion', ns: 'destination'},
                                image: destination['parrafo4']['gallery']
                            }}/>

                        {locale == 'en' && <CardDestination
                            className={"col-span-2"}
                            image={"/img/destination/gr-diving.jpg"}
                            title={t('parrafo6.titulo')}
                            cardExperience={{
                                title: t('parrafo6.titulo'),
                                description: {id: 'parrafo6.descripcion', ns: 'destination'},
                                image: destination['parrafo6']['gallery']
                            }}/>}
                    </div>

                    <div className={"hidden lg:flex flex-col gap-[100px] mb-10"}>
                        <CardExperience
                            title={t('parrafo1.titulo')}
                            description={{id: 'parrafo1.descripcion', ns: 'destination'}}
                            image={destination['parrafo1']['gallery']}/>

                        <CardExperience
                            className={"flex-row-reverse"}
                            title={t('parrafo2.titulo')}
                            description={{id: 'parrafo2.descripcion', ns: 'destination'}}
                            image={destination['parrafo2']['gallery']}/>

                        <CardExperience
                            title={t('parrafo3.titulo')}
                            description={{id: 'parrafo3.descripcion', ns: 'destination'}}
                            image={destination['parrafo3']['gallery']}/>

                        <CardExperience
                            className={"flex-row-reverse"}
                            title={t('parrafo4.titulo')}
                            description={{id: 'parrafo4.descripcion', ns: 'destination'}}
                            image={destination['parrafo4']['gallery']}/>

                        <CardExperience
                            title={t('parrafo6.titulo')}
                            description={{id: 'parrafo6.descripcion', ns: 'destination'}}
                            image={destination['parrafo6']['gallery']}/>
                    </div>
                </div>
                <div>
                    <div className={"my-container"}>
                        <h3 className={"font-secondary lg:font-primary text-4xl lg:text-[52px] mb-10 text-center"}>
                            {t('parrafo5.titulo')}
                        </h3>

                        <div className={"flex justify-center p-20"}>
                            <BookingBtnDrawer className={"font-bold py-2 px-5 uppercase"} btnText={t('boton')}/>
                        </div>
                    </div>
                    <CdnImage
                        width={425} height={254}
                        className={"w-full object-cover md:hidden"}
                        alt={t('parrafo5.titulo')}
                        src={"/img/destination/gr-cenotes-azul2.jpg"}/>

                    <CdnImage
                        width={1687} height={620}
                        className={"w-full object-cover hidden md:block"}
                        alt={t('parrafo5.titulo')}
                        src={"/img/destination/1360x400/gr-cenotes-azul2.jpg"}/>
                </div>

            </main>
        </NextIntlClientProvider>

    );
};

export default Page;