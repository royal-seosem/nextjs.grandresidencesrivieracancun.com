import {ReactNode} from 'react';
import {getTranslations} from 'next-intl/server';
import Paragraph from "@/components/commons/ui/paragraph";

type BaseResolvers = Record<string, (chunks: ReactNode) => ReactNode>;

const baseResolvers: BaseResolvers = {
    strong: chunks => <strong className="font-bold">{chunks}</strong>,
    br: () => <br/>,
    p: chunks => <Paragraph>{chunks}</Paragraph>,
    ul: chunks => <ul className="list-disc pl-5">{chunks}</ul>,
    ol: chunks => <ol className="list-decimal list-inside">{chunks}</ol>,
    li: chunks => <li>{chunks}</li>,
    b: chunks => <b>{chunks}</b>,
    em: chunks => <em>{chunks}</em>
};

interface Props {
    id: string;
    ns: string;
    components?: BaseResolvers;
}

/**
 * Renderiza un mensaje “rich” de next-intl aplicando un set base de resolvers
 * junto con cualquier sobrescritura/extendido pasado por props.
 */
export default async function RichText({
                                           id,
                                           ns,
                                           components,
                                       }: Props) {
    const t = await getTranslations(ns);

    const resolvers = {...baseResolvers, ...components};

    return (
        <>
            {t.rich(id, resolvers)}
        </>
    );
}
