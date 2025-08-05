'use client'
import * as React from 'react';
import GoogleSignInButton from "@/components/commons/auth/GoogleSignInButton";

// type Props = {
//
// };

export const LoginPage = () => {
    const googleSuccess = (response: unknown) => {
        console.log("Google login success", response);
    }
    // const googleError = (error: Error) => {
    //     console.log("Google login error", error);
    // }
    return (
        <div>
            <GoogleSignInButton onSuccess={googleSuccess}/>
        </div>
    );
};