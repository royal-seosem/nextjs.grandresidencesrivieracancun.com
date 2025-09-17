import React from 'react';
import SitePlanIcon from "@/components/commons/icons/site-plan.svg";

const SitePlan = () => {
    return (
        <button className="flex items-center gap-1 text-base font-bold px-2">
            <SitePlanIcon width={24} height={24}/>
            <span className="leading-4 text-center">
                SITE PLAN
            </span>
        </button>
    );
};

export default SitePlan;