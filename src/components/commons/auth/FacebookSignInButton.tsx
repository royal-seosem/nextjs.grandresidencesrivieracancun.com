'use client'
import React from 'react';
import Image from "next/image";
import Script from "next/script";
import {Facebook, FacebookLoginResponse} from "@/types/window";

declare global {
    interface Window {
        FB: Facebook;
    }
}


interface FacebookSignInButtonProps {
    onSuccess?: (response: string) => void;
    textContent?: string;
}

const FacebookSignInButton = (
    {onSuccess, textContent = "signup_with"}: FacebookSignInButtonProps
) => {
    const handleCredientials = async (response: FacebookLoginResponse) => {
        onSuccess?.(response.authResponse.accessToken);

        // const resp = await loginByFacebook(response.authResponse.accessToken);
        //
        // if (!resp.success) {
        //     alert(resp.error?.message)
        // }
        //
        // if (resp.success && resp.data) {
        //     setUser({
        //         userId: resp.data?.id,
        //         name: resp.data?.name,
        //         token: resp.data?.token
        //     })
        //
        //     router.push('/gms/my-account');
        // }
    }

    const submit = () => {
        window.FB.init({
            appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
            autoLogAppEvents: true,
            xfbml: true,
            version: process.env.NEXT_PUBLIC_FACEBOOK_API_VERSION,
        })
        const config = {
            scope: 'public_profile,email',
            auth_type: 'rerequest'

        }
        window.FB.login((response) => {
            handleCredientials(response).then(r => console.log(r));
        }, config);
    }

    return (
        <>
            <Script src="https://connect.facebook.net/en_US/sdk.js"/>
            <form onSubmit={submit}>
                <button
                    type="button"
                    className="bg-[#0c2d63] text-white flex items-center justify-center gap-1 px-1.5 py-1.5 whitespace-nowrap text-sm rounded-xs"
                    onClick={() => submit()}>
                    <Image src={"/icons/facebook.svg"} alt={"Icon facebook"} width={14} height={14}/>
                    <span>{textContent}</span>
                </button>
            </form>
        </>
    );
};

export default FacebookSignInButton;