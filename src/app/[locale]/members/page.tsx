'use client'
import React, {useEffect} from 'react';
import {useSearchParams} from "next/navigation";

const Page = () => {
    const params = useSearchParams();
    const token = params.get('Token');
    const host = process.env.NEXT_PUBLIC_APP_URL;

    useEffect(() => {
        if (token && window.opener) {
            window.opener.postMessage({
                source: "members",
                token: token
            }, host);

            window.close();
        }
    }, [token, host]);

    return (
        <div></div>
    );
};

export default Page;