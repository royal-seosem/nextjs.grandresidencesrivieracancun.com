'use client'
import dynamic from "next/dynamic";

export const BookingDrawer = dynamic(() => import( "@/components/commons/shared/booking/BookingDrawer"), {ssr: false});
export const BookingCalendar = dynamic(() => import( "@/components/commons/shared/booking/BookingCalendar"), {ssr: false});
export const BookingAirport = dynamic(() => import("@/components/commons/shared/booking/BookingAirport"), {ssr: false});

