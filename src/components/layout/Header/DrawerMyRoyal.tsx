import React from 'react';
import {Drawer, DrawerContent} from "@/components/commons/ui/drawer";
import {Link} from "@/i18n/navigation";
import HomeIcon from "@/components/commons/icons/home.svg";
import SpecialIcon from "@/components/commons/icons/special.svg";
import PersonalInformationIcon from "@/components/commons/icons/personal-information.svg";
import PasswordIcon from "@/components/commons/icons/password.svg";
import PreCheckInIcon from "@/components/commons/icons/pre-check-in.svg";
import LogOutIcon from "@/components/commons/icons/log-out.svg";
import {useTranslations} from "next-intl";
import {deleteSession} from "@/lib/session";
import {redirect} from "next/navigation";
import {useWebsite} from "@/context/WebSiteProvider";
import WithTranslateCliente, {WithTranslationProps} from "@/components/commons/shared/withTranslateCliente";

interface DrawerMyRoyalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DrawerMyRoyal = (
    {open, setOpen, messages}: DrawerMyRoyalProps & WithTranslationProps,
) => {
    const t = useTranslations('menu');
    const {setUser} = useWebsite();

    const logout = async () => {
        setUser(undefined)
        await deleteSession();
        setOpen(false);
        redirect('/gms/login');
    }

    return (
        <Drawer direction={"right"} open={open} onOpenChange={setOpen}>
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
                        <Link href={"/offers"} className={"flex items-center gap-1"}
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
                        <Link href={"/gms/password-update"} className={"flex items-center gap-1"}
                              onClick={() => setOpen(false)}>
                            <PasswordIcon width={24} height={24}/>
                            {t("Change my password")}
                        </Link>
                    </li>
                    <li className={"mb-4 text-base"}>
                        <a href={messages['gms.pre-check-in-link'] as string} className={"flex items-center gap-1"}
                           onClick={() => setOpen(false)}>
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
            </DrawerContent>
        </Drawer>
    );
};

export default WithTranslateCliente(DrawerMyRoyal, [
    "gms.pre-check-in-link"
]) as React.FC<DrawerMyRoyalProps>;