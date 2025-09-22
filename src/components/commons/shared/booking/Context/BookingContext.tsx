'use client'
import React from 'react';
import {Airport} from "@/components/commons/shared/booking/hooks/useAirport";

export  type BookingContext = {
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
    childrenGuests: number,
    setChildrenGuests: (children: number) => void,
    childrenAge: number[],
    setChildrenAge: (childrenAge: number[]) => void,
    airport: Airport | undefined,
    setAirport: (airport: Airport | undefined) => void,
    ratePlanId: string,
    setRatePlanId: (ratePlanId: string) => void,
    roomTypeId: string,
    setRoomTypeId: (roomTypeId: string) => void,
    promoCode: string,
    setPromoCode: (promoCode: string) => void,
    identifier: string,
    setIdentifier: (identifier: string) => void,
    title: string,
    setTitle: (title: string) => void,
    showType: boolean,
    setShowType: (showType: boolean) => void,
}

export const BookingContext = React.createContext<BookingContext | null>(null);

const startDate = new Date();
startDate.setDate(startDate.getDate() + 5);

const endDate = new Date();
endDate.setDate(endDate.getDate() + 10);

export const useBooking = () => {
    const context = React.useContext(BookingContext);
    if (!context) throw new Error('useBooking debe usarse dentro de BookingProvider');
    return context;
};

const BookingProvider = (
    {children}: { children: React.ReactNode }
) => {

    const [type, setType] = React.useState<"hotel+flight" | "hotel">('hotel');
    const [checkIn, setCheckIn] = React.useState<Date | undefined>(startDate);
    const [checkOut, setCheckOut] = React.useState<Date | undefined>(endDate);
    const [rooms, setRooms] = React.useState<number>(1);
    const [adults, setAdults] = React.useState<number>(2);
    const [childrenGuests, setChildrenGuests] = React.useState<number>(0);
    const [childrenAge, setChildrenAge] = React.useState<number[]>([]);
    const [airport, setAirport] = React.useState<Airport | undefined>(undefined);
    const [ratePlanId, setRatePlanId] = React.useState<string>('');
    const [roomTypeId, setRoomTypeId] = React.useState<string>('');
    const [promoCode, setPromoCode] = React.useState<string>('');
    const [identifier, setIdentifier] = React.useState<string>('');

    const [title, setTitle] = React.useState<string>("");
    const [showType, setShowType] = React.useState<boolean>(true);

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
            ratePlanId,
            setRatePlanId,
            roomTypeId,
            setRoomTypeId,
            promoCode,
            setPromoCode,
            identifier,
            setIdentifier,
            title,
            setTitle,
            showType,
            setShowType,
        }}>
            {children}
        </BookingContext.Provider>
    );
};

export default BookingProvider;