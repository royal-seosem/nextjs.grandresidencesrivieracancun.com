import React from 'react';
import {useTranslations} from "next-intl";
import CdnImage from "@/components/commons/ui/CdnImage";
import Menu from "@/components/pages/about-us/menu";
import RichText from "@/components/commons/shared/RitchText";

const Page = () => {

    const t = useTranslations('resort-policies');
    const tG = useTranslations('general');

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

            <h1 className={"text-3xl font-medium"}>{tG('policies')}</h1>

            <Menu navActive={1}/>

            <div className={"my-container"}>
                <div className="mb-5 md:mb-10 md:flex gap-5">
                    <div className="basis-[280px] shrink-0">
                        <CdnImage
                            className={"hidden md:block"}
                            width={280} height={214}
                            src="/img/about/basicos.jpg"
                            alt="Grand Residences Gallery"/>
                    </div>
                    <div className="text-base">
                        <h2 className={"text-lg md:text-3xl font-bold mb-4"}>{t("title_basic")}</h2>
                        <RichText id={'list_basic'} ns={"resort-policies"}/>
                    </div>
                </div>
                <div className="mb-5 md:mb-10 md:flex gap-5">
                    <div className="basis-[280px] shrink-0">
                        <CdnImage
                            className={"hidden md:block"}
                            width={280} height={214}
                            src="/img/about/tarjeta.jpg"
                            alt="Grand Residences Groups"/>
                    </div>
                    <div className="text-base">
                        <h2 className={"text-lg md:text-3xl font-bold mb-4"}>{t("title_ccard")}</h2>
                        <RichText id={'list_ccard'} ns={"resort-policies"}/>
                    </div>
                </div>
                <div className="mb-5 md:mb-10 md:flex gap-5">
                    <div className="basis-[280px] shrink-0">
                        <CdnImage
                            className={"hidden md:block"}
                            width={280} height={214}
                            src="/img/about/gallery.jpg"
                            alt="Grand Residences Groups"/>
                    </div>
                    <div className="text-base">
                        <h2 className={"text-lg md:text-3xl font-bold mb-4"}>{t("title_reservation")}</h2>
                        <RichText id={'list_reservation'} ns={"resort-policies"}/>
                    </div>
                </div>
                <div className="mb-5 md:mb-10 md:flex gap-5">
                    <div className="basis-[280px] shrink-0">
                        <CdnImage
                            className={"hidden md:block"}
                            width={280} height={214}
                            src="/img/about/impuestos.jpg"
                            alt="Grand Residences Groups"/>
                    </div>
                    <div className="text-base">
                        <h2 className={"text-lg md:text-3xl font-bold mb-4"}>{t("title_tax")}</h2>
                        <RichText id={'list_tax'} ns={"resort-policies"}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;