'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import {Room} from "@/use_case/rooms/types";
import CdnImage from "@/components/commons/ui/CdnImage";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import BookingBtnDrawer from "@/components/commons/shared/booking/BookingBtnDrawer";

import CardFloorPlan from "@/components/pages/suites/CardFloorPlan";
import Card360Tour from "@/components/commons/shared/Card360Tour";
import CardAmenities from "@/components/pages/suites/CardAmenities";

const CardRoom = (
    {room}: { room: Room }
) => {
    const t = useTranslations('suites');
    return (
        <article className="lg:flex lg:p-5 lg:gap-5 lg:shadow-[0_2px_18px_#be8b5e33] lg:items-stretch">
            <div className="lg:w-[286px] h-auto lg:grow-0 lg:shrink-0">
                <Gallery>
                    {
                        room.gallery.map((image, index) => (
                            <CarouselItem key={index}>
                                <CdnImage
                                    width={360}
                                    height={309}
                                    alt={image.alt}
                                    className={"object-cover w-full h-full"}
                                    src={image.url}/>
                            </CarouselItem>
                        ))
                    }
                </Gallery>
            </div>

            <div className="p-5 lg:flex lg:p-0 lg:w-full  lg:gap-5">
                <div className="lg:grow-1">
                    <h3 className="text-2xl font-bold text-primary mb-5 lg:mb-0">{room.name}</h3>
                    <h4 className="text-base font-bold mb-4">{room.vista}</h4>
                    <ul className="list-disc ml-5 space-y-1 mb-4 lg:columns-2">
                        {
                            room.amenidades?.map((amenidad, index) => (
                                <li className="text-base" key={index}>{amenidad}</li>
                            ))
                        }
                    </ul>

                    <div className="flex justify-between items-center mb-4">
                        <CardFloorPlan title={room.name} src={room.floorPlan}/>
                        {
                            room.tour360 &&
                            <Card360Tour title={room.name} src={room.tour360}/>
                        }

                        <CardAmenities room={room}/>
                    </div>
                </div>
                <div className="flex justify-between items-center
                    lg:flex-col lg:w-[125px] lg:gap-2 lg:grow-0 lg:shrink-0 lg:items-center lg:justify-center">
                    <div className="text-xs font-medium text-center font-tertiary w-1/2 lg:w-full">
                        <p>
                            {t('starting')} <span className="line-through">${room.roomPrice} USD</span>
                        </p>
                        <p className="text-sm font-bold">
                            $<span className="text-base ">{room.roomPriceOferta}</span> USD
                        </p>
                        <p>{room.leyenda}</p>
                    </div>

                    <BookingBtnDrawer offer={{
                        title: room.name,
                        subtitle: "Room:",
                        roomTypeId: room.room_id,
                        type: "hotel"
                    }}/>
                </div>
            </div>
        </article>
    );
};

export default CardRoom;