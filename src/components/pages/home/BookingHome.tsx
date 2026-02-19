'use client'
import React from 'react';
import BookingProvider from "@/components/commons/shared/booking/Context/BookingContext";
import Booking from "@/components/commons/shared/booking/Booking";

const BookingHome = () => {

    return (
        <div
            className="my-container sticky top-[var(--header-height-mobile)] sm:top-[var(--header-top-desktop)] z-50">
            <div className="z-10 hidden lg:block ">
                <BookingProvider>
                    <Booking/>
                </BookingProvider>
            </div>
        </div>
    );
};

export default BookingHome;