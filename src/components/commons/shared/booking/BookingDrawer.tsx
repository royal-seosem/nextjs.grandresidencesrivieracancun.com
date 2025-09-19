import React from 'react';
import {Drawer, DrawerContent, DrawerTitle} from "@/components/commons/ui/drawer";
import BookingForm from "@/components/commons/shared/booking/BookingForm";
import BookingType from "@/components/commons/shared/booking/BookingType";
import BookingCheckIn from "@/components/commons/shared/booking/BookingCheckIn";
import BookingCheckout from "@/components/commons/shared/booking/BookingCheckout";
import BookingRooms from "@/components/commons/shared/booking/BookingRooms";
import BookingAdults from "@/components/commons/shared/booking/BookingAdults";
import BookingChildren from "@/components/commons/shared/booking/BookingChildren";
import BookingChildrenAge from "@/components/commons/shared/booking/BookingChildrenAge";
import BookingPromo from "@/components/commons/shared/booking/BookingPromo";
import BookingAirport from "@/components/commons/shared/booking/BookingAirport";
import BookingBtnDrawer from "@/components/commons/shared/booking/BookingBtnDrawer";
import {useWebsite} from "@/context/WebSiteProvider";
import BookingBook from "@/components/commons/shared/booking/BookingBook";

const BookingDrawer = () => {
    const {
        openBookingDrawer,
        setOpenBookingDrawer
    } = useWebsite();

    return (
        <Drawer open={openBookingDrawer} onClose={() => setOpenBookingDrawer(false)}>
            <DrawerContent>
                <DrawerTitle className="hidden" aria-hidden>Booking</DrawerTitle>
                <div className="p-5">
                    <BookingForm>
                        <BookingType
                            className="w-full mb-5"/>

                        <div className="w-full">
                            <BookingAirport className="w-full mb-5"/>
                        </div>

                        <div className="flex gap-5 mb-5">
                            <BookingCheckIn className="w-full"/>
                            <BookingCheckout className="w-full"/>
                        </div>

                        <div className="flex justify-between gap-4 mb-5">
                            <BookingRooms/>
                            <BookingAdults/>
                            <BookingChildren/>
                        </div>

                        <BookingChildrenAge className="mb-5"/>

                        <div className="flex justify-between gap-4">
                            <BookingPromo className={'w-1/2'}/>
                            <BookingBook/>
                        </div>

                    </BookingForm>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default BookingDrawer;