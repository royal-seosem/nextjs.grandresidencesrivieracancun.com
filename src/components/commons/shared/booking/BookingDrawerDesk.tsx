import React from 'react';
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
import {useWebsite} from "@/context/WebSiteProvider";
import BookingBook from "@/components/commons/shared/booking/BookingBook";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";
import {useBooking} from "@/components/commons/shared/booking/Context/BookingContext";
import {cn} from "@/lib/utils";

const BookingDrawerDesk = () => {
    const {
        openBookingDrawer: open,
        setOpenBookingDrawer: setOpen
    } = useWebsite();

    const {
        title,
        subtitle,
        showType,
    } = useBooking()


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                showCloseButton={false}
                className="w-[340px]">
                <DialogHeader className={cn(
                    title == "" ? "hidden" : ""
                )}>
                    <DialogTitle className="text-center">
                        <span className="block text-base font-bold text-[#763300]">{subtitle}</span>
                        <span className="block text-base font-normal text-[#322f2f]">{title}</span>
                    </DialogTitle>
                </DialogHeader>

                <div>
                    <BookingForm>

                        {showType &&
                            <BookingType
                                className="w-full mb-5"/>
                        }
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
            </DialogContent>
        </Dialog>
    );
};

export default BookingDrawerDesk;