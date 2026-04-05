import { auth } from "@clerk/nextjs/server";

const adminIds= [ "user_3BUwybrlbKr35I039Jm7G5zR4LI"]

export const isAdmin = async () =>{
    const { userId } = await auth()

    if (!userId){
        return false;
    }
    return adminIds.indexOf(userId) !==-1;
}