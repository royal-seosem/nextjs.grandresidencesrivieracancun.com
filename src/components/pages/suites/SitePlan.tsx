'use client'
import React from 'react';
import SitePlanIcon from "@/components/commons/icons/site-plan.svg";
import {Dialog, DialogContent, DialogHeader} from "@/components/commons/ui/dialog";
import {DialogTitle} from "@radix-ui/react-dialog";
import CdnImage from "@/components/commons/ui/CdnImage";

const SitePlan = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <button className="flex items-center gap-1 text-base font-bold px-2"
                onClick={()=>setOpen(true)}>
                <SitePlanIcon width={24} height={24}/>
                <span className="leading-4 text-center">
                    SITE PLAN
                </span>
            </button>
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
                        src={"/img/general/site-plan-grand-residences-riviera-cancun.jpg"}
                        alt={"Site plan"}
                        width="974"
                        height="648"
                        className="w-full h-auto"
                    />
                </DialogContent>
            </Dialog>
        </>

    );
};

export default SitePlan;