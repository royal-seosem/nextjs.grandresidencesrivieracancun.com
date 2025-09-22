import React from 'react';
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {useLocale} from "use-intl";
import {useBooking} from "@/components/commons/shared/booking/Context/BookingContext";


interface BookingFormProps {
    children: React.ReactNode;
    variant?: 'DESK' | 'MODAL' | 'MOBILE'
}

const BookingForm = (
    {children, variant}: BookingFormProps
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
        identifier
    } = useBooking();

    return (
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
            <input type="hidden" name="rateplanid" value={ratePlanId}/>
            <input type="hidden" name="roomtypeid" value={roomTypeId}/>
            <input type="hidden" name="promo_code" value={promoCode}/>
            <input type="hidden" name="identifier" value={identifier}/>

            {children}
        </form>
    );
};

export default BookingForm;