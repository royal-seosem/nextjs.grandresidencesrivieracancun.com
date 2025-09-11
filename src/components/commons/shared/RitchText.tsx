import {ReactNode} from 'react';
import {getTranslations} from 'next-intl/server';
import Paragraph from "@/components/commons/ui/paragraph";

type BaseResolvers = Record<string, (chunks: ReactNode) => ReactNode>;

const baseResolvers: BaseResolvers = {
    strong: chunks => <strong className="font-bold">{chunks}</strong>,
    br: () => <br/>,
    'br/': () => <br/>,
    p: chunks => <Paragraph>{chunks}</Paragraph>,
    ol: chunks => <ol className="list-decimal list-inside">{chunks}</ol>,
    li: chunks => <li>{chunks}</li>
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
