'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import Title from "@/components/commons/ui/title";
import Paragraph from "@/components/commons/ui/paragraph";
import LinkButton from "@/components/commons/ui/link";
import Modal from "@/components/commons/ui/modal/modal";
import WithTranslateCliente, {WithTranslationProps} from "@/components/commons/shared/withTranslateCliente";

interface ModalAllInclusiveProps {
    allInclusive: boolean;
    setAllInclusive: (value: boolean) => void;
    amenities_alt: string[];
}

const ModalAllInclusive = (
    {allInclusive, setAllInclusive, amenities_alt, messages}: ModalAllInclusiveProps & WithTranslationProps
) => {
    const tmenu = useTranslations('menu');
    // const thome = useTranslations('home');

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
                            <Title level="h3" size="md">{messages["home.plan ai"] as string}</Title>
                            <Paragraph>{messages["home.plan ai descripcion"] as string}</Paragraph>
                            <div>
                                <LinkButton href="/all-inclusive">
                                    {messages["home.plan ai btn"] as string}
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
                            <Title level="h3" size="md">{messages["home.plan bb"] as string}</Title>
                            <Paragraph>{messages['home.plan bb descripcion'] as string}</Paragraph>
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
                            <Title level="h3" size="md">{messages["home.plan ep"] as string}</Title>
                            <div
                                dangerouslySetInnerHTML={{__html: messages['home.plan ep descripcion'] as string}}></div>
                        </div>
                    </div>
                </CarouselItem>

            </Gallery>
        </Modal>
    );
};

export default WithTranslateCliente(ModalAllInclusive, [
    "home.plan ai",
    "home.plan ai descripcion",
    "home.plan ai btn",
    "home.plan bb",
    "home.plan bb descripcion",
    "home.plan ep",
    "home.plan ep descripcion"
]) as React.FC<ModalAllInclusiveProps>;