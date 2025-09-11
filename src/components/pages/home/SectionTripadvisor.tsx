import React from 'react';
import {useMessages, useTranslations} from "next-intl";
import TrophyIcon from "@/components/commons/icons/trophy.svg";
import CheckGreenIcon from "@/components/commons/icons/check-green.svg";
import CdnImage from "@/components/commons/ui/CdnImage";
import RichText from "@/components/commons/shared/RitchText";

const SectionTripadvisor = () => {
    const t = useTranslations('home');
    const {home} = useMessages();
    return (
        <section className="">
            <div className="my-container">
                <div className="
                relative
                bg-[#180b01] text-white pl-7 pt-7 pr-7 pb-7
                w-[calc(100%-15px)]">
                    <span className="bg-[#763300] absolute w-full h-full left-[15px] top-[20px] opacity-30 z-[-1]" aria-hidden></span>
                    <figure className="flex items-center gap-5">
                        <CdnImage
                            width={123}
                            height={25}
                            alt={"Icon Tripadvisor"}
                            src={"/img/logo/tripadvisor-lite.png"}/>
                        <figcaption className="flex items-center gap-5 text-base font-bold">
                            <p>{t('tripadvisor_rating')}</p>
                            <span className="text-5xl tracking-[-6px]">&#8226; &#8226; &#8226; &#8226;</span>
                        </figcaption>
                    </figure>

                    <p>
                        <span className="text-4xl font-medium">{t('tripadvisor excellent')} </span>
                        <span className="text-base ">{t('tripadvisor_reviews')}</span>
                    </p>
                    <div className="flex items-center gap-3 text-base font-bold">
                        <TrophyIcon className="shrink-0" width={20} height={40} fill={"#ECBA58"}/>
                        <RichText id={'tripadvisor_choice'} ns={"home"}/>
                    </div>
                    <ul className="grid grid-cols-2 gap-2">
                        {home['tripadvisor facts'].map((fact: string, index: number) => (
                            <li key={index} className="flex items-center gap-3 text-base">
                                <CheckGreenIcon className="shrink-0" width={20} height={20}/>
                                {fact}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default SectionTripadvisor;