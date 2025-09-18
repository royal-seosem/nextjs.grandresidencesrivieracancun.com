'use client'
import React, {useEffect} from 'react';
import {useTranslations} from "next-intl";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/commons/ui/select";
import PeopleIconSvg from "@/components/commons/icons/people.svg";
import CardRoom from "@/components/pages/suites/CardRoom";
import {Room} from "@/use_case/rooms/types";
import {cn} from "@/lib/utils";

const SectionRooms = (
    {suites}: { suites: Room[] }
) => {
    const t = useTranslations('suites');
    const [rooms, setRooms] = React.useState<Room[]>(suites);
    const [suitesSelected, setSuitesSelected] = React.useState<string>("all");

    useEffect(() => {
        if (suitesSelected == "all") {
            setRooms([...suites]);
        }
        if (suitesSelected !== "all") {
            const filteredRooms = suites.filter((room) => room.roomType == suitesSelected);
            setRooms(filteredRooms);
        }
    }, [suitesSelected, suites]);

    return (
        <div className="my-container">
            <div className="lg:hidden">
                <Select
                    value={suitesSelected}
                    onValueChange={(value) => setSuitesSelected(value)}>
                    <SelectTrigger className={"w-full border border-menu2 px-2 py-2.5 text-left mb-5"}>
                        <SelectValue placeholder={t('suites_mobile.5')}/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="j-s-3">{t('suites_mobile.0')}</SelectItem>
                        <SelectItem value="o-b-5">{t('suites_mobile.1')}</SelectItem>
                        <SelectItem value="t-v-8">{t('suites_mobile.2')}</SelectItem>
                        <SelectItem value="t-v-10">{t('suites_mobile.3')}</SelectItem>
                        <SelectItem value="f-b-p">{t('suites_mobile.4')}</SelectItem>
                        <SelectItem value="all">{t('suites_mobile.5')}</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="hidden lg:flex justify-between items-center mb-5">
                <button
                    className={cn(
                        "flex items-center gap-1 px-4 py-1 bg-[#ecba581a]",
                        suitesSelected == "j-s-3" ? "border-b border-menu2" : ""
                    )}
                    onClick={() => setSuitesSelected("j-s-3")}>
                    <span>{t('suites_short.0')}</span>
                    <PeopleIconSvg width={21} height={21}/>
                </button>
                <button className={cn(
                    "flex items-center gap-1 px-4 py-1 bg-[#ecba581a]",
                    suitesSelected == "o-b-5" ? "border-b border-menu2" : ""
                )}
                    onClick={() => setSuitesSelected("o-b-5")}>
                    <span>{t('suites_short.1')}</span>
                    <PeopleIconSvg width={21} height={21}/>
                </button>
                <button className={cn(
                    "flex items-center gap-1 px-4 py-1 bg-[#ecba581a]",
                    suitesSelected == "t-v-8" ? "border-b border-menu2" : ""
                )} onClick={() => setSuitesSelected("t-v-8")}>
                    <span>{t('suites_short.2')}</span>
                    <PeopleIconSvg width={21} height={21}/>
                </button>
                <button className={cn(
                    "flex items-center gap-1 px-4 py-1 bg-[#ecba581a]",
                    suitesSelected == "t-v-10" ? "border-b border-menu2" : ""
                )} onClick={() => setSuitesSelected("t-v-10")}  >
                    <span>{t('suites_short.3')}</span>
                    <PeopleIconSvg width={21} height={21}/>
                </button>
                <button className={cn(
                    "flex items-center gap-1 px-4 py-1 bg-[#ecba581a]",
                    suitesSelected == "f-b-p" ? "border-b border-menu2" : ""
                )} onClick={() => setSuitesSelected("f-b-p")}>
                    <span>{t('suites_short.4')}</span>
                    <PeopleIconSvg width={21} height={21}/>
                </button>
                <button className={cn(
                    "flex items-center gap-1 px-4 py-1 bg-[#ecba581a]",
                    suitesSelected == "all" ? "border-b border-menu2" : ""
                )} onClick={() => setSuitesSelected("all")} >
                    <span>{t('suites_short.5')}</span>
                    <PeopleIconSvg width={21} height={21}/>
                </button>
            </div>
            <div className="lg:space-y-7">
                {rooms.map((room, key: number) => (
                    <CardRoom key={key} room={room}/>
                ))}
            </div>
        </div>

    );
};

export default SectionRooms;