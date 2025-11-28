import React from 'react';
import {Dialog, DialogContent, DialogHeader} from "@/components/commons/ui/dialog";
import {DialogTitle} from "@radix-ui/react-dialog";
import CdnImage from "@/components/commons/ui/CdnImage";

interface ModalSitePlanProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ModalSitePlan = (
    {open, setOpen}: ModalSitePlanProps
) => {
    return (
        <Dialog open={open} onOpenChange={() => setOpen(false)}>
            <DialogContent
                showCloseButton={false}
                className="w-[1024px] max-w-[80%] lg:max-w-[80%]">
                <DialogHeader>
                    <DialogTitle className="hidden" aria-readonly>
                        SITE PLAN
                    </DialogTitle>
                </DialogHeader>
                <CdnImage
                    src={"/img/general/site-plan-grand-residences-riviera-cancun.jpg?v=2"}
                    alt={"Site plan"}
                    width="974"
                    height="648"
                    className="w-full h-auto"
                />
            </DialogContent>
        </Dialog>
    );
};

export default ModalSitePlan;