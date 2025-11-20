'use client'
import React from 'react';
import {useLocale} from "use-intl";
import {useTranslations} from "next-intl";

import Modal from "@/components/commons/ui/modal/modal";
import Image from "next/image";
import {Button} from "@/components/commons/ui/button";
import Paragraph from "@/components/commons/ui/paragraph";
import {FormInput, FormItem} from "@/components/commons/ui/form";
import {cn} from "@/lib/utils";


interface ManageYourReservationProps {
    showIcon?: boolean;
    className?: string;
}

const ManageYourReservation = (
    {showIcon = true, className}: ManageYourReservationProps,
) => {
    const th = useTranslations("header")
    const t = useTranslations('general');
    const [open, setOpen] = React.useState(false);
    const locale = useLocale();

    return (
        <>
            <button className={cn('hidden lg:flex items-center gap-1 text-sm text-white', className)}
                    onClick={() => setOpen(true)}>
                {showIcon && <Image src="/icons/pencil.svg" alt="Icon pencil" width={12} height={12}/>}
                <span>{th('manage reservations')}</span>
            </button>
            <Modal open={open} setOpen={setOpen} header={"Manage your reservation"}>
                <div className={"p-5"}>
                    <p className="mb-5 text-3xl font-bold">
                        {t('manage_reservations')}
                    </p>
                    <form
                        action="https://reservations.grandresidencesrivieracancun.com/95939"
                        method="GET"
                        target="_blank">

                        <input type="hidden" name="hotelid" value="95939"/>
                        <input type="hidden" name="theme_code" value="102578"/>
                        <input type="hidden" name="languageid" value={locale === 'en' ? 1 : 2}/>

                        <Paragraph> {t("manage_detail")} </Paragraph>

                        <FormItem>
                            <label htmlFor="confirmid"
                                   className="text-sm text-[#949494]">{t("input_confirmation")}</label>
                            <FormInput id="confirmid" name="confirmid" type="text"/>
                        </FormItem>

                        <Button variant={"primary"} className={"uppercase"}>
                            {t("btn_continue")}
                        </Button>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default ManageYourReservation;