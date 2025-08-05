'use server'
import {OAuth2Client} from "google-auth-library";
import {createSession} from "@/lib/session";

export async function signInGoogle(credentials: string) {
    const client = new OAuth2Client();
    const ticket = await client.verifyIdToken({
        idToken: credentials,
        audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    });
    const tokenPayload = ticket.getPayload();
    if (!tokenPayload) {
        throw new Error('No se pudo verificar el token');
    }
    const payload = tokenPayload as {
        sub: string,
        name: string,
    }

    await createSession(payload.sub, payload.name)

    console.log(payload);
    return payload;
}
