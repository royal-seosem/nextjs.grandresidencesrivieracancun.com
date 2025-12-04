'use client'
import React, {useEffect} from 'react';
import {cn} from "@/lib/utils";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/commons/ui/select";
import CardRoom from "@/components/pages/suites/CardRoom";
import PeopleIconSvg from "@/components/commons/icons/people.svg";
import {Room} from "@/use_case/rooms/types";


interface SectionRoomsProps {
    suites: Room[],
    suitesShort: string[],
    suitesMobile: string[],
}

const SectionRooms = (
    {suites, suitesShort, suitesMobile}: SectionRoomsProps
) => {
    // const t = useTranslations('suites');
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
                        <SelectValue placeholder={suitesMobile[5]}/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="j-s-3">{suitesMobile[0]}</SelectItem>
                        <SelectItem value="o-b-5">{suitesMobile[1]}</SelectItem>
                        <SelectItem value="t-v-8">{suitesMobile[2]}</SelectItem>
                        <SelectItem value="t-v-10">{suitesMobile[3]}</SelectItem>
                        <SelectItem value="f-b-p">{suitesMobile[4]}</SelectItem>
                        <SelectItem value="all">{suitesMobile[5]}</SelectItem>
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
                    <span>{suitesShort[0]}</span>
                    <PeopleIconSvg width={21} height={21}/>
                </button>
                <button className={cn(
                    "flex items-center gap-1 px-4 py-1 bg-[#ecba581a]",
                    suitesSelected == "o-b-5" ? "border-b border-menu2" : ""
                )}
                        onClick={() => setSuitesSelected("o-b-5")}>
                    <span>{suitesShort[1]}</span>
                    <PeopleIconSvg width={21} height={21}/>
                </button>
                <button className={cn(
                    "flex items-center gap-1 px-4 py-1 bg-[#ecba581a]",
                    suitesSelected == "t-v-8" ? "border-b border-menu2" : ""
                )} onClick={() => setSuitesSelected("t-v-8")}>
                    <span>{suitesShort[2]}</span>
                    <PeopleIconSvg width={21} height={21}/>
                </button>
                <button className={cn(
                    "flex items-center gap-1 px-4 py-1 bg-[#ecba581a]",
                    suitesSelected == "t-v-10" ? "border-b border-menu2" : ""
                )} onClick={() => setSuitesSelected("t-v-10")}>
                    <span>{suitesShort[3]}</span>
                    <PeopleIconSvg width={21} height={21}/>
                </button>
                <button className={cn(
                    "flex items-center gap-1 px-4 py-1 bg-[#ecba581a]",
                    suitesSelected == "f-b-p" ? "border-b border-menu2" : ""
                )} onClick={() => setSuitesSelected("f-b-p")}>
                    <span>{suitesShort[4]}</span>
                    <PeopleIconSvg width={21} height={21}/>
                </button>
                <button className={cn(
                    "flex items-center gap-1 px-4 py-1 bg-[#ecba581a]",
                    suitesSelected == "all" ? "border-b border-menu2" : ""
                )} onClick={() => setSuitesSelected("all")}>
                    <span>{suitesShort[5]}</span>
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