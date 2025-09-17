export interface RoomImage {
    url: string;
    alt: string;
}

export interface Room {
    name: string;
    edades: string;
    vista: string;

    amenidades: string[];
    caracteristicas: string[];
    servicios: string[];

    precio: string;
    precio_oferta: string;

    descripcion: string;
    leyenda: string;

    slug: string;
    block_form: "true" | "false";
    room_id: string;
    tour360?: string;

    gallery: RoomImage[];
    galleryBig: RoomImage[];

    roomPrice: number;
    roomPriceOferta: number;
}
