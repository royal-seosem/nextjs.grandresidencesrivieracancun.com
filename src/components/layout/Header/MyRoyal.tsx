'use client'
import React from 'react';
import MyRoyalUserIcon from "@/components/commons/icons/my-royal-user.svg";
import ArrowDownIcon from "@/components/commons/icons/ArrowDown.svg";
import {Link} from "@/i18n/navigation";
import Image from "next/image";
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/commons/ui/drawer";
import {useWebsite} from "@/context/WebSiteProvider";
import {useTranslations} from "next-intl";

const MyRoyal = () => {
    const t = useTranslations('menu');
    const {user} = useWebsite();

    if (!user) return (
        <Link href="/gms/login"
              className="md:flex md:gap-2 md:items-center md:justify-center"
              aria-label={"Login to My Royal"}>
            <Image src={'/icons/my-royal.svg'} alt={"Icon my royal"} width={24} height={24}/>
            <span className="hidden md:flex text-white text-base">My Royal</span>
        </Link>
    )

    return (
        <Drawer direction={"right"}>
            <DrawerTrigger asChild>
                <button className="flex items-center gap-2 whitespace-nowrap" aria-label={"My Royal"}>
                    {user.name}
                    <MyRoyalUserIcon width={20} height={20}/>
                    <ArrowDownIcon width={20} height={20}/>
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <ul>
                    <li>My Royal</li>
                    <li>
                        <Link href={"/"}>
                            {t("home")}
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            {t("Special Offers")}
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            {t("Personal Information")}
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            {t("Change my password")}
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            {t("Pre Check-In form")}
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            {t("Log Out")}
                        </Link>
                    </li>
                </ul>
            </DrawerContent>
        </Drawer>
    );
};

export default MyRoyal;