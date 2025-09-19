import React, {useId} from 'react';
import {Command, CommandEmpty, CommandInput, CommandItem, CommandList} from "@/components/commons/ui/command";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/commons/ui/dropdown-menu";
import {useDebounce} from "use-debounce";
import useAirport, {Airport} from "@/components/commons/shared/booking/hooks/useAirport";
import {useBooking} from "@/components/commons/shared/booking/Booking";
import {cn} from "@/lib/utils";

interface BookingAirportProps {
    className?: string;
}

const BookingAirport = ({className}: BookingAirportProps) => {
    const id = useId();
    const {airport, setAirport, type} = useBooking();
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const [searchDebounce] = useDebounce(search, 500);
    const {data: airports = [], isLoading} = useAirport(searchDebounce);

    const handleSelect = (airport: Airport) => {
        setOpen(false);
        setAirport(airport);
    }

    if (type === 'hotel') return null;

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <div className={cn(
                'flex flex-col gap-1 bg-booking-bg px-3 py-2 border-b border-booking-border w-[200px]',
                className
            )}>

                <label
                    htmlFor={id}
                    className="w-full block text-left text-xs text-booking-label font-medium">
                    Airport
                </label>

                <DropdownMenuTrigger asChild>
                    <input type="text" value={airport?.label || ""} id={id}
                           className="w-full border-0 bg-transparent text-base text-booking-text"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <Command>
                        <CommandInput
                            value={search}
                            onValueChange={setSearch}
                            placeholder="Search airport"/>
                        <CommandList>
                            {isLoading && <div className="p-2 text-xs">Loading…</div>}
                            <CommandEmpty>No airport found.</CommandEmpty>
                            {
                                airports.map(airport => (
                                    <CommandItem
                                        onSelect={() => handleSelect(airport)}
                                        key={airport.value}
                                        value={airport.label}>
                                        {airport.label}
                                    </CommandItem>
                                ))
                            }


                        </CommandList>
                    </Command>
                </DropdownMenuContent>
            </div>
        </DropdownMenu>
    );
};

export default BookingAirport;