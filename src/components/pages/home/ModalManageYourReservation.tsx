import React from 'react';
import {Button} from "@/components/commons/ui/button";
import Paragraph from "@/components/commons/ui/paragraph";
import {FormInput, FormItem} from "@/components/commons/ui/form";

import Modal from "@/components/commons/ui/modal/modal";
import {useLocale} from "use-intl";
import WithTranslateCliente, {WithTranslationProps} from "@/components/commons/shared/withTranslateCliente";

interface ModalManageYourReservationProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const ModalManageYourReservation = (
    {open, setOpen, messages}: ModalManageYourReservationProps & WithTranslationProps,
) => {

    const locale = useLocale();
    return (
        <Modal open={open} setOpen={setOpen} header={"Manage your reservation"}>
            <div className={"p-5"}>
                <p className="mb-5 text-3xl font-bold">
                    { messages['general.manage_reservations'] as string}
                </p>
                <form
                    action="https://reservations.grandresidencesrivieracancun.com/95939"
                    method="GET"
                    target="_blank">

                    <input type="hidden" name="hotelid" value="95939"/>
                    <input type="hidden" name="theme_code" value="102578"/>
                    <input type="hidden" name="languageid" value={locale === 'en' ? 1 : 2}/>

                    <Paragraph>{ messages['general.manage_detail'] as string}  </Paragraph>

                    <FormItem>
                        <label htmlFor="confirmid"
                               className="text-sm text-[#949494]">{ messages['general.input_confirmation'] as string}</label>
                        <FormInput id="confirmid" name="confirmid" type="text"/>
                    </FormItem>

                    <Button variant={"primary"} className={"uppercase"}>
                        { messages['general.btn_continue'] as string}
                    </Button>
                </form>
            </div>
        </Modal>
    );
};

export default WithTranslateCliente(ModalManageYourReservation, [
    "general.manage_reservations",
    "general.manage_detail",
    "general.input_confirmation",
    "general.btn_continue",
]) as React.FC<ModalManageYourReservationProps>;