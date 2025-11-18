import React from 'react';
import AnnouncementEn from "@/app/[locale]/annoucement/AnnouncementEn";
import AnnouncementEs from "@/app/[locale]/annoucement/AnnouncementEs";
import {getLocale} from "next-intl/server";

const Page = async () => {
    const locale = await getLocale();

    return (
        <main className={"my-container pt-[75px]"}>
            {locale === 'en' && <AnnouncementEn/>}
            {locale === 'es' && <AnnouncementEs/>}
        </main>
    );
};

export default Page;