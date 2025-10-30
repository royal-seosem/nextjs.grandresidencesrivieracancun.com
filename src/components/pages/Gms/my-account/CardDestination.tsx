'use client'
import React from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import Modal from "@/components/commons/ui/modal/modal";
import Paragraph from "@/components/commons/ui/paragraph";

interface CardDestinationProps {
    src: string;
    imgModal: string;
    titleShort: string;
    title: string;
    description: string;
}

const CardDestination = (
    {src, imgModal, titleShort, title, description}: CardDestinationProps,
) => {

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <figure onClick={() => setOpen(true)}>
                <CdnImage
                    className={"w-full object-cover h-auto"}
                    src={src}
                    width={370} height={268} alt={titleShort}/>
                <figcaption className={"text-center px-1 py-2"}>
                    {titleShort}
                </figcaption>
            </figure>

            <Modal open={open} setOpen={setOpen} header={title}>
                <div className={"p-5"}>
                    <CdnImage
                        className={"w-full object-cover h-auto mb-4"}
                        src={`/img/my-royal/destinations/modal/mobile/${imgModal}`}
                        width={370} height={268} alt={titleShort}/>

                    <h3 className="mb-4 font-bold text-lg">
                        {title}
                    </h3>

                    <Paragraph>{description}</Paragraph>
                </div>
            </Modal>
        </>
    );
};

export default CardDestination;