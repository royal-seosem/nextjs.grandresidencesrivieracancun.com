import React from 'react';
import ListIcon from "@/components/commons/icons/list.svg";
import {useTranslations} from "next-intl";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";
import {Room} from "@/use_case/rooms/types";
import Paragraph from "@/components/commons/ui/paragraph";
import CheckGreenIcon from "@/components/commons/icons/check-green.svg";

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

            <Dialog open={open} onOpenChange={() => setOpen(false)}>
                <DialogContent
                    showCloseButton={false}
                    className="w-[1024px]
                    max-w-[80%] lg:max-w-[80%]">

                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                            {room.name}
                        </DialogTitle>
                    </DialogHeader>

                    <div>
                        <Paragraph>{room.descripcion}</Paragraph>
                        <h3 className="text-accent text-base font-bold mb-4">{room.caracteristicasTitle}</h3>
                        <ul className="text-base mb-4 lg:columns-2">
                            {
                                room.caracteristicas.map((caracteristica, index) => (
                                    <li key={index}
                                        className="flex items-center gap-2">
                                        <CheckGreenIcon width={16} height={16}/>
                                        {caracteristica}
                                    </li>
                                ))
                            }
                        </ul>
                        <h3 className="text-accent text-base font-bold mb-4">{room.serviciosTitle}</h3>
                        <ul className="list-disc ml-5 lg:columns-2">
                            {
                                room.servicios.map((servicio, index) => (
                                    <li key={index}>{servicio}</li>
                                ))
                            }
                        </ul>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CardAmenities;