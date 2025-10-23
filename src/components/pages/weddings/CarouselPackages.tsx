'use client'
import React from 'react';
import Gallery from "@/components/commons/ui/gallery/gallery";
import CardPackage, {CardPackageProps, PackageInfo} from "@/components/pages/weddings/CardPackage";
import {CarouselItem} from "@/components/commons/ui/carousel";
import {Button} from "@/components/commons/ui/button";
import {useTranslations} from "next-intl";

interface CarouselPackagesProps {
    packages: PackageInfo[];
}


const ButtonDowload = ()=> {
    const t = useTranslations('weddings');
    return (
        <Button  variant={"outline"}>
            {t('paquetes.btn')}
        </Button>
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