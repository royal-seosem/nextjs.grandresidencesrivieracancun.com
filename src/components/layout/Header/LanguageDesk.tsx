'use client'
import React from 'react';
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/commons/ui/drawer";
import IconArrowDown from "@/components/commons/icons/ArrowDown.svg";
import {useTranslations} from "next-intl";
import LanguageSwitcher from "@/components/layout/Header/LanguageSwitcher";

const LanguageDesk = () => {
    const t = useTranslations('header');
    return (
        <div className={"hidden lg:block"}>
            <Drawer direction="right">
                <DrawerTrigger className="flex items-center gap-1" asChild>
                    <button>
                        {t('english')}
                        <IconArrowDown/>
                    </button>
                </DrawerTrigger>
                <DrawerContent>
                    <LanguageSwitcher/>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default LanguageDesk;