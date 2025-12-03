'use client'
import dynamic from "next/dynamic";

export const MapClient = dynamic(() => import("@/components/pages/home/MapClient"),{ssr: false});
export const InstagramClient = dynamic(()=> import("@/components/pages/home/InstagramClient"), {ssr: false});