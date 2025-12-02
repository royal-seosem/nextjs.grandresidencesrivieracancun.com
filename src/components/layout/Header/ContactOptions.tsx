'use client'
import dynamic from "next/dynamic";
import Image from "next/image";
import {useTranslations} from "next-intl";
import IconArrowDown from "@/components/commons/icons/ArrowDown.svg";
import React from "react";
const DrawerContactOptions = dynamic(() => import("@/components/layout/Header/DrawerContactOptions"), {ssr: false});

const ContactOptions = () => {
    const t = useTranslations('menu');
    const tg = useTranslations('general');
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <button className="flex items-center gap-2 whitespace-nowrap" aria-label={"Contact options"}
                    onClick={() => setOpen(true)}>
                <Image className="md:hidden lg:block" src={"/icons/phone.svg"} alt={"icon phone"} width={24}
                       height={24}/>
                <span className="hidden md:block lg:hidden">{t('contact')}</span>
                <IconArrowDown width={20} height={20}/>
            </button>

            {open && <DrawerContactOptions open={open} setOpen={setOpen}/>}
        </>

    );
};

export default ContactOptions;