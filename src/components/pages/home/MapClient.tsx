'use client'
import React, {useEffect, useState} from 'react';
import {useInViewport} from "@/components/commons/hooks/useInViewport";
import dynamic from "next/dynamic";

const GoogleMap = dynamic(() => import("@/components/commons/shared/GoogleMap"), {
    loading: () => (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
            <span className="animate-pulse">Cargando mapa...</span>
        </div>
    ),
    ssr: false // El mapa no necesita renderizarse en el servidor
});

const MapClient = () => {
    const [ref, inView] = useInViewport<HTMLDivElement>({rootMargin: '150px'});
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (inView) {
            timer = setTimeout(() => {
                setShouldLoad(true);
            }, 2500);
        }
        return () => clearTimeout(timer);
    }, [inView]);
    return (
        <div ref={ref} className="lg:order-1 grow min-h-[300px] flex">
            {shouldLoad && <GoogleMap/>}
        </div>
    );
};

export default MapClient;