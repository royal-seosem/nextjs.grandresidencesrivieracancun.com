import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";

interface ModalTour360Props {
    title: string;
    src: string;
    open: boolean;
    setOpen: (open: boolean) => void;
}
const ModalTour360 = (
    {title, src, open, setOpen}: ModalTour360Props,
) => {
    return (
        <Dialog open={open} onOpenChange={() => setOpen(false)}>
            <DialogContent
                showCloseButton={false}
                className="w-[1024px] max-w-[80%] lg:max-w-[80%]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        {title}
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <iframe
                        src={src}
                        width="100%"
                        height="450"
                        allowFullScreen
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ModalTour360;