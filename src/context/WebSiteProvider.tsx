'use client'
import React, {useState, useContext} from 'react';

type User = {
    id: number,
    name: string
}

interface WebSiteContextType {
    user: User | undefined,
    setUser: (user: User | undefined) => void;
}

export const WebSiteContext = React.createContext<WebSiteContextType | undefined>(undefined);

const WebSiteProvider = ({children, initialUser}: { initialUser: User | undefined, children: React.ReactNode }) => {
    const [user, setUser] = useState<User>(initialUser);

    return (
        <WebSiteContext.Provider value={{
            user,
            setUser
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