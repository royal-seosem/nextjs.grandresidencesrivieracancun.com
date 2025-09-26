import React from 'react';
import BookingProvider from "@/components/commons/shared/booking/Context/BookingContext";
import Booking from "@/components/commons/shared/booking/Booking";

const BookingHeader = () => {
    return (
        <div className="hidden lg:block bg-white ">
            <BookingProvider>
                <Booking  className={"shadow-none"}/>
            </BookingProvider>
        </div>

    );
};

export default BookingHeader;