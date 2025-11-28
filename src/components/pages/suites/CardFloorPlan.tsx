'use client'
import React from 'react';
import dynamic from "next/dynamic";
import {useTranslations} from "next-intl";
import AreaIcon from "@/components/commons/icons/area.svg";

const ModalFloorPlan = dynamic(() => import('@/components/pages/suites/ModalFloorPlan'), {ssr: false});

interface CardFloorPlanProps {
    title: string;
    src: string;
}

const CardFloorPlan = (
    {title, src}: CardFloorPlanProps,
) => {
    const [open, setOpen] = React.useState(false);
    const t = useTranslations('suites');
    return (
        <div>
            <button className="flex items-center gap-2 text-sm"
                    onClick={() => setOpen(true)}>
                <AreaIcon className="shrink-0" width={24} height={24}/>
                {t('floor plan')}
            </button>

            <ModalFloorPlan open={open} setOpen={setOpen} title={title} src={src}/>
        </div>
    );
};

export default CardFloorPlan;