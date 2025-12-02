import React from 'react';
import {Drawer, DrawerContent} from "@/components/commons/ui/drawer";
import LanguageSwitcher from "@/components/layout/Header/LanguageSwitcher";
import {useTranslations} from "next-intl";

interface DrawerLanguageProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DrawerLanguage = (
    {open, setOpen}: DrawerLanguageProps
) => {
    const t = useTranslations('header');

    return (
        <Drawer direction="right" open={open} onOpenChange={setOpen}>
            <DrawerContent>
                <LanguageSwitcher/>
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerLanguage;