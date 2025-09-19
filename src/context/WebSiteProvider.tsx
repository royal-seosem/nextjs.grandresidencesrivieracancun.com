'use client'
import React, {useContext, useState} from 'react';
import {getPhones, Phones} from "@/use_case/get_phones";

type User = {
    id: number,
    name: string
}

interface WebSiteContextType {
    user: User | undefined,
    setUser: (user: User | undefined) => void;
    country: string,
    phones: Phones,
    openBookingDrawer: boolean,
    setOpenBookingDrawer: (open: boolean) => void,
}

export const WebSiteContext = React.createContext<WebSiteContextType | undefined>(undefined);

const WebSiteProvider = ({children, initialUser, country}: {
    initialUser: User | undefined,
    country: string,
    children: React.ReactNode
}) => {
    const [user, setUser] = useState<User | undefined>(initialUser);
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