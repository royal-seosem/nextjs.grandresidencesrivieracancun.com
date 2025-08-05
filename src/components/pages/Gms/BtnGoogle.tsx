'use client'
import React from 'react';
import GoogleSignInButton from "@/components/commons/auth/GoogleSignInButton";
import {signInGoogle} from "@/actions/auth";

function BtnGoogle() {
    const googleSuccess = async (response: { credential: string }) => {
        console.log("Google login success", response);
        const payload = await signInGoogle(response.credential);
        console.log(payload);
    }
    return (
        <GoogleSignInButton onSuccess={googleSuccess}/>
    );
}

export default BtnGoogle;