'use client'
import React, {useEffect} from 'react';
import {useLocale} from "use-intl";
import {getTranslates} from "@/use_case/get_translates";

export interface WithTranslationProps {
    messages: Record<string, unknown>;
}

const WithTranslateCliente = <P extends object>(
    WrappedComponent: React.ComponentType<P>,
    text: string[]
) => {

    const ComponentWithTranslation = (props: P) => {

        const locale = useLocale();
        const [messages, setMessages] = React.useState<Record<string, unknown>>({});

        useEffect(() => {
            const getTr = async (text: string[]) => {
                const tr = await getTranslates(locale, text);
                setMessages(tr);
            }
            getTr(text).then();

        }, [locale])


        return (
            <WrappedComponent {...props} messages={messages}/>
        )
    }

    return ComponentWithTranslation;
};

export default WithTranslateCliente;