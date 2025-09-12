'use client';
import {ReactNode} from 'react';
import {useTranslations} from 'next-intl';
import Paragraph from '@/components/commons/ui/paragraph';

type BaseResolvers = Record<string, (chunks: ReactNode) => ReactNode>;

const baseResolvers: BaseResolvers = {
    strong: chunks => <strong className="font-bold">{chunks}</strong>,
    br: () => <br/>,
    p: chunks => <Paragraph>{chunks}</Paragraph>,
    ol: chunks => <ol className="list-decimal list-inside">{chunks}</ol>,
    li: chunks => <li>{chunks}</li>,
};

interface Props {
    id: string;
    ns: string;
    components?: BaseResolvers;
}

export default function RitchTextClient({id, ns, components}: Props) {
    const t = useTranslations(ns);
    const resolvers = {...baseResolvers, ...components};
    return <>{t.rich(id, resolvers)}</>;
}