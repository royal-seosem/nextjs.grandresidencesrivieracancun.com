import React from 'react';
import Menu from "@/components/pages/about-us/menu";
import CdnImage from "@/components/commons/ui/CdnImage";
import {useTranslations} from "next-intl";
import RichText from "@/components/commons/shared/RitchText";

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

            <Menu navActive={0}/>

            <div className={"my-container"}>
                <h1 className={"text-3xl font-medium"}>{t('h1b')}</h1>
                <RichText id={"descripcion"} ns={"about"}/>
            </div>

        </main>
    );
};

export default Page;