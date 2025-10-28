import React from 'react';
import {getTranslations} from "next-intl/server";
import {getCountry} from "@/lib/geo";
import {getPhones} from "@/use_case/get_phones";

import CdnImage from "@/components/commons/ui/CdnImage";
import Menu from "@/components/pages/about-us/menu";

import PhoneCallIcon from "@/components/commons/icons/phone-call.svg";
import MailIcon from "@/components/commons/icons/mail.svg";

const Page = async () => {
    const t = await getTranslations('general');
    const country = await getCountry();
    const phones = getPhones(country?.country?.isoCode || "")

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


            <div className={"my-container pb-10"}>
                <h1 className={"text-3xl my-5 md:text-6xl md:my-10  md:text-center font-medium"}>{t('contact-us')}</h1>

                <div className={"mb-10"}>
                    <Menu navActive={3}/>
                </div>

                <div className={"md:flex flex-col gap-10"}>
                    <div className="md:flex items-start gap-8">
                        <div className="left">
                            <CdnImage
                                className={"hidden md:block"}
                                width={277} height={185}
                                src="/img/about/gallery.jpg"
                                alt="Grand Residences Gallery"/>
                        </div>
                        <div className="right">
                            <h3 className={"text-lg font-bold my-5 md:text-4xl md:my-2"}>{t('management')}</h3>
                            <ul className="pl-10">
                                <li>
                                    <ul>
                                        <li>
                                            <a
                                                className={"flex items-center gap-10 my-4"}
                                                href={`tel:${phones['resort']['phone']}`}>
                                                <PhoneCallIcon className={"text-[#cdcaca]"} width={24} height={24}/>
                                                {t('internacional')} {phones['resort']['visible']}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:flex items-start gap-8">
                        <div className="left">
                            <CdnImage
                                className={"hidden md:block"}
                                width={277} height={185}
                                src="/img/about/reservaciones.jpg"
                                alt="Grand ResidencesGallery"/>
                        </div>
                        <div className="right">
                            <h3 className={"text-lg font-bold my-5 md:text-4xl md:my-2"}>{t('menu.reservations')}</h3>
                            <ul className="pl-10">
                                <li>
                                    <ul>
                                        <li>
                                            <a href="tel:18007914419" className={"flex items-center gap-10 my-4"}>
                                                <PhoneCallIcon className={"text-[#cdcaca]"} width={24} height={24}/>
                                                USA {t('toll')} 1 800 791 4419
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:8000085252" className={"flex items-center gap-10 my-4"}>
                                                <PhoneCallIcon className={"text-[#cdcaca]"} width={24} height={24}/>
                                                MEX {t('toll')} 800 0085 252
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:19547365879" className={"flex items-center gap-10 my-4"}>
                                                <PhoneCallIcon className={"text-[#cdcaca]"} width={24} height={24}/>
                                                {t('internacional')} 1 954 736 5879
                                            </a>
                                        </li>

                                        <li></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <a href="mailto:contact@grandresidencesrivieracancun.com" className={"flex items-center gap-10 my-4"}>
                                                <MailIcon className={"text-[#cdcaca]"} width={24} height={24}/>
                                                contact@grandresidencesrivieracancun.com
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:flex items-start gap-8">
                        <div className="left">
                            <CdnImage
                                className={"hidden md:block"}
                                width={277} height={185}
                                src="/img/about/transportacion.jpg"
                                alt="Grand Residences Gallery"/>
                        </div>
                        <div className="right">
                            <h3 className={"text-lg font-bold my-5 md:text-4xl md:my-2"}>{t('transportacion')}</h3>
                            <ul className="pl-10">
                                <li>
                                    <ul>
                                        <li>
                                            <a href="tel:18448865383" className={"flex items-center gap-10 my-4"}>
                                                <PhoneCallIcon className={"text-[#cdcaca]"} width={24} height={24}/>
                                                USA {t('toll')} 1 844 886 53 83
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:8008909710" className={"flex items-center gap-10 my-4"}>
                                                <PhoneCallIcon className={"text-[#cdcaca]"} width={24} height={24}/>
                                                MEX {t('toll')} 800 890 97 10
                                            </a>
                                        </li>

                                        <li></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <a href="mailto:ask4help@royalresorts.com" className={"flex items-center gap-10 my-4"}>
                                                <MailIcon className={"text-[#cdcaca]"} width={24} height={24}/>
                                                ask4help@royalresorts.com
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:flex items-start gap-8">
                        <div className="left">
                            <CdnImage
                                className={"hidden md:block"}
                                width={277} height={185}
                                src="/img/about/bodas.jpg"
                                alt="Grand Residences Weddings"/>
                        </div>
                        <div className="right">
                            <h3 className={"text-lg font-bold my-5 md:text-4xl md:my-2"}>{t('menu.weddings')}</h3>
                            <ul className="pl-10">
                                <li>
                                    <ul>
                                        <li>
                                            <a href="tel:8888401108" className={"flex items-center gap-10 my-4"}>
                                                <PhoneCallIcon className={"text-[#cdcaca]"} width={24} height={24}/>
                                                USA & CAN {t('toll')} 888-840-1108
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:8000204986" className={"flex items-center gap-10 my-4"}>
                                                <PhoneCallIcon className={"text-[#cdcaca]"} width={24} height={24}/>
                                                MEX {t('toll')} 800-020-4986
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:529547365881" className={"flex items-center gap-10 my-4"}>
                                                <PhoneCallIcon className={"text-[#cdcaca]"} width={24} height={24}/>
                                                {t('internacional')} 52 954-736-5881
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <a href="mailto:weddings@grandresidencesrivieracancun.com" className={"flex items-center gap-10 my-4"}>
                                                <MailIcon className={"text-[#cdcaca]"} width={24} height={24}/>
                                                weddings@grandresidencesrivieracancun.com
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Page;