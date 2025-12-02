'use client'
import React, {useMemo} from 'react';
import dynamic from "next/dynamic";
import {format} from "date-fns";
import ArrowDownIcon from "@/components/commons/icons/arrow-down.svg";
import {DropdownMenu, DropdownMenuTrigger} from "@/components/commons/ui/dropdown-menu";
import {DropdownMenuContent} from "@radix-ui/react-dropdown-menu";
import {useBooking} from "@/components/commons/shared/booking/Context/BookingContext";

const DropdownCalendar = dynamic(() => import("@/components/commons/shared/booking/DropdownCalendar"), {ssr: false});


const BookingCalendar = () => {
    const {checkIn, checkOut} = useBooking();
    const [isOpen, setIsOpen] = React.useState(false);
    const label = useMemo(() => `${checkIn ? format(checkIn, 'MMM dd, yy') : ''} - ${checkOut ? format(checkOut, 'MMM dd, yy') : ''}`, [checkIn, checkOut])
    return (
        <DropdownMenu
            open={isOpen}
            onOpenChange={setIsOpen}>
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
                {isOpen && <DropdownCalendar isOpen={isOpen} setIsOpen={setIsOpen}/>}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default BookingCalendar;