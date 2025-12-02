import React from 'react';
import {Drawer, DrawerContent, DrawerDescription, DrawerTitle} from "@/components/commons/ui/drawer";
import {Link} from "@/i18n/navigation";
import ManageYourReservation from "@/components/pages/home/ManageYourReservation";
import OwnersArea from "@/components/layout/OwnersArea";
import {useTranslations} from "next-intl";

interface DrawerMenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DrawerMenu = (
    {open, setOpen}: DrawerMenuProps
) => {
    const tmenu = useTranslations('menu');

    return (
        <Drawer direction="right" open={open} onOpenChange={setOpen}>

            <DrawerContent>
                <DrawerDescription className={"sr-only"}> Menu mobile </DrawerDescription>
                <DrawerTitle className={"hidden"} aria-readonly> Menu Mobile </DrawerTitle>
                <ul className="text-base">
                    <li className="px-5 py-2.5">
                                        <span className="text-lg">
                                            Resort
                                        </span>
                        <ul className="px-5 space-y-2">
                            <li>
                                <Link onClick={() => setOpen(false)} href="/suites">
                                    {tmenu('suites')}
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setOpen(false)} href="/restaurants">
                                    {tmenu('dining')}
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setOpen(false)} href="/amenities">
                                    {tmenu('activities')}
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setOpen(false)} href="/gallery">
                                    {tmenu('gallery')}
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className="bg-menu px-5 py-1 relative before:content-[''] before:absolute before:pointer-events-none before:bg-[#be8b5e] before:h-full before:w-2 before:top-0 before:left-0">
                        <Link onClick={() => setOpen(false)} href="/all-inclusive" className="text-lg">
                            {tmenu('all inclusive')}
                        </Link>
                    </li>
                    <li className="px-5 py-1">
                        <Link onClick={() => setOpen(false)} href="/offers">
                            {tmenu('specials')}
                        </Link>
                    </li>
                    <li className="px-5 py-1">
                        <Link onClick={() => setOpen(false)} href="/weddings">
                            {tmenu('wedding')}
                        </Link>
                    </li>
                    <li className="px-5 py-1">
                        <Link onClick={() => setOpen(false)} href="/destination">
                            {tmenu('destination')}
                        </Link>
                    </li>

                    <li className="px-5 py-1 bg-menu">
                        <OwnersArea className={"block text-base text-primary"} showIcon={false}/>
                    </li>
                    <li className="px-5 py-1 bg-menu">
                        <ManageYourReservation className={"text-primary text-base block"} showIcon={false}/>
                    </li>
                    <li className="px-5 py-1 bg-menu">
                        <a href="https://blog.grandresidencesbyroyalresorts.com" target="_blanck">
                            {tmenu('blog')}
                        </a>
                    </li>
                    <li className="px-5 py-1 bg-menu">
                        <Link onClick={() => setOpen(false)} href="/faqs">
                            {tmenu('faqs')}
                        </Link>
                    </li>

                    <li className="px-5 py-1 bg-menu">
                        <Link onClick={() => setOpen(false)} href="/media-room">
                            {tmenu('media')}
                        </Link>
                    </li>

                    <li className="px-5 py-1 bg-menu">
                        <Link onClick={() => setOpen(false)} href="/">
                            {tmenu('english')}
                        </Link>
                    </li>
                </ul>
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerMenu;