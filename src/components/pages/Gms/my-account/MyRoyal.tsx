'use client'
import React from 'react';
import {Link} from "@/i18n/navigation";
import MyRoyaluserIcon from "@/components/commons/icons/my-royal-user.svg";
import HomeIcon from "@/components/commons/icons/home.svg";
import SpecialIcon from "@/components/commons/icons/special.svg";
import PersonalInformationIcon from "@/components/commons/icons/personal-information.svg";
import PasswordIcon from "@/components/commons/icons/password.svg";
import PreCheckInIcon from "@/components/commons/icons/pre-check-in.svg";
import LogOutIcon from "@/components/commons/icons/log-out.svg";
import {useTranslations} from "next-intl";
import {useWebsite} from "@/context/WebSiteProvider";
import {deleteSession} from "@/lib/session";
import {redirect} from "next/navigation";

const MyRoyal = () => {
    const t = useTranslations('menu')
    const tGms = useTranslations('gms')
    const {user, setUser} = useWebsite();

    const logout = async () => {
        setUser(undefined)
        await deleteSession();
        redirect('/gms/login');
    }
    return (
        <div className={"bg-primary text-white p-10 h-full"}>
            <div className={"text-center"}>
                <MyRoyaluserIcon className={"m-auto mb-9 block"} width={158} height={158}/>
                <p className={"text-4xl mb-9"}>{user?.name || ""}</p>
            </div>
            <ul>
                <li className={"mb-4 text-base"}>
                    <Link href={"/gms/my-account"} className={"flex items-center gap-1"}>
                        <HomeIcon width={24} height={24}/>
                        {t("home")}
                    </Link>
                </li>
                <li className={"mb-4 text-base"}>
                    <Link href={"/"} className={"flex items-center gap-1"}>
                        <SpecialIcon width={24} height={24}/>
                        {t("Special Offers")}
                    </Link>
                </li>
                <li className={"mb-4 text-base"}>
                    <Link href={"/gms/my-information"} className={"flex items-center gap-1"}>
                        <PersonalInformationIcon width={24} height={24}/>
                        {t("Personal Information")}
                    </Link>
                </li>
                <li className={"mb-4 text-base"}>
                    <Link href={"/gms/password-update"} className={"flex items-center gap-1"}>
                        <PasswordIcon width={24} height={24}/>
                        {t("Change my password")}
                    </Link>
                </li>
                <li className={"mb-4 text-base"}>
                    <a href={tGms('pre-check-in-link')} className={"flex items-center gap-1"}>
                        <PreCheckInIcon width={24} height={24}/>
                        {t("Pre Check-In form")}
                    </a>
                </li>
                <li className={"mb-4 text-base"}>
                    <button className={"flex items-center gap-1"}
                            onClick={() => logout()}>
                        <LogOutIcon width={24} height={24}/>
                        {t("Log Out")}
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default MyRoyal;