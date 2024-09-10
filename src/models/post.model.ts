import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
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
    content: {
      type: String,
      require: true
    },
    imageUrl: {
      type: String,
      require: true
    },
    tags: {
      type: [String],
      require: true,
      default: []
    },
    featured: {
      type: Boolean,
      default: false
    },
    pinned: {
      type: Boolean,
      default: false
    },
    category:       {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Category',
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
