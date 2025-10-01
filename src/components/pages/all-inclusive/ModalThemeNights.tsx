'use client'
import React from 'react';
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";
import Modal from "@/components/commons/ui/modal/modal";
import CardThemeNights from "@/components/pages/all-inclusive/CardThemeNights";

const ModalThemeNights = () => {
    const t = useTranslations('all-inclusive');
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <CardImg
                text={t('noches.titulo')}
                src={"img/all-inclusive/all-in-gr-tematic-nights-a.jpg"}
                onClick={() => setOpen(true)}/>

            <Modal open={open} setOpen={setOpen} header={t('noches.titulo')}>
                <CardThemeNights/>
            </Modal>
        </>
    );
};

export default ModalThemeNights;