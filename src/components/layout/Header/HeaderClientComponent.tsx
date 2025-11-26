'use client'
import dynamic from "next/dynamic";

export const MyRoyal = dynamic(() => import("@/components/layout/Header/MyRoyal"), {ssr: false});
export const MenuMobile = dynamic(() => import("@/components/layout/Header/MenuMobile"), {ssr: false});
export const ContactOptions = dynamic(() => import("@/components/layout/Header/ContactOptions"), {ssr: false});
export const ManageYourReservation = dynamic(() => import("@/components/pages/home/ManageYourReservation"), {ssr: false});
export const OwnersArea = dynamic(() => import("@/components/layout/OwnersArea"), {ssr: false});
export const LanguageDesk = dynamic(() => import("@/components/layout/Header/LanguageDesk"), {ssr: false});

export const ChatWeb = dynamic(() => import("@/components/layout/ChatWeb"), {ssr: false});
export const ModalMyRoyal = dynamic(() => import("@/components/commons/shared/my-royal/ModalMyRoyal"), {ssr: false});
export const BrandsCarousel = dynamic(() => import("@/components/layout/BrandsCarousel"), {ssr: false});
