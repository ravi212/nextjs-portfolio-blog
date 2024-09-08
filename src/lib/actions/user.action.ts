'use server';
import { compareSync } from "bcrypt-ts";
import User from "@/models/user.model";
import connectToDatabase from "@/config/db";

// User and Auth
export const getUser = async (payload: any) => {
    const {username, password} = payload;
    try {
        await connectToDatabase()
        const user = await User.findOne({username})

        if (user) {
        
            if (compareSync(password, user.password)) {
                user.password = undefined;
                return {success: 'ok', user: user}
            } else {
                return {error: "Password mismatch!" }
            }
        }
    
        return {error: "Invalid Username!"};

    } catch (e) {
        console.log(e)
        return {error: "Server Error!"};
    }

}
