import React, {useEffect} from 'react';
import {Calendar} from "@/components/commons/ui/calendar";
import {DateRange} from "react-day-picker";
import {useBooking} from "@/components/commons/shared/booking/Context/BookingContext";

interface DropdownCalendarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const DropdownCalendar = (
    {setIsOpen}: DropdownCalendarProps
) => {

    const [date, setDate] = React.useState<DateRange | undefined>(undefined)
    const {setCheckIn, setCheckOut, checkIn, checkOut, adults, childrenGuests, childrenAge, rooms} = useBooking()

    const selectDate = (date: DateRange | undefined) => {
        if (checkIn && !checkOut) {
            if (date?.from) setCheckIn(date.from);

            if (date?.to && date?.from !== date?.to) {
                setCheckOut(date.to);
                setIsOpen(false);
            }

            setDate(
                date
            )
        }
        if (checkIn && checkOut) {
            const newSelected = date?.from == checkIn ? date?.to : date?.from;
            setCheckIn(newSelected);
            setCheckOut(undefined);
            setDate({
                from: newSelected,
                to: undefined,
            })
        }
        if (!checkIn && date?.from) setCheckIn(date.from);
    }

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
        <Calendar
            mode="range"
            numberOfMonths={2}
            selected={date}
            onSelect={selectDate}
            rateRequest={request}
            className="rounded-lg border shadow-sm"/>

    );
};

export default DropdownCalendar;