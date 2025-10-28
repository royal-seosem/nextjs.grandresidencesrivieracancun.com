'use client'
import React, {useEffect, useRef} from 'react';
import BookingProvider from "@/components/commons/shared/booking/Context/BookingContext";
import Booking from "@/components/commons/shared/booking/Booking";

const BookingHome = () => {
    const menuRef = useRef<HTMLDivElement>(null)
    const [isSticky, setIsSticky] = React.useState(false);

    useEffect(() => {
        if (!menuRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log("Is sticky", entry.intersectionRatio < 1);
                setIsSticky(entry.intersectionRatio < 1);
            },
            {
                rootMargin: '0px 0px 0px 0px',
            }
        );
        observer.observe(menuRef.current);

        return () => {
            observer.disconnect();
        };
    }, [menuRef]);

    return (
        <div ref={menuRef}
            className="my-container sticky top-[var(--header-height-mobile)] sm:top-[var(--header-height-desktop)] z-50">
            <div className="z-10 hidden lg:block ">
                <BookingProvider>
                    <Booking/>
                </BookingProvider>
            </div>
        </div>
    );
};

export default BookingHome;