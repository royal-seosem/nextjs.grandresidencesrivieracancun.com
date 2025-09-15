'use client'
import React from 'react';
import Title from "@/components/commons/ui/title";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import {useTranslations} from "next-intl";
import Paragraph from "@/components/commons/ui/paragraph";
import LinkButton from "@/components/commons/ui/link";
import GoogleMap from "@/components/commons/shared/GoogleMap";
import {useInViewport} from "@/components/commons/hooks/useInViewport";
import {cn} from "@/lib/utils";


const SectionMap = (
    {className}: { className?: string }
) => {
    const t = useTranslations('home');
    const tg = useTranslations('general');

    const [ref, inView] = useInViewport<HTMLDivElement>({rootMargin: '150px'});

    return (
        <article ref={ref} className={cn(
            'my-container lg:flex lg:items-center lg:justify-between lg:gap-5 lg:mb-14',
            className)}>
            <div className="lg:order-2">
                <Title level={"h2"} size={"md"}> {t('ubicacion titulo')} </Title>
                <Paragraph>{t('ubicacion descripcion')}</Paragraph>
                <LinkButton variant={"outline"} href={"/map-resort"} className={"mb-2"}>
                    {tg('download-mapa')}
                    <ArrowRightIcon width={16} height={16}/>
                </LinkButton>
            </div>
            <div className="lg:order-1 grow min-h-[300px]">
                {inView && <GoogleMap/>}
            </div>
        </article>
    );
};

export default SectionMap;