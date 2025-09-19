import React from 'react';
import {Button} from "@/components/commons/ui/button";
import {cn} from "@/lib/utils";
import {useWebsite} from "@/context/WebSiteProvider";

interface BookingBtnDrawerProps {
    className?: string;
}

const BookingBtnDrawer = ({className}: BookingBtnDrawerProps) => {
    const {
        setOpenBookingDrawer
    } = useWebsite();
    return (
        <Button
            className={cn(
                'h-auto rounded-sm bg-book-bg text-book-text  text-sm font-bold',
                className
            )}
            onClick={() => setOpenBookingDrawer(true)}>
            BOOK NOW
        </Button>
    );
};

export default BookingBtnDrawer;