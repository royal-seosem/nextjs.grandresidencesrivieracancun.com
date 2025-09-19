import React from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/commons/ui/select";
import {useBooking} from "@/components/commons/shared/booking/Booking";
import {cn} from "@/lib/utils";

interface BookingChildrenAgeProps {
    className?: string;
}

const BookingChildrenAge = ({className}: BookingChildrenAgeProps) => {
    const {
        childrenGuests,
        childrenAge,
        setChildrenAge,
    } = useBooking();
    return (
        <div className={cn(
            'flex gap-2 whitespace-nowrap flex-wrap',
            className
        )}>
            {
                Array.from({length: childrenGuests}, (_, i) => i).map(child => (
                    <div
                        key={child}
                        className="grow flex flex-col gap-1 bg-booking-bg px-3 py-2 border-b border-booking-border">
                                    <span
                                        className="text-xs text-booking-label font-medium">Select Age children {child + 1}</span>
                        <Select
                            value={childrenAge[child]?.toString() || ""}
                            onValueChange={(value) => {
                                childrenAge[child] = parseInt(value)
                                setChildrenAge([...childrenAge])
                            }}>
                            <SelectTrigger className="border-0 shadow-none">
                                <SelectValue placeholder="Select child age"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="0">0</SelectItem>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                ))
            }
        </div>
    );
};

export default BookingChildrenAge;