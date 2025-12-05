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
import WithTranslateCliente, {WithTranslationProps} from "@/components/commons/shared/withTranslateCliente";

interface ModalWeddingProps {
    wedding: boolean;
    setWedding: (value: boolean) => void;
    group_event_alt: string[];
}
const ModalWedding = (
    {wedding, setWedding, group_event_alt, messages}: ModalWeddingProps & WithTranslationProps
) => {
    const tmenu = useTranslations('menu');
    // const thome = useTranslations('home');

    return (
        <Modal open={wedding} setOpen={setWedding} header={tmenu('wedding')}>
            <Gallery>
                <CarouselItem>
                    <CdnImage src="/img/weddings/wedding-f.jpg" alt={group_event_alt[0]} width={700}
                              height={400}/>
                </CarouselItem>
                <CarouselItem>
                    <CdnImage src="/img/weddings/wedding-g.jpg" alt={group_event_alt[1]} width={700}
                              height={400}/>
                </CarouselItem>
                <CarouselItem>
                    <CdnImage src="/img/weddings/wedding-h.jpg" alt={group_event_alt[2]} width={700}
                              height={400}/>
                </CarouselItem>
                <CarouselItem>
                    <CdnImage src="/img/weddings/wedding-i.jpg" alt={group_event_alt[3]} width={700}
                              height={400}/>
                </CarouselItem>
            </Gallery>
            <div className="p-5">
                <Title level="h3" size="lg">{messages["home.eventos titulo"] as string}</Title>
                <Paragraph>{messages["home.eventos descripcion"] as string}</Paragraph>
                <div className="flex justify-center">
                    <LinkButton href="/weddings">
                        {messages["home.eventos boton"] as string}
                        <ArrowRightIcon className="shrink-0" width={16} height={16}/>
                    </LinkButton>
                </div>
            </div>
        </Modal>
    );
};

export default WithTranslateCliente(ModalWedding, [
    "home.eventos titulo",
    "home.eventos descripcion",
    "home.eventos boton"
]) as React.FC<ModalWeddingProps>;