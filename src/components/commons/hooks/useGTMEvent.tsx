'use client'
import {useCallback} from "react";
import {GTMEvent, pushToDataLayer} from "@/lib/gtm";

export function useGTMEvent() {
    return useCallback((event: GTMEvent) => pushToDataLayer(event), []);
}

export const getResWindow = (checkIn: Date) => {
    const todayDate = new Date();
    const resTimeStamp = checkIn.getTime() - todayDate.getTime();
    return Math.ceil(resTimeStamp / (1000 * 60 * 60 * 24));
}


export const getNights = (checkIn: Date, checkOut: Date) => {
    const diffNights = checkOut.getTime() - checkIn.getTime();
    return Math.ceil(diffNights / (1000 * 60 * 60 * 24));
}
