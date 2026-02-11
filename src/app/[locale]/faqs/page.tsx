import React from 'react';
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/commons/ui/collapsible";
import {ChevronDown} from "lucide-react";
import {getMessages, getTranslations} from "next-intl/server";
import {Metadata} from "next";


export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('faqs');
    return {
        title: t('title'),
        description: t('metadescription'),
    }
}

const Page = async () => {
    const t = await getTranslations('faqs');
    const m = await getMessages();
    const faqsSections = m['faqs']['sections'];
    return (
        <main className="bg-[#f0e9e2] py-1">
            <h1 className="text-4xl font-medium text-center py-6">{t('title')}</h1>
            <div className={"my-container"}>
                {
                    faqsSections.map((section: {
                        title: string,
                        faqs: {
                            question: string,
                            answer: string
                        }[]
                    }, index: number) => (
                        <div key={index} className={"border-b border-[#180B01] pb-8 mb-8"}>
                            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                            {
                                section.faqs.map((faq, indexFaq: number) => (
                                    <Collapsible key={indexFaq} className={"mb-8 border-b border-[#E1D6CD] pb-3"}>
                                        <CollapsibleTrigger
                                            className={"text-base uppercase w-full group flex items-center justify-between text-left"}>
                                            {indexFaq + 1}. {faq.question}
                                            <ChevronDown
                                                className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180"/>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className={"py-5"}>
                                            <div dangerouslySetInnerHTML={{__html: faq.answer}}></div>
                                        </CollapsibleContent>

                                    </Collapsible>
                                ))
                            }
                        </div>
                    ))
                }
            </div>

        </main>
    );
};

export default Page;