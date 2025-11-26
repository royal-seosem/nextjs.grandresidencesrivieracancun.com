'use client'
import React, {useEffect, useRef} from "react";
import {Link, usePathname} from "@/i18n/navigation";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import {cn} from "@/lib/utils";
import {
    ContactOptions,
    LanguageDesk,
    ManageYourReservation,
    MenuMobile,
    MyRoyal,
    OwnersArea
} from "@/components/layout/Header/HeaderClientComponent";

const resortPaths = [
    '/suites',
    "/restaurants",
    "/amenities",
    "/gallery",
]

export default function Header() {
    const t = useTranslations('header');
    const tGeneral = useTranslations('general');
    const tmenu = useTranslations('menu');
    const pathname = usePathname();
    const [showResortMenu, setShowResortMenu] = React.useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowResortMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return <header
        className="bg-primary sticky top-0 z-50 h-[var(--header-height-mobile)] sm:h-[var(--header-height-desktop)]">
        <nav className="flex justify-end items-center gap-5 h-8 px-8" role="navigation">
            <a href="https://wa.me/529981000692" target="_blank"
               className="text-white hidden md:flex items-center gap-1 text-sm"
               aria-label="Whatsapp Grand Residences">
                <Image src="/icons/whatsapp.svg" alt="Whatsapp Grand Residences" width="24" height="25"/>
                <span>52 99 81 00 06 92</span>
            </a>

            <ManageYourReservation/>
            <OwnersArea/>
        </nav>

        <nav role="navigation" className=" my-container whitespace-nowrap
            flex flex-col justify-center items-center
            sm:flex-row sm:pb-4 bg-primary
            ">
            <Link href="/" className="sm:block sm:w-[200px] shrink-0">
                <Image className="w-full h-full object-contain "
                       src={'/logos/grand-residences.png'}
                       alt="Logo Grand Residences" width={255} height={44}/>
            </Link>
            <div className="flex items-center justify-between w-full px-5
                    sm:grow sm:justify-end sm:gap-4
                    lg:gap-40
                ">

                <div className="relative text-white flex items-center justify-between gap-3 text-base w-1/2 md:w-auto">

                    <div ref={menuRef} className="relative">
                        <button onClick={() => setShowResortMenu(!showResortMenu)}
                                className={cn(
                                    "text-base p-1.5",
                                    resortPaths.includes(pathname) ? "text-secondary" : ""
                                )}>
                            Resort
                        </button>
                    </div>

                    <Link className={cn(
                        "hidden lg:block text-base p-1.5",
                        pathname === "/all-inclusive" ? "text-secondary" : ""
                    )} href="/all-inclusive">
                        {tGeneral('menu.all inclusive')}
                    </Link>

                    <Link href="/offers" className={cn(
                        "text-base p-1.5",
                        pathname === "/offers" ? "text-secondary" : ""
                    )}>
                        {t('specials')}
                    </Link>

                    <Link href="/weddings" className={cn(
                        "hidden xl:block text-base p-1.5",
                        pathname === "/weddings" ? "text-secondary" : ""
                    )}>
                        {t('wedding')}
                    </Link>

                    <Link href="/destination" className={cn(
                        "hidden xl:block text-base p-1.5",
                        pathname === "/destination" ? "text-secondary" : ""
                    )}>
                        {tmenu('destination')}
                    </Link>
                </div>

                <div className="relative flex  gap-3 justify-center items-center text-white text-base">
                    <div>
                        <MyRoyal/>
                    </div>

                    <div className='flex'>
                        <ContactOptions/>
                    </div>
                    <LanguageDesk/>
                    <div className="flex">
                        <MenuMobile/>
                    </div>
                </div>
            </div>

        </nav>
        <nav>
            <ul className={`
                            w-full z-10
                            absolute flex bg-white text-primary justify-center items-center 
                            transform transition-all duration-300 ease-in-out whitespace-nowrap
                            ${showResortMenu ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'} 
                        `}>
                <li className="hover:bg-gray-100">
                    <Link href="/suites" className={cn(
                        "block px-4 py-2",
                        pathname === "/suites" ? "text-accent" : ""
                    )}>
                        {tmenu('suites')}
                    </Link>
                </li>
                <li className="hover:bg-gray-100">
                    <Link href="/restaurants" className={cn(
                        "block px-4 py-2",
                        pathname === "/restaurants" ? "text-accent" : ""
                    )}>
                        {tmenu('dining')}
                    </Link>
                </li>
                <li>
                    <Link href={"/amenities"} className={cn(
                        "block px-4 py-2",
                        pathname === "/amenities" ? "text-accent" : ""
                    )}>
                        {tmenu('activities')}
                    </Link>
                </li>
                <li>
                    <Link href={"/gallery"} className={cn(
                        "block px-4 py-2",
                        pathname === "/gallery" ? "text-accent" : ""
                    )}>
                        {tmenu('gallery')}
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}