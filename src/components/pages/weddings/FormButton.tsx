'use client'
import React from 'react';
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import {Button} from "@/components/commons/ui/button";
import {useTranslations} from "next-intl";
import Modal from "@/components/commons/ui/modal/modal";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import FormWedding from "@/components/pages/weddings/FormWedding";


interface FormButtonProps {
    btnText?: string
    btnIcon?: React.ReactNode
}

const FormButton = (
    {btnText, btnIcon}: FormButtonProps,
) => {
    const t = useTranslations('weddings');
    const [showForm, setShowForm] = React.useState<boolean>(false)

    return (
        <>
            <Button
                className={"uppercase"}
                variant={"secondary"}
                onClick={() => setShowForm(true)}>
                {btnText ? btnText : t('formulario.titulo')}
                {btnIcon ? btnIcon : <ArrowRightIcon width={16} height={16}/>}
            </Button>

            <Modal open={showForm} setOpen={setShowForm} header={t('formulario.titulo')}>
                <div className="p-5">
                    <div className="md:max-h-[calc(85dvh-50px)]
                        overflow-auto
                        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
                        hover:scrollbar-thumb-gray-400
                        [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:border-2
                        [&::-webkit-scrollbar-thumb]:border-transparent
                        hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
                        <h3 className={"text-lg font-bold"}>{t('formulario.titulo')}</h3>
                        <RichTextClient id={'formulario.descripcion'} ns={'weddings'}/>
                        <FormWedding/>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default FormButton;