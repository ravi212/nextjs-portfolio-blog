"use server"

import connectToDatabase from "@/config/db";
import Post from "@/models/post.model"

// Create post
export const createPost = async (payload: PostType) => {
    const post = new Post(payload);

    try {
        const res = await post.save();
    
        if (res) {
            return {success: 'ok', post, message: "Post created successfully"}
        } 
    
        return {error: "Error Creating Post!"}
    } catch (e) {
        console.log(e)
        return {error: "Server Error!"}
    }

}

// edit post
export const editPost = async (id: string, payload: PostType) => {

    try {

        const post = await Post.findByIdAndUpdate(id, payload);

        if (post) {
            return {success: 'ok', post , message: "Post updated successfully"}
        } 
    
        return {error: "Error Updating Post!"}

    } catch (e) {
        return {error: "Server Error!"}
    }

}

// get list of posts
export const getAllPosts = async () => {

    try {
        await connectToDatabase();
        const posts = await Post.find({}, '_id title slug content createdAt')

        if (posts) {
            return { success:'ok', posts }
        } 
    
        return {error: "Not Found!"}

    } catch (e) {
        return {error: "Server Error!"}
    }

}

// get post by id
export const getPostById = async (_id: string | undefined) => {

    try {
        const post = await Post.findOne({_id})

        if (post) {
            return {success: 'ok', post}
        } 
    
        return {error: "Not Found!"}

    } catch (e) {
        return {error: "Server Error!"}
    }

}

// get post by slug
export const getPostBySlug = async (slug: string) => {
    
    try {

        const post = await Post.findOne({slug})

        if (post) {
            return {success: 'ok', post}
        } 
    
        return {error: "Not Found!"}

    } catch (e) {
        return {error: "Server Error!"}
    }

}

// delete post
export const deletePost = async (_id: string) => {

    try {
        const res = await Post.findByIdAndDelete(_id)

        if (res) {
            return {success: 'ok', message: "Post deleted successfully"}
        } 
    
        return {error: "Error deleting Post!"}

    } catch (e) {
        return {error: "Server Error!"}
    }

}