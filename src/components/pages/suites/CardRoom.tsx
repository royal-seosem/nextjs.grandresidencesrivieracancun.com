'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import CdnImage from "@/components/commons/ui/CdnImage";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";
import AreaIcon from "@/components/commons/icons/area.svg";
import Ico360 from "@/components/commons/icons/ico-360.svg";
import ListIcon from "@/components/commons/icons/list.svg";
import Booking from "@/components/commons/shared/booking/Booking";
import BookingBook from "@/components/commons/shared/booking/BookingBook";

const CardRoom = () => {
    const t = useTranslations('suites');
    return (
        <article>
            <Gallery>
                <CarouselItem>
                    <CdnImage
                        width={360}
                        height={309}
                        alt={"Image"}
                        className={"object-cover w-full"}
                        src={"/img/rooms/junior-suite-5.jpg"}/>
                </CarouselItem>
                <CarouselItem>
                    <CdnImage
                        width={360}
                        height={309}
                        alt={"Image"}
                        className={"object-cover w-full"}
                        src={"/img/rooms/junior-suite-5.jpg"}/>
                </CarouselItem>
            </Gallery>

            <div className="p-5">
                <h3 className="text-2xl font-bold text-primary mb-5">Junior Suite King, Up to 3 people</h3>
                <h4 className="text-base font-bold mb-4">Resort View or Beachfront units available</h4>
                <ul className="list-disc ml-5 space-y-1 mb-4">
                    <li>King-size bed: 1</li>
                    <li>Murphy bed: 1</li>
                    <li>Kitchenette</li>
                    <li>Balcony</li>
                    <li>Area: 603 sq.ft.</li>
                    <li>Kitchenette with microwave, coffee maker, minibar</li>
                    <li>Private bathroom with vanity mirror and hairdryer. Shower with tub</li>
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
                            {t('starting')} <span className="line-through">300 USD</span>
                        </p>
                        <p className="text-sm font-bold">
                            $<span className="text-base ">200</span> USD
                        </p>
                        <p>
                            Per night, based on double occupancy, tax included
                        </p>
                    </div>

                    <BookingBook/>
                </div>
            </div>
        </article>
    );
};

export default CardRoom;