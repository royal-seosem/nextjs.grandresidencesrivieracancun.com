import React from 'react';
import Ico360 from "@/components/commons/icons/ico-360.svg";
import {useTranslations} from "next-intl";

const Tour360 = () => {
    const t = useTranslations('suites');
    return (
        <button className="flex items-center gap-1 text-base font-bold px-2">
            <Ico360 width={24} height={24}/>
            <span className="hidden lg:block">{t('btn_360')}</span>
            <span className="leading-4 text-center lg:hidden">360° Tour</span>
        </button>
    );
};

export default Tour360;