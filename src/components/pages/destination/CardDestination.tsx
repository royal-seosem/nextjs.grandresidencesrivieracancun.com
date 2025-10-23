'use client'
import React from 'react';
import CardImg from "@/components/pages/home/Cardimg";
import {useTranslations} from "next-intl";
import CardExperience, {CardExperienceProps} from "@/components/pages/all-inclusive/CardExperience";
import Modal from "@/components/commons/ui/modal/modal";

interface CardDestinationProps {
    className?: string;
    title: string;
    image: string;

    cardExperience: CardExperienceProps;
}

const CardDestination = (
    {className, title, image, cardExperience}: CardDestinationProps,
) => {
    const t = useTranslations('all-inclusive');
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <CardImg
                className={className}
                text={title}
                src={image}
                onClick={() => setOpen(true)}/>

            <Modal open={open} setOpen={setOpen} header={t('mixologia.titulo')}>
                <CardExperience
                    title={cardExperience.title}
                    description={cardExperience.description}
                    image={cardExperience.image}/>
            </Modal>
        </>
    );
};

export default CardDestination;