'use client'
import {useCallback} from "react";
import {GTMEvent, pushToDataLayer} from "@/lib/gtm";

export function useGTMEvent() {
    return useCallback((event: GTMEvent) => pushToDataLayer(event), []);
}