'use client'
import React from 'react';
import dynamic from "next/dynamic";
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";

const Modal = dynamic(() => import("@/components/commons/ui/modal/modal"), {ssr: false});
const CardThemeNights =  dynamic(()=> import("@/components/pages/all-inclusive/CardThemeNights"), {ssr: false});

const ModalThemeNights = () => {
    const t = useTranslations('all-inclusive');
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <CardImg
                text={t('noches.titulo')}
                src={"img/all-inclusive/all-in-gr-tematic-nights-a.jpg"}
                onClick={() => setOpen(true)}/>

            {open && <Modal open={open} setOpen={setOpen} header={t('noches.titulo')}>
                <CardThemeNights/>
            </Modal>}
        </>
    );
};

export default ModalThemeNights;