'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import Ico360 from "@/components/commons/icons/ico-360.svg";
import Modal from "@/components/commons/ui/modal/modal";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/commons/ui/tabs";


const RestaurantTour360 = () => {
    const t = useTranslations('restaurants');
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <button
                className="flex items-center gap-1 text-base font-bold px-2 mb-2.5"
                onClick={() => setOpen(true)}>
                <Ico360 width={24} height={24}/>
                {t('btn_360')}
            </button>

            <Modal open={open} setOpen={setOpen} header={t('btn_360')}>
                <div className="p-5">
                    <h3 className="text-lg leading-none font-semibold text-center">{t('btn_360')}</h3>
                    <span className="mb-4 block">{t('tour_360_description')}</span>
                    <Tabs defaultValue="flor-de-canela" className="w-full">
                        <TabsList className="justify-center items-stretch w-full gap-2 bg-transparent h-auto">
                            <TabsTrigger
                                className={"data-[state=active]:bg-[#76330080] data-[state=active]:text-white bg-white basis-[200px] max-w-[200px] text-wrap whitespace-pre-wrap uppercase h-auto px-1.5 py-2 block text-sm font-bold rounded-none grow-0 text-center border border-primary"}
                                value="flor-de-canela">Flor de canela</TabsTrigger>
                            <TabsTrigger
                                className={"data-[state=active]:bg-[#76330080] data-[state=active]:text-white bg-white basis-[200px] max-w-[200px] text-wrap whitespace-pre-wrap uppercase h-auto px-1.5 py-2 block text-sm font-bold rounded-none grow-0 text-center border border-primary"}
                                value="faro-grill">El Faro Grill</TabsTrigger>
                            <TabsTrigger
                                className={"data-[state=active]:bg-[#76330080] data-[state=active]:text-white bg-white basis-[200px] max-w-[200px] text-wrap whitespace-pre-wrap uppercase h-auto px-1.5 py-2 block text-sm font-bold rounded-none grow-0 text-center border border-primary"}
                                value="bar-and-grill">Heaven Beach Bar and Grill</TabsTrigger>
                        </TabsList>
                        <TabsContent value="flor-de-canela">
                            <iframe
                                src={"https://tour-gr.royalreservations.com/#39128450p&337.03h&72.35t"}
                                width="100%"
                                height="450"
                                allowFullScreen
                                allow="autoplay; fullscreen; xr-spatial-tracking"
                                className="rounded-md"
                            />
                        </TabsContent>
                        <TabsContent value="faro-grill">
                            <iframe
                                src={"https://tour-gr.royalreservations.com/#39128447p&326.93h&82.02t"}
                                width="100%"
                                height="450"
                                allowFullScreen
                                allow="autoplay; fullscreen; xr-spatial-tracking"
                                className="rounded-md"
                            />
                        </TabsContent>
                        <TabsContent value="bar-and-grill">
                            <iframe
                                src={"https://tour-gr.royalreservations.com/#39128506p&33.83h&89.98t"}
                                width="100%"
                                height="450"
                                allowFullScreen
                                allow="autoplay; fullscreen; xr-spatial-tracking"
                                className="rounded-md"
                            />
                        </TabsContent>

                    </Tabs>
                </div>
            </Modal>
        </div>
    );
};

export default RestaurantTour360;