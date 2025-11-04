'use client'
import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

import {useWebsite} from "@/context/WebSiteProvider";
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/commons/ui/drawer";

import ArrowDownIcon from "@/components/commons/icons/ArrowDown.svg";
import MyRoyalUserIcon from "@/components/commons/icons/my-royal-user.svg";
import HomeIcon from "@/components/commons/icons/home.svg";
import SpecialIcon from "@/components/commons/icons/special.svg";
import PersonalInformationIcon from "@/components/commons/icons/personal-information.svg";
import PasswordIcon from "@/components/commons/icons/password.svg";
import PreCheckInIcon from "@/components/commons/icons/pre-check-in.svg";
import LogOutIcon from "@/components/commons/icons/log-out.svg";

const MyRoyal = () => {
    const t = useTranslations('menu');
    const {user} = useWebsite();
    const [open, setOpen] = React.useState(false);

    if (!user) return (
        <Link href="/gms/login"
              className="md:flex md:gap-2 md:items-center md:justify-center"
              aria-label={"Login to My Royal"}>
            <Image src={'/icons/my-royal.svg'} alt={"Icon my royal"} width={24} height={24}/>
            <span className="hidden md:flex text-white text-base">My Royal</span>
        </Link>
    )

    return (
        <Drawer direction={"right"} open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <button className="flex items-center gap-2 whitespace-nowrap" aria-label={"My Royal"}>
                    {user.name}
                    <MyRoyalUserIcon width={20} height={20}/>
                    <ArrowDownIcon width={20} height={20}/>
                </button>
            </DrawerTrigger>
            <DrawerContent className={"bg-primary border-l-primary text-white p-5"}>
                <ul>
                    <li className={"text-2xl font-bold  py-2 border-b border-b-white mb-4"}>
                        My Royal
                    </li>
                    <li className={"mb-4 text-base"}>
                        <Link href={"/gms/my-account"} className={"flex items-center gap-1"}
                              onClick={() => setOpen(false)}>
                            <HomeIcon width={24} height={24}/>
                            {t("home")}
                        </Link>
                    </li>
                    <li className={"mb-4 text-base"}>
                        <Link href={"/"} className={"flex items-center gap-1"}
                              onClick={() => setOpen(false)}>
                            <SpecialIcon width={24} height={24}/>
                            {t("Special Offers")}
                        </Link>
                    </li>
                    <li className={"mb-4 text-base"}>
                        <Link href={"/gms/my-information"} className={"flex items-center gap-1"}
                              onClick={() => setOpen(false)}>
                            <PersonalInformationIcon width={24} height={24}/>
                            {t("Personal Information")}
                        </Link>
                    </li>
                    <li className={"mb-4 text-base"}>
                        <Link href={"/"} className={"flex items-center gap-1"}
                              onClick={() => setOpen(false)}>
                            <PasswordIcon width={24} height={24}/>
                            {t("Change my password")}
                        </Link>
                    </li>
                    <li className={"mb-4 text-base"}>
                        <Link href={"/"} className={"flex items-center gap-1"}
                              onClick={() => setOpen(false)}>
                            <PreCheckInIcon width={24} height={24}/>
                            {t("Pre Check-In form")}
                        </Link>
                    </li>
                    <li className={"mb-4 text-base"}>
                        <Link href={"/"} className={"flex items-center gap-1"}
                              onClick={() => setOpen(false)}>
                            <LogOutIcon width={24} height={24}/>
                            {t("Log Out")}
                        </Link>
                    </li>
                </ul>
            </DrawerContent>
        </Drawer>
    );
};

export default MyRoyal;