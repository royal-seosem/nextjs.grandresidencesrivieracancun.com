'use client'
import React from 'react';
import ArrowDownIcon from "@/components/commons/icons/arrow-down.svg";
import {Dialog, DialogContent, DialogTitle} from "@/components/commons/ui/dialog";
import {Calendar} from "@/components/commons/ui/calendar";
import {format} from "date-fns";
import {cn} from "@/lib/utils";
import {useBooking} from "@/components/commons/shared/booking/Context/BookingContext";

interface BookingCheckInProps {
    className?: string;
}

const BookingCheckIn = (
    {className}: BookingCheckInProps
) => {
    const [open, setOpen] = React.useState(false);
    const {
        adults, childrenGuests, childrenAge, rooms, checkIn, setCheckIn, type
    } = useBooking();

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

    const onSelectDate = (date: Date | undefined) => {
        if (date) setCheckIn(date);
        setOpen(false);
    }

    return (
        <div className={cn('flex flex-col gap-1 bg-booking-bg px-3 py-2 border-b border-booking-border', className)}>
            <span className="text-xs text-booking-label font-medium">Check-in</span>
            <div className="flex justify-between gap-1">
                <button
                    className="text-base text-booking-text font-medium w-full
                        flex justify-between gap-1"
                    type={"button"}
                    onClick={() => setOpen(true)}>
                    {checkIn ? format(checkIn, 'MMM dd, yy') : ''}
                    <ArrowDownIcon width={24} height={24}/>
                </button>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    showCloseButton={false}
                    className={"p-0"}>
                    <DialogTitle className="hidden" aria-readonly>Check In</DialogTitle>
                    <Calendar
                        mode={"single"}
                        className="w-full"
                        selected={checkIn}
                        onSelect={onSelectDate}
                        rateRequest={type == "hotel" ? request : undefined}
                        showOutsideDays={false}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default BookingCheckIn;