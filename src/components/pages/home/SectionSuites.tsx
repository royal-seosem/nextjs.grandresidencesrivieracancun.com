import dynamic from "next/dynamic";
import React from "react";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import Title from "@/components/commons/ui/title";
import Paragraph from "@/components/commons/ui/paragraph";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import LinkButton from "@/components/commons/ui/link";

const SectionSuitesMobile = dynamic(() => import("@/components/pages/home/SectionSuitesMobile"));
const Gallery = dynamic(() => import("@/components/commons/ui/gallery/gallery"));

interface SectionSuitesProps {
    text: {
        goToSuites: string;
        habitacionesTitulo: string;
        habitacionesDescripcion: string;
        planesTituloGeneral: string;
        planesSubtitulo: string;
        planAi: string;
        planAiDescripcion: string;
        planAiBtn: string;
        planBb: string;
        planBbDescripcion: string;
        planEp: string;
        planEpDescripcion: string;
    },
    group_event_alt: string[];
    habitaciones: string[];
    amenities_alt: string[];
}

const SectionSuites = (
    {text, habitaciones, amenities_alt, group_event_alt}: SectionSuitesProps
) => {


    return (
        <>

            <SectionSuitesMobile
                habitaciones={habitaciones}
                amenities_alt={amenities_alt}
                group_event_alt={group_event_alt}/>

            <section className="hidden lg:block">
                <div className="flex gap-8 relative mb-16 my-container
                    before:content-[''] before:absolute before:right-[50px] before:bg-[#ecba58] before:w-screen before:h-[114%] before:top-[-8%] before:opacity-20 before:max-w-[1630px]">
                    <div className="p-5 w-1/2 relative">
                        <Title
                            className="text-5xl font-normal font-primary text-primary mb-6"
                            level="h3"
                            size="lg">
                            {text.habitacionesTitulo}
                        </Title>
                        <Paragraph>{text.habitacionesDescripcion}</Paragraph>
                        <LinkButton href="/suites"
                                    className="flex items-center justify-center gap-2 border border-primary py-2 px-1.5 text-sm font-bold text-primary rounded-xs uppercase">
                            {text.goToSuites}
                            <ArrowRightIcon className="shrink-0" width={16} height={16}/>
                        </LinkButton>
                    </div>
                    <div className="w-1/2">
                        <Gallery>
                            <CarouselItem>
                                <figure className="relative">
                                    <CdnImage alt={habitaciones[0]} src="/img/rooms/junior-suite-king.jpg"
                                              width={748}
                                              height={448}/>
                                    <figcaption
                                        className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                                        {habitaciones[0]}
                                    </figcaption>
                                </figure>
                            </CarouselItem>

                            <CarouselItem>
                                <figure className="relative">
                                    <CdnImage alt={habitaciones[1]} src="/img/rooms/junior-suite-jacuzzi.jpg"
                                              width={748}
                                              height={448}/>
                                    <figcaption
                                        className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                                        {habitaciones[1]}
                                    </figcaption>
                                </figure>
                            </CarouselItem>

                            <CarouselItem>
                                <figure className="relative">

                                    <CdnImage alt={habitaciones[2]} src="/img/rooms/master-suite.jpg?v=1"
                                              width={748}
                                              height={448}/>
                                    <figcaption
                                        className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                                        {habitaciones[2]}
                                    </figcaption>
                                </figure>
                            </CarouselItem>

                            <CarouselItem>
                                <figure className="relative">
                                    <CdnImage alt={habitaciones[3]}
                                              src="/img/rooms/master-suite-private-pool.jpg?v=1"
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
                                    <CdnImage alt={habitaciones[4]} src="/img/rooms/master-suite-penthouse.jpg"
                                              width={748}
                                              height={448}/>
                                    <figcaption
                                        className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                                        {habitaciones[4]}
                                    </figcaption>
                                </figure>
                            </CarouselItem>

                            <CarouselItem>
                                <figure className="relative">
                                    <CdnImage alt={habitaciones[5]} src="/img/rooms/presidencial.jpg?v=2"
                                              width={748}
                                              height={448}/>
                                    <figcaption
                                        className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                                        {habitaciones[5]}
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                        </Gallery>
                    </div>
                </div>

                <div>
                    <Title level={"h2"} size={"md"} className="text-center">
                        {text.planesTituloGeneral}
                    </Title>
                    <Paragraph className="text-center mb-16">
                        {text.planesSubtitulo}
                    </Paragraph>
                </div>
                <div className="flex gap-8 relative mb-16 my-container">
                    <Gallery variant="primary" position="bottom">
                        <CarouselItem>
                            <div className="flex items-center gap-8 ">
                                <CdnImage
                                    className="w-1/2 grow-0 shrink-0"
                                    width={850} height={350}
                                    alt={amenities_alt[0]}
                                    src="/img/rateplans/all-inclusive.jpg"/>
                                <div className="py-7 px-5">
                                    <Title level="h3" size="md">{text.planAi}</Title>
                                    <Paragraph>{text.planAiDescripcion}</Paragraph>
                                    <div>
                                        <LinkButton href="/all-inclusive">
                                            {text.planAiBtn}
                                        </LinkButton>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex items-center gap-8 ">
                                <CdnImage
                                    className="w-1/2 grow-0 shrink-0"
                                    width={850} height={350}
                                    alt={amenities_alt[1]}
                                    src="/img/rateplans/transportations.jpg"/>

                                <div className="py-7 px-5">
                                    <Title level="h3" size="md">{text.planBb}</Title>
                                    <Paragraph>{text.planBbDescripcion}</Paragraph>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex items-center gap-8 ">
                                <CdnImage
                                    className="w-1/2 grow-0 shrink-0"
                                    width={850} height={350}
                                    alt={amenities_alt[2]}
                                    src="/img/rateplans/onlyroom.jpg"/>

                                <div className="py-7 px-5">
                                    <Title level="h3" size="md">{text.planEp}</Title>
                                    <div dangerouslySetInnerHTML={{__html: text.planEpDescripcion}}></div>
                                </div>
                            </div>
                        </CarouselItem>
                    </Gallery>
                </div>
            </section>

        </>
    );
};

export default SectionSuites;