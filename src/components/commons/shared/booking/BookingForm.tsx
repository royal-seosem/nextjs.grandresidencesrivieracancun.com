import React from 'react';
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {useLocale} from "use-intl";
import {useBooking} from "@/components/commons/shared/booking/Context/BookingContext";
import {getNights, getResWindow, useGTMEvent} from "@/components/commons/hooks/useGTMEvent";
import {useWebsite} from "@/context/WebSiteProvider";


interface BookingFormProps {
    children: React.ReactNode;
    variant?: 'DESK' | 'MODAL' | 'MOBILE',
    className?: string;
}


const BookingForm = (
    {children, variant, className}: BookingFormProps
) => {

    const locale = useLocale();

    const {
        adults,
        childrenGuests,
        childrenAge,
        checkIn,
        checkOut,
        ratePlanId,
        roomTypeId,
        promoCode,
        identifier,
        origin,
        rooms,
        type,
        airport,
    } = useBooking();

    const {
        user
    } = useWebsite()

    const dataLayer = useGTMEvent();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (type == "hotel") {
            dataLayer({
                'event': 'Reservation',
                'origin': origin,
                'promoCode': promoCode,
                'reservationType': 'Hotel Only',
                'status': 'OK',
                'eventType': 'Quote',
                'startingPoint': 'Resort',
                'destinationName': 'Riviera Maya',
                'resortId': '95939',
                'resortName': 'Grand Residences',
                'adults': adults,
                'children': childrenGuests,
                'children2': 0,
                'checkIn': checkIn ? format(checkIn, 'dd/MM/yyyy') : "",
                'checkOut': checkOut ? format(checkOut, 'dd/MM/yyyy') : "",
                'rooms': rooms,
                'resWindow': checkIn ? getResWindow(checkIn) : "",
                'nights': checkIn && checkOut ? getNights(checkIn, checkOut) : "",
                'checkin': checkIn ? format(checkIn, 'dd/MM/yyyy') : "",
                'checkout': checkOut ? format(checkOut, 'dd/MM/yyyy') : "",
                'promocode': promoCode,
                'errorType': '',
                'errorCode': ''
            })
        }

        if (type == "hotel+flight") {
            dataLayer({
                'event': 'Reservation',
                'origin': origin,
                'promoCode': promoCode,
                'reservationType': 'Hotel + Flight',
                'status': 'OK',
                'eventType': 'Quote',
                'startingPoint': 'Resort',
                'destinationName': 'Riviera Maya',
                'resortId': '10732',
                'resortName': 'Grand Residences',
                'cityOrigin': 'ACY',
                'countryOrigin': 'US',
                'adults': adults,
                'children': childrenGuests,
                'checkIn': checkIn ? format(checkIn, 'dd/MM/yyyy') : "",
                'checkOut': checkOut ? format(checkOut, 'dd/MM/yyyy') : "",
                'rooms': '1',
                'resWindow': checkIn ? getResWindow(checkIn) : "",
                'nights': checkIn && checkOut ? getNights(checkIn, checkOut) : "",
                'errorType': '',
                'errorCode': '',
                'checkin': checkIn ? format(checkIn, 'dd/MM/yyyy') : "",
                'checkout': checkOut ? format(checkOut, 'dd/MM/yyyy') : "",
                'promocode': promoCode,
            })
        }
        e.currentTarget.submit();
    }

    return (
        <form action={ type == "hotel" ? "https://reservations.grandresidencesrivieracancun.com/95939": "https://royalresorts.reservhotel.com/win/owa/ibe5.main"}
              target="_blank"
              className={cn(
                  variant === 'DESK' && 'lg:flex shadow-lg justify-center items-stretch gap-5 p-3 relative bg-white',
                  className
              )}
              onSubmit={handleSubmit}>

            {type == "hotel" && <>
                <input type="hidden" name="hotel_id" value="95939"/>
                <input type="hidden" name="subchan" value="grandresidencesrivieracancun.com"/>
                <input type="hidden" name="theme_code" value="102578"/>
                <input type="hidden" name="languageid" value={locale === 'en' ? '1' : '2'}/>
                <input type="hidden" name="adults" value={adults}/>
                <input type="hidden" name="children" value={childrenGuests}/>
                <input type="hidden" name="childage" value={childrenAge.slice(0, childrenGuests).join(',')}/>
                <input type="hidden" name="datein" value={checkIn ? format(checkIn, "MM/dd/yyyy") : ""}/>
                <input type="hidden" name="dateout" value={checkOut ? format(checkOut, "MM/dd/yyyy") : ""}/>
                <input type="hidden" name="rateplanid" value={ratePlanId}/>
                <input type="hidden" name="roomtypeid" value={roomTypeId}/>
                <input type="hidden" name="promo_code" value={promoCode}/>
                <input type="hidden" name="identifier" value={identifier}/>
            </>}

            {type == "hotel+flight" && <>
                <input type="hidden" name="hotel" value="10732"/>
                <input type="hidden" name="date_format" value="MM/DD/YYYY"/>
                <input type="hidden" name="aff" value="MRESIDENCES_EN"/>
                <input type="hidden" name="lang" value="1"/>
                <input type="hidden" name="airport" value={airport?.value || ""}/>
                <input type="hidden" name="adate" value={checkIn ? format(checkIn, "MM/dd/yyyy") : ""}/>
                <input type="hidden" name="ddate" value={checkOut ? format(checkOut, "MM/dd/yyyy") : ""}/>
                <input type="hidden" name="adults" value={adults}/>
                <input type="hidden" name="child" value={childrenGuests}/>
            </>}

            {user && <>
                <input type="hidden" name="pc" value="MEMBERVIP"/>
            </>}

            {children}
        </form>
    );
};

export default BookingForm;