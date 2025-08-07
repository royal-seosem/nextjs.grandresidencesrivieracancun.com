'use server'
import * as React from 'react';
import {getSession} from "@/lib/session";
import BtnGoogle from "@/components/pages/Gms/BtnGoogle";
import Image from "next/image";
import {getMessages, getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import {Label} from "@/components/commons/ui/label";
import {Input} from "@/components/commons/ui/input";
import FacebookSignInButton from "@/components/commons/auth/FacebookSignInButton";
import CdnImage from "@/components/commons/ui/CdnImage";
import IconInfo from "@/components/commons/icons/iconInfo";

export const LoginPage = async () => {
    const t = await getTranslations('page_login');
    const {page_login: {benefits}} = await getMessages();

    const user = await getSession();
    return (
        <div className="md:grid md:grid-cols-2">
            <div className="md:order-2">
                <div className="bg-primary flex justify-center py-2
                    md:hidden">
                    <Image className="block" src={"/icons/my-royal-vertical.svg"} alt={"Icon My royal"} width={150}
                           height={80}/>
                </div>
                <CdnImage
                    className="hidden md:block w-full object-cover"
                    src={"/img/my-royal/grand-residences.jpg"}
                    alt={"Image Grand Residences"} width={685} height={381}/>

                <section className="my-container max-w-[420px] m-auto pt-5">
                    <p className="md:hidden text-base text-center mb-4">{t('description')}</p>
                    <button className="md:hidden flex items-center justify-center gap-3 underline underline-offset-4 mb-6">
                        <Image src={"/icons/info.svg"} alt={"Icon information"} width={24} height={24}/>
                        <span className="text-accent">{t('title-gms-program')}</span>
                    </button>
                    <div className="flex gap-5 mb-6">
                        <Link href={"/login"}
                              className="uppercase bg-primary border-2 text-secondary px-1.5 py-2 text-sm font-bold grow flex justify-center items-center rounded-xs">
                            {t('log-in')}
                        </Link>
                        <Link href={"/sign-up"}
                              className="uppercase border-1 border-primary text-primary px-1.5 py-2 text-sm font-bold grow flex justify-center items-center rounded-xs">
                            {t('sign-up')}
                        </Link>
                    </div>

                    <h1 className="text-4xl text-primary text-center mb-6">{t("title")}</h1>
                    <p className="text-base text-center mb-6">{t('text2')}</p>

                    <div className="flex items-center gap-5 mb-6">
                        <BtnGoogle/>
                        <FacebookSignInButton/>
                    </div>

                    <p className="text-sm text-center flex justify-center items-center gap-3 mb-5
                     before:block before:w-5 before:h-[1px] before:content-[''] before:bg-[#5a5550]
                     after:block after:w-5 after:h-[1px] after:content-[''] after:bg-[#5a5550]">
                        {t('text3')}
                    </p>

                    <form className="mb-4">
                        <div className="flex flex-col gap-2 mb-6">
                            <Label htmlFor="email">{t('e-mail')}</Label>
                            <Input type="email" id="email" name="email" placeholder={t('e-mail')} required/>
                        </div>
                        <div className="flex flex-col gap-2 mb-6">
                            <Label htmlFor="email">{t('password')}</Label>
                            <Input type="password" id="password" name="password" required/>
                        </div>
                        <button type="submit"
                                className="uppercase bg-primary border-2 text-secondary px-1.5 py-2 text-sm font-bold grow flex justify-center items-center rounded-xs w-[200px] m-auto">
                            {t('log-in')}
                        </button>
                    </form>

                    <p className="text-base flex gap-1 justify-center mb-6">
                        {t('Forgot your password?')}
                        <Link className="text-accent underline" href={"/"}>
                            {t('click here')}
                        </Link>
                    </p>


                </section>
            </div>
            <div className="md:order-1 bg-primary ">
                <CdnImage
                    className="md:hidden w-full object-cover"
                    src={"/img/my-royal/grand-residences.jpg"}
                          alt={"Image Grand Residences"} width={685} height={381}/>
                <div className="text-white max-w-[413px] m-auto p-2">
                    <Image className="block m-auto mb-4" src={"/icons/my-royal-vertical.svg"} alt={"Icon My royal"}
                           width={150}
                           height={80}/>
                    <p className="text-base text-pretty mb-4">{t('description')}</p>

                    <Link href="/" className="flex items-center justify-center gap-3 underline underline-offset-4 mb-6">
                        <IconInfo className="text-secondary"/>
                        <span className="text-secondary">{t('title-gms-program')}</span>
                    </Link>

                    <p className="trext-base font-bold mb-6">
                        {t("description_subtitle")}
                    </p>

                    <ul className="text-white pl-10 flex flex-col gap-8 mb-6">
                        {benefits.map(({icon, title, description}: {
                            icon: string,
                            title: string,
                            description: string
                        }, index: string) => (
                            <li key={index} className="flex items-center gap-3 mb-2">
                                <CdnImage src={icon} alt={"Icon check"} width={40} height={40}/>
                                <p>
                                    <strong>{title}</strong>
                                    {description}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <p className="text-pretty">{t('benefits-footer')}</p>
                </div>
            </div>

        </div>
    );
};