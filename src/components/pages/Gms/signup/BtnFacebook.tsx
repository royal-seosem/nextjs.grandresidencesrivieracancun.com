'use client'
import React from 'react';
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";
import {useWebsite} from "@/context/WebSiteProvider";
import {registerByFacebook} from "@/use_case/gms/login/login_by_facebook";
import {useGTMEvent} from "@/components/commons/hooks/useGTMEvent";
const FacebookSignInButton = dynamic(()=> import("@/components/commons/auth/FacebookSignInButton"), {ssr: false});

const BtnFacebook = () => {
    const router = useRouter();
    const {setUser} = useWebsite();
    const dataLayer = useGTMEvent();
    const onSuccess = async (credential: string) => {
        const resp = await registerByFacebook(credential);

        if (!resp.success) {
            alert(resp.error?.message)
            dataLayer({
                "event": "Error Registro",
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
                "event": "Registro",
                "user": "My Royal",
                "type": 'facebook',
                "error_type": resp.error?.message,
                "error_code": resp.error?.code
            })

            router.push('/gms/my-account');
        }
    }

    return (
        <FacebookSignInButton onSuccess={onSuccess} textContent={"Sign up with Facebook"}/>
    );
};

export default BtnFacebook;