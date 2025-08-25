import React, {useId} from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/commons/ui/dropdown-menu";

const BookingAirport = () => {
    const id = useId();
    return (
        <DropdownMenu>
            <div className="flex flex-col gap-1 bg-booking-bg px-3 py-2 border-b border-booking-border w-[200px]">
                <DropdownMenuTrigger className="text-base  text-booking-text font-medium">
                    <label htmlFor={id} className="w-full block text-left text-xs text-booking-label font-medium">Airport</label>
                    <input id={id} type="text"/>
                </DropdownMenuTrigger>
            </div>

            <DropdownMenuContent>
                <div>
                    asldkfjaslkfjsaklfaslkfjasklfjas
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default BookingAirport;