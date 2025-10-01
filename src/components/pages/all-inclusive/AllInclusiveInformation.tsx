'use client'
import React from 'react';
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/commons/ui/collapsible";
import {useMessages, useTranslations} from "next-intl";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import Paragraph from "@/components/commons/ui/paragraph";
import {ChevronDown} from "lucide-react";

const AllInclusiveInformation = () => {
    const t = useTranslations('all-inclusive');
    const m = useMessages();
    const faqs = m['all-inclusive']['faqs']['questions'];

    return (
        <article className={"bg-[#f0e9e2] pt-8 pb-10"}>
            <div className={"my-container"}>
                <Collapsible className={"mb-8 border-b border-menu2 pb-3"}>
                    <CollapsibleTrigger className={"text-base font-bold uppercase w-full group flex items-center justify-between"}>
                        {t('acc-rules')}
                        <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className={"py-5"}>
                        <RichTextClient id={"rules"} ns={"all-inclusive"} components={{
                            p: (chunks) => <p className="text-2xl font-bold mb-6">{chunks}</p>
                        }}/>
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible className={"mb-8 border-b border-menu2 pb-3"}>
                    <CollapsibleTrigger className={"text-base font-bold uppercase w-full group flex items-center justify-between"}>
                        {t('acc-faqs')}
                        <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />

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
                <Collapsible className={"mb-8 border-b border-menu2 pb-3"}>
                    <CollapsibleTrigger className={"text-base font-bold uppercase  w-full group flex items-center justify-between"}>
                        {t('acc-members')}
                        <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className={"py-5"}>
                        <RichTextClient id={"members"} ns={"all-inclusive"}/>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </article>
    );
};

export default AllInclusiveInformation;