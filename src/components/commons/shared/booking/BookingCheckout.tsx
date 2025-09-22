'use client'
import React from 'react';
import {format} from "date-fns";
import ArrowDownIcon from "@/components/commons/icons/arrow-down.svg";
import {Dialog, DialogContent, DialogTitle} from "@/components/commons/ui/dialog";
import {Calendar} from "@/components/commons/ui/calendar";
import {cn} from "@/lib/utils";
import {useBooking} from "@/components/commons/shared/booking/Context/BookingContext";

interface BookingCheckoutProps {
    className?: string;
}
const BookingCheckout = (
    {className}: BookingCheckoutProps
) => {

    const [open, setOpen] = React.useState(false);
    const {
        adults, childrenGuests, childrenAge, rooms, checkOut, setCheckOut
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
        if (date) setCheckOut(date);
        setOpen(false);
    }


    return (
        <div className={cn('flex flex-col gap-1 bg-booking-bg px-3 py-2 border-b border-booking-border', className)}>
            <span className="text-xs text-booking-label font-medium">Check-out</span>
            <div className="flex justify-between gap-1">
                <button
                    className="text-base text-booking-text font-medium w-full
                    flex justify-between gap-1"
                    type={"button"}
                    onClick={() => setOpen(true)}>
                    {checkOut ? format(checkOut, 'MMM dd, yy') : ''}
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
                        selected={checkOut}
                        onSelect={onSelectDate}
                        rateRequest={request}
                        showOutsideDays={false}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default BookingCheckout;