import { ProjectPlatform } from "@/enum/enum";
import mongoose, { Schema } from "mongoose";

const PlatformSchema = new Schema({
  title: {
    type: String,
    enum: [
      ProjectPlatform.WEB,
      ProjectPlatform.IOS,
      ProjectPlatform.ANDROID,
      ProjectPlatform.DESKTOP,
    ],
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
});

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    slug: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    technologies: {
      type: [String],
      require: true,
    },
    coverImage: {
      type: String,
      require: true,
    },
    recent: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    github: {
      type: String,
      default: "",
    },
    platform: {
      type: [PlatformSchema],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
