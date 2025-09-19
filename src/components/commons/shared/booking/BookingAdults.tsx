import React from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/commons/ui/select";
import {useBooking} from "@/components/commons/shared/booking/Booking";

const BookingAdults = () => {
    const {adults, setAdults} = useBooking();
    return (
        <div
            className="grow flex flex-col gap-1 bg-booking-bg px-3 py-2 border-b border-booking-border">
            <span className="text-xs text-booking-label font-medium">Adults(+13)</span>
            <Select
                value={adults.toString()}
                onValueChange={(value) => setAdults(parseInt(value))}>
                <SelectTrigger className="border-0 shadow-none">
                    <SelectValue placeholder="Select Rooms"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default BookingAdults;