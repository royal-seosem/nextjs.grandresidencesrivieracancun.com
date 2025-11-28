'use client'
import React from 'react';
import dynamic from "next/dynamic";
import SitePlanIcon from "@/components/commons/icons/site-plan.svg";

const ModalSitePlan = dynamic(() => import("@/components/pages/suites/ModalSitePlan"), {ssr: false});

const SitePlan = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <button className="flex items-center gap-1 text-base font-bold px-2"
                    onClick={() => setOpen(true)}>
                <SitePlanIcon width={24} height={24}/>
                <span className="leading-4 text-center">
                    SITE PLAN
                </span>
            </button>
            <ModalSitePlan open={open} setOpen={setOpen}/>
        </>

    );
};

export default SitePlan;