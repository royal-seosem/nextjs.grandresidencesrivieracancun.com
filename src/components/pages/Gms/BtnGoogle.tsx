'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import GoogleSignInButton from "@/components/commons/auth/GoogleSignInButton";
import {logInGoogle} from "@/server_actions/auth";
import {useWebsite} from "@/context/WebSiteProvider";

function BtnGoogle() {
    const router = useRouter();
    const {setUser} = useWebsite();

    const googleSuccess = async (response: { credential: string }) => {
        try {
            const payload = await logInGoogle(response.credential);

            if (payload) {
                setUser({
                    userId: payload.id,
                    name: payload.name,
                    token: payload.token
                })
                router.push('/gms/my-account');
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <GoogleSignInButton onSuccess={googleSuccess}/>
    );
}

export default BtnGoogle;