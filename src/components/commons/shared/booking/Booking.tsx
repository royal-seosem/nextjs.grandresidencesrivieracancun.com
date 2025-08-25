'use client'
import React, {useEffect} from 'react';
import BookingType from "@/components/commons/shared/booking/BookingType";
import BookingCalendar from "@/components/commons/shared/booking/BookingCalendar";
import BookingGuest from "@/components/commons/shared/booking/BookingGuest";
import BookingPromo from "@/components/commons/shared/booking/BookingPromo";
import BookingBook from "@/components/commons/shared/booking/BookingBook";
import BookingAirport from "@/components/commons/shared/booking/BookingAirport";
import {useLocale} from "use-intl";
import {format} from "date-fns";
import useRates from "@/components/commons/shared/booking/useRates";

type BookingContextProps = {
    type: "hotel+flight" | "hotel",
    setType: (type: "hotel+flight" | "hotel") => void,
    checkIn: Date | undefined,
    setCheckIn: (checkIn: Date | undefined) => void,
    checkOut: Date | undefined,
    setCheckOut: (checkOut: Date | undefined) => void,
    rooms: number,
    setRooms: (rooms: number) => void,
    adults: number,
    setAdults: (adults: number) => void,
    children: number,
    setChildren: (children: number) => void,
    childrenAge: number[],
    setChildrenAge: (childrenAge: number[]) => void,
}

const BookingContext = React.createContext<BookingContextProps | null>(null);

export const useBooking = () => {
    const context = React.useContext(BookingContext);
    if (!context) throw new Error('useBooking debe usarse dentro de BookingProvider');
    return context;
};

const startDate = new Date();
startDate.setDate(startDate.getDate() + 5);
const endDate = new Date();
endDate.setDate(endDate.getDate() + 10);

const Booking = () => {

    const locale = useLocale();
    const [type, setType] = React.useState<"hotel+flight" | "hotel">('hotel');
    const [checkIn, setCheckIn] = React.useState<Date | undefined>(startDate);
    const [checkOut, setCheckOut] = React.useState<Date | undefined>(endDate);
    const [rooms, setRooms] = React.useState<number>(1);
    const [adults, setAdults] = React.useState<number>(2);
    const [children, setChildren] = React.useState<number>(0);
    const [childrenAge, setChildrenAge] = React.useState<number[]>([]);

    // const rates = useRates({
    //     adults,
    //     children,
    //     childAge: childrenAge,
    //     currency: 'USD',
    //     month: checkIn ? checkIn : new Date(),
    //     discountCode: '',
    //     hotelCode: '95939',
    //     ratePlanCode: '',
    //     roomTypeCode: '',
    //     rooms: rooms,
    // })
    //
    //
    // useEffect(() => {
    //     console.log('Rates:')
    //     console.log(rates);
    // }, [rates]);
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
            children,
            setChildren,
            childrenAge,
            setChildrenAge,
        }}>
            <form action="https://reservations.grandresidencesrivieracancun.com/95939"
                  target="_blank"
                  className="flex shadow-lg justify-center items-stretch gap-5 p-3 relative">
                <input type="hidden" name="hotel_id" value="95939"/>
                <input type="hidden" name="subchan" value="grandresidencesrivieracancun.com"/>
                <input type="hidden" name="theme_code" value="102578"/>
                <input type="hidden" name="languageid" value={locale === 'en' ? '1' : '2'}/>
                <input type="hidden" name="adults" value={adults}/>
                <input type="hidden" name="children" value={children}/>
                <input type="hidden" name="childage" value={childrenAge.slice(0, children).join(',')}/>
                <input type="hidden" name="datein" value={checkIn ? format(checkIn, "MM/dd/yyyy") : ""}/>
                <input type="hidden" name="dateout" value={checkOut ? format(checkOut, "MM/dd/yyyy") : ""}/>
                <input type="hidden" name="rateplanid" value=""/>
                <input type="hidden" name="roomtypeid" value=""/>
                <input type="hidden" name="promo_code" value=""/>
                <input type="hidden" name="identifier" value=""/>

                <BookingType/>
                {type === 'hotel+flight' && (<BookingAirport/>)}
                <BookingCalendar/>
                <BookingGuest/>
                <BookingPromo/>
                <BookingBook/>
            </form>
        </BookingContext.Provider>
    );
};

export default Booking;