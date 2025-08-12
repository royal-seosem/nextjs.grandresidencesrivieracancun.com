'use client'
import Link from "next/link";
import {getPathname, usePathname} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

const LanguageSwitcher = () => {

    const pathname = usePathname();

    const pathnameEs = getPathname({
        locale: 'es',
        href: pathname
    });
    const pathnameEn = getPathname({
        locale: 'en',
        href: pathname
    });

    const t = useTranslations('header');

    return (
        <nav className="flex flex-col p-5 gap-2 text-base">
            <span
                className="text-primary text-2xl font-bold pb-1.5 border-b-1 border-accent border-primary0">
                {t('idioma')}
            </span>
            <Link href={pathnameEn}>
                {t('english')}
            </Link>
            <Link href={pathnameEs}>
                {t('spanish')}
            </Link>
        </nav>
    );
};

export default LanguageSwitcher;