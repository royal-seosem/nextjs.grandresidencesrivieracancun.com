import React from 'react';
import {Drawer, DrawerContent, DrawerTitle} from "@/components/commons/ui/drawer";
import Link from "next/link";
import PhoneCallIcon from "@/components/commons/icons/phone-call.svg";
import MailIcon from "@/components/commons/icons/mail.svg";
import ContactTransportation from "@/components/layout/Header/ContactTransportation";
import {useWebsite} from "@/context/WebSiteProvider";
import {useTranslations} from "next-intl";
import WithTranslateCliente, {WithTranslationProps} from "@/components/commons/shared/withTranslateCliente";

interface DrawerContactOptionsProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DrawerContactOptions = (
    {open, setOpen, messages}: DrawerContactOptionsProps & WithTranslationProps
) => {
    const {phones} = useWebsite();
    const t = useTranslations('menu');

    return (
        <Drawer direction="right" open={open} onOpenChange={setOpen}>
            <DrawerContent className="p-5">
                <DrawerTitle className="text-primary text-2xl font-bold pb-2 border-b border-accent mb-2">
                    {t('contact')}
                </DrawerTitle>
                <ul className="flex flex-col gap-4 text-primary text-base">
                    <li>
                        <span className="text-primary text-base font-bold mb-2 block">{messages['general.management'] as string}</span>
                        <ul>
                            <li>
                                <Link className="flex items-center gap-3" href={`tel:${phones.resort.phone}`}>
                                    <PhoneCallIcon width={20} height={20}/>
                                    {phones.resort.visible}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="text-primary text-base font-bold mb-2 block">{messages['general.menu.reservations'] as string} </span>
                        <ul>
                            <li className="mb-2">
                                <Link className="flex items-center gap-3" href={`tel:${phones.reservations.phone}`}>
                                    <PhoneCallIcon width={20} height={20}/>
                                    {phones.reservations.visible}
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center gap-3" href={`mailto:${phones.reservations.email}`}>
                                    <MailIcon className="shrink-0" width={20} height={20}/>
                                    {phones.reservations.email}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="text-primary text-base font-bold mb-2 block"> {messages['general.transportacion'] as string}</span>
                        <ul>
                            <li className="mb-2">
                                <Link className="flex items-center gap-3" href={`tel:${phones.transportation.phone}`}>
                                    <PhoneCallIcon width={20} height={20}/>
                                    {phones.transportation.visible}
                                </Link>
                            </li>
                            <li>
                                <ContactTransportation/>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span
                            className="text-primary text-base font-bold mb-2 block">{messages['general.menu.weddings_groups'] as string}</span>
                        <ul>
                            <li className="mb-2">
                                <Link className="flex items-center gap-3" href={`tel:${phones.wedding_groups.phone}`}>
                                    <PhoneCallIcon width={20} height={20}/>
                                    {phones.wedding_groups.visible}
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center gap-3"
                                      href={`mailto:${phones.wedding_groups.email}`}>
                                    <MailIcon width={20} height={20}/>
                                    {phones.wedding_groups.email}
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </DrawerContent>
        </Drawer>
    );
};

export default WithTranslateCliente(DrawerContactOptions,[
    "general.management",
    "general.transportation",
    "general.menu.weddings_groups",
    "general.menu.reservations"
]) as React.FC<DrawerContactOptionsProps>;