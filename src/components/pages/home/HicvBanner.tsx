'use client'
import dynamic from "next/dynamic";
import React from 'react';
import {useTranslations} from "next-intl";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {validHicvBannerCookie} from "@/lib/cookieHicvBanner";



const ModalHicvBanner = dynamic(() => import("@/components/pages/home/ModalHicvBanner"), {ssr: false});

interface HicvBannerProps {
    showIcon?: boolean;
    className?: string;
}


const HicvBanner =  (
    {showIcon = true, className}: HicvBannerProps,
) => {

    const th = useTranslations("header");

    const [open, setOpen] = React.useState(validHicvBannerCookie());

    return (
        <>
            {open && <ModalHicvBanner open={open} setOpen={setOpen}/>}
        </>
    );
};

export default HicvBanner;