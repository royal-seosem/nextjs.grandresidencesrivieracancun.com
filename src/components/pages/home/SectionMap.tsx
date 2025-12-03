import React from 'react';
import dynamic from "next/dynamic";
import Title from "@/components/commons/ui/title";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import Paragraph from "@/components/commons/ui/paragraph";
import {cn} from "@/lib/utils";
import {getTranslations} from "next-intl/server";
import {MapClient} from "@/components/pages/home/HomeClientComponents";



const SectionMap = async (
    {className}: { className?: string }
) => {
    const t = await getTranslations('home');
    const tg = await getTranslations('general');


    return (
        <article className={cn(
            'my-container lg:flex lg:items-center lg:justify-between lg:gap-5 lg:mb-14',
            className)}>
            <div className="lg:order-2">
                <Title level={"h2"} size={"md"}> {t('ubicacion titulo')} </Title>
                <Paragraph>{t('ubicacion descripcion')}</Paragraph>
                <a href={"/img/general/site-plan-grand-residences-riviera-cancun.jpg?v=2"}
                   download={"site-plan-grand-residences-riviera-cancun.jpg"}
                   className={cn(
                       "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                       "border border-primary bg-background shadow-xs hover:bg-secondary hover:border-secondary hover:shadow-secondary-md hover:text-primary",
                       "h-9 px-4 py-2 has-[>svg]:px-3",
                       "mb-2 uppercase"
                   )}>
                    {tg('download-mapa')}
                    <ArrowRightIcon width={16} height={16}/>
                </a>
            </div>
            <MapClient/>

        </article>
    );
};

export default SectionMap;