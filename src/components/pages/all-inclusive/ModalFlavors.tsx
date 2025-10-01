'use client'
import React from 'react';
import CardImg from "@/components/pages/home/Cardimg";
import Modal from "@/components/commons/ui/modal/modal";
import {useTranslations} from "next-intl";
import CardExperience from "@/components/pages/all-inclusive/CardExperience";

const ModalFlavors = () => {
    const t = useTranslations('all-inclusive');
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <CardImg
                text={t('alimentos.titulo')}
                src={"img/all-inclusive/all-inclusive-flavours-2.jpg"}
                onClick={() => setOpen(true)}/>

            <Modal open={open} setOpen={setOpen} header={t('alimentos.titulo')}>
                <CardExperience
                    title={t("alimentos.titulo")}
                    description={{
                        id: 'alimentos.descripcion',
                        ns: 'all-inclusive'
                    }}
                    image={[
                        {
                            src: "/img/all-inclusive/all-inclusive-flavours-2.jpg",
                            alt: t('alimentos.alts.0')
                        },
                        {
                            src: "/img/all-inclusive/748x500-comida-1.jpg",
                            alt: t('alimentos.alts.1')
                        },
                        {
                            src: "/img/all-inclusive/748x500-comida-2.jpg",
                            alt: t('alimentos.alts.2')
                        }
                    ]}/>
            </Modal>

        </>
    );
};

export default ModalFlavors;