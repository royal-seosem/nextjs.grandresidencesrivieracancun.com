'use client'
import React from 'react';
import dynamic from "next/dynamic";
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";

const Modal = dynamic(() => import("@/components/commons/ui/modal/modal"), {ssr: false});
const CardExperience = dynamic(()=> import("@/components/pages/all-inclusive/CardExperience"), {ssr: false});

const ModalFlavors = () => {
    const t = useTranslations('all-inclusive');
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <CardImg
                text={t('alimentos.titulo')}
                src={"img/all-inclusive/all-inclusive-flavours-2.jpg"}
                onClick={() => setOpen(true)}/>

            {open && <Modal open={open} setOpen={setOpen} header={t('alimentos.titulo')}>
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
            </Modal>}
        </>
    );
};

export default ModalFlavors;