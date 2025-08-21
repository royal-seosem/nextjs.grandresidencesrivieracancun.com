import React from 'react';
import {Button} from "@/components/commons/ui/button";
import OffIcon from "@/components/commons/icons/off.svg";
import OnIcon from "@/components/commons/icons/on.svg";
import {useBooking} from "@/components/commons/shared/booking/Booking";

const BookingType = () => {
    const {type, setType} = useBooking();
    return (
        <Button
            onClick={() => setType(type === 'hotel' ? 'hotel+flight' : 'hotel')}
            className="h-auto text-booking-text text-base font-extrabold rounded-xs  border border-booking-border bg-booking-bg hover:bg-booking-bg px-4 w-[150px]">
            {type === 'hotel' && (<OffIcon/>)}
            {type === 'hotel+flight' && (<OnIcon/>)}
            FLIGHT
        </Button>
    );
};

export default BookingType;