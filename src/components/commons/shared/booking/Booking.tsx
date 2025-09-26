'use client'
import React from 'react';
import BookingType from "@/components/commons/shared/booking/BookingType";
import BookingCalendar from "@/components/commons/shared/booking/BookingCalendar";
import BookingGuest from "@/components/commons/shared/booking/BookingGuest";
import BookingPromo from "@/components/commons/shared/booking/BookingPromo";
import BookingBook from "@/components/commons/shared/booking/BookingBook";
import BookingAirport from "@/components/commons/shared/booking/BookingAirport";
import {useLocale} from "use-intl";
import {format} from "date-fns";
import {cn} from "@/lib/utils";
import {useBooking} from "@/components/commons/shared/booking/Context/BookingContext";


interface BookingProps {
    className?: string;
}
const Booking = (
    {className}: BookingProps,
) => {
    const locale = useLocale();
    const {
        adults,
        childrenGuests,
        childrenAge,
        checkIn,
        checkOut,
        type
    } = useBooking();

    return (
        <form action="https://reservations.grandresidencesrivieracancun.com/95939"
              target="_blank"
              className={cn('flex shadow-lg justify-center items-stretch gap-5 p-3 relative bg-white', className)}>
            <input type="hidden" name="hotel_id" value="95939"/>
            <input type="hidden" name="subchan" value="grandresidencesrivieracancun.com"/>
            <input type="hidden" name="theme_code" value="102578"/>
            <input type="hidden" name="languageid" value={locale === 'en' ? '1' : '2'}/>
            <input type="hidden" name="adults" value={adults}/>
            <input type="hidden" name="children" value={childrenGuests}/>
            <input type="hidden" name="childage" value={childrenAge.slice(0, childrenGuests).join(',')}/>
            <input type="hidden" name="datein" value={checkIn ? format(checkIn, "MM/dd/yyyy") : ""}/>
            <input type="hidden" name="dateout" value={checkOut ? format(checkOut, "MM/dd/yyyy") : ""}/>
            <input type="hidden" name="rateplanid" value=""/>
            <input type="hidden" name="roomtypeid" value=""/>
            <input type="hidden" name="promo_code" value=""/>
            <input type="hidden" name="identifier" value=""/>

            <BookingType/>
            {type === 'hotel+flight' && (<BookingAirport/>)}
            <BookingCalendar/>
            <BookingGuest/>
            <BookingPromo/>
            <BookingBook/>
        </form>
    );
};

export default Booking;