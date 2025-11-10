'use client'
import React from 'react';
import FacebookSignInButton from "@/components/commons/auth/FacebookSignInButton";
import {loginByFacebook} from "@/use_case/gms/login/login_by_facebook";
import {useRouter} from "next/navigation";
import {useWebsite} from "@/context/WebSiteProvider";

const BtnFacebook = () => {
    const router = useRouter();
    const {setUser} = useWebsite();

    const onSuccess = async (credential: string) => {
        const resp = await loginByFacebook(credential);

        if (!resp.success) {
            alert(resp.error?.message)
        }

        if (resp.success && resp.data) {
            setUser({
                userId: resp.data?.id,
                name: resp.data?.name,
                token: resp.data?.token
            })

            router.push('/gms/my-account');
        }
    }
    return (
        <FacebookSignInButton onSuccess={onSuccess} textContent={"Sign in with Facebook"}/>
    );
};

export default BtnFacebook;