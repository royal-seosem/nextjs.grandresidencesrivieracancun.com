'use client'
import React from 'react';
import IconArrowDown from "@/components/commons/icons/ArrowDown.svg";
import {useTranslations} from "next-intl";
import dynamic from "next/dynamic";

const DrawerLanguage = dynamic(() => import("@/components/layout/Header/DrawerLanguage"), {ssr: false});

const LanguageDesk = () => {
    const t = useTranslations('header');
    const [open, setOpen] = React.useState(false);

    return (
        <div className={"hidden lg:block"}>
            <button className={"flex items-center gap-1"} onClick={() => setOpen(true)}>
                {t('english')}
                <IconArrowDown/>
            </button>

            {open && <DrawerLanguage open={open} setOpen={setOpen}/>}
        </div>
    );
};

export default LanguageDesk;