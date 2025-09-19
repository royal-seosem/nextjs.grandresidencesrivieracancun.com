import React from 'react';
import {cn} from "@/lib/utils";

interface BookingPromoProps {
    className?: string;
}
const BookingPromo = ({className}:BookingPromoProps) => {
    return (
        <div className={cn('flex flex-col gap-1 bg-booking-bg px-3 py-2 border-b border-booking-border', className)}>
            <span className="text-xs text-booking-label font-medium">Promo Code</span>
            <span className="text-base text-booking-text font-medium"></span>
        </div>
    );
};

export default BookingPromo;