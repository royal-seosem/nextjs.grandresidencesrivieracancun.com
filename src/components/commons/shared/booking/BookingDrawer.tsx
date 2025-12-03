'use client'
import React from 'react';
import dynamic from "next/dynamic";

import useIsDesktop from "@/components/commons/ui/modal/useIsDesktop";

const BookingDrawerMobile = dynamic(() => import("@/components/commons/shared/booking/BookingDrawerMobile"));
const BookingDrawerDesk = dynamic(() => import("@/components/commons/shared/booking/BookingDrawerDesk"));


const BookingDrawer = () => {
    const {isDesktop} = useIsDesktop();

    return (
        <>
            {!isDesktop && <BookingDrawerMobile/>}
            {isDesktop && <BookingDrawerDesk/>}
        </>
    )
};

export default BookingDrawer;