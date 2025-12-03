'use client'
import React from 'react';
import {useLocale} from "use-intl";
import {getTranslates} from "@/use_case/get_translates";
import {useQuery} from "@tanstack/react-query";

export interface WithTranslationProps {
    messages: Record<string, unknown>;
}

const WithTranslateCliente = <P extends object>(
    WrappedComponent: React.ComponentType<P>,
    text: string[]
) => {

    const ComponentWithTranslation = (props: P) => {
        const locale = useLocale();
        const {data, isLoading} = useQuery({
            queryKey: ['translates', locale, text],
            queryFn: () => getTranslates(locale, text),
            staleTime: Infinity, // Los textos no suelen cambiar frecuentemente
            refetchOnWindowFocus: false,
        });

        if (isLoading) {
            return null;
        }

        return (
            <WrappedComponent {...props} messages={data || {}}/>
        )
    }

    return ComponentWithTranslation;
};

export default WithTranslateCliente;