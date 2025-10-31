import React from 'react';
import {getSession} from "@/lib/session";
import {redirect} from "@/i18n/navigation";
import {getLocale} from "next-intl/server";


export function withGmsAuth<P extends object>(Component: React.ComponentType<P>) {
    return async function ProtectedComponent(props: P) {
        const session = await getSession();
        const locale = await getLocale();
        if (!session) {
            redirect({href: "/gms/login", locale: locale});
        }
        return <Component {...props} />;
    };
}
