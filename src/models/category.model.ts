import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema(
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
    parent: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema);

export default Category;
