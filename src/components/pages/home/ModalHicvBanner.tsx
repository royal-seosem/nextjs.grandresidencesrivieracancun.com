import React from 'react';
import {useTranslations,useLocale} from "next-intl";

import Modal from "@/components/commons/ui/modal/modal";
import WithTranslateCliente, {WithTranslationProps} from "@/components/commons/shared/withTranslateCliente";
import Image from "next/image";

interface ModalHicvBannerProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const ModalHicvBanner = (
    {open, setOpen, messages}: ModalHicvBannerProps & WithTranslationProps,
) => {
    const tHeader = useTranslations('header');
    const locale = useLocale();
    console.log(locale)
    return (
        <Modal open={open} classNameModalDesk={'modal-hicv'} setOpen={setOpen} header={"Manage your reservation"}>
            <div className={"p-5"}>
                <div className={'box-banner'}>
                    {<Image src={'/hicv-banner-'+locale+'.jpg'} width={400} height={633} alt={'Hicv Banner'}/>}
                    <div className={'link-hicv'}>
                        <a href={tHeader('link_hicv')} target="_blank" className="btn btn--visit">{tHeader('btn_visit')}</a>
                        <a href={tHeader('link_faqs')} target="_blank" className="link-faqs">{tHeader('title_faqs')}</a>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default WithTranslateCliente(ModalHicvBanner, []) as React.FC<ModalHicvBannerProps>;