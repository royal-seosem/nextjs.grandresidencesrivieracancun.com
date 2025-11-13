'use client';
import {ReactNode} from 'react';
import {RichTagsFunction, useTranslations} from 'next-intl';
import Paragraph from '@/components/commons/ui/paragraph';
import PrivacyPolicy from "@/components/commons/shared/PrivacyPolicy";

type BaseResolvers = Record<string, (chunks: ReactNode) => ReactNode>;

const baseResolvers: BaseResolvers = {
    strong: chunks => <strong className="font-bold">{chunks}</strong>,
    em: (chunks) => <em>{chunks}</em>,
    b: (chunks) => <strong className="font-bold">{chunks}</strong>,
    br: () => <br/>,
    p: chunks => <Paragraph>{chunks}</Paragraph>,
    ul: chunks => <ul className={"list-disc pl-5"}>{chunks}</ul>,
    ol: chunks => <ol className="list-decimal list-inside">{chunks}</ol>,
    li: chunks => <li>{chunks}</li>,
    span: chunks => <span>{chunks}</span>,
    PrivacyPolicy: () => <PrivacyPolicy/>

};

interface Props {
    id?: string;
    ns?: string;
    components?: BaseResolvers;
    values?: Record<string, string | number | RichTagsFunction | Date>
}

export default function RichTextClient({id = "title_resort", ns = "general", components, values}: Props) {
    const t = useTranslations(ns);

    const resolvers = {...baseResolvers, ...components};
    return <>{t.rich(id, {...resolvers, ...values})}</>;
}