'use server'
import * as React from 'react';
import {decrypt, getSession} from "@/lib/session";
import BtnGoogle from "@/components/pages/Gms/BtnGoogle";

// type Props = {
//
// };

export const LoginPage = async () => {

    const user =await getSession();
    console.log("session:");
    console.log(user);

    return (
        <div>
            <BtnGoogle/>
        </div>
    );
};