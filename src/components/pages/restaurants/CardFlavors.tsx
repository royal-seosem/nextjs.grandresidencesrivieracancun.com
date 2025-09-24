import React from 'react';
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import {useTranslations} from "next-intl";
import Paragraph from "@/components/commons/ui/paragraph";

const CardFlavors = () => {
    const t = useTranslations('restaurants');
    return (
        <div className="
            pt-[240px] pb-[280px] mb-10 md:pb-[50px] md:pt-[100px]
            bg-[url('https://grandresidencesrivieracancun.com/img/general/restaurant-bg-mb.png')]
            md:bg-[url('https://grandresidencesrivieracancun.com/img/general/1440x547/bg-restaurant-tbl.png')] md:bg-top md:mb-0
            bg-cover bg-center bg-no-repeat
        ">
            <div className={"my-container md:flex gap-5"}>
                <div className={"mb-5 order-2 md:w-1/2 md:shrink-0"}>
                    <Gallery key={"flavors"} variant={"secondary"} position={"on"}>
                        <CarouselItem>
                            <figure className={"relative"}>
                                <CdnImage
                                    src={"/img/restaurants/barbacue.jpg"}
                                    width={595}
                                    height={510}
                                    alt={t('bbq')}
                                />
                                <figcaption className=" p-2.5 bg-white absolute top-0 right-0 rounded-sm">
                                    {t('bbq')}
                                </figcaption>
                            </figure>

                        </CarouselItem>

                        <CarouselItem>
                            <figure className={"relative"}>
                                <CdnImage
                                    src={"/img/restaurants/francesa.jpg"}
                                    width={595}
                                    height={510}
                                    alt={t('francesa')}
                                />
                                <figcaption className=" p-2.5 bg-white absolute top-0 right-0">
                                    {t('francesa')}
                                </figcaption>
                            </figure>

                        </CarouselItem>

                        <CarouselItem>
                            <figure className={"relative"}>
                                <CdnImage
                                    src={"/img/restaurants/italiana.jpg"}
                                    width={595}
                                    height={510}
                                    alt={t('italiana')}
                                />
                                <figcaption className=" p-2.5 bg-white absolute top-0 right-0">
                                    {t('italiana')}
                                </figcaption>
                            </figure>

                        </CarouselItem>

                        <CarouselItem>
                            <figure className={"relative"}>
                                <CdnImage
                                    src={"/img/restaurants/mariscos.jpg"}
                                    width={595}
                                    height={510}
                                    alt={t('mariscos')}
                                />
                                <figcaption className=" p-2.5 bg-white absolute top-0 right-0">
                                    {t('mariscos')}
                                </figcaption>
                            </figure>

                        </CarouselItem>
                    </Gallery>
                </div>
                <div className={"order-1 flex flex-col justify-center"}>
                    <CdnImage
                        src={"/img/icons/eva-moon-fill.svg"}
                        alt={"Icon moon"}
                        width={50}
                        height={50}/>
                    <h3 className="text-secondary text-3xl text-center mb-5">
                        {t('titulo noches')}
                    </h3>
                    <Paragraph className="text-lg text-white">
                        {t('descripcion noches')}
                    </Paragraph>
                </div>
            </div>

        </div>
    );
};

export default CardFlavors;