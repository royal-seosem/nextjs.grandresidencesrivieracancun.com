import React from 'react';
import ArrowDownIcon from "@/components/commons/icons/arrow-down.svg";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/commons/ui/select";
import {useBooking} from "@/components/commons/shared/booking/Booking";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/commons/ui/dropdown-menu";

const BookingGuest = () => {
    const {rooms, setRooms, adults, setAdults, children, setChildren, childrenAge, setChildrenAge} = useBooking();

    return (
        <DropdownMenu>
            <div className="flex flex-col gap-1 bg-booking-bg px-3 py-2 border-b border-booking-border">
                <span className="text-xs text-booking-label font-medium">Guests</span>
                <DropdownMenuTrigger>
                    <span className="text-base text-booking-text font-medium flex items-center gap-1">
                        <span>2</span>
                        <ArrowDownIcon width={24} height={24}/>
                    </span>
                </DropdownMenuTrigger>
            </div>

            <DropdownMenuContent className="bg-booking-bg rounded-xs">
                <div className="top-full bg-booking-bg w-[350px] p-2">
                    <div className="flex gap-2 whitespace-nowrap">
                        <div
                            className="grow flex flex-col gap-1 bg-booking-bg px-3 py-2 border-b border-booking-border">
                            <span className="text-xs text-booking-label font-medium">Rooms</span>
                            <Select
                                value={rooms.toString()}
                                onValueChange={(value) => setRooms(parseInt(value))}>
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
                                    <SelectItem value="9">9</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
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
                        <div
                            className="grow flex flex-col gap-1 bg-booking-bg px-3 py-2 border-b border-booking-border">
                            <span className="text-xs text-booking-label font-medium">Children(0-12)</span>
                            <Select
                                value={children.toString()}
                                onValueChange={(value) => setChildren(parseInt(value))}>
                                <SelectTrigger className="border-0 shadow-none">
                                    <SelectValue placeholder="Select Rooms"/>
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
                    </div>

                    <div className="flex gap-2 whitespace-nowrap flex-wrap">
                        {
                            Array.from({length: children}, (_, i) => i ).map(child => (
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
                </div>
            </DropdownMenuContent>

        </DropdownMenu>
    );
};

export default BookingGuest;