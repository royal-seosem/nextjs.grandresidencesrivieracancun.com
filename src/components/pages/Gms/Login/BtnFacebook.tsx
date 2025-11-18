'use client'
import React from 'react';
import FacebookSignInButton from "@/components/commons/auth/FacebookSignInButton";
import {loginByFacebook} from "@/use_case/gms/login/login_by_facebook";
import {useRouter} from "next/navigation";
import {useWebsite} from "@/context/WebSiteProvider";
import {useGTMEvent} from "@/components/commons/hooks/useGTMEvent";

const BtnFacebook = () => {
    const router = useRouter();
    const {setUser} = useWebsite();
    const dataLayer = useGTMEvent();

    const onSuccess = async (credential: string) => {
        const resp = await loginByFacebook(credential);

        if (!resp.success) {
            alert(resp.error?.message)
            dataLayer({
                "event": "login",
                "status": "KO",
                "user": "My Royal",
                "type": 'facebook',
                "errorType": resp.error?.message,
                "errorCode": resp.error?.code
            });
            dataLayer({
                "event": "Error login",
                "user": "My Royal",
                "type": 'facebook',
                "error_type": resp.error?.message,
                "error_code": resp.error?.code
            })
        }

        if (resp.success && resp.data) {
            setUser({
                userId: resp.data?.id,
                name: resp.data?.name,
                token: resp.data?.token
            })

            dataLayer({
                "event": "login",
                "status": "KO",
                "user": "My Royal",
                "type": 'facebook',
                "errorType": resp.error?.message,
                "errorCode": resp.error?.code
            });
            dataLayer({
                "event": "Error login",
                "user": "My Royal",
                "type": 'facebook',
                "error_type": resp.error?.message,
                "error_code": resp.error?.code
            })

            router.push('/gms/my-account');
        }
    }
    return (
        <FacebookSignInButton onSuccess={onSuccess} textContent={"Sign in with Facebook"}/>
    );
};

export default BtnFacebook;