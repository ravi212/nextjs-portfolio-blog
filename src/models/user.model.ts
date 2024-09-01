import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['user', 'admin'], // You can customize roles as needed
        default: 'user'
      },
})

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;