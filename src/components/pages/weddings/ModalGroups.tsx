'use client'
import React from 'react';
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";
import Modal from "@/components/commons/ui/modal/modal";
import CardGroups from "@/components/pages/weddings/CardGroups";

const ModalGroups = () => {
    const t = useTranslations('weddings');
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <CardImg
                text={t('grupos.titulo')}
                src={"img/weddings/wedding-e.jpg"}
                onClick={() => setOpen(true)}/>

            <Modal open={open} setOpen={setOpen} header={t('grupos.titulo')}>
                <CardGroups/>
            </Modal>
        </div>
    );
};

export default ModalGroups;