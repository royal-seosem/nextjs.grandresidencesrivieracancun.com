import React from 'react';
import {getLocale, getTranslations} from "next-intl/server";
import CdnImage from "@/components/commons/ui/CdnImage";
import PrivacyEn from "@/components/pages/about-us/privacy_en";
import PrivacyEs from "@/components/pages/about-us/PrivacyEs";
import {Metadata} from "next";


export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('general');
    return {
        title: t('legacy.about-us.title'),
        description: t('legacy.about-us.description')
    }
}

const Page = async () => {
    const locale = await getLocale();

    return (
        <main>
            <CdnImage
                className={"md:hidden w-full object-cover mb-10"}
                alt={"Granresidences"}
                width={750} height={400}
                src={"/img/about/granresidences-destino-about.jpg"}
            />

            <CdnImage
                className={"hidden md:block w-full object-cover mb-10"}
                alt={"Granresidences"}
                width={1360} height={400}
                src={"/img/about/1360x400/granresidences-destino-about.jpg"}
            />

            {locale === 'en' && <PrivacyEn/>}
            {locale === 'es' && <PrivacyEs/>}

        </main>
    );
};

export default Page;