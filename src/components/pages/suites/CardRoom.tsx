'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import CdnImage from "@/components/commons/ui/CdnImage";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import AreaIcon from "@/components/commons/icons/area.svg";
import Ico360 from "@/components/commons/icons/ico-360.svg";
import ListIcon from "@/components/commons/icons/list.svg";
import BookingBook from "@/components/commons/shared/booking/BookingBook";
import {Room} from "@/use_case/rooms/types";

const CardRoom = (
    {room}: { room: Room }
) => {
    const t = useTranslations('suites');
    return (
        <article>
            <Gallery>
                {
                    room.gallery.map((image, index) => (
                        <CarouselItem key={index}>
                            <CdnImage
                                width={360}
                                height={309}
                                alt={image.alt}
                                className={"object-cover w-full"}
                                src={image.url}/>
                        </CarouselItem>
                    ))
                }
            </Gallery>

            <div className="p-5">
                <h3 className="text-2xl font-bold text-primary mb-5">{room.name}</h3>
                <h4 className="text-base font-bold mb-4">{room.vista}</h4>
                <ul className="list-disc ml-5 space-y-1 mb-4">
                    {
                        room.amenidades.map((amenidad, index) => (
                            <li key={index}>{amenidad}</li>
                        ))
                    }
                </ul>
                <div className="flex justify-between items-center mb-4">
                    <button className="flex items-center gap-2 text-sm">
                        <AreaIcon className="shrink-0" width={24} height={24}/>
                        {t('floor plan')}
                    </button>
                    <button className="flex items-center gap-2 text-sm">
                        <Ico360 className="shrink-0" width={24} height={24}/>
                        {t('360 Tour')}
                    </button>
                    <button className="flex items-center gap-2 text-sm">
                        <ListIcon className="shrink-0" width={24} height={24}/>
                        {t('boton amenities')}
                    </button>
                </div>
                <div className="flex justify-between items-center">

                    <div className="text-xs font-medium text-center font-tertiary w-1/2">
                        <p>
                            {t('starting')} <span className="line-through">${room.roomPrice} USD</span>
                        </p>
                        <p className="text-sm font-bold">
                            $<span className="text-base ">{room.roomPriceOferta}</span> USD
                        </p>
                        <p>{room.leyenda}</p>
                    </div>

                    <BookingBook/>
                </div>
            </div>
        </article>
    );
};

export default CardRoom;