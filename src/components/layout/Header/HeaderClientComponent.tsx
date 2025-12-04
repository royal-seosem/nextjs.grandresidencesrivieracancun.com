'use client'
import dynamic from "next/dynamic";

export const BrandsCarousel = dynamic(() => import("@/components/layout/BrandsCarousel"), {ssr: false});
