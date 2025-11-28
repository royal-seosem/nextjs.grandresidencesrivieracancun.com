import React from 'react';
import ListIcon from "@/components/commons/icons/list.svg";
import {useTranslations} from "next-intl";
import {Room} from "@/use_case/rooms/types";
import dynamic from "next/dynamic";

const ModalAmenity = dynamic(() => import("@/components/pages/suites/ModalAmenity"), {ssr: false});

interface CardAmenitiesProps {
    room: Room
}

const CardAmenities = (
    {room}: CardAmenitiesProps,
) => {
    const t = useTranslations('suites');
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <button
                className="flex items-center gap-2 text-sm"
                onClick={() => setOpen(true)}>
                <ListIcon className="shrink-0" width={24} height={24}/>
                {t('boton amenities')}
            </button>

            <ModalAmenity room={room} open={open} setOpen={setOpen}/>
        </div>
    );
};

export default CardAmenities;