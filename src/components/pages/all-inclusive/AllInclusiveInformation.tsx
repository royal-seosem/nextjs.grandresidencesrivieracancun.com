'use client'
import React, {useEffect, useRef, useState} from 'react';
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/commons/ui/collapsible";
import {useMessages, useTranslations} from "next-intl";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import Paragraph from "@/components/commons/ui/paragraph";
import {ChevronDown} from "lucide-react";
import useHashs from "@/lib/useHashs";
import {useLocale} from "use-intl";


const OwnerLogin = () => {
    const t = useTranslations('all-inclusive');
    const locale = useLocale();
    const logInGr = process.env.NEXT_PUBLIC_MEMBER_LOGIN_POP;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    const logInGrRedirect = process.env.NEXT_PUBLIC_MEMBER_LOGIN_GR;

    const handleLoginClick = () => {
        const language = locale === 'en' ? '' : `?lang=${locale.toUpperCase()}`;
        const strWindow = "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=400,innerHeight=600,centerscreen=yes,chrome=yes";
        window.open(`${logInGr}?Code=GRM&ReturnUrl=${appUrl}/members${language}`, "CNN_WindowName", strWindow);
    };


    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== appUrl)
                return;
            if (event.data?.source !== "members")
                return;

            const token = event.data.token;
            window.location.href = `${logInGrRedirect}?token=${token}&lang=${locale}`;
        }

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };

    }, [appUrl, locale, logInGrRedirect]);

    return (
        <button className="text-accent underline cursor-pointer"
            onClick={() => handleLoginClick()}>
            {t('owner_login')}
        </button>
    )
}

const AllInclusiveInformation = () => {
    const t = useTranslations('all-inclusive');
    const m = useMessages();
    const faqs = m['all-inclusive']['faqs']['questions'];

    const [openRules, setOpenRules] = useState(false);
    const [openFaqs, setOpenFaqs] = useState(false);
    const [openMembers, setOpenMembers] = useState(false);

    const rulesRef = useRef<HTMLDivElement>(null);
    const faqsRef = useRef<HTMLDivElement>(null);
    const membersRef = useRef<HTMLDivElement>(null);

    const hash = useHashs();
    useEffect(() => {
        if (!hash) return;

        let targetRef = null;

        setOpenRules(false);
        setOpenFaqs(false);
        setOpenMembers(false);

        switch (hash) {
            case 'rules':
                setOpenRules(true);
                targetRef = rulesRef;
                break;
            case 'faqs':
                setOpenFaqs(true);
                targetRef = faqsRef;
                break;
            case 'members':
                setOpenMembers(true);
                targetRef = membersRef;
                break;
        }

        if (targetRef?.current) {
            setTimeout(() => {
                targetRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }, [hash])

    return (
        <article className={"bg-[#f0e9e2] pt-8 pb-10"}>
            <div className={"my-container"}>
                <Collapsible className={"mb-8 border-b border-menu2 pb-3"}
                             ref={rulesRef}
                             open={openRules}
                             onOpenChange={setOpenRules}>
                    <CollapsibleTrigger
                        className={"text-base font-bold uppercase w-full group flex items-center justify-between"}>
                        {t('acc-rules')}
                        <ChevronDown
                            className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180"/>
                    </CollapsibleTrigger>
                    <CollapsibleContent className={"py-5"}>
                        <RichTextClient id={"rules"} ns={"all-inclusive"} components={{
                            p: (chunks) => <p className="text-2xl font-bold mb-6">{chunks}</p>
                        }}/>
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible className={"mb-8 border-b border-menu2 pb-3"}
                             ref={faqsRef}
                             open={openFaqs}
                             onOpenChange={setOpenFaqs}>
                    <CollapsibleTrigger
                        className={"text-base font-bold uppercase w-full group flex items-center justify-between"}>
                        {t('acc-faqs')}
                        <ChevronDown
                            className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180"/>

                    </CollapsibleTrigger>
                    <CollapsibleContent className={"py-5"}>
                        <Paragraph className={"text-2xl font-bold mb-6"}>{t('faqs.title')}</Paragraph>
                        {
                            faqs.map((item: { title: string }, index: number) => (
                                <Collapsible key={index} className={"mb-8 border-b border-menu2 pb-2"}>
                                    <CollapsibleTrigger asChild>
                                        <h2 className={"text-base pb-2 "}>{item.title}</h2>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <RichTextClient id={`faqs.questions.${index}.answer`} ns={"all-inclusive"}/>
                                    </CollapsibleContent>
                                </Collapsible>
                            ))
                        }
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible className={"mb-8 border-b border-menu2 pb-3"}
                             ref={membersRef}
                             open={openMembers}
                             onOpenChange={setOpenMembers}>
                    <CollapsibleTrigger
                        className={"text-base font-bold uppercase  w-full group flex items-center justify-between"}>
                        {t('acc-members')}
                        <ChevronDown
                            className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180"/>
                    </CollapsibleTrigger>
                    <CollapsibleContent className={"py-5"}>
                        <RichTextClient id={"members"} ns={"all-inclusive"} components={{
                            OwnerLogin: OwnerLogin
                        }}/>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </article>
    );
};

export default AllInclusiveInformation;