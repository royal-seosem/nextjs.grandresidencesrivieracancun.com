'use client'
import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";
import Paragraph from "@/components/commons/ui/paragraph";
import {useTranslations} from "next-intl";

interface ModalTour360Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ModalTour360 = (
    {open, setOpen}: ModalTour360Props
) => {
    const t = useTranslations('suites');

    return (
        <Dialog open={open} onOpenChange={() => setOpen(false)}>
            <DialogContent
                showCloseButton={false}
                className="w-[1024px] max-w-[80%] lg:max-w-[80%]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        <span>{t('btn_360')}</span>
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <Paragraph>{t('tour_360_description')}</Paragraph>
                    <iframe
                        src={"https://tour-gr.royalreservations.com/#39128456p&105.53h&83.74t"}
                        width="100%"
                        height="450"
                        allowFullScreen
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        className="rounded-md"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ModalTour360;