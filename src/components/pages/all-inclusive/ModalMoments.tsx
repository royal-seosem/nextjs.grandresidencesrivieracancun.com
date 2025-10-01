'use client'
import React from 'react';
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";
import Modal from "@/components/commons/ui/modal/modal";
import CardExperience from "@/components/pages/all-inclusive/CardExperience";

const ModalMoments = () => {
    const t = useTranslations('all-inclusive');
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <CardImg
                className={"col-span-2"}
                text={t('unforgettable_moments.titulo')}
                src={"img/all-inclusive/unforgettable_moments.jpg"}
                onClick={() => setOpen(true)}
            />

            <Modal open={open} setOpen={setOpen} header={t('unforgettable_moments.titulo')}>
                <CardExperience
                    title={t('unforgettable_moments.titulo')}
                    description={{
                        id: 'unforgettable_moments.descripcion',
                        ns: 'all-inclusive'
                    }}
                    image={[
                        {
                            src: "/img/all-inclusive/unforgettable_moments.jpg",
                            alt: t("unforgettable_moments.alts.0")
                        }
                    ]}/>
            </Modal>

        </>
    );
};

export default ModalMoments;