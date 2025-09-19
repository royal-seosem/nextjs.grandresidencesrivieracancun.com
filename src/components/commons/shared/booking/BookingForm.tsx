import React from 'react';
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {BookingContext} from "@/components/commons/shared/booking/Booking";
import {useLocale} from "use-intl";
import {Airport} from "@/components/commons/shared/booking/hooks/useAirport";


const startDate = new Date();
startDate.setDate(startDate.getDate() + 5);
const endDate = new Date();
endDate.setDate(endDate.getDate() + 10);


interface BookingFormProps {
    children: React.ReactNode;
    variant?: 'DESK' | 'MODAL' | 'MOBILE'
}

const BookingForm = (
    {children, variant}: BookingFormProps
) => {


    const locale = useLocale();
    const [type, setType] = React.useState<"hotel+flight" | "hotel">('hotel');
    const [checkIn, setCheckIn] = React.useState<Date | undefined>(startDate);
    const [checkOut, setCheckOut] = React.useState<Date | undefined>(endDate);
    const [rooms, setRooms] = React.useState<number>(1);
    const [adults, setAdults] = React.useState<number>(2);
    const [childrenGuests, setChildrenGuests] = React.useState<number>(0);
    const [childrenAge, setChildrenAge] = React.useState<number[]>([]);
    const [airport, setAirport] = React.useState<Airport | undefined>(undefined);

    return (
        <BookingContext.Provider value={{
            type: type,
            setType: setType,
            checkIn: checkIn,
            checkOut: checkOut,
            setCheckIn: setCheckIn,
            setCheckOut: setCheckOut,
            rooms: rooms,
            setRooms: setRooms,
            adults,
            setAdults,
            childrenGuests,
            setChildrenGuests,
            childrenAge,
            setChildrenAge,
            airport,
            setAirport,
        }}>
            <form action="https://reservations.grandresidencesrivieracancun.com/95939"
                  target="_blank"
                  className={cn(
                      variant === 'DESK' && 'lg:flex shadow-lg justify-center items-stretch gap-5 p-3 relative bg-white'
                  )}>
                <input type="hidden" name="hotel_id" value="95939"/>
                <input type="hidden" name="subchan" value="grandresidencesrivieracancun.com"/>
                <input type="hidden" name="theme_code" value="102578"/>
                <input type="hidden" name="languageid" value={locale === 'en' ? '1' : '2'}/>
                <input type="hidden" name="adults" value={adults}/>
                <input type="hidden" name="children" value={childrenGuests}/>
                <input type="hidden" name="childage" value={childrenAge.slice(0, childrenGuests).join(',')}/>
                <input type="hidden" name="datein" value={checkIn ? format(checkIn, "MM/dd/yyyy") : ""}/>
                <input type="hidden" name="dateout" value={checkOut ? format(checkOut, "MM/dd/yyyy") : ""}/>
                <input type="hidden" name="rateplanid" value=""/>
                <input type="hidden" name="roomtypeid" value=""/>
                <input type="hidden" name="promo_code" value=""/>
                <input type="hidden" name="identifier" value=""/>

                {children}
            </form>
        </BookingContext.Provider>
    );
};

export default BookingForm;