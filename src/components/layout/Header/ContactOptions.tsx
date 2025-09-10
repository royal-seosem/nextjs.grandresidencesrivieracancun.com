'use client'
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {Drawer, DrawerContent, DrawerTitle, DrawerTrigger} from "@/components/commons/ui/drawer";
import IconArrowDown from "@/components/commons/icons/ArrowDown.svg";
import PhoneCallIcon from "@/components/commons/icons/phone-call.svg";
import MailIcon from "@/components/commons/icons/mail.svg";
import {useWebsite} from "@/context/WebSiteProvider";
import ContactTransportation from "@/components/layout/Header/ContactTransportation";

const ContactOptions = () => {
    const {phones} = useWebsite();
    const t = useTranslations('menu');
    const tg = useTranslations('general');

    return (
        <Drawer direction="right">
            <DrawerTrigger className="flex items-center gap-1">
                <Image className="lg:hidden" src={"/icons/phone.svg"} alt={"icon phone"} width={24} height={24}/>
                <span className="hidden lg:block">{t('contact')}</span>
                <IconArrowDown width={20} height={20}/>
            </DrawerTrigger>
            <DrawerContent className="p-5">
                <DrawerTitle className="text-primary text-2xl font-bold pb-2 border-b border-accent mb-2">
                    {t('contact')}
                </DrawerTitle>
                <ul className="flex flex-col gap-4 text-primary text-base">
                    <li>
                        <span className="text-primary text-base font-bold mb-2 block">{tg('management')}</span>
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
                        <span className="text-primary text-base font-bold mb-2 block">{tg('menu.reservations')} </span>
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
                        <span className="text-primary text-base font-bold mb-2 block">{tg('transportacion')}</span>
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
                        <span className="text-primary text-base font-bold mb-2 block">{tg('menu.weddings_groups')}</span>
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

export default ContactOptions;