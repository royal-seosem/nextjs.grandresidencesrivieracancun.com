'use client'
import React from 'react';
import GoogleMap from "@/components/commons/shared/GoogleMap";
import {useInViewport} from "@/components/commons/hooks/useInViewport";

const MapClient = () => {
    const [ref, inView] = useInViewport<HTMLDivElement>({rootMargin: '150px'});

    return (
        <div ref={ref} className="lg:order-1 grow min-h-[300px] flex">
            {inView && <GoogleMap/>}
        </div>
    );
};

export default MapClient;