'use client'
import dynamic from "next/dynamic";

export const InstagramClient = dynamic(() => import("@/components/pages/home/InstagramClient"), {ssr: false});


