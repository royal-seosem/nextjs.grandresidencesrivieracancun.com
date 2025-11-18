'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import GoogleSignInButton from "@/components/commons/auth/GoogleSignInButton";
import {useWebsite} from "@/context/WebSiteProvider";
import {loginByGoogle} from "@/use_case/gms/login/loging_by_google";
import {useGTMEvent} from "@/components/commons/hooks/useGTMEvent";


function BtnGoogle() {
    const router = useRouter();
    const {setUser} = useWebsite();

    const dataLayer = useGTMEvent();

    const googleSuccess = async (response: { credential: string }) => {
        const resp = await loginByGoogle(response.credential);
        if (!resp.success) {
            alert(resp.error?.message || "");
            dataLayer({
                "event": "login",
                "status": "KO",
                "user": "My Royal",
                "type": 'google',
                "errorType": resp.error?.message,
                "errorCode": resp.error?.code
            });
            dataLayer({
                "event": "Error login",
                "user": "My Royal",
                "type": 'google',
                "error_type": resp.error?.message,
                "error_code": resp.error?.code
            })
        }

        if (resp.success && resp.data?.id && resp.data?.name) {
            setUser({
                userId: resp.data?.id,
                name: resp.data?.name,
                token: resp.data?.token
            })

            dataLayer({
                'event': 'Login',
                'user': 'My Royal',
                'type': 'google'
            });

            dataLayer({
                'event': 'login',
                'status': 'OK',
                'user': 'My Royal',
                'type': 'google',
                'errorType': '',
                'errorCode': ''
            });

            router.push('/gms/my-account');
        }

    }
    return (
        <GoogleSignInButton onSuccess={googleSuccess} textContent={"signin_with"}/>
    );
}

export default BtnGoogle;