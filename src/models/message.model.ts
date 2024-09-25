import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    message: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);

export default Message;
