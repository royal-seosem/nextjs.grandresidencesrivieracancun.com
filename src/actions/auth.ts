'use server'
import {OAuth2Client} from "google-auth-library";
import {createSession} from "@/lib/session";
import {getUserByGoogle} from "@/use_case/auth/getUserByGoogle";

const validTokenGoogle = async (credentials: string): Promise<{
    sub: string,
    name: string,
    email: string
}> => {
    const client = new OAuth2Client();
    const ticket = await client.verifyIdToken({
        idToken: credentials,
        audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    });
    const tokenPayload = ticket.getPayload();

    if (!tokenPayload || !tokenPayload.sub || !tokenPayload.name || !tokenPayload.email) {
        throw new Error('No se pudo verificar el token');
    }

    return {
        sub: tokenPayload.sub,
        name: tokenPayload.name,
        email: tokenPayload.email,
    }
}

// export async function signInGoogle(credentials: string) {
//
//     const user = await getUserByGoogle(payload.email);
//
//     await createSession(payload.sub, payload.name)
//
//     console.log(user);
//     return payload;
// }


export async function logInGoogle(credentials: string) {

    const userData = await validTokenGoogle(credentials);
    const user = await getUserByGoogle(userData.email, userData.sub);
    if (user === null) {
        throw new Error('Usuario no encontrado');
    }

    await createSession(user.id, user.user_name);


    return user;
}