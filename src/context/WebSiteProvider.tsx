'use client'
import React, {useContext, useState} from 'react';
import {getPhones, Phones} from "@/use_case/get_phones";
import {SessionPayload} from "@/lib/session";

interface WebSiteContextType {
    user: SessionPayload | undefined,
    setUser: (user: SessionPayload | undefined) => void;
    country: string,
    phones: Phones,
    openBookingDrawer: boolean,
    setOpenBookingDrawer: (open: boolean) => void,
}

export const WebSiteContext = React.createContext<WebSiteContextType | undefined>(undefined);

const WebSiteProvider = ({children, initialUser, country}: {
    initialUser: SessionPayload | undefined,
    country: string,
    children: React.ReactNode
}) => {
    const [user, setUser] = useState<SessionPayload | undefined>(initialUser);
    const [openBookingDrawer, setOpenBookingDrawer] = useState<boolean>(false);

    return (
        <WebSiteContext.Provider value={{
            user,
            setUser,
            country: country,
            phones: getPhones(country),
            openBookingDrawer,
            setOpenBookingDrawer,
        }}>
            {children}
        </WebSiteContext.Provider>
    );
};


export function useWebsite() {
    const ctx = useContext(WebSiteContext);
    if (!ctx) throw new Error('useWebsite debe usarse dentro de WebsiteProvider');
    return ctx;
}

export default WebSiteProvider;