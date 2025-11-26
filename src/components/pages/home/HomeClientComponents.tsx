'use client'
import dynamic from "next/dynamic";

export const SectionInstagram = dynamic(() => import("@/components/pages/home/SectionInstagram"), {ssr: false});
export const SectionMap = dynamic(() => import("@/components/pages/home/SectionMap"), {ssr: false});
