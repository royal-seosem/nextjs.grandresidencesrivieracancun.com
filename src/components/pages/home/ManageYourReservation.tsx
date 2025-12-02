'use client'
import dynamic from "next/dynamic";
import React from 'react';
import {useTranslations} from "next-intl";
import Image from "next/image";
import {cn} from "@/lib/utils";

const ModalManageYourReservation = dynamic(() => import("@/components/pages/home/ModalManageYourReservation"), {ssr: false});

interface ManageYourReservationProps {
    showIcon?: boolean;
    className?: string;
}

const ManageYourReservation = (
    {showIcon = true, className}: ManageYourReservationProps,
) => {
    const th = useTranslations("header")
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <button className={cn('hidden lg:flex items-center gap-1 text-sm text-white', className)}
                    onClick={() => setOpen(true)}>
                {showIcon && <Image src="/icons/pencil.svg" alt="Icon pencil" width={12} height={12}/>}
                <span>{th('manage reservations')}</span>
            </button>
            {open && <ModalManageYourReservation open={open} setOpen={setOpen}/>}
        </>
    );
};

export default ManageYourReservation;