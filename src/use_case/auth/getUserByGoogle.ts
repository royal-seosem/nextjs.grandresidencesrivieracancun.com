import {prisma} from "@/lib/prisma";

export const getUserByGoogle = async (email: string, gid: string): Promise<{
    id: number;
    user_name: string;
    lastname: string | null;
    uid: string;
} | null> => {
    return prisma.supscription_users.findFirst({
        select: {
            id: true,
            user_name: true,
            lastname: true,
            uid: true
        },
        where: {
            OR: [
                {uid: email},
                {gid: gid}
            ]
        }
    });
}