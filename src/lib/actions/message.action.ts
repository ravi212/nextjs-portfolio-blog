"use server"

import connectToDatabase from "@/config/db";
import Message from "@/models/message.model";

// Create message
export const postMessage = async (payload: MessageType) => {

    try {
    
        const newMessage = new Message(payload);

        const message = await newMessage.save();

        if (message) {
            return  {success: 'ok', message: "Message sent successfully"}
        } 
    
        return {error: "Error Posting Message!"}
    } catch (err) {
        return {error: "Server Error!", err}
    }

}


// get list of messages
export const getAllMessages = async () => {

    try {
        await connectToDatabase();   

        const messages = await Message.find({}, "_id name email message createdAt updatedAt");
        
        if (messages) {
            return JSON.parse(JSON.stringify({ success:'ok', messages }))
        } 
    
        return {error: "Not Found!"}

    } catch (err) {
        return {error: "Server Error!", err}
    }

}

// get message by id
export const getMessageById = async (_id: string | undefined) => {

    try {
        const post = await Message.findOne({_id})

        if (post) {
            return {success: 'ok', post}
        } 
    
        return {error: "Not Found!"}

    } catch (err) {
        return {error: "Server Error!", err}
    }

}

// delete message
export const deleteMessage = async (_id: string) => {

    try {
        const res = await Message.findByIdAndDelete(_id)

        if (res) {
            return {success: 'ok', message: "Deleted successfully"}
        } 
    
        return {error: "Error deleting Message!"}

    } catch (err) {
        return {error: "Server Error!", err}
    }

}