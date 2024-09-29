"use server"

import connectToDatabase from "@/config/db";
import Project from "@/models/project.model";

// Create
export const createProject = async (payload) => {

    try {

        const isProject = await Project.findOne({slug: payload?.slug})
    
        if (isProject) {
            return {error: "Project already exists!"}
        }
    
        const newProject = new Project(payload);

        const project = await newProject.save();

        if (project) {
            return  {success: 'ok', message: "Project created successfully"}
        } 
    
        return {error: "Error Creating Project!"}
    } catch (err) {
        return {error: "Server Error!", err}
    }

}

// edit
export const editProject = async (id, payload) => {

    try {

        const project = await Project.findByIdAndUpdate(id, payload);

        if (project) {
            return {success: 'ok' , message: "Project updated successfully"}
        } 
    
        return {error: "Error Updating Project!"}

    } catch (err) {
        return {error: "Server Error!", err}
    }

}

// get full list
export const getAllProjects = async (isAdmin: boolean = false) => {

    try {
        await connectToDatabase();

        // const filters = isAdmin ? {} : { inActive: false }

        const projects = await Project.find({}, '_id title description technologies coverImage platform slug isRecent createdAt')

        if (projects) {
            return JSON.parse(JSON.stringify({ success:'ok', projects }))
        } 
    
        return {error: "Not Found!"}

    } catch (err) {
        return {error: "Server Error!", err}
    }

}

// get by id
export const getProjectById = async (_id: string | undefined) => {

    try {
        const project = await Project.findOne({_id})

        if (project) {
            return JSON.parse(JSON.stringify({success: 'ok', project}))
        } 
    
        return {error: "Not Found!"}

    } catch (err) {
        return {error: "Server Error!", err}
    }

}

// get by slug
export const getProjectBySlug = async (slug: string) => {
    
    try {

        const project = await Project.findOne({slug})

        if (project) {
            return JSON.parse(JSON.stringify({success: 'ok', project}))
        } 
    
        return {error: "Not Found!"}

    } catch (err) {
        return {error: "Server Error!", err}
    }

}

// Toggle recent status checkbox to update on database
export const toggleRecent = async (_id: string | undefined) => {

    try {
        const recentProject = await Project.findById(_id, "isRecent");
        const isRecent = recentProject?.isRecent
        const project = await Project.findOneAndUpdate({ _id }, {isRecent: !isRecent});

        if (project) {
            return JSON.parse(JSON.stringify({ success:'ok', message: "Updated Project!" }))
        }

        return {error: "Not Found!"}

    } catch (err) {
        return {error: "Server Error!", err}
    }

}

// delete
export const deleteProject = async (_id: string) => {

    try {
        const res = await Project.findByIdAndDelete(_id)

        if (res) {
            return {success: 'ok', message: "Project deleted successfully"}
        } 
    
        return {error: "Error deleting Project!"}

    } catch (err) {
        return {error: "Server Error!", err}
    }

}