import React from 'react';
import {clsx} from "clsx";

const ArrowDown = ({className = ""}: SvgProps) => {
    return (
        <svg className={clsx('text-current', className)} width="10" height="5" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0l5 5 5-5H0z" fill="currentColor"/>
        </svg>
    );
};

export default ArrowDown;