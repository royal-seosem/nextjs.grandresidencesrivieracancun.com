import React from 'react';
import Menu from "@/components/pages/about-us/menu";
import CdnImage from "@/components/commons/ui/CdnImage";
import {useTranslations} from "next-intl";
import RichText from "@/components/commons/shared/RitchText";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('general');
    return {
        title: t('media-room.title'),
    }
}

const Page = () => {
    const t = useTranslations('about');
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

            <h1 className={"text-3xl my-5 md:text-6xl md:my-10  md:text-center font-medium"}>{t('h1b')}</h1>

            <Menu navActive={0}/>

            <div className={"my-container"}>
                <RichText id={"descripcion"} ns={"about"}/>
            </div>

        </main>
    );
};

export default Page;