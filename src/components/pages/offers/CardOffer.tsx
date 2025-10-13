'use client'
import React from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import BookingBtnDrawer from "@/components/commons/shared/booking/BookingBtnDrawer";
import PaymentMethods from "@/components/commons/shared/PaymentMethods";
import {Offer} from "@/use_case/offers/get_home_offer";
import ModalOffer from "@/components/pages/offers/ModalOffer";

const CardOffer = (
    {offer}: { offer: Offer }
) => {
    const [open, setOpen] = React.useState(false);

    return (
        <article className={"shadow-md"}>
            <div className={"relative"}>
                <CdnImage
                    className={"w-full object-cover border-b-2 border-secondary "}
                    alt={offer.content.title || ""}
                    src={offer.gallery.small || ""}
                    width={713}
                    height={338}/>
                <span
                    className={"absolute top-2 right-2 bg-secondary rounded-md py-[5px] px-[10px] font-bold"}>
                    {offer.content.discount}
                </span>
                {offer.content.label &&
                    <span
                        className={"absolute bottom-0 left-0 py-1 px-2.5 bg-secondary rounded-tl-md rounded-tr-md font-bold"}>
                        {offer.content.label}
                    </span>
                }

            </div>

            <div className={"p-4"}>
                <p className="text-2xl font-medium mb-2"> {offer.content.title} </p>

                <ul className="list-disc ml-5 space-y-1 mb-4">
                    {offer.content.inclusions?.slice(0, 1).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <div className={"flex flex-col justify-start items-start gap-2 mb-4"}>
                    <button className={"text-base font-semibold underline"}
                            onClick={() => setOpen(true)}>read more
                    </button>
                    <BookingBtnDrawer offer={{
                        title: offer.content.title || "",
                        subtitle: "Special:",
                        type: "hotel",
                        ratePlanId: offer.ratePlanId
                    }}/>
                </div>

                <PaymentMethods/>
            </div>
            <ModalOffer offer={offer} open={open} setOpen={setOpen}/>
        </article>
    );
};

export default CardOffer;