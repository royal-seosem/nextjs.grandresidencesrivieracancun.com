'use client'
import React from 'react';
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import Title from "@/components/commons/ui/title";
import Paragraph from "@/components/commons/ui/paragraph";
import LinkButton from "@/components/commons/ui/link";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import Modal from "@/components/commons/ui/modal/modal";
import {useTranslations} from "next-intl";

interface ModalSuitesProps {
    suites: boolean;
    setSuites: (value: boolean) => void;
    habitaciones: string[];
}
const ModalSuites = (
    {suites, setSuites, habitaciones}: ModalSuitesProps
) => {
    const t = useTranslations('general');
    const thome = useTranslations('home');
    const tmenu = useTranslations('menu');

    return (
        <Modal open={suites} setOpen={setSuites} header={tmenu('suites')}>
            <Gallery>
                <CarouselItem>
                    <figure className="relative">
                        <CdnImage alt={habitaciones[0]} src="/img/rooms/junior-suite-king.jpg" width={748}
                                  height={448}/>
                        <figcaption
                            className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                            {habitaciones[0]}
                        </figcaption>
                    </figure>
                </CarouselItem>

                <CarouselItem>
                    <figure className="relative">
                        <CdnImage alt={habitaciones[1]} src="/img/rooms/junior-suite-jacuzzi.jpg" width={748}
                                  height={448}/>
                        <figcaption
                            className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                            {habitaciones[1]}
                        </figcaption>
                    </figure>
                </CarouselItem>

                <CarouselItem>
                    <figure className="relative">

                        <CdnImage alt={habitaciones[2]} src="/img/rooms/master-suite.jpg?v=1" width={748}
                                  height={448}/>
                        <figcaption
                            className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                            {habitaciones[2]}
                        </figcaption>
                    </figure>
                </CarouselItem>

                <CarouselItem>
                    <figure className="relative">
                        <CdnImage alt={habitaciones[3]} src="/img/rooms/master-suite-private-pool.jpg?v=1"
                                  width={748}
                                  height={448}/>
                        <figcaption
                            className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                            {habitaciones[3]}
                        </figcaption>
                    </figure>
                </CarouselItem>

                <CarouselItem>
                    <figure className="relative">
                        <CdnImage alt={habitaciones[4]} src="/img/rooms/master-suite-penthouse.jpg" width={748}
                                  height={448}/>
                        <figcaption
                            className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                            {habitaciones[4]}
                        </figcaption>
                    </figure>
                </CarouselItem>

                <CarouselItem>
                    <figure className="relative">
                        <CdnImage alt={habitaciones[5]} src="/img/rooms/presidencial.jpg?v=2" width={748}
                                  height={448}/>
                        <figcaption
                            className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                            {habitaciones[5]}
                        </figcaption>
                    </figure>
                </CarouselItem>
            </Gallery>
            <div className="p-5">
                <Title level="h3" size="lg">{thome('habitaciones titulo')}</Title>
                <Paragraph>{thome('habitaciones descripcion')}</Paragraph>
            </div>
            <div className="flex justify-center">
                <LinkButton href="/suites"
                            className="flex items-center justify-center gap-2 border border-primary py-2 px-1.5 text-sm font-bold text-primary rounded-xs uppercase">
                    {t('go to suites')}
                    <ArrowRightIcon className="shrink-0" width={16} height={16}/>
                </LinkButton>
            </div>
        </Modal>
    );
};

export default ModalSuites;