'use client'
import React, {useEffect} from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import {useLocale} from "use-intl";

const OwnersArea = () => {
    const t = useTranslations('header');
    const locale = useLocale();
    const logInGr = process.env.NEXT_PUBLIC_MEMBER_LOGIN_POP;
    const appUrl = process.env.NEXT_POBLIC_APP_URL;
    const logInGrRedirect = process.env.NEXT_PUBLIC_MEMBER_LOGIN_GR;

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== appUrl)
                return;
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
        const language = locale === 'en' ? '' : `?lang=${locale.toUpperCase()}`;
        const strWindow = "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=400,innerHeight=600,centerscreen=yes,chrome=yes";
        window.open(`${logInGr}?Code=GRM&ReturnUrl=${appUrl}/members${language}`, "CNN_WindowName", strWindow);
    };

    return (
        <>
            <button className="hidden sm:flex items-center gap-1 text-sm text-secondary"
                    onClick={() => handleLoginClick()}
                    aria-label={t('owners area')}>
                <Image src="/icons/key.svg" alt="Icon key" width={12} height={12}/>
                <span>{t('owners area')}</span>
            </button>
        </>
    );
};

export default OwnersArea;