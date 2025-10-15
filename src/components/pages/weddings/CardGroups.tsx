import React from 'react';
import EmailIcon from "@/components/commons/icons/email.svg";
import PhoneCallIcon from "@/components/commons/icons/phone-call.svg";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {useMessages, useTranslations} from "next-intl";
import Paragraph from "@/components/commons/ui/paragraph";
import {Button} from "@/components/commons/ui/button";
import {useWebsite} from "@/context/WebSiteProvider";

const CardGroups = () => {
    const t = useTranslations('weddings');
    const message = useMessages();
    const gallery = message['weddings']['group_event_alt'];
    const {phones} = useWebsite();
    return (
        <article>
            <Gallery variant={"secondary"} position={"on"}>
                {
                    gallery.map((item: { alt: string, img: string }, index: number) => (
                        <CarouselItem key={index}>
                            <CdnImage alt={item.alt} src={item.img} width={700} height={412}/>
                        </CarouselItem>
                    ))
                }
            </Gallery>
            <div className={"p-5"}>
                <h3 className="text-5xl mb-4">{t('grupos.titulo')}</h3>

                <Paragraph>{t('grupos.descripcion')}</Paragraph>

                <div className={"flex flex-col gap-2 justify-start items-start"}>
                    <Button variant={"secondary"} className={"uppercase "}>
                        {t('grupos.contacto')}
                        <EmailIcon width={24} height={24}/>
                    </Button>

                    <a className="flex items-center justify-center gap-2 font-bold uppercase" href={phones['wedding_groups']["phone"]}>
                        {t('grupos.llamanos')} {phones['wedding_groups']["visible"]}
                        <PhoneCallIcon width={24} height={24}/>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default CardGroups;