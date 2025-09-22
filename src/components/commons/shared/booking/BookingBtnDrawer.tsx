import React from 'react';
import {Button} from "@/components/commons/ui/button";
import {cn} from "@/lib/utils";
import {useWebsite} from "@/context/WebSiteProvider";
import {useBooking} from "@/components/commons/shared/booking/Context/BookingContext";

interface BookingBtnDrawerProps {
    className?: string;
    offer?: {
        title: string,
        type: "hotel+flight" | "hotel",
        ratePlanId?: string,
        roomTypeId?: string,
    }
}

const BookingBtnDrawer = ({className, offer}: BookingBtnDrawerProps) => {
    const {
        setOpenBookingDrawer
    } = useWebsite();

    const {
        setType,
        setRatePlanId,
        setRoomTypeId,
        setShowType,
        setTitle
    } = useBooking()


    const handleClick = () => {
        setOpenBookingDrawer(true)
        if (offer) {
            setType(offer.type)
            setRatePlanId(offer.ratePlanId || "");
            setRoomTypeId(offer.roomTypeId || "");
            setShowType(false);
            setTitle(offer.title);
        } else {
            setType("hotel")
            setRatePlanId("");
            setRoomTypeId("");
            setShowType(true);
            setTitle("");
        }
    }

    return (
        <Button
            className={cn(
                'h-auto rounded-sm bg-book-bg text-book-text  text-sm font-bold',
                className
            )}
            onClick={() => handleClick()}>
            BOOK NOW
        </Button>
    );
};

export default BookingBtnDrawer;