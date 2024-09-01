'use server';
import { compareSync } from "bcrypt-ts";
import User from "@/models/user.model";

 
export const getUser = async (payload: any) => {
    const {username, password} = payload;

    const user = await User.findOne({username})

    if (user) {
    
        if (compareSync(password, user.password)) {
            user.password = undefined;
            return {status: 'success', user}
        } else {
            return {status: 'error', user: null, message: "Password mismatch!"}
        }
    }

    return {status: 'error', user: null, message: "No user found!"};
}