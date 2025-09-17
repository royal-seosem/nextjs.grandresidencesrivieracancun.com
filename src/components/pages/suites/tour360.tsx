import React from 'react';
import Ico360 from "@/components/commons/icons/ico-360.svg";

const Tour360 = () => {
    return (
        <button className="flex items-center gap-1 text-base font-bold px-2">
            <Ico360 width={24} height={24}/>
            <span className="leading-4 text-center">360° Tour</span>
        </button>
    );
};

export default Tour360;