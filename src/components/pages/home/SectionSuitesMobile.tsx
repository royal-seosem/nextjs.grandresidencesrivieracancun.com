'use client'
import React, {useState} from 'react';
import dynamic from "next/dynamic";
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";

const ModalAllInclusive = dynamic(() => import("@/components/pages/home/ModalAllInclusive"), {ssr: false});
const ModalSuites = dynamic(() => import("@/components/pages/home/ModalSuites"), {ssr: false});
const ModalWedding = dynamic(() => import("@/components/pages/home/ModalWedding"), {ssr: false});

interface SectionSuitesMobileProps {
    habitaciones: string[];
    amenities_alt: string[];
    group_event_alt: string[];
}

const SectionSuitesMobile = (
    {habitaciones, amenities_alt, group_event_alt}: SectionSuitesMobileProps
) => {
    const tmenu = useTranslations('menu');

    const [suites, setSuites] = useState(false);
    const [allInclusive, setAllInclusive] = useState(false);
    const [wedding, setWedding] = useState(false);

    return (
        <section className="lg:hidden">
            <div className="grid grid-cols-2 gap-5 mb-5 my-container">
                <CardImg
                    className="col-span-2 "
                    src="/img/rooms/360x309/junior-suite-0.jpg"
                    width={360} height={309}
                    text={tmenu('suites')}
                    onClick={() => setSuites(true)}/>

                <CardImg
                    src="/img/home/360x309/all-inclusive.jpg"
                    width={128} height={110}
                    text={tmenu('all inclusive')}
                    onClick={() => setAllInclusive(true)}/>

                <CardImg
                    src="/img/home/360x309/events-wedding.jpg"
                    width={128} height={110}
                    text={tmenu('wedding')}
                    onClick={() => setWedding(true)}
                />
            </div>

            {suites && <ModalSuites suites={suites} setSuites={setSuites} habitaciones={habitaciones}/>}
            {allInclusive && <ModalAllInclusive allInclusive={allInclusive} setAllInclusive={setAllInclusive}
                                                amenities_alt={amenities_alt}/>}
            {wedding && <ModalWedding wedding={wedding} setWedding={setWedding} group_event_alt={group_event_alt}/>}


        </section>
    );
};

export default SectionSuitesMobile;