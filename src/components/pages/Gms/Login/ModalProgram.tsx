'use client'
import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import {cn} from "@/lib/utils";
import Modal from "@/components/commons/ui/modal/modal";
import CdnImage from "@/components/commons/ui/CdnImage";
import RichTextClient from "@/components/commons/shared/RitchTextClient";

interface ModalProgramProps {
    className?: string;
}

const ModalProgram = (
    {className}: ModalProgramProps,
) => {
    const t = useTranslations('gms');
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className={cn(className)}>
                <Image src={"/icons/info.svg"} alt={"Icon information"} width={24} height={24}/>
                <span>{t('title-gms-program')}</span>
            </button>

            <Modal open={open} setOpen={setOpen} header={t('title-gms-program')}
                classNameModalDesk={"[--container-lg:800px] lg:max-w-[800px]"}>
                <div className={"p-5"}>
                    <p className={"hidden lg:block text-3xl mb-6 font-medium text-center"}>{t('title-gms-program')}</p>

                    <div className={"lg:flex gap-6"}>
                        <div className={"lg:hidden"}>
                            <CdnImage
                                className={"w-full object-cover h-auto mb-4"}
                                width={320} height={152}
                                src={"img/gms/gms-program-m.jpg"}
                                alt={"gms program"}/>
                        </div>
                        <div className={"lg:w-1/2"}>
                            <p className={"text-center text-3xl mb-6 lg:hidden"}>{t('title-gms-program')}</p>
                            <RichTextClient id={"gms-program"} ns={"gms"}/>
                        </div>
                        <div className={"hidden lg:block lg:w-1/2"}>
                            <CdnImage
                                className={"w-full object-cover h-full"}
                                width={350} height={710}
                                src={"/img/gms/gms-program.jpg"}
                                alt={"gms program"}/>
                        </div>

                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ModalProgram;