'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import GoogleSignInButton from "@/components/commons/auth/GoogleSignInButton";
import {logInGoogle} from "@/actions/auth";
import {useWebsite} from "@/context/WebSiteProvider";

// import {signInGoogle} from "@/actions/auth";

function BtnGoogle() {
    const router = useRouter();
    const {setUser} = useWebsite();

    const googleSuccess = async (response: { credential: string }) => {
        try {
            const payload = await logInGoogle(response.credential);
            console.log(payload);
            if (payload) {
                setUser({
                    id: payload.id,
                    name: payload.user_name
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