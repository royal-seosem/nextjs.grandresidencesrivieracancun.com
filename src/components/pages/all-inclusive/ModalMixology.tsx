'use client'
import React from 'react';
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";
import Modal from "@/components/commons/ui/modal/modal";
import CardExperience from "@/components/pages/all-inclusive/CardExperience";

const ModalMixology = () => {
    const t = useTranslations('all-inclusive');
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <CardImg
                className={"col-span-2"}
                text={t('mixologia.titulo')}
                src={"img/all-inclusive/all-inclusive-new.jpg"}
                onClick={() => setOpen(true)}/>

            <Modal open={open} setOpen={setOpen} header={t('mixologia.titulo')}>
                <CardExperience
                    title={t('mixologia.titulo')}
                    description={{id: 'mixologia.descripcion', ns: 'all-inclusive'}}
                    image={[
                        {src: '/img/all-inclusive/all-inclusive-new.jpg', alt: t('mixologia.alts.0')},
                        {src: '/img/all-inclusive/748x400-bebida.jpg', alt: t('mixologia.alts.1')},
                    ]}/>
            </Modal>
        </>
    );
};

export default ModalMixology;