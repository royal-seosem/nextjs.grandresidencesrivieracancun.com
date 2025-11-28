'use client'
import React from 'react';
import {cn} from "@/lib/utils";
import BookingType from "@/components/commons/shared/booking/BookingType";
import BookingGuest from "@/components/commons/shared/booking/BookingGuest";
import BookingPromo from "@/components/commons/shared/booking/BookingPromo";
import BookingBook from "@/components/commons/shared/booking/BookingBook";
import BookingForm from "@/components/commons/shared/booking/BookingForm";
import {useBooking} from "@/components/commons/shared/booking/Context/BookingContext";
import {BookingAirport, BookingCalendar} from "@/components/commons/shared/booking/BookingClientComponent";


interface BookingProps {
    className?: string;
}
const Booking = (
    {className}: BookingProps,
) => {

    const {
        type
    } = useBooking();

    return (
        <BookingForm
            variant={"DESK"}
            className={cn('flex shadow-lg justify-center items-stretch gap-5 p-3 relative bg-white', className)}>
            <BookingType/>
            {type === 'hotel+flight' && (<BookingAirport/>)}
            <BookingCalendar/>
            <BookingGuest/>
            <BookingPromo/>
            <BookingBook/>
        </BookingForm>
    );
};

export default Booking;