'use client'
import React from 'react';
import AreaIcon from "@/components/commons/icons/area.svg";
import {useTranslations} from "next-intl";
import CdnImage from "@/components/commons/ui/CdnImage";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";

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

            <Dialog open={open} onOpenChange={() => setOpen(false)}>
                <DialogContent showCloseButton={false}
                    className="w-[1024px]
                    max-w-[80%] lg:max-w-[80%]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                            {title}
                        </DialogTitle>
                    </DialogHeader>
                    <CdnImage
                        src={src}
                        alt={title}
                        width="974"
                        height="648"
                        className="w-full h-auto"
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CardFloorPlan;