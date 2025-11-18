'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import {useWebsite} from "@/context/WebSiteProvider";
import {registerByGoogle} from "@/use_case/gms/login/loging_by_google";
import GoogleSignInButton from "@/components/commons/auth/GoogleSignInButton";
import {useGTMEvent} from "@/components/commons/hooks/useGTMEvent";

const BtnGoogle = () => {
    const router = useRouter();
    const {setUser} = useWebsite();
    const pushToDataLayer = useGTMEvent();

    const googleSuccess = async (response: { credential: string }) => {
        const resp = await registerByGoogle(response.credential);


        if (!resp.success) {
            alert(resp.error?.message || "");
            pushToDataLayer({
                "event": "Error Registro",
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
            pushToDataLayer({
                "event": "Registro",
                "user": "My Royal",
                "type": 'google',
                "error_type": resp.error?.message,
                "error_code": resp.error?.code
            })

            router.push('/gms/my-account');
        }

    }
    return (
        <GoogleSignInButton onSuccess={googleSuccess} textContent={"signup_with"}/>
    );
};

export default BtnGoogle;