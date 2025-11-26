'use client'
import React from 'react';
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import Title from "@/components/commons/ui/title";
import Paragraph from "@/components/commons/ui/paragraph";
import LinkButton from "@/components/commons/ui/link";
import RitchTextClient from "@/components/commons/shared/RitchTextClient";
import Modal from "@/components/commons/ui/modal/modal";
import {useTranslations} from "next-intl";

interface ModalAllInclusiveProps {
    allInclusive: boolean;
    setAllInclusive: (value: boolean) => void;
    amenities_alt: string[];
}

const ModalAllInclusive = (
    {allInclusive, setAllInclusive, amenities_alt}: ModalAllInclusiveProps
) => {
    const tmenu = useTranslations('menu');
    const thome = useTranslations('home');

    return (
        <Modal open={allInclusive} setOpen={setAllInclusive} header={tmenu('all inclusive')}>
            <Gallery variant="primary" position="bottom">
                <CarouselItem>
                    <div>
                        <CdnImage
                            width={850} height={350}
                            alt={amenities_alt[0]}
                            src="/img/rateplans/all-inclusive.jpg"/>
                        <div className="py-7 px-5">
                            <Title level="h3" size="md">{thome('plan ai')}</Title>
                            <Paragraph>{thome('plan ai descripcion')}</Paragraph>
                            <div>
                                <LinkButton href="/all-inclusive">
                                    {thome('plan ai btn')}
                                </LinkButton>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div>
                        <CdnImage
                            width={850} height={350}
                            alt={amenities_alt[1]}
                            src="/img/rateplans/transportations.jpg"/>

                        <div className="py-7 px-5">
                            <Title level="h3" size="md">{thome('plan bb')}</Title>
                            <Paragraph>{thome('plan bb descripcion')}</Paragraph>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div>
                        <CdnImage
                            width={850} height={350}
                            alt={amenities_alt[2]}
                            src="/img/rateplans/onlyroom.jpg"/>

                        <div className="py-7 px-5">
                            <Title level="h3" size="md">{thome('plan ep')}</Title>
                            <RitchTextClient id={'plan ep descripcion'} ns={'home'}/>
                        </div>
                    </div>
                </CarouselItem>

            </Gallery>
        </Modal>
    );
};

export default ModalAllInclusive;