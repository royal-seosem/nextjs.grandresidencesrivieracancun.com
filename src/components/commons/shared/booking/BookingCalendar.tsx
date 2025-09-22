'use client'
import React, {useEffect, useMemo} from 'react';
import {DateRange} from "react-day-picker";
import {Calendar} from "@/components/commons/ui/calendar";
import {format} from "date-fns";
import ArrowDownIcon from "@/components/commons/icons/arrow-down.svg";
import {DropdownMenu, DropdownMenuTrigger} from "@/components/commons/ui/dropdown-menu";
import {DropdownMenuContent} from "@radix-ui/react-dropdown-menu";
import {useBooking} from "@/components/commons/shared/booking/Context/BookingContext";


const BookingCalendar = () => {
    const {adults, childrenGuests, childrenAge, rooms, checkIn, setCheckIn, checkOut, setCheckOut} = useBooking();
    const [date, setDate] = React.useState<DateRange | undefined>(undefined)


    const selectDate = (date: DateRange | undefined) => {
        if (date?.from) setCheckIn(date.from);
        if (date?.to && date?.from !== date?.to) setCheckOut(date.to);
        setDate(
            date
        )
    }
    const label = useMemo(() => `${checkIn ? format(checkIn, 'MMM dd, yy') : ''} - ${checkOut ? format(checkOut, 'MMM dd, yy') : ''}`, [checkIn, checkOut])


    const request = {
        adults: adults || 0,
        children: childrenGuests || 0,
        childAge: childrenAge,
        currency: 'USD',
        month: new Date(),
        discountCode: '',
        hotelCode: '95939',
        ratePlanCode: '',
        roomTypeCode: '',
        rooms: rooms,
    }

    useEffect(() => {
        setDate({
            from: checkIn,
            to: checkOut,
        });
    }, [checkIn, checkOut])

    return (
        <DropdownMenu>
            <div className="flex flex-col gap-1 bg-booking-bg px-3 py-2 border-b border-booking-border">
                <span className="text-xs text-booking-label font-medium">Check In Date / Check Out Date</span>
                <DropdownMenuTrigger className="text-base text-booking-text font-medium flex items-center gap-1">
                        <span className="grow">
                            {label || ""}
                        </span>
                    <ArrowDownIcon width={24} height={24}/>
                </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent>
                <Calendar
                    mode="range"
                    numberOfMonths={2}
                    selected={date}
                    onSelect={selectDate}
                    rateRequest={request}
                    className="rounded-lg border shadow-sm"/>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default BookingCalendar;