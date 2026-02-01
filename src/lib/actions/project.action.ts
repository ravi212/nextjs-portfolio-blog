"use server";

import connectToDatabase from "@/config/db";
import { Project } from "@/models";

// Create
export const createProject = async (payload) => {
  try {
    const isProject = await Project.findOne({ slug: payload?.slug });

    if (isProject) {
      return { error: "Project already exists!" };
    }

    const newProject = new Project(payload);

    const project = await newProject.save();

    if (project) {
      return { success: "ok", message: "Project created successfully" };
    }

    return { error: "Error Creating Project!" };
  } catch (err) {
    return { error: "Server Error!", err };
  }
};

// edit
export const editProject = async (id, payload) => {
  try {
    const project = await Project.findByIdAndUpdate(id, payload);

    if (project) {
      return { success: "ok", message: "Project updated successfully" };
    }

    return { error: "Error Updating Project!" };
  } catch (err) {
    return { error: "Server Error!", err };
  }
};

export const getRecentProjects = async () => {
  try {
    await connectToDatabase();

    const projects = await Project.find(
      { recent: true },
      "_id title description github technologies coverImage platform slug featured recent category createdAt",
    )
      .populate("category", "title _id")
      .sort({ createdAt: -1 })
      .lean();

    if (projects) {
      return JSON.parse(
        JSON.stringify({
          success: "ok",
          projects,
        }),
      );
    }
    return { error: "Not Found!" };
  } catch (err) {
    return { error: "Server Error!", err };
  }
};

// get full list
export const getAllProjects = async (page: number = 1, limit: number = 10, categoryId?: string) => {
  try {
    await connectToDatabase();

    const skip = (page - 1) * limit;
    
    // Build filter based on categoryId
    const filter: any = {};
    if (categoryId && categoryId !== "all") {
      filter.category = categoryId;
    }

    const projects = await Project.find(
      filter,
      "_id title description github technologies coverImage platform slug featured recent category createdAt",
    )
      .populate("category", "title _id")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const totalProjects = await Project.countDocuments(filter);

    if (projects) {
      return JSON.parse(
        JSON.stringify({
          success: "ok",
          projects,
          pagination: {
            page,
            limit,
            total: totalProjects,
            pages: Math.ceil(totalProjects / limit),
          },
        }),
      );
    }

    return { error: "Not Found!" };
  } catch (err) {
    return { error: "Server Error!", err };
  }
};

// get by id
export const getProjectById = async (_id: string | undefined) => {
  try {
    const project = await Project.findOne({ _id }, "_id title description github technologies coverImage platform slug featured recent category createdAt")
      .populate("category", "title _id")
      .lean();

    if (project) {
      return JSON.parse(JSON.stringify({ success: "ok", project }));
    }

    return { error: "Not Found!" };
  } catch (err) {
    return { error: "Server Error!", err };
  }
};

// get by slug
export const getProjectBySlug = async (slug: string) => {
  try {
    const project = await Project.findOne({ slug });

    if (project) {
      return JSON.parse(JSON.stringify({ success: "ok", project }));
    }

    return { error: "Not Found!" };
  } catch (err) {
    return { error: "Server Error!", err };
  }
};

// Toggle featured status checkbox to update on database
export const toggleFeatured = async (_id: string | undefined) => {
  try {
    const featuredProject = await Project.findById(_id, "featured");
    const featured = featuredProject?.featured;
    const project = await Project.findOneAndUpdate(
      { _id },
      { featured: !featured },
    );

    if (project) {
      return JSON.parse(
        JSON.stringify({ success: "ok", message: "Updated Project!" }),
      );
    }

    return { error: "Not Found!" };
  } catch (err) {
    return { error: "Server Error!", err };
  }
};

// Toggle recent status checkbox to update on database
export const toggleRecent = async (_id: string | undefined) => {
  try {
    const recentProject = await Project.findById(_id, "recent");
    const recent = recentProject?.recent;
    const project = await Project.findOneAndUpdate(
      { _id },
      { recent: !recent },
    );

    if (project) {
      return JSON.parse(
        JSON.stringify({ success: "ok", message: "Updated Project!" }),
      );
    }

    return { error: "Not Found!" };
  } catch (err) {
    return { error: "Server Error!", err };
  }
};

// delete
export const deleteProject = async (_id: string) => {
  try {
    const res = await Project.findByIdAndDelete(_id);

    if (res) {
      return { success: "ok", message: "Project deleted successfully" };
    }

    return { error: "Error deleting Project!" };
  } catch (err) {
    return { error: "Server Error!", err };
  }
};
