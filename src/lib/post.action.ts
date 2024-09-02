"use server"

import Post from "@/models/post.model"

// Create post
export const createPost = async (payload: PostType) => {
    const post = new Post(payload);
    const res = await post.save();
    
    if (res) {
        return {status: 'success', post, message: "Post created successfully"}
    } 

    return {status: 'error', post: null, message: "Error Creating Post!"}
}

// edit post
export const editPost = async (id: string, payload: PostType) => {
    const post = await Post.findByIdAndUpdate(id, payload);

    if (post) {
        return {status: 'success', post, message: "Post updated successfully"}
    } 

    return {status: 'error', post: null, message: "Error Updating Post!"}
}

// get list of posts
export const getAllPosts = async () => {
    const posts = await Post.find({}, '_id title slug content createdAt')

    if (posts) {
        return {status: 'success', posts, message: "Post Fetched successfully"}
    } 

    return {status: 'error', posts: null, message: "Error Fetching Post!"}
}

// get post by id
export const getPostById = async (_id: string | undefined) => {
    const post = await Post.findOne({_id})

    if (post) {
        return {status: 'success', post, message: "Post created successfully"}
    } 

    return {status: 'error', post: null, message: "Error Creating Post!"}
}

// delete post
export const getPostBySlug = async (slug: string) => {
    const post = await Post.findOne({slug})
    if (post) {
        return {status: 'success', post,  message: "Post deleted successfully"}
    } 

    return {status: 'error', post: null, message: "Error Creating Post!"}
}

// delete post
export const deletePost = async (_id: string) => {
    const res = await Post.findByIdAndDelete(_id)

    if (res) {
        return {status: 'success',  message: "Post deleted successfully"}
    } 

    return {status: 'error', post: null, message: "Error Creating Post!"}
}