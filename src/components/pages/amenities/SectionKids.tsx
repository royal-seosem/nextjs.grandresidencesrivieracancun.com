'use client'
import dynamic from "next/dynamic";
import React from 'react';
import Cardimg from "@/components/pages/home/Cardimg";
import CardKids from "@/components/pages/amenities/CardKids";

const Modal = dynamic(() => import("@/components/commons/ui/modal/modal"), {ssr: false});

interface SectionKidsProps {
    messages: {
        kidsTitle: string;
        kidsDescription: string;
        kidsAlts: string[]
    }
}

const SectionKids = (
    {messages: t}: SectionKidsProps
) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <div className={"mb-10 md:hidden"}>
                <Cardimg
                    text={t.kidsTitle}
                    src={"/img/activities/595x510/kids-club-in-grand-redidences-1.jpg"}
                    width={595}
                    onClick={() => setOpen(true)}
                    height={510}/>

                <Modal open={open} setOpen={setOpen} header={t.kidsTitle}>
                    <CardKids messages={{
                        kids: {
                            titulo: t.kidsTitle,
                            descripcion: t.kidsDescription,
                            alts: t.kidsAlts
                        }
                    }}/>
                </Modal>
            </div>
            <div className={"hidden md:block md:mb-10"}>
                <CardKids messages={{
                    kids: {
                        titulo: t.kidsTitle,
                        descripcion: t.kidsDescription,
                        alts: t.kidsAlts
                    }
                }}/>
            </div>
        </>

    );
};

export default SectionKids;