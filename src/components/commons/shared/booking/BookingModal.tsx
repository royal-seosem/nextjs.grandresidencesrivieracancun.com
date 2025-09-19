import React, {useState} from 'react';
import BookingForm from "@/components/commons/shared/booking/BookingForm";
import BookingType from "@/components/commons/shared/booking/BookingType";
import BookingAirport from "@/components/commons/shared/booking/BookingAirport";
import BookingCheckIn from "@/components/commons/shared/booking/BookingCheckIn";
import BookingCheckout from "@/components/commons/shared/booking/BookingCheckout";
import BookingRooms from "@/components/commons/shared/booking/BookingRooms";
import BookingAdults from "@/components/commons/shared/booking/BookingAdults";
import BookingChildren from "@/components/commons/shared/booking/BookingChildren";
import BookingChildrenAge from "@/components/commons/shared/booking/BookingChildrenAge";
import BookingPromo from "@/components/commons/shared/booking/BookingPromo";
import BookingBook from "@/components/commons/shared/booking/BookingBook";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";


const BookingModal = () => {
    const [open, setOpen] = useState(true);
    const title = 'Special:';
    const subtitle = 'Summer Special including Airport Transportation + Credits';
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                showCloseButton={false}
                className="w-[340px]">
                <DialogHeader>
                    <DialogTitle className="text-center">

                        <span className="block text-base font-bold text-[#763300]">{title}</span>
                        <span className="block text-base font-normal text-[#322f2f]">{subtitle}</span>
                    </DialogTitle>
                </DialogHeader>

                <div>
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
            </DialogContent>

        </Dialog>
    );
};

export default BookingModal;