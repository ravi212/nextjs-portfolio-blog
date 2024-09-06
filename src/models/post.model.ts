import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
