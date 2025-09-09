'use server'
import {createSession} from "@/lib/session";
import {getUserByGoogle} from "@/use_case/auth/getUserByGoogle";


export async function logInGoogle(credentials: string) {
    const user = await getUserByGoogle(credentials);

    if (user === null) {
        throw new Error('Usuario no encontrado');
    }

    await createSession(user.id, user.name);
    
    return user;
}