import React from 'react';

const BookingPromo = () => {
    return (
        <div className="flex flex-col gap-1 bg-booking-bg px-3 py-2 border-b border-booking-border">
            <span className="text-xs text-booking-label font-medium">Promo Code</span>
            <span className="text-base text-booking-text font-medium"></span>
        </div>
    );
};

export default BookingPromo;