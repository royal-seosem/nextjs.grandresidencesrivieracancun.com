'use client'
import React from 'react';
import CardImg from "@/components/pages/home/Cardimg";
import CardRestaurant from "@/components/pages/restaurants/CardRestaurant";
import Modal from "@/components/commons/ui/modal/modal";
import Gallery from "@/components/commons/ui/gallery/gallery";
import {CarouselItem} from "@/components/commons/ui/carousel";

interface RestaurantProps {
    messages: {
        conceptos: {
            titulo: string;
            subtitulo: string;
            descripcion: string;
        }[]
    }
}

const Restaurants = (
    {messages: t}: RestaurantProps
) => {
    const [florDeCanela, setFlorDeCanela] = React.useState(false);
    const [elFaroGrill, setElFaroGrill] = React.useState(false);
    const [heavenGrill, setHeavenGrill] = React.useState(false);
    const [roomService, setRoomService] = React.useState(false);

    return (
        <div>
            <div className="md:hidden grid grid-cols-2 gap-4 mb-6">
                <CardImg
                    className="col-span-2"
                    text={t.conceptos[0]['titulo']}
                    width={700}
                    height={600}
                    onClick={() => setFlorDeCanela(true)}
                    src={"/img/restaurants/flor-de-canela.jpg"}/>

                <CardImg
                    text={t.conceptos[1]["titulo"]}
                    width={700}
                    height={600}
                    onClick={() => setElFaroGrill(true)}
                    src={"/img/restaurants/el-faro-grill.jpg"}/>

                <CardImg
                    text={t.conceptos[2]["titulo"]}
                    width={700}
                    height={600}
                    onClick={() => setHeavenGrill(true)}
                    src={"/img/restaurants/heaven-grill.jpg"}/>

                <CardImg
                    className="col-span-2"
                    text={t.conceptos[3]["titulo"]}
                    width={700}
                    height={600}
                    onClick={() => setRoomService(true)}
                    src={"/img/restaurants/696x376/room-service.jpg"}/>
            </div>
            <Modal open={florDeCanela} setOpen={setFlorDeCanela} header={t.conceptos[0]["titulo"]}>
                <CardRestaurant
                    title={t.conceptos[0]["titulo"]}
                    subtitle={t.conceptos[0]['subtitulo']}
                    src={"/img/restaurants/flor-de-canela.jpg"}
                    description={t.conceptos[0]["descripcion"]}
                />
            </Modal>
            <Modal open={elFaroGrill} setOpen={setElFaroGrill} header={t.conceptos[1]["titulo"]}>
                <CardRestaurant
                    title={t.conceptos[1]["titulo"]}
                    subtitle={t.conceptos[1]['subtitulo']}
                    description={t.conceptos[1]["descripcion"]}
                    src={"/img/restaurants/el-faro-grill.jpg"}
                />
            </Modal>
            <Modal open={heavenGrill} setOpen={setHeavenGrill} header={t.conceptos[2]["titulo"]}>
                <CardRestaurant
                    title={t.conceptos[2]["titulo"]}
                    subtitle={t.conceptos[2]['subtitulo']}
                    description={t.conceptos[2]["descripcion"]}
                    src={"/img/restaurants/heaven-grill.jpg"}
                />
            </Modal>
            <Modal open={roomService} setOpen={setRoomService} header={t.conceptos[3]["titulo"]}>
                <CardRestaurant
                    title={t.conceptos[3]["titulo"]}
                    subtitle={t.conceptos[3]['subtitulo']}
                    description={t.conceptos[3]["descripcion"]}
                    src={"/img/restaurants/696x376/room-service.jpg"}
                />
            </Modal>

            <div className={"hidden md:block mb-10"}>
                <Gallery variant={"primary"} position={"bottom"}>
                    <CarouselItem>
                        <CardRestaurant
                            title={t.conceptos[0]["titulo"]}
                            subtitle={t.conceptos[0]['subtitulo']}
                            description={t.conceptos[0]["descripcion"]}
                            src={"/img/restaurants/flor-de-canela.jpg"}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <CardRestaurant
                            title={t.conceptos[1]["titulo"]}
                            subtitle={t.conceptos[1]['subtitulo']}
                            description={t.conceptos[1]["descripcion"]}
                            src={"/img/restaurants/el-faro-grill.jpg"}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <CardRestaurant
                            title={t.conceptos[2]["titulo"]}
                            subtitle={t.conceptos[2]['subtitulo']}
                            description={t.conceptos[2]["descripcion"]}
                            src={"/img/restaurants/heaven-grill.jpg"}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <CardRestaurant
                            title={t.conceptos[3]["titulo"]}
                            subtitle={t.conceptos[3]['subtitulo']}
                            description={t.conceptos[3]["descripcion"]}
                            src={"/img/restaurants/696x376/room-service.jpg"}
                        />
                    </CarouselItem>
                </Gallery>
            </div>

        </div>
    );
};

export default Restaurants;