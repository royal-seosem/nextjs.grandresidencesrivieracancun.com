'use client'
import dynamic from "next/dynamic";

export const BookingDrawer = dynamic(() => import( "@/components/commons/shared/booking/BookingDrawer"), {ssr: false});
