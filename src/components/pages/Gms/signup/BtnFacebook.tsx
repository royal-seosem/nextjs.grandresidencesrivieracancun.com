'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import {useWebsite} from "@/context/WebSiteProvider";
import {registerByFacebook} from "@/use_case/gms/login/login_by_facebook";
import FacebookSignInButton from "@/components/commons/auth/FacebookSignInButton";

const BtnFacebook = () => {
    const router = useRouter();
    const {setUser} = useWebsite();

    const onSuccess = async (credential: string) => {
        const resp = await registerByFacebook(credential);

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
        <FacebookSignInButton onSuccess={onSuccess} textContent={"Sign up with Facebook"}/>
    );
};

export default BtnFacebook;