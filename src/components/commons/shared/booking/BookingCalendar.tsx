'use client'
import React, {useCallback, useEffect, useMemo} from 'react';
import {DateRange} from "react-day-picker";
import {Calendar} from "@/components/commons/ui/calendar";
import {useBooking} from "@/components/commons/shared/booking/Booking";
import {format} from "date-fns";
import ArrowDownIcon from "@/components/commons/icons/arrow-down.svg";
import {DropdownMenu, DropdownMenuTrigger} from "@/components/commons/ui/dropdown-menu";
import {DropdownMenuContent} from "@radix-ui/react-dropdown-menu";
import useRates from "@/components/commons/shared/booking/useRates";


const BookingCalendar = () => {
    const {adults, children, childrenAge, rooms, checkIn, setCheckIn, checkOut, setCheckOut} = useBooking();
    const [date, setDate] = React.useState<DateRange | undefined>(undefined)
    const [month, setMonth] = React.useState<Date | undefined>(checkIn);

    const selectDate = (date: DateRange | undefined) => {
        if (date?.from) setCheckIn(date.from);
        if (date?.to && date?.from !== date?.to) setCheckOut(date.to);
        setDate(
            date
        )
    }
    const label = useMemo(() => `${checkIn ? format(checkIn, 'MMM dd, yy') : ''} - ${checkOut ? format(checkOut, 'MMM dd, yy') : ''}`, [checkIn, checkOut])


    const {data, isPending} = useRates({
        adults,
        children,
        childAge: childrenAge,
        currency: 'USD',
        month: month,
        discountCode: '',
        hotelCode: '95939',
        ratePlanCode: '',
        roomTypeCode: '',
        rooms: rooms,
    })



    useEffect(() => {
        setDate({
            from: checkIn,
            to: checkOut,
        });
    }, [checkIn, checkOut])


    const renderDay = useCallback(({day}) => {
        const date = day.date;
        const key = format(date, 'yyyy-MM-dd')
        console.log(data);
        const price = data?.get(key) || undefined;
        return (
            <div className="flex flex-col items-center">
                <span>{date.getDate()}</span>
                {price && (
                    <span className="text-[10px] text-green-600 font-medium">
                      ${(price.rate.minRate - price.rate.discount).toFixed(0)}
                    </span>
                )}
            </div>
        );

    },[data])

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
                    onMonthChange={(month) => setMonth(month)}
                    // components={{
                    //     Day: renderDay
                    // }}
                    className="rounded-lg border shadow-sm"/>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default BookingCalendar;