'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import {useLocale} from "use-intl";
import {CarouselItem} from "@/components/commons/ui/carousel";
import Gallery from "@/components/commons/ui/gallery/gallery";
import CardPackage, {PackageInfo} from "@/components/pages/weddings/CardPackage";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";

interface CarouselPackagesProps {
    packages: PackageInfo[];
}


const ButtonDowload = () => {
    const t = useTranslations('weddings');
    const lang = useLocale();
    let url = "/pdf/wedding-packages-gr-2024-2025-01.pdf";
    if (lang === "es") url = "/pdf/paquetes-bodas-gr-2024-2025-01.pdf";

    return (
        <a href={url} target="_blank" rel="noopener noreferrer"
            className="
                flex items-center justify-center gap-2 py-1 px-2 text-sm font-bold rounded-sm
                border border-primary bg-background shadow-xs hover:bg-secondary hover:border-secondary hover:shadow-secondary-md hover:text-primary
            ">
            {t('paquetes.btn')}
            <ArrowRightIcon width={16} height={16}/>
        </a>
    )
}

const CarouselPackages = (
    {packages}: CarouselPackagesProps,
) => {
    return (
        <Gallery variant={"primary"} position={"bottom"}
                 button={ButtonDowload()}>
            {
                packages.map((item: PackageInfo, index: number) => (
                    <CarouselItem key={index} className={"md:basis-1/2 lg:basis-1/3"}>
                        <div className={"p-2 h-full"}>
                            <CardPackage infoPackage={item}/>
                        </div>
                    </CarouselItem>
                ))
            }
        </Gallery>
    );
};

export default CarouselPackages;