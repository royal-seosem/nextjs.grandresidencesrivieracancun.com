'use client'
import React from 'react';
import Ico360 from "@/components/commons/icons/ico-360.svg";
import {useTranslations} from "next-intl";
import dynamic from "next/dynamic";

const ModalTour360 = dynamic(() => import("@/components/pages/suites/ModalTour360"), { ssr: false});

const Tour360 = () => {
    const [open, setOpen] = React.useState(false);
    const t = useTranslations('suites');

    return (
        <div>
            <button
                className="flex items-center gap-1 text-base font-bold px-2"
                onClick={() => setOpen(true)}>
                <Ico360 width={24} height={24}/>
                <span className="hidden lg:block">{t('btn_360')}</span>
                <span className="leading-4 text-center lg:hidden">360° Tour</span>
            </button>
            {open && <ModalTour360 open={open} setOpen={setOpen}/>}
        </div>
    );
};

export default Tour360;