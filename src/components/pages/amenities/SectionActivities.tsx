'use client'
import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/commons/ui/tabs";
import CdnImage from "@/components/commons/ui/CdnImage";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/commons/ui/select";
import Paragraph from "@/components/commons/ui/paragraph";

interface ActivitiesProps {
    messages: {
        actividades: {
            titulo: string;
            descripcion: string;
            slug: string;
        }[],
        titulo: string;
    }
}

const SectionActivities = (
    {messages: t}: ActivitiesProps
) => {
    const [activity, setActivity] = React.useState<string>("0");
    const actividades = t.actividades;
    return (
        <div className={"mb-10"}>
            <h3 className="text-accent text-3xl text-center mb-10 font-medium
                lg:text-5xl">
                {t.titulo}
            </h3>

            <Select
                value={activity}
                onValueChange={setActivity}>
                <SelectTrigger className={"w-full border border-menu2 px-2 py-2.5 text-left mb-5 lg:hidden"}>
                    <SelectValue placeholder={""}/>
                </SelectTrigger>
                <SelectContent>
                    {
                        actividades.map((item: {
                            titulo: string;
                        }, index: number) => (
                            <SelectItem key={index} value={index.toString()}>
                                {item.titulo}
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>

            <Tabs value={activity} onValueChange={setActivity}>
                <TabsList className="hidden lg:flex w-full justify-between bg-white">
                    {
                        actividades.map((item: {
                            titulo: string;
                        }, index: number) => (
                            <TabsTrigger
                                className={"shadow-none data-[state=active]:shadow-none  data-[state=active]:border-b data-[state=active]:border-l-0 data-[state=active]:border-t-0 data-[state=active]:border-r-0 data-[state=active]:border-menu2  rounded-none"}
                                key={index} value={index.toString()}>
                                {item.titulo}
                            </TabsTrigger>
                        ))
                    }
                </TabsList>
                {
                    actividades.map((item: {
                            titulo: string;
                            descripcion: string;
                            slug: string
                        }, index: number) => (
                            <TabsContent key={index} value={index.toString()}>
                                <div className={"md:flex items-center gap-5"}>
                                    <div className={"w-1/2"}>
                                        <CdnImage
                                            className={"mb-5 w-full object-cover order-2"}
                                            src={`/img/activities/${item.slug}.jpg`}
                                            alt={item.titulo}
                                            width={650}
                                            label={true}
                                            height={400}/>

                                    </div>

                                    <div className={"w-1/2"}>
                                        <h3 className="text-primary font-bold ">{item.titulo}</h3>
                                        <Paragraph>{item.descripcion}</Paragraph>
                                    </div>
                                </div>

                            </TabsContent>
                        )
                    )
                }

            </Tabs>
        </div>
    );
};

export default SectionActivities;