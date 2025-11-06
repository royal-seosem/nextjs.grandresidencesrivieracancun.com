'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import GoogleSignInButton from "@/components/commons/auth/GoogleSignInButton";
import {useWebsite} from "@/context/WebSiteProvider";
import {loginByGoogle} from "@/use_case/gms/login/loging_by_google";

function BtnGoogle() {
    const router = useRouter();
    const {setUser} = useWebsite();

    const googleSuccess = async (response: { credential: string }) => {
        const resp = await loginByGoogle(response.credential);

        if (!resp.success) {
            alert(resp.error?.message || "");
        }
        
        if (resp.success && resp.data?.id && resp.data?.name) {
            setUser({
                userId: resp.data?.id,
                name: resp.data?.name,
                token: resp.data?.token
            })

            router.push('/gms/my-account');
        }

    }
    return (
        <GoogleSignInButton onSuccess={googleSuccess}/>
    );
}

export default BtnGoogle;