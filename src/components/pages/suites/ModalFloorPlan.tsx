import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";
import CdnImage from "@/components/commons/ui/CdnImage";

interface ModalFloorPlanProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: string;
    src: string;
}

const ModalFloorPlan = (
    {open, setOpen, title, src}: ModalFloorPlanProps
) => {
    return (
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
    );
};

export default ModalFloorPlan;