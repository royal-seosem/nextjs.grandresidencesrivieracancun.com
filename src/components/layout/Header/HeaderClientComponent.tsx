'use client'
import dynamic from "next/dynamic";

export const ModalMyRoyal = dynamic(() => import("@/components/commons/shared/my-royal/ModalMyRoyal"), {ssr: false});
export const BrandsCarousel = dynamic(() => import("@/components/layout/BrandsCarousel"), {ssr: false});
export const ChatWeb = dynamic(() => import("@/components/layout/ChatWeb"), {ssr: false});
