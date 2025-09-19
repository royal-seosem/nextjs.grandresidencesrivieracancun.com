import React from 'react';
import {Button} from "@/components/commons/ui/button";
import OffIcon from "@/components/commons/icons/off.svg";
import OnIcon from "@/components/commons/icons/on.svg";
import {useBooking} from "@/components/commons/shared/booking/Booking";
import {cn} from "@/lib/utils";

interface BookingTypeProps {
    className?: string;
}

const BookingType = ({className}: BookingTypeProps) => {
    const {type, setType} = useBooking();
    return (
        <Button
            type="button"
            onClick={() => setType(type === 'hotel' ? 'hotel+flight' : 'hotel')}
            className={cn(
                'h-auto text-booking-text text-base font-extrabold rounded-xs  border border-booking-border bg-booking-bg hover:bg-booking-bg px-4 w-[150px]',
                className,
            )}>
            {type === 'hotel' && (<OffIcon/>)}
            {type === 'hotel+flight' && (<OnIcon/>)}
            FLIGHT
        </Button>
    );
};

export default BookingType;