'use client'
import React from 'react';
import {Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger} from "@/components/commons/ui/drawer";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

const MenuMobile = () => {
    const tmenu = useTranslations('menu');
    const [open, setOpen] = React.useState(false);



    return (
        <>
            <Drawer direction="right" open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <button>
                        <Image src={"/icons/hamburger.svg"} alt={"icon menu"} width={24} height={24}/>
                    </button>
                </DrawerTrigger>
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
                                    <Link onClick={()=> setOpen(false)} href="/suites">
                                        {tmenu('suites')}
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={()=> setOpen(false)} href="/restaurants">
                                        {tmenu('dining')}
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={()=> setOpen(false)} href="/amenities">
                                        {tmenu('activities')}
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={()=> setOpen(false)} href="/gallery">
                                        {tmenu('gallery')}
                                    </Link>
                                </li>

                            </ul>
                        </li>
                        <li className="bg-menu px-5 py-1 relative before:content-[''] before:absolute before:pointer-events-none before:bg-[#be8b5e] before:h-full before:w-2 before:top-0 before:left-0">
                            <Link onClick={()=> setOpen(false)} href="/all-inclusive" className="text-lg">
                                {tmenu('all inclusive')}
                            </Link>
                        </li>
                        <li className="px-5 py-1">
                            <Link onClick={()=> setOpen(false)} href="/offers">
                                {tmenu('specials')}
                            </Link>
                        </li>
                        <li className="px-5 py-1">
                            <Link onClick={()=> setOpen(false)} href="/weddings">
                                {tmenu('wedding')}
                            </Link>
                        </li>
                        <li className="px-5 py-1">
                            <Link onClick={()=> setOpen(false)} href="/destination">
                                {tmenu('destination')}
                            </Link>
                        </li>

                        <li className="px-5 py-1 bg-menu">
                            <a href="#" target="_blanck">
                                {tmenu('owners area')}
                            </a>
                        </li>
                        <li className="px-5 py-1 bg-menu">
                            <button>
                                {tmenu('manage reservations')}
                            </button>
                        </li>
                        <li className="px-5 py-1 bg-menu">
                            <a href="https://blog.grandresidencesbyroyalresorts.com" target="_blanck">
                                {tmenu('blog')}
                            </a>
                        </li>
                        <li className="px-5 py-1 bg-menu">
                            <Link onClick={()=>setOpen(false)} href="/faqs">
                                {tmenu('faqs')}
                            </Link>
                        </li>

                        <li className="px-5 py-1 bg-menu">
                            <Link onClick={()=> setOpen(false)} href="/media-room">
                                {tmenu('media')}
                            </Link>
                        </li>

                        <li className="px-5 py-1 bg-menu">
                            <Link onClick={()=> setOpen(false)} href="/">
                                {tmenu('english')}
                            </Link>
                            {/*<Link onClick=( => setOpen(falsehref="/es">*/}
                            {/*    {tmenu('spanish')}*/}
                            {/*</Link>*/}
                        </li>
                    </ul>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default MenuMobile;