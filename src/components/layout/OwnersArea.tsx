'use client'
import React, {useEffect} from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import {useLocale} from "use-intl";
import {cn} from "@/lib/utils";

interface OwnersAreaProps {
    className?: string;
    showIcon?: boolean;
}

const OwnersArea = (
    {className, showIcon = true}: OwnersAreaProps
) => {
    const t = useTranslations('header');
    const locale = useLocale();

    const logInGr = process.env.NEXT_PUBLIC_MEMBER_LOGIN_POP;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    const logInGrRedirect = process.env.NEXT_PUBLIC_MEMBER_LOGIN_GR;


    console.log("logInGrRedirect", logInGrRedirect);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {

            if (event.data?.source !== "members")
                return;

            const token = event.data.token;

            window.location.href = `${logInGrRedirect}?token=${token}&lang=${locale}`;
        }

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };

    }, [appUrl, locale, logInGrRedirect]);


    const handleLoginClick = () => {
        const strWindow = "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=400,innerHeight=600,centerscreen=yes,chrome=yes";
        window.open(`${logInGr}?Code=GRM&ReturnUrl=${appUrl}/members`, "CNN_WindowName", strWindow);
    };

    return (
        <>
            <button className={cn('hidden sm:flex items-center gap-1 text-sm text-secondary', className)}
                    onClick={() => handleLoginClick()}
                    aria-label={t('owners area')}>
                {showIcon && <Image src="/icons/key.svg" alt="Icon key" width={12} height={12}/>}
                <span>{t('owners area')}</span>
            </button>
        </>
    );
};

export default OwnersArea;