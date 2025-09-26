'use client'
import React from 'react';
import Cardimg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";
import Modal from "@/components/commons/ui/modal/modal";
import CardKids from "@/components/pages/amenities/CardKids";

const SectionKids = () => {
    const t = useTranslations('amenities');
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <div className={"mb-10 md:hidden"}>
                <Cardimg
                    text={t('kids.titulo')}
                    src={"/img/activities/595x510/kids-club-in-grand-redidences-1.jpg"}
                    width={595}
                    onClick={() => setOpen(true)}
                    height={510}/>

                <Modal open={open} setOpen={setOpen} header={t('kids.titulo')}>
                    <CardKids/>
                </Modal>
            </div>
            <div className={"hidden md:block md:mb-10"}>
                <CardKids/>
            </div>
        </>

    );
};

export default SectionKids;