import React from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";
import Paragraph from "@/components/commons/ui/paragraph";
import CheckGreenIcon from "@/components/commons/icons/check-green.svg";
import {Room} from "@/use_case/rooms/types";

interface ModalAmenityProps {
    room: Room,
    open: boolean,
    setOpen: (open: boolean) => void;
}

const ModalAmenity = (
    {room, open, setOpen}: ModalAmenityProps
) => {
    return (
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
    );
};

export default ModalAmenity;