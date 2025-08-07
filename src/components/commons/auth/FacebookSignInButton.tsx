'use client'
import React from 'react';
import Image from "next/image";
import Script from "next/script";

declare global {
    interface Window {
        FB: Facebook;
    }
}

const FacebookSignInButton = () => {
    const submit = () => {
        window.FB.init({
            appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
            autoLogAppEvents: true,
            xfbml: true,
            version: process.env.NEXT_PUBLIC_FACEBOOK_API_VERSION,
        })
        window.FB.login(response => {
            console.log(response);
        });
    }

    return (
        <>
            <Script src="https://connect.facebook.net/en_US/sdk.js"/>
            <form onSubmit={submit}>
                <button
                    className="bg-[#0c2d63] text-white flex items-center justify-center gap-1 px-1.5 py-1.5 whitespace-nowrap text-sm rounded-xs">
                    <Image src={"/icons/facebook.svg"} alt={"Icon facebook"} width={14} height={14}/>
                    <span>Log in with Facebook</span>
                </button>
            </form>
        </>
    );
};

export default FacebookSignInButton;