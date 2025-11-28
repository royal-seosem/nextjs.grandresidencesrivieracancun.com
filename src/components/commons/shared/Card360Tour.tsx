'use client'
import React from 'react';
import dynamic from "next/dynamic";
import {useTranslations} from "next-intl";
import {cn} from "@/lib/utils";
import Ico360 from "@/components/commons/icons/ico-360.svg";

const ModalTour360 = dynamic(() => import("@/components/commons/shared/ModalTour360"), {ssr: false});


interface Card360TourProps {
    title: string;
    btnTitle?: string;
    src: string;
    className?: string;
}

const Card360Tour = ({title, btnTitle, src, className}: Card360TourProps) => {
    const [open, setOpen] = React.useState(false);
    const t = useTranslations('suites');
    const btnTitleDefault = btnTitle ?? t('360 Tour');
    return (
        <div>
            <button className={cn("flex items-center gap-2 text-sm", className)}
                    onClick={() => setOpen(true)}>
                <Ico360 className="shrink-0" width={24} height={24}/>
                {btnTitleDefault}
            </button>

            <ModalTour360 open={open} setOpen={setOpen} title={title} src={src}/>
        </div>
    );
};

export default Card360Tour;