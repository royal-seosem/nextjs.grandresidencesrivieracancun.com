'use client'
import React, {useEffect, useRef} from "react";
import {Link} from "@/i18n/navigation";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/commons/ui/drawer";

export default function Header() {
    const t = useTranslations('header');
    const tmenu = useTranslations('menu');

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


    return <header className="bg-primary">
        <nav className="flex justify-end items-center gap-5 h-8 px-8" role="navigation">
            <a href="https://wa.me/529981000692" target="_blank"
               className="text-white hidden md:flex items-center gap-1 text-sm"
               aria-label="Whatsapp Grand Residences">
                <Image src="/icons/whatsapp.svg" alt="Whatsapp Grand Residences" width="24" height="25"/>
                <span>52 99 81 00 06 92</span>
            </a>

            <button className="hidden lg:flex items-center gap-1 text-sm text-white">
                <Image src="/icons/pencil.svg" alt="Icon pencil" width={12} height={12}/>
                <span>{t('manage reservations')}</span>
            </button>

            <a href="#" target="_blank" className="hidden md:flex items-center gap-1 text-sm text-secondary"
               aria-label={t('owners area')}
               rel="noopener noreferrer">
                <Image src="/icons/key.svg" alt="Icon key" width={12} height={12}/>
                <span>{t('owners area')}</span>
            </a>
        </nav>

        <nav role="navigation" className="flex flex-col justify-center items-center ">
            <Link href="/public">
                <Image src={'/logos/grand-residences.png'} alt="Logo Grand Residences" width={255} height={44}/>
            </Link>
            <div className="flex items-center justify-between w-full px-5">
                <div ref={menuRef} className="relative">
                    <button onClick={() => setShowResortMenu(!showResortMenu)}
                            className="text-secondary text-base p-1.5">
                        Resort
                    </button>
                    <ul className={`
                            absolute
                            transform transition-all duration-300 ease-in-out
                            ${showResortMenu ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'} 
                        `}>
                        <li className="hover:bg-gray-100">
                            <Link href="/resort-a" className="block px-4 py-2">
                                Resort A
                            </Link>
                        </li>
                        <li className="hover:bg-gray-100">
                            <Link href="/resort-b" className="block px-4 py-2">
                                Resort B
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="relative">
                    <Link href={"/offers"} className="text-white text-base">
                        Specials
                    </Link>
                </div>
                <div className="relative flex  gap-3 justify-center items-center">
                    <div>
                        <Link href="/gms/login"
                              aria-label={"Login to My Royal"}>
                            <Image src={'/icons/my-royal.svg'} alt={"Icon my royal"} width={24} height={24}/>
                        </Link>
                    </div>
                    <div className='flex'>
                        <button >
                            <Image src={"/icons/phone.svg"} alt={"icon phone"} width={24} height={24}/>
                        </button>
                    </div>
                    <div className="flex">
                        <Drawer  direction="right">
                            <DrawerTrigger asChild>
                                <button>
                                    <Image src={"/icons/hamburger.svg"} alt={"icon menu"} width={24} height={24}/>
                                </button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <ul className="text-base">
                                    <li className="px-5 py-2.5">
                                        <span className="text-lg">
                                            Resort
                                        </span>
                                        <ul className="px-5 space-y-2">
                                            <li>
                                                <a href="suites">
                                                    {tmenu('suites')}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/restaurants">
                                                    {tmenu('dining')}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/amenities">
                                                    {tmenu('activities')}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/gallery">
                                                    {tmenu('gallery')}
                                                </a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="bg-menu px-5 py-1 relative before:content-[''] before:absolute before:pointer-events-none before:bg-[#be8b5e] before:h-full before:w-2 before:top-0 before:left-0" >
                                        <a href="/all-inclusive" className="text-lg">
                                            {tmenu('all inclusive')}
                                        </a>
                                    </li>
                                    <li className="px-5 py-1">
                                        <a href="/offers">
                                            {tmenu('specials')}
                                        </a>
                                    </li>
                                    <li className="px-5 py-1">
                                        <a href="/weddings">
                                            {tmenu('wedding')}
                                        </a>
                                    </li>
                                    <li className="px-5 py-1">
                                        <a href="/destination">
                                            {tmenu('destination')}
                                        </a>
                                    </li>

                                    <li className="px-5 py-1 bg-menu">
                                        <a href="#"  target="_blanck">
                                            {tmenu('owners area')}
                                        </a>
                                    </li>
                                    <li className="px-5 py-1 bg-menu">
                                        <button>
                                            {tmenu('manage reservations')}
                                        </button>
                                    </li>
                                    <li className="px-5 py-1 bg-menu">
                                        <a href="blogLink" target="_blanck">
                                            {tmenu('blog')}
                                        </a>
                                    </li>
                                    <li className="px-5 py-1 bg-menu">
                                        <a href="faqs">
                                            {tmenu('faqs')}
                                        </a>
                                    </li>

                                    <li className="px-5 py-1 bg-menu">
                                        <a href="/media-room">
                                            {tmenu('media')}
                                        </a>
                                    </li>

                                    <li className="px-5 py-1 bg-menu">
                                        <a href="/">
                                            {tmenu('english')}
                                        </a>
                                        <a href="es">
                                            {tmenu('spanish')}
                                        </a>

                                    </li>
                                </ul>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>

        </nav>


    </header>
}