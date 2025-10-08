import React from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import BookingBtnDrawer from "@/components/commons/shared/booking/BookingBtnDrawer";
import PaymentMethods from "@/components/commons/shared/PaymentMethods";

const CardOffer = () => {
    return (
        <article className={"shadow-sm"}>
            <CdnImage
                className={"w-full object-cover border-b-2 border-secondary "}
                alt={"flash sale"}
                src={"/img/deals//small/luxury-flash-sale.jpg?v=428224"}
                width={713}
                height={338}/>

            <div className={"p-4"}>
                <p className="text-2xl font-medium mb-2"> All Inclusive Flash Sale including Private Airport
                    Transportation </p>
                <ul className="list-disc ml-5 space-y-1 mb-4">
                    <li>
                        Special Discount
                    </li>
                </ul>
                <div className={"flex flex-col justify-start items-start gap-2 mb-4"}>
                    <button className={"text-base font-semibold underline"}>read more</button>
                    <BookingBtnDrawer/>
                </div>

                <PaymentMethods/>
            </div>
        </article>
    );
};

export default CardOffer;